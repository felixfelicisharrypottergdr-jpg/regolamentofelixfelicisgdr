import { getCollection } from 'astro:content';
import { routeForDocId, routeForStructured } from '../config/routes';

type IndexedFelixContent = {
  felixId: string;
  title: string;
  type: string;
  url: string;
};

let felixIndexPromise: Promise<Map<string, IndexedFelixContent>> | undefined;

async function createFelixIndex() {
  const index = new Map<string, IndexedFelixContent>();

  const docs = await getCollection('docs');
  for (const entry of docs) {
    index.set(entry.data.felixId, {
      felixId: entry.data.felixId,
      title: entry.data.title,
      type: entry.data.contentType,
      url: routeForDocId(entry.id),
    });
  }

  for (const entry of (await getCollection('creatures')).filter((entry) => entry.data.status === 'published')) {
    index.set(entry.id, {
      felixId: entry.id,
      title: entry.data.name,
      type: 'creature',
      url: routeForStructured('creatures', entry.data.slug),
    });
  }

  for (const entry of (await getCollection('diseases')).filter((entry) => entry.data.status === 'published')) {
    index.set(entry.id, {
      felixId: entry.id,
      title: entry.data.name,
      type: 'disease',
      url: routeForStructured('diseases', entry.data.slug),
    });
  }

  for (const entry of (await getCollection('ingredients')).filter((entry) => entry.data.status === 'published')) {
    index.set(entry.id, {
      felixId: entry.id,
      title: entry.data.name,
      type: 'ingredient',
      url: routeForStructured('ingredients', entry.data.slug),
    });
  }

  for (const entry of (await getCollection('potions')).filter((entry) => entry.data.status === 'published')) {
    index.set(entry.id, {
      felixId: entry.id,
      title: entry.data.name,
      type: 'potion',
      url: routeForStructured('potions', entry.data.slug),
    });
  }

  for (const entry of (await getCollection('spells')).filter((entry) => entry.data.status === 'published')) {
    index.set(entry.id, {
      felixId: entry.id,
      title: entry.data.name,
      type: 'spell',
      url: routeForStructured('spells', entry.data.slug),
    });
  }


  for (const entry of (await getCollection('plants')).filter((entry) => entry.data.status === 'published')) {
    index.set(entry.id, {
      felixId: entry.id,
      title: entry.data.name,
      type: 'plant',
      url: routeForStructured('plants', entry.data.slug),
    });
  }

  for (const entry of (await getCollection('races')).filter((entry) => entry.data.status === 'published')) {
    index.set(entry.id, {
      felixId: entry.id,
      title: entry.data.name,
      type: 'race',
      url: routeForStructured('races', entry.data.slug),
    });
  }


  for (const entry of (await getCollection('objects')).filter((entry) => entry.data.status === 'published')) {
    index.set(entry.id, {
      felixId: entry.id,
      title: entry.data.name,
      type: 'object',
      url: routeForStructured('objects', entry.data.slug),
    });
  }

  for (const entry of (await getCollection('missions')).filter((entry) => entry.data.status === 'published')) {
    index.set(entry.id, {
      felixId: entry.id,
      title: entry.data.name,
      type: 'mission',
      url: routeForStructured('missions', entry.data.slug),
    });
  }


  for (const entry of (await getCollection('adultMissions')).filter((entry) => entry.data.status === 'published')) {
    index.set(entry.id, {
      felixId: entry.id,
      title: entry.data.name,
      type: 'adultMission',
      url: routeForStructured('adultMissions', entry.data.slug),
    });
  }

  for (const entry of (await getCollection('masteries')).filter((entry) => entry.data.status === 'published')) {
    index.set(entry.id, {
      felixId: entry.id,
      title: entry.data.name,
      type: 'mastery',
      url: routeForStructured('masteries', entry.data.slug),
    });
  }

  for (const entry of (await getCollection('legalDocuments')).filter((entry) => entry.data.status === 'published')) {
    index.set(entry.id, { felixId: entry.id, title: entry.data.title, type: 'legalDocument', url: routeForStructured('legalDocuments', entry.data.slug) });
  }
  for (const entry of (await getCollection('legalArticles')).filter((entry) => entry.data.status === 'published')) {
    index.set(entry.id, { felixId: entry.id, title: `Art. ${entry.data.articleNumber}${entry.data.title ? ` — ${entry.data.title}` : ''}`, type: 'legalArticle', url: routeForStructured('legalArticles', entry.data.slug) });
  }

  return index;
}

export function buildFelixIndex() {
  felixIndexPromise ??= createFelixIndex();
  return felixIndexPromise;
}
