const configuredBase = import.meta.env.BASE_URL || '/';
const base = configuredBase.endsWith('/') ? configuredBase : `${configuredBase}/`;

function withBase(path: string) {
  const clean = path.replace(/^\/+/, '');
  return clean ? `${base}${clean}` : base;
}

export const collectionBases = {
  creatures: 'manuali/magizoologia/bestiario/',
  diseases: 'manuali/medimagia/malattie/',
  ingredients: 'manuali/ingredienti/',
  potions: 'manuali/pozionistica/pozionario/',
  spells: 'manuali/incantesimi/',
  plants: 'manuali/erbologia/erbario/',
  races: 'il-personaggio/razze/',
  objects: 'mondo-magico/commercio/oggetti/',
  missions: 'il-personaggio/pg-studente/modalita-di-gioco/fantahogwarts/missioni/',
  adultMissions: 'il-personaggio/pg-adulto/modalita-di-gioco/fantawiz/missioni/',
  masteries: 'conoscenze-e-sapienze/maestrie/',
  legalDocuments: 'mondo-magico/leggi/documenti/',
  legalArticles: 'mondo-magico/leggi/articoli/',
} as const;

export function routeForStructured(collection: keyof typeof collectionBases, slug: string) {
  return withBase(`${collectionBases[collection]}${slug}/`);
}

export function routeForDocId(id: string) {
  if (id === 'index') return base;
  const clean = id.replace(/\/index$/, '');
  return withBase(`${clean}/`);
}

export { withBase };
