import { z } from 'astro/zod';
import { commonStructuredSchema, uuidSchema } from './common';

const sharedMissionLevelSchema = z.object({
  name: z.string().min(1),
  action: z.string().min(1),
  requirements: z.array(z.string().min(1)).min(1),
  rewards: z.array(z.string().min(1)).min(1),
  ifCaught: z.array(z.string()).default([]),
  illegal: z.boolean().default(false),
  completion: z.boolean().default(false),
});

export const missionLevelSchema = sharedMissionLevelSchema.extend({
  schoolYearOnly: z.boolean().default(false),
});

export const adultMissionLevelSchema = sharedMissionLevelSchema;

export const missionSchema = commonStructuredSchema.extend({
  name: z.string().min(1),
  description: z.string().min(1),
  category: z.enum(['Caotica', 'Neutrale', 'Legale']),
  illegal: z.boolean().default(false),
  completion: z.boolean().default(false),
  schoolYearOnly: z.boolean().default(false),
  levels: z.array(missionLevelSchema).min(1),
  relatedFelixIds: z.array(uuidSchema).default([]),
});

export const adultMissionSchema = commonStructuredSchema.extend({
  name: z.string().min(1),
  description: z.string().min(1),
  category: z.enum(['Sinistra', 'Neutrale', 'Virtuosa']),
  illegal: z.boolean().default(false),
  completion: z.boolean().default(false),
  levels: z.array(adultMissionLevelSchema).min(1),
  relatedFelixIds: z.array(uuidSchema).default([]),
});
