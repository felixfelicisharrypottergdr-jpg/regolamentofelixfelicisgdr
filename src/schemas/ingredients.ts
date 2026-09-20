import { z } from 'astro/zod';
import { commonStructuredSchema, uuidSchema } from './common';

export const ingredientSchema = commonStructuredSchema.extend({
  name: z.string(),
  description: z.string().default(''),
  classification: z.enum(['X', 'XX', 'XXX', 'XXXX', 'XXXXX']),
  goodsClass: z.string(),
  legality: z.string(),
  exotic: z.boolean().default(false),
  provenance: z.string(),
  effect: z.string().default('//'),
  relatedFelixIds: z.array(uuidSchema).default([]),
});
