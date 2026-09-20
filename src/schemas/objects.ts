import { z } from 'astro/zod';
import { commonStructuredSchema, uuidSchema } from './common';

export const objectSellerSchema = z.object({
  shop: z.string().min(1),
  shopAlignment: z.string().optional(),
  price: z.string().optional(),
  uses: z.string().optional(),
  legality: z.string().optional(),
  notes: z.string().optional(),
});

export const objectSchema = commonStructuredSchema.extend({
  name: z.string().min(1),
  description: z.string().default(''),
  image: z.string().optional(),
  price: z.string().optional(),
  function: z.string().optional(),
  activation: z.string().optional(),
  uses: z.string().optional(),
  offEffects: z.string().optional(),
  legality: z.string().optional(),
  sellers: z.array(objectSellerSchema).default([]),
  relatedFelixIds: z.array(uuidSchema).default([]),
});
