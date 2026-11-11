import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  renderPeperoEmailHtml,
  getEmailConfigStatus,
  formatSmtpFrom,
} from "../email";

describe("pepero email renderer", () => {
  it("escapes HTML and includes recipient, sender, and CTA link", () => {
    const html = renderPeperoEmailHtml({
      title: "Happy <11.11>!",
      message: "첫째 줄\n둘째 줄 & 인사",
      senderName: "초코",
      recipientName: "아몬드",
      cardUrl: "https://bbr.example.com/c/card1?d=tok1",
      templateId: "sweet-choco",
    });

    assert.match(html, /Happy &lt;11\.11&gt;!/);
    assert.match(html, /첫째 줄<br \/>둘째 줄 &amp; 인사/);
    assert.match(html, /아몬드/);
    assert.match(html, /초코/);
    assert.match(html, /온라인카드 열어보기/);
    assert.match(html, /https:\/\/bbr\.example\.com\/c\/card1\?d=tok1/);
  });

  it("formats display-only sender names into valid RFC From addresses", () => {
    assert.equal(
      formatSmtpFrom("전성열", "jeonsr@naver.com"),
      "\"전성열\" <jeonsr@naver.com>"
    );
  });

  it("reports preview mode when no email credentials are configured", async () => {
    const status = await getEmailConfigStatus({
      baseUrl: "",
      kakaoJsKey: "",
      emailProvider: "smtp",
      smtpHost: "",
      smtpPort: "587",
      smtpSecure: false,
      smtpUser: "",
      smtpPass: "",
      smtpFrom: "",
      resendApiKey: "",
      resendFrom: "",
      solapiApiKey: "",
      solapiApiSecret: "",
      solapiSenderPhone: "",
    });
    assert.equal(status.configured, false);
    assert.equal(status.provider, "preview");
  });
});
