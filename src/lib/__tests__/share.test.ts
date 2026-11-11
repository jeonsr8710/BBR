import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  buildCardUrl,
  buildKakaoSharePayload,
  buildSmsUri,
  isValidEmail,
  normalizePhone,
} from "../share";

describe("pepero share helpers", () => {
  it("builds personalized and public card URLs cleanly", () => {
    assert.equal(
      buildCardUrl("https://bbr.example.com/", "abc123"),
      "https://bbr.example.com/c/abc123"
    );
    assert.equal(
      buildCardUrl("https://bbr.example.com", "abc123", "tok999"),
      "https://bbr.example.com/c/abc123?d=tok999"
    );
  });

  it("normalizes phone numbers and builds sms: URI", () => {
    assert.equal(normalizePhone("010-1234-5678"), "01012345678");
    const uri = buildSmsUri({
      phone: "010-1234-5678",
      recipientName: "민수",
      senderName: "영희",
      title: "해피 빼빼로데이!",
      cardUrl: "https://bbr.example.com/c/abc?d=1",
    });
    assert.equal(uri.startsWith("sms:01012345678?body="), true);
    const decoded = decodeURIComponent(uri.split("?body=")[1]);
    assert.match(decoded, /민수님, 영희님이 빼빼로데이 카드를 보냈어요/);
  });

  it("validates email addresses", () => {
    assert.equal(isValidEmail("user@example.com"), true);
    assert.equal(isValidEmail("invalid-email"), false);
  });

  it("builds Kakao feed share payload", () => {
    const payload = buildKakaoSharePayload({
      title: "달콤한 11월 11일",
      senderName: "지훈",
      recipientName: "수진",
      message: "항상 고마워요! 행복한 빼빼로데이 보내세요.",
      cardUrl: "https://bbr.example.com/c/xyz?d=123",
      imageUrl: "https://bbr.example.com/c/xyz/opengraph-image",
    });

    assert.equal(payload.objectType, "feed");
    assert.match(payload.content.title, /달콤한 11월 11일/);
    assert.equal(payload.content.imageWidth, 1200);
    assert.equal(payload.content.imageHeight, 600);
    assert.equal(payload.buttons[0].title, "온라인카드 열어보기");
  });
});
