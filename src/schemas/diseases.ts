import { z } from 'astro/zod';
import { commonStructuredSchema, uuidSchema } from './common';

export const diseaseSchema = commonStructuredSchema.extend({
  name: z.string(),
  description: z.string(),
  malus: z.string().optional(),
  atRisk: z.string().optional(),
  prevention: z.array(z.string()).default([]),
  symptomBands: z.array(z.object({
    range: z.string(),
    symptoms: z.array(z.string()),
  })).default([]),
  relatedFelixIds: z.array(uuidSchema).default([]),
});
