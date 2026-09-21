import { z } from 'astro/zod';
import { commonStructuredSchema } from './common';

export const schoolKnowledgeSchema = commonStructuredSchema.extend({
  name: z.string().min(1),
  description: z.string().min(1),
  subject: z.enum(['Antiche Rune', 'Aritmanzia', 'Astronomia', 'Babbanologia', 'Storia della Magia']),
  schoolYear: z.enum(['V', 'VI', 'VII']),
  image: z.string().optional(),
});
