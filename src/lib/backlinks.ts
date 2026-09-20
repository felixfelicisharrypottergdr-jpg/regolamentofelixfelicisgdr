import { getCollection } from 'astro:content';

export type Backlink = {
  sourceId: string;
  relation: 'causesDisease' | 'producesIngredient' | 'usesIngredient' | 'preventsDisease' | 'counteractsSpell' | 'generic';
};

export async function buildBacklinkIndex() {
  const result = new Map<string, Backlink[]>();
  const add = (target: string, backlink: Backlink) => {
    const existing = result.get(target) ?? [];
    existing.push(backlink);
    result.set(target, existing);
  };

  for (const creature of (await getCollection('creatures')).filter((entry) => entry.data.status === 'published')) {
    for (const target of creature.data.causesDiseases) {
      add(target, { sourceId: creature.id, relation: 'causesDisease' });
    }
    for (const target of creature.data.producesIngredients) {
      add(target, { sourceId: creature.id, relation: 'producesIngredient' });
    }
    for (const target of creature.data.relatedFelixIds) {
      add(target, { sourceId: creature.id, relation: 'generic' });
    }
  }

  for (const potion of (await getCollection('potions')).filter((entry) => entry.data.status === 'published')) {
    for (const item of potion.data.ingredients) {
      if (item.ingredientId) add(item.ingredientId, { sourceId: potion.id, relation: 'usesIngredient' });
    }
    for (const target of potion.data.preventsDiseases) {
      add(target, { sourceId: potion.id, relation: 'preventsDisease' });
    }
    for (const target of potion.data.relatedFelixIds) {
      add(target, { sourceId: potion.id, relation: 'generic' });
    }
  }


  for (const spell of (await getCollection('spells')).filter((entry) => entry.data.status === 'published')) {
    for (const target of spell.data.counteractsSpells) {
      add(target, { sourceId: spell.id, relation: 'counteractsSpell' });
    }
    for (const target of spell.data.relatedFelixIds) {
      add(target, { sourceId: spell.id, relation: 'generic' });
    }
  }


  for (const plant of (await getCollection('plants')).filter((entry) => entry.data.status === 'published')) {
    for (const item of plant.data.producedIngredients) {
      if (item.ingredientId) add(item.ingredientId, { sourceId: plant.id, relation: 'producesIngredient' });
    }
    for (const target of plant.data.relatedFelixIds) {
      add(target, { sourceId: plant.id, relation: 'generic' });
    }
  }

  for (const race of (await getCollection('races')).filter((entry) => entry.data.status === 'published')) {
    for (const target of race.data.relatedFelixIds) {
      add(target, { sourceId: race.id, relation: 'generic' });
    }
  }


  for (const object of (await getCollection('objects')).filter((entry) => entry.data.status === 'published')) {
    for (const target of object.data.relatedFelixIds) {
      add(target, { sourceId: object.id, relation: 'generic' });
    }
  }

  return result;
}
