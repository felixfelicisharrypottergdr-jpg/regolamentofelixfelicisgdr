import { z } from 'astro/zod';
import { commonStructuredSchema, uuidSchema } from './common';

export const potionIngredientSchema = z.object({
  ingredientId: uuidSchema.optional(),
  name: z.string(),
  amount: z.string().optional(),
  classification: z.string().optional(),
});

export const potionSchema = commonStructuredSchema.extend({
  name: z.string(),
  description: z.string(),
  image: z.string().optional(),
  classification: z.enum(['X', 'XX', 'XXX', 'XXXX', 'XXXXX']),
  type: z.string(),
  knowledgeGrade: z.string().optional(),
  schoolYear: z.string().optional(),
  standardStrength: z.number().optional(),
  administration: z.string().optional(),
  legality: z.string().optional(),
  ingredients: z.array(potionIngredientSchema).default([]),
  preventsDiseases: z.array(uuidSchema).default([]),
  relatedFelixIds: z.array(uuidSchema).default([]),
});
