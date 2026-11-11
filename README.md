# 🍫 BBR Card Studio (빼빼로데이 온라인 카드)

별도 회원가입 없이 온라인 빼빼로데이(11월 11일) 카드를 제작하고 **이메일 · 카카오톡 · SMS**로 발송할 수 있는 Next.js 풀스택 웹 애플리케이션입니다.

## 실행 방법

- 기본 포트 **`3011`** (`http://localhost:3011`)을 사용해 기존 X-mas 프로그램(포트 `3000`)과 충돌 없이 함께 실행됩니다.
- 개발 서버: `npm run dev`
- 실행 스크립트: `./launch.sh`
- 데이터베이스 초기화: `npm run db:push` (기본값: 로컬 SQLite `prisma/dev.db`)
- 프로덕션 빌드 & 테스트: `npm test && npm run build`
