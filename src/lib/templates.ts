export type TemplateId =
  | "sweet-choco"
  | "strawberry-pink"
  | "almond-gold"
  | "midnight-star";

export type BgmKey = "love-greeting" | "twinkle-star" | "sweet-gift" | "none";

export interface CardTemplate {
  id: TemplateId;
  name: string;
  subtitle: string;
  badge: string;
  envelopeBg: string;
  envelopeAccent: string;
  cardBg: string;
  cardBorder: string;
  textColor: string;
  mutedColor: string;
  accentColor: string;
  particleColor: string;
  particleSecondary: string;
  ogBg: string;
  ogAccent: string;
  motif: "choco" | "strawberry" | "almond" | "gift";
}

export const CARD_TEMPLATES: Record<TemplateId, CardTemplate> = {
  "sweet-choco": {
    id: "sweet-choco",
    name: "스윗 초코 빼빼로",
    subtitle: "진한 밀크초콜릿과 달콤한 골드 하트",
    badge: "인기",
    envelopeBg: "from-[#3b1c14] via-[#4a2218] to-[#26100b]",
    envelopeAccent: "#fbbf24",
    cardBg: "from-[#4e271c] via-[#3a1c14] to-[#26110b]",
    cardBorder: "border-amber-300/40",
    textColor: "text-amber-50",
    mutedColor: "text-amber-200/80",
    accentColor: "#fbbf24",
    particleColor: "rgba(253, 224, 71, 0.85)",
    particleSecondary: "rgba(251, 113, 133, 0.8)",
    ogBg: "#3b1c14",
    ogAccent: "#fbbf24",
    motif: "choco",
  },
  "strawberry-pink": {
    id: "strawberry-pink",
    name: "딸기 크런치 로즈",
    subtitle: "사랑스러운 딸기 핑크 & 베리 크림",
    badge: "러블리",
    envelopeBg: "from-rose-900 via-pink-900 to-rose-950",
    envelopeAccent: "#fbcfe8",
    cardBg: "from-[#fff1f2] via-[#ffe4e6] to-[#fecdd3]/60",
    cardBorder: "border-rose-400/45",
    textColor: "text-rose-950",
    mutedColor: "text-rose-700",
    accentColor: "#f43f5e",
    particleColor: "rgba(244, 63, 94, 0.7)",
    particleSecondary: "rgba(251, 207, 232, 0.9)",
    ogBg: "#ffe4e6",
    ogAccent: "#e11d48",
    motif: "strawberry",
  },
  "almond-gold": {
    id: "almond-gold",
    name: "아몬드 골드 레터",
    subtitle: "고소한 카라멜 아몬드와 샴페인 크림",
    badge: "따뜻함",
    envelopeBg: "from-amber-900 via-stone-800 to-amber-950",
    envelopeAccent: "#fde68a",
    cardBg: "from-[#fffbeb] via-[#fef3c7] to-[#fde68a]/40",
    cardBorder: "border-amber-700/25",
    textColor: "text-stone-900",
    mutedColor: "text-stone-600",
    accentColor: "#d97706",
    particleColor: "rgba(217, 119, 6, 0.65)",
    particleSecondary: "rgba(251, 191, 36, 0.75)",
    ogBg: "#fef3c7",
    ogAccent: "#b45309",
    motif: "almond",
  },
  "midnight-star": {
    id: "midnight-star",
    name: "달빛 기프트 박스",
    subtitle: "11월 11일 밤하늘의 별빛과 리본 선물",
    badge: "감성",
    envelopeBg: "from-slate-900 via-indigo-950 to-slate-950",
    envelopeAccent: "#c4b5fd",
    cardBg: "from-[#1e1b4b] via-[#312e81] to-[#17153b]",
    cardBorder: "border-violet-300/35",
    textColor: "text-indigo-50",
    mutedColor: "text-violet-200/80",
    accentColor: "#c4b5fd",
    particleColor: "rgba(221, 214, 254, 0.85)",
    particleSecondary: "rgba(253, 224, 71, 0.75)",
    ogBg: "#1e1b4b",
    ogAccent: "#c4b5fd",
    motif: "gift",
  },
};

export const TEMPLATE_LIST: CardTemplate[] = Object.values(CARD_TEMPLATES);

export interface MessagePreset {
  category: string;
  title: string;
  message: string;
}

export const MESSAGE_PRESETS: MessagePreset[] = [
  {
    category: "연인 · 짝꿍",
    title: "11월 11일, 달콤한 마음을 전해요",
    message:
      "바쁜 하루 속에서도 언제나 내 마음을 달콤하게 채워줘서 고마워요.\n오늘 빼빼로데이처럼 달달하고 행복한 시간 함께 보내고, 앞으로도 오래오래 좋은 추억 만들자!",
  },
  {
    category: "친구 · 동료",
    title: "해피 빼빼로데이! 늘 고마워요",
    message:
      "함께 일하고 웃을 수 있는 든든한 친구가 되어주어 고마워요.\n11월 11일 오늘만큼은 달콤한 간식과 함께 기분 좋은 하루 보내시길 바라요!",
  },
  {
    category: "가족 · 감사",
    title: "달콤한 빼빼로에 감사한 마음을 담았어요",
    message:
      "평소 쑥스러워서 자주 말하지 못했지만 언제나 진심으로 감사하고 사랑해요.\n쌀쌀해진 11월, 건강 꼭 챙기시고 오늘 하루 웃음 가득한 시간 보내세요!",
  },
];

export const BGM_OPTIONS: { key: BgmKey; label: string; description: string }[] = [
  { key: "love-greeting", label: "사랑의 인사 (오르골)", description: "달콤하고 포근한 로맨틱 선율" },
  { key: "sweet-gift", label: "해피 기프트 멜로디", description: "경쾌하고 산뜻한 축하 오르골" },
  { key: "twinkle-star", label: "반짝반짝 작은 별", description: "부드럽고 잔잔한 별빛 멜로디" },
  { key: "none", label: "배경음악 없음", description: "조용히 카드만 감상" },
];

export function getTemplate(templateId: string): CardTemplate {
  if (templateId in CARD_TEMPLATES) {
    return CARD_TEMPLATES[templateId as TemplateId];
  }
  return CARD_TEMPLATES["sweet-choco"];
}
