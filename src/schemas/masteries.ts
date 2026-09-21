import { z } from 'astro/zod';
import { commonStructuredSchema } from './common';

export const masterySchema = commonStructuredSchema.extend({
  name: z.string().min(1),
  description: z.string().min(1),
  wisdom: z.enum([
    'Arcaica',
    'Difensiva',
    'Divinatoria',
    'Elementale',
    'Erbologica',
    'Magizoologica',
    'Medimagica',
    'Mentale',
    'Offensiva',
    'Oscura',
    'Pozionistica',
    'Trasfigurativa',
  ]),
  parameter: z.string().min(1),
  image: z.string().optional(),
  values: z.array(z.object({
    label: z.string().min(1),
    value: z.string().min(1),
  })).default([]),
});
