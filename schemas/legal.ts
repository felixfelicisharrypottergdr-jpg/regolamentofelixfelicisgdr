import { z } from 'astro/zod';
import { commonStructuredSchema, uuidSchema } from './common';

export const legalStatusSchema = z.enum(['Vigente', 'Abrogato', 'Sostituito']);

export const legalDocumentSchema = commonStructuredSchema.extend({
  title: z.string().min(1),
  description: z.string().min(1),
  onGameStatus: legalStatusSchema.default('Vigente'),
  effectiveDate: z.string().optional(),
  endDate: z.string().optional(),
  supersedes: z.array(uuidSchema).default([]),
  relatedFelixIds: z.array(uuidSchema).default([]),
});

export const legalArticleSchema = commonStructuredSchema.extend({
  documentId: uuidSchema,
  articleNumber: z.string().min(1),
  title: z.string().optional(),
  section: z.string().optional(),
  description: z.string().default(''),
  onGameStatus: legalStatusSchema.default('Vigente'),
  effectiveDate: z.string().optional(),
  endDate: z.string().optional(),
  supersededBy: uuidSchema.optional(),
  topics: z.array(z.string()).default([]),
  relatedFelixIds: z.array(uuidSchema).default([]),
});
