export interface SampleImage {
  id: string;
  title: string;
  src: string;
}

export const SAMPLE_IMAGES: SampleImage[] = [
  {
    id: "choco",
    title: "스윗 초코",
    src: "/samples/sample-choco.png",
  },
  {
    id: "strawberry",
    title: "딸기 크런치",
    src: "/samples/sample-strawberry.png",
  },
  {
    id: "almond",
    title: "아몬드 박스",
    src: "/samples/sample-almond.png",
  },
  {
    id: "gift",
    title: "11.11 선물",
    src: "/samples/sample-gift.png",
  },
];
