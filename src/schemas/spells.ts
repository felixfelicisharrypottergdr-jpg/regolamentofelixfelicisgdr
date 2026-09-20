import { z } from 'astro/zod';
import { commonStructuredSchema, uuidSchema } from './common';

export const spellFamilies = [
  'Arcaici',
  'Autoconclusivi',
  'Difensivi',
  'Elementali',
  'Mentali ed Illusioni',
  'Offensivi',
  'Oscuri',
  'Trasfigurativi',
] as const;

export const spellSchema = commonStructuredSchema.extend({
  name: z.string().min(1),
  description: z.string().min(1),
  image: z.string().optional(),
  family: z.enum(spellFamilies),
  type: z.string().min(1),
  parameter: z.string().min(1),
  force: z.string().optional(),
  fatigue: z.string().optional(),
  target: z.string().optional(),
  range: z.string().optional(),
  knowledgeGrade: z.enum(['Autoconclusiva', 'Scolastica', 'Extra', 'Avanzata']).optional(),
  schoolYear: z.enum(['V', 'VI', 'VII']).optional(),
  affectedParameters: z.array(z.string()).default([]),
  counteractsSpells: z.array(uuidSchema).default([]),
  relatedFelixIds: z.array(uuidSchema).default([]),
});
