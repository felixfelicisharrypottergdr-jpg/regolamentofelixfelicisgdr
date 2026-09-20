import { z } from 'astro/zod';
import { commonStructuredSchema, uuidSchema, valuesSchema } from './common';

export const creatureSchema = commonStructuredSchema.extend({
  name: z.string(),
  description: z.string(),
  image: z.string().optional(),
  category: z.string().optional(),
  classification: z.enum(['X', 'XX', 'XXX', 'XXXX', 'XXXXX']).optional(),
  legality: z.string().optional(),
  hostility: z.enum(['Mai ostile', 'Neutrale', 'Sempre ostile']).optional(),
  exotic: z.boolean().default(false),
  schoolYear: z.string().optional(),
  affectedParameters: z.array(z.string()).default([]),
  values: valuesSchema.optional(),
  producesIngredients: z.array(uuidSchema).default([]),
  causesDiseases: z.array(uuidSchema).default([]),
  relatedFelixIds: z.array(uuidSchema).default([]),
});
