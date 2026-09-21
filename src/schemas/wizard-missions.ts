import { z } from 'astro/zod';
import { commonStructuredSchema } from './common';

export const wizardMissionLevelSchema = z.object({
  name: z.string().min(1),
  action: z.string().min(1),
  requirements: z.array(z.string().min(1)).min(1),
  rewards: z.array(z.string().min(1)).min(1),
  ifCaught: z.array(z.string()).default([]),
  illegal: z.boolean().default(false),
  completion: z.boolean().default(false),
});

export const wizardMissionSchema = commonStructuredSchema.extend({
  name: z.string().min(1),
  description: z.string().min(1),
  category: z.enum(['Sinistra', 'Neutrale', 'Virtuosa']),
  illegal: z.boolean().default(false),
  completion: z.boolean().default(false),
  levels: z.array(wizardMissionLevelSchema).min(1),
});
