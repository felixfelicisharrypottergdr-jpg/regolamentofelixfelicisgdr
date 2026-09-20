import { z } from 'astro/zod';
import { commonStructuredSchema, uuidSchema } from './common';

export const raceSchema = commonStructuredSchema.extend({
  name: z.string().min(1),
  description: z.string().min(1),
  image: z.string().optional(),
  applicability: z.array(z.enum(['student', 'adult'])).default(['student', 'adult']),
  availablePlaces: z.string().optional(),
  relatedFelixIds: z.array(uuidSchema).default([]),
});
