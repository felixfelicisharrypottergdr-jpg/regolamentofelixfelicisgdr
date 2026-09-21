import { z } from 'astro/zod';
import { commonStructuredSchema } from './common';

export const missionLevelSchema = z.object({
  name: z.string().min(1),
  action: z.string().min(1),
  requirements: z.array(z.string().min(1)).min(1),
  rewards: z.array(z.string().min(1)).min(1),
  ifCaught: z.array(z.string()).default([]),
  illegal: z.boolean().default(false),
  completion: z.boolean().default(false),
  schoolYearOnly: z.boolean().default(false),
});

export const missionSchema = commonStructuredSchema.extend({
  name: z.string().min(1),
  description: z.string().min(1),
  category: z.enum(['Caotica', 'Neutrale', 'Legale']),
  illegal: z.boolean().default(false),
  completion: z.boolean().default(false),
  schoolYearOnly: z.boolean().default(false),
  levels: z.array(missionLevelSchema).min(1),
});
