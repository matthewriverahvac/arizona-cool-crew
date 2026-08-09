import { z } from "zod";

const cleanText = (max: number) => z.string().trim().min(1).max(max);

export const quoteSchema = z.object({
  name: cleanText(100),
  phone: z.string().trim().min(7).max(30).regex(/^[0-9+().\-\s]+$/, "Enter a valid phone number"),
  email: z.email("Enter a valid email address").trim().max(254),
  service: cleanText(80),
  propertyType: z.enum(["residential", "commercial"]),
  cityZip: cleanText(100),
  message: cleanText(2000),
  website: z.string().max(200).optional().default(""),
  startedAt: z.number().int().positive(),
});

export type QuoteRequest = z.infer<typeof quoteSchema>;

export function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    "\"": "&quot;",
  })[character] ?? character);
}
