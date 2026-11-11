#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/home/jeonsr/바탕화면/Project/BBR"
PORT_FILE="/tmp/bbr-card-studio.port"
PID_FILE="/tmp/bbr-card-studio.pid"
BUILD_FILE="/tmp/bbr-card-studio.buildid"
LOG_FILE="/tmp/bbr-card-studio.log"

cd "$APP_DIR"

is_bbr_running() {
  local p="$1"
  local body
  body="$(curl -fsS --max-time 1 "http://127.0.0.1:${p}/api/config/status" 2>/dev/null || true)"
  [[ "$body" == *"\"email\":"* && "$body" == *"\"kakaoConfigured\":"* ]]
}

is_port_busy() {
  local p="$1"
  node -e "
    const net = require('net');
    const s = net.connect({ port: Number(process.argv[1]), host: '127.0.0.1' });
    s.on('connect', () => { s.destroy(); process.exit(0); });
    s.on('error', () => process.exit(1));
  " "$p" 2>/dev/null
}

if [[ ! -f "prisma/dev.db" ]] && [[ "${DATABASE_URL:-file:./dev.db}" == file:* ]]; then
  npm run db:push >> "$LOG_FILE" 2>&1
fi

if [[ ! -d ".next" ]]; then
  npm run build >> "$LOG_FILE" 2>&1
fi

CURRENT_BUILD_ID="$(cat .next/BUILD_ID 2>/dev/null || echo 'unknown')"
RUNNING_BUILD_ID="$(cat "$BUILD_FILE" 2>/dev/null || true)"

if [[ -f "$PORT_FILE" ]]; then
  SAVED_PORT="$(cat "$PORT_FILE" 2>/dev/null || true)"
  if [[ -n "$SAVED_PORT" ]] && is_bbr_running "$SAVED_PORT"; then
    if [[ "$CURRENT_BUILD_ID" == "$RUNNING_BUILD_ID" ]]; then
      xdg-open "http://localhost:${SAVED_PORT}" >/dev/null 2>&1 &
      exit 0
    else
      if [[ -f "$PID_FILE" ]]; then
        OLD_PID="$(cat "$PID_FILE" 2>/dev/null || true)"
        [[ -n "$OLD_PID" ]] && kill "$OLD_PID" 2>/dev/null || true
      fi
      sleep 0.5
    fi
  fi
fi

# Prefer port 3011 so it does not collide with X-mas on port 3000
PORT=""
for candidate in 3011 3012 3013 3014 3015; do
  if ! is_port_busy "$candidate"; then
    PORT="$candidate"
    break
  fi
done

if [[ -z "$PORT" ]]; then
  PORT=3011
fi

nohup ./node_modules/.bin/next start -p "$PORT" > "$LOG_FILE" 2>&1 < /dev/null &
echo "$!" > "$PID_FILE"
echo "$PORT" > "$PORT_FILE"
echo "$CURRENT_BUILD_ID" > "$BUILD_FILE"

for _ in $(seq 1 40); do
  if is_bbr_running "$PORT"; then
    break
  fi
  sleep 0.3
done

xdg-open "http://localhost:${PORT}" >/dev/null 2>&1 &
