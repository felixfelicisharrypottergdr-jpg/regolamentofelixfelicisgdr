import { z } from 'astro/zod';
import { commonStructuredSchema, uuidSchema, valuesSchema } from './common';

export const producedIngredientSchema = z.object({
  ingredientId: uuidSchema.optional(),
  name: z.string().min(1),
});

export const plantSchema = commonStructuredSchema.extend({
  name: z.string().min(1),
  description: z.string().min(1),
  image: z.string().optional(),
  classification: z.enum(['X', 'XX', 'XXX', 'XXXX', 'XXXXX']).optional(),
  legality: z.string().optional(),
  hostility: z.enum(['Mai ostile', 'Neutrale', 'Sempre ostile']).optional(),
  exotic: z.boolean().default(false),
  knowledgeGrade: z.enum(['Scolastica', 'Extra']).optional(),
  schoolYear: z.enum(['V', 'VI', 'VII']).optional(),
  affectedParameters: z.array(z.string()).default([]),
  values: valuesSchema.optional(),
  producedIngredients: z.array(producedIngredientSchema).default([]),
  relatedFelixIds: z.array(uuidSchema).default([]),
});
