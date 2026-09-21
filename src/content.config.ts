import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { creatureSchema } from './schemas/creatures';
import { diseaseSchema } from './schemas/diseases';
import { ingredientSchema } from './schemas/ingredients';
import { potionSchema } from './schemas/potions';
import { spellSchema } from './schemas/spells';
import { plantSchema } from './schemas/plants';
import { legalDocumentSchema, legalArticleSchema } from './schemas/legal';
import { raceSchema } from './schemas/races';
import { objectSchema } from './schemas/objects';
import { missionSchema, adultMissionSchema } from './schemas/missions';
import { masterySchema } from './schemas/masteries';
import { migrationSchema, uuidSchema } from './schemas/common';

const idFromFrontmatter = ({ data, entry }: { data: Record<string, unknown>; entry: string }) =>
  typeof data.id === 'string' ? data.id : entry.replace(/\.(md|mdx)$/, '');

const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema({
  extend: z.object({
  felixId: uuidSchema.optional(),
  contentType: z.enum(['landing', 'rule', 'free']).default('rule'),
  searchAliases: z.array(z.string()).default([]),
  applicability: z.array(z.enum(['student', 'adult'])).default([]),
  quickFacts: z.array(z.object({
    label: z.string(),
    value: z.string(),
  })).default([]),
  quickLinks: z.array(z.object({
    label: z.string(),
    href: z.string(),
    description: z.string().optional(),
  })).default([]),
  migration: migrationSchema.optional(),
  prototypeExcerpt: z.boolean().default(false),
}),
  }),
});

const creatures = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/creatures',
    generateId: idFromFrontmatter,
  }),
  schema: creatureSchema,
});

const diseases = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/diseases',
    generateId: idFromFrontmatter,
  }),
  schema: diseaseSchema,
});

const potions = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/potions',
    generateId: idFromFrontmatter,
  }),
  schema: potionSchema,
});


const spells = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/spells',
    generateId: idFromFrontmatter,
  }),
  schema: spellSchema,
});


const plants = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/plants',
    generateId: idFromFrontmatter,
  }),
  schema: plantSchema,
});



const races = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/races',
    generateId: idFromFrontmatter,
  }),
  schema: raceSchema,
});


const objects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/objects', generateId: idFromFrontmatter }),
  schema: objectSchema,
});

const missions = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/missions',
    generateId: idFromFrontmatter,
  }),
  schema: missionSchema,
});

const adultMissions = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/adult-missions',
    generateId: idFromFrontmatter,
  }),
  schema: adultMissionSchema,
});

const masteries = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/masteries',
    generateId: idFromFrontmatter,
  }),
  schema: masterySchema,
});

const legalDocuments = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/legal-documents', generateId: idFromFrontmatter }),
  schema: legalDocumentSchema,
});

const legalArticles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/legal-articles', generateId: idFromFrontmatter }),
  schema: legalArticleSchema,
});

const ingredients = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/ingredients',
    generateId: idFromFrontmatter,
  }),
  schema: ingredientSchema,
});

export const collections = { docs, creatures, diseases, ingredients, potions, spells, plants, races, objects, missions, adultMissions, masteries, legalDocuments, legalArticles };
