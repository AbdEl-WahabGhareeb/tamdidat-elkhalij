import * as z from "zod";


// Base validation schemas
export const emailSchema = z
  .string()
  .email()
  .min(5)
  .max(254)
  .transform((str: string) => str.toLowerCase().trim());

export const urlSchema = z
  .string()
  .url()
  .max(2048)
  .transform((str: string) => str.trim());

export const phoneSchema = z
  .string()
  .regex(/^\+?[1-9]\d{1,14}$/)
  .max(15);

// Content validation schemas
export const contentSchema = z.object({
  title: z.string().min(1).max(200).trim(),
  description: z.string().min(1).max(5000).trim(),
  slug: z.string().regex(/^[a-z0-9-]+$/).min(1).max(100),
  tags: z.array(z.string().min(1).max(50)).max(10).optional(),
  published: z.boolean().optional(),
});

// Image validation schema
export const imageSchema = z.object({
  url: urlSchema,
  alt: z.string().min(1).max(200).trim(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  size: z.number().int().positive().max(5 * 1024 * 1024), // 5MB max
});

// Link validation schema
export const linkSchema = z.object({
  href: urlSchema,
  text: z.string().min(1).max(200).trim(),
  target: z.enum(['_self', '_blank', '_parent', '_top']).optional(),
  rel: z.string().optional(),
});

// Metadata validation schema
export const metadataSchema = z.object({
  title: z.string().min(1).max(60).trim(),
  description: z.string().min(1).max(160).trim(),
  keywords: z.array(z.string().min(1).max(50)).max(10).optional(),
  ogImage: imageSchema.optional(),
});

// Form validation schemas
export const contactFormSchema = z.object({
  name: z.string().min(2).max(100).trim(),
  email: emailSchema,
  phone: phoneSchema.optional(),
  message: z.string().min(10).max(1000).trim(),
});

// Validate and sanitize input
export function validateAndSanitizeInput<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; error: z.ZodError } {
  try {
    const validatedData = schema.parse(data);
    return { success: true, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error };
    }
    throw error;
  }
}