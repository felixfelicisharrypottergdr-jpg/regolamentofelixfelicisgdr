import { z } from 'astro/zod';
import { commonStructuredSchema } from './common';

export const divinationTechniqueSchema = commonStructuredSchema.extend({
  name: z.string().min(1),
  description: z.string().min(1),
  kind: z.enum(['Scolastica', 'Extra', 'Avanzata']),
  schoolYear: z.enum(['V', 'VI', 'VII']).optional(),
  image: z.string().optional(),
  values: z.array(z.object({
    label: z.string().min(1),
    value: z.string().min(1),
  })).default([]),
});
