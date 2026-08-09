import { describe, expect, it } from "vitest";
import { escapeHtml, quoteSchema } from "@/lib/quote";

const valid = {
  name: "Alex Rivera",
  phone: "(623) 889-1281",
  email: "alex@example.com",
  service: "ac-repair",
  propertyType: "residential",
  cityZip: "Phoenix 85001",
  message: "The AC is blowing warm air.",
  website: "",
  startedAt: Date.now() - 5000,
};

describe("quote validation", () => {
  it("accepts a complete lead", () => expect(quoteSchema.safeParse(valid).success).toBe(true));
  it("rejects invalid contact fields", () => expect(quoteSchema.safeParse({ ...valid, phone: "call me", email: "wrong" }).success).toBe(false));
  it("requires an email so the customer can receive a confirmation", () => expect(quoteSchema.safeParse({ ...valid, email: "" }).success).toBe(false));
  it("rejects oversized messages", () => expect(quoteSchema.safeParse({ ...valid, message: "x".repeat(2001) }).success).toBe(false));
  it("allows the endpoint to classify a filled honeypot as spam", () => expect(quoteSchema.safeParse({ ...valid, website: "bot.example" }).success).toBe(true));
  it("escapes content before email rendering", () => expect(escapeHtml("<script>'x'</script>")).toBe("&lt;script&gt;&#39;x&#39;&lt;/script&gt;"));
});
