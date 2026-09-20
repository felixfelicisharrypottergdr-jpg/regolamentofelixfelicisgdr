import { z } from 'astro/zod';

export const uuidSchema = z.string().uuid();

export const migrationSchema = z.object({
  status: z.enum([
    'to_migrate',
    'migrated',
    'revised',
    'verified',
    'excluded_crafting',
    'external_png_v1',
    'native',
  ]),
  sources: z.array(z.object({
    document: z.string(),
    section: z.string().optional(),
    item: z.string().optional(),
    sourceUrl: z.string().optional(),
    note: z.string().optional(),
  })).default([]),
});

export const commonStructuredSchema = z.object({
  id: uuidSchema,
  slug: z.string().regex(/^[a-z0-9-]+$/),
  searchAliases: z.array(z.string()).default([]),
  status: z.enum(['draft', 'published', 'archived']).default('published'),
  migration: migrationSchema,
});

export const valuesSchema = z.object({
  force: z.number().optional(),
  health: z.number().optional(),
  resistance: z.number().optional(),
  dexterity: z.number().optional(),
});
