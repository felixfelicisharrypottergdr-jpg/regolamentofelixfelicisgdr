import { z } from 'astro/zod';
import { commonStructuredSchema } from './common';

export const missionLevelSchema = z.object({
  name: z.string().min(1),
  action: z.string().default(''),
  requirements: z.array(z.string()).default([]),
  rewards: z.array(z.string()).default([]),
  ifCaught: z.array(z.string()).default([]),
  illegal: z.boolean().default(false),
  completion: z.boolean().default(false),
  schoolYearOnly: z.boolean().default(false),
});

export const missionSchema = commonStructuredSchema.extend({
  name: z.string().min(1),
  description: z.string().default(''),
  category: z.enum(['Caotica', 'Neutrale', 'Legale']),
  illegal: z.boolean().default(false),
  completion: z.boolean().default(false),
  schoolYearOnly: z.boolean().default(false),
  levels: z.array(missionLevelSchema).default([]),
});
