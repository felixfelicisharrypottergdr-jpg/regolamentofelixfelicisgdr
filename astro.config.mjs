import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';

const [githubOwner, githubRepo] = (process.env.GITHUB_REPOSITORY || '/').split('/');
const githubUserSite = githubOwner && githubRepo === `${githubOwner}.github.io`;
const site = process.env.SITE_URL || (githubOwner ? `https://${githubOwner}.github.io` : 'https://example.github.io');
const base = process.env.BASE_PATH || (githubOwner && githubRepo && !githubUserSite ? `/${githubRepo}` : '/');

function remarkFelixHeadingHierarchy() {
  return (tree) => {
    let hasLevelOne = false;
    const detect = (node) => {
      if (!node || typeof node !== 'object') return;
      if (node.type === 'heading' && node.depth === 1) hasLevelOne = true;
      if (Array.isArray(node.children)) node.children.forEach(detect);
    };
    detect(tree);
    if (!hasLevelOne) return;

    const shift = (node) => {
      if (!node || typeof node !== 'object') return;
      if (node.type === 'heading' && typeof node.depth === 'number') {
        node.depth = Math.min(6, node.depth + 1);
      }
      if (Array.isArray(node.children)) node.children.forEach(shift);
    };
    shift(tree);
  };
}

function remarkFelixBaseLinks(options = {}) {
  const configured = options.base || '/';
  const prefix = configured.endsWith('/') ? configured : `${configured}/`;

  return (tree) => {
    const walk = (node) => {
      if (!node || typeof node !== 'object') return;
      if ((node.type === 'link' || node.type === 'image') && typeof node.url === 'string') {
        const url = node.url;
        if (url.startsWith('/') && !url.startsWith('//') && !url.startsWith(prefix)) {
          node.url = `${prefix}${url.replace(/^\/+/, '')}`;
        }
      }
      if (Array.isArray(node.children)) node.children.forEach(walk);
    };
    walk(tree);
  };
}

export default defineConfig({
  site,
  base,
  markdown: {
    processor: unified({
      remarkPlugins: [remarkFelixHeadingHierarchy, [remarkFelixBaseLinks, { base }]],
    }),
  },
  integrations: [
    starlight({
      disable404Route: true,
      title: 'FELIX FELICIS',
      defaultLocale: 'root',
      locales: {
        root: { label: 'Italiano', lang: 'it' },
      },
      customCss: ['./src/styles/felix-prototype.css', './src/styles/felix-reference.css'],
      pagefind: {
        ranking: {
          metaWeights: {
            title: 8,
            aliases: 6,
            description: 3,
            content_type: 0,
            macroarea: 0,
          },
        },
      },
      components: {
        Header: './src/components/starlight/FelixHeader.astro',
        Search: './src/components/starlight/FelixSearch.astro',
        Sidebar: './src/components/starlight/FelixSidebar.astro',
        PageSidebar: './src/components/starlight/FelixPageSidebar.astro',
        TwoColumnContent: './src/components/starlight/FelixTwoColumnContent.astro',
        PageTitle: './src/components/starlight/FelixPageTitle.astro',
        MarkdownContent: './src/components/starlight/FelixMarkdownContent.astro',
        SiteTitle: './src/components/starlight/FelixSiteTitle.astro',
      },
      sidebar: [
        {
          label: 'Inizia da qui',
          items: [
            { label: 'Home', link: '/' },
            { label: 'Orientamento', slug: 'inizia-da-qui' },
            { label: 'Cosa siamo', slug: 'inizia-da-qui/cosa-siamo' },
            {
              label: 'Regole Generali',
              items: [
                { label: 'Panoramica', slug: 'inizia-da-qui/regole-generali' },
                { label: 'Norme Generali', link: '/inizia-da-qui/regole-generali/#norme' },
                { label: 'È vietato', link: '/inizia-da-qui/regole-generali/#vietato' },
                { label: 'Principi', link: '/inizia-da-qui/regole-generali/#principi' },
                { label: 'Temi Sensibili e contesto', link: '/inizia-da-qui/regole-generali/#temi' },
              ],
            },
            {
              label: 'Valute di Gioco',
              items: [
                { label: 'Panoramica', slug: 'inizia-da-qui/valute' },
                {
                  label: 'Punti Post',
                  items: [
                    { label: 'I Punti Post', link: '/inizia-da-qui/valute/#puntipost' },
                    { label: 'Migliorare le Conoscenze', link: '/inizia-da-qui/valute/#migliorarecon' },
                    { label: 'Convertire in Galeoni', link: '/inizia-da-qui/valute/#convertire' },
                    { label: 'Ottenere Parametri', link: '/inizia-da-qui/valute/#ottparam' },
                    { label: 'Come guadagnarli', link: '/inizia-da-qui/valute/#guadpp' },
                    { label: 'Mini-post', link: '/inizia-da-qui/valute/#minipost' },
                    { label: 'Come richiederli', link: '/inizia-da-qui/valute/#richpp' },
                  ],
                },
                {
                  label: 'Galeoni',
                  items: [
                    { label: 'I Galeoni', link: '/inizia-da-qui/valute/#galeoni' },
                    { label: 'Come guadagnarli', link: '/inizia-da-qui/valute/#guadgal' },
                    { label: 'Il guadagno mensile', link: '/inizia-da-qui/valute/#guadagnomens' },
                    { label: 'Come richiederli', link: '/inizia-da-qui/valute/#richgal' },
                  ],
                },
                {
                  label: 'Felix Token',
                  items: [
                    { label: 'I Felix Token', link: '/inizia-da-qui/valute/#felixtoken' },
                    { label: 'Fanta Felix Felicis', link: '/inizia-da-qui/valute/#fantafelix' },
                    { label: 'Gli Obbiettivi', link: '/inizia-da-qui/valute/#obbfff' },
                    { label: 'I premi', link: '/inizia-da-qui/valute/#premifff' },
                    { label: 'Richiedere FT e premi', link: '/inizia-da-qui/valute/#richft' },
                  ],
                },
              ],
            },
            {
              label: 'Allineamenti',
              items: [
                { label: 'Panoramica', slug: 'inizia-da-qui/allineamenti' },
                {
                  label: 'PG Adulti',
                  items: [
                    { label: 'Gli Allineamenti dei PG Adulti', link: '/inizia-da-qui/allineamenti/#allineamadulti' },
                    { label: 'Allineamenti Legali', link: '/inizia-da-qui/allineamenti/#allinlegali' },
                    { label: 'Legale Neutrale', link: '/inizia-da-qui/allineamenti/#legneutrale' },
                    { label: 'Legale Malvagio', link: '/inizia-da-qui/allineamenti/#legmalvagio' },
                    { label: 'Allineamenti Neutrali', link: '/inizia-da-qui/allineamenti/#allinneutrali' },
                    { label: 'Neutrale Puro', link: '/inizia-da-qui/allineamenti/#neutpuro' },
                    { label: 'Neutrale Malvagio', link: '/inizia-da-qui/allineamenti/#neutmalvagio' },
                    { label: 'Allineamenti Caotici', link: '/inizia-da-qui/allineamenti/#allincaotici' },
                    { label: 'Caotico Neutrale', link: '/inizia-da-qui/allineamenti/#caopuro' },
                    { label: 'Caotico Malvagio', link: '/inizia-da-qui/allineamenti/#caomalvagio' },
                  ],
                },
                {
                  label: 'PG Studenti',
                  items: [
                    { label: 'Gli Allineamenti dei PG Studenti', link: '/inizia-da-qui/allineamenti/#allineamstudenti' },
                    { label: 'Legale', link: '/inizia-da-qui/allineamenti/#studlegale' },
                    { label: 'Neutrale', link: '/inizia-da-qui/allineamenti/#studneutrale' },
                    { label: 'Caotico', link: '/inizia-da-qui/allineamenti/#studcaotico' },
                  ],
                },
              ],
            },
            {
              label: 'Popolometro',
              items: [
                { label: 'Panoramica', slug: 'inizia-da-qui/popolometro' },
                { label: 'Le soglie', link: '/inizia-da-qui/popolometro/#soglie' },
              ],
            },
            {
              label: 'Personaggi Non Giocanti',
              items: [
                { label: 'Panoramica', slug: 'inizia-da-qui/png' },
                { label: 'Cosa sono i PNG', link: '/inizia-da-qui/png/#cosasono' },
                { label: 'I PNG Personali', link: '/inizia-da-qui/png/#PNGpersonali' },
                {
                  label: 'PNG di Felix Felicis',
                  items: [
                    { label: 'Panoramica', link: '/inizia-da-qui/png/#PNGFF' },
                    { label: 'Virtuosi', link: '/inizia-da-qui/png/#virtuosi' },
                    { label: 'Neutrali', link: '/inizia-da-qui/png/#neutrali' },
                    { label: 'Sinistri', link: '/inizia-da-qui/png/#sinistri' },
                    { label: 'Ministero', link: '/inizia-da-qui/png/#ministero' },
                    { label: 'Altri PNG', link: '/inizia-da-qui/png/#altri' },
                    { label: 'Clienti Abituali', link: '/inizia-da-qui/png/#abituali' },
                    { label: 'PPNG', link: '/inizia-da-qui/png/#PPNG' },
                  ],
                },
                {
                  label: 'PNG di Hogwarts',
                  items: [
                    { label: 'Panoramica', link: '/inizia-da-qui/png/#PNGHog' },
                    { label: 'Professori', link: '/inizia-da-qui/png/#professori' },
                    { label: 'Personale scolastico', link: '/inizia-da-qui/png/#personale' },
                    { label: 'Prefetti e Caposcuola', link: '/inizia-da-qui/png/#prefcaposc' },
                    { label: 'Giocatori di Quidditch', link: '/inizia-da-qui/png/#quidditch' },
                    { label: 'Spiriti', link: '/inizia-da-qui/png/#spiriti' },
                  ],
                },
                {
                  label: 'Interagire con i PNG',
                  items: [
                    { label: 'Panoramica', link: '/inizia-da-qui/png/#interagire' },
                    { label: 'PNG Personali', link: '/inizia-da-qui/png/#interagirepersonali' },
                    { label: 'PNG del gioco', link: '/inizia-da-qui/png/#quandocome' },
                    { label: 'Acquistare servigi', link: '/inizia-da-qui/png/#servigi' },
                    { label: 'PNG di Hogwarts', link: '/inizia-da-qui/png/#interagirehog' },
                    { label: 'Numeri Guastafeste', link: '/inizia-da-qui/png/#guastafeste' },
                  ],
                },
              ],
            },
            { label: 'Lo Staff', slug: 'inizia-da-qui/staff' },
          ],
        },
        {
          label: 'Il Personaggio',
          items: [
            { label: 'Il Personaggio', slug: 'il-personaggio' },
            {
              label: 'PG Studente',
              items: [
                { label: 'Il gioco dei PG Studenti', slug: 'il-personaggio/pg-studente' },
                {
                  label: 'Creare un PG Studente',
                  items: [
                    { label: 'Panoramica', slug: 'il-personaggio/pg-studente/creare-un-pg-studente' },
                    { label: 'Parametri Magici', slug: 'il-personaggio/pg-studente/creare-un-pg-studente/parametri-magici' },
                    { label: 'Parametri Fisici', slug: 'il-personaggio/pg-studente/creare-un-pg-studente/parametri-fisici' },
                    { label: 'Parametri Sociali', slug: 'il-personaggio/pg-studente/creare-un-pg-studente/parametri-sociali' },
                    { label: 'Cariche scolastiche', slug: 'il-personaggio/pg-studente/creare-un-pg-studente/cariche-scolastiche' },
                  ],
                },
                {
                  label: 'Studiare ad Hogwarts',
                  items: [
                    { label: 'Panoramica', slug: 'il-personaggio/pg-studente/studiare-ad-hogwarts' },
                    { label: 'Piano di Studi', slug: 'il-personaggio/pg-studente/studiare-ad-hogwarts/piano-di-studi' },
                    { label: 'Migliorare il Piano', slug: 'il-personaggio/pg-studente/studiare-ad-hogwarts/migliorare-piano-di-studi' },
                    { label: 'Borse di Studio', slug: 'il-personaggio/pg-studente/studiare-ad-hogwarts/borse-di-studio' },
                  ],
                },
                { label: 'Coppa delle Case', slug: 'il-personaggio/pg-studente/coppa-delle-case' },
                {
                  label: 'Modalità di gioco',
                  items: [
                    { label: 'Panoramica', slug: 'il-personaggio/pg-studente/modalita-di-gioco' },
                    { label: 'Vivere ad Hogwarts', slug: 'il-personaggio/pg-studente/modalita-di-gioco/vivere-ad-hogwarts' },
                    { label: 'Luoghi di Hogwarts', slug: 'il-personaggio/pg-studente/modalita-di-gioco/luoghi-di-hogwarts' },
                    { label: 'Ottenere informazioni', slug: 'il-personaggio/pg-studente/modalita-di-gioco/ottenere-informazioni' },
                    { label: 'Conoscenze dai PNG', slug: 'il-personaggio/pg-studente/modalita-di-gioco/ottenere-conoscenze-png' },
                    { label: 'Trovare Oggetti', slug: 'il-personaggio/pg-studente/modalita-di-gioco/trovare-oggetti-magici' },
                    { label: 'Stanze e Passaggi', slug: 'il-personaggio/pg-studente/modalita-di-gioco/scoprire-stanze-passaggi' },
                    { label: 'Intervento delle Cariche', slug: 'il-personaggio/pg-studente/modalita-di-gioco/intervento-cariche-scolastiche' },
                    { label: 'Orario e Regolamento', slug: 'il-personaggio/pg-studente/modalita-di-gioco/orario-regolamento-scolastico' },
                    { label: 'Campionato di Quidditch', slug: 'il-personaggio/pg-studente/modalita-di-gioco/campionato-quidditch' },
                    { label: 'Club Scolastici', slug: 'il-personaggio/pg-studente/modalita-di-gioco/club-scolastici' },
                    { label: 'Trama dell’Anno', slug: 'il-personaggio/pg-studente/modalita-di-gioco/trama-dell-anno' },
                    { label: 'Notizie da Hogwarts', slug: 'il-personaggio/pg-studente/modalita-di-gioco/notizie-hogwarts' },
                    { label: 'Alfieri Rossi', slug: 'il-personaggio/pg-studente/modalita-di-gioco/alfieri-rossi' },
                    { label: 'Resistenza', slug: 'il-personaggio/pg-studente/modalita-di-gioco/resistenza' },
                    {
                      label: 'FantaHogwarts',
                      items: [
                        { label: 'Regole', slug: 'il-personaggio/pg-studente/modalita-di-gioco/fantahogwarts' },
                        { label: 'Missioni', link: '/il-personaggio/pg-studente/modalita-di-gioco/fantahogwarts/missioni/' },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              label: 'PG Adulto',
              items: [
                { label: 'Il gioco dei PG Adulti', slug: 'il-personaggio/pg-adulto' },
                {
                  label: 'Creare un PG Adulto',
                  items: [
                    { label: 'Panoramica', slug: 'il-personaggio/pg-adulto/creare-un-pg-adulto' },
                    { label: 'Categorie Magiche', slug: 'il-personaggio/pg-adulto/creare-un-pg-adulto/categorie-magiche' },
                    { label: 'Parametri Magici', slug: 'il-personaggio/pg-adulto/creare-un-pg-adulto/parametri-magici' },
                    { label: 'Parametri Fisici', slug: 'il-personaggio/pg-adulto/creare-un-pg-adulto/parametri-fisici' },
                    { label: 'Parametri Sociali', slug: 'il-personaggio/pg-adulto/creare-un-pg-adulto/parametri-sociali' },
                  ],
                },
                { label: 'Luoghi di Maestria', slug: 'il-personaggio/pg-adulto/luoghi-di-maestria' },
                {
                  label: 'Lavorare nel Mondo Magico',
                  items: [
                    { label: 'Panoramica', slug: 'il-personaggio/pg-adulto/lavorare' },
                    { label: 'Mestieri', slug: 'il-personaggio/pg-adulto/lavorare/mestieri' },
                    { label: 'Carriera e Prestigio', slug: 'il-personaggio/pg-adulto/lavorare/carriera-prestigio' },
                    { label: 'PG Locandieri', slug: 'il-personaggio/pg-adulto/lavorare/locandieri' },
                  ],
                },
                {
                  label: 'Modalità di gioco',
                  items: [
                    { label: 'Panoramica', slug: 'il-personaggio/pg-adulto/modalita-di-gioco' },
                    { label: 'Luoghi del Mondo Magico', slug: 'il-personaggio/pg-adulto/modalita-di-gioco/luoghi-del-mondo-magico' },
                    { label: 'Trama dell’Anno', slug: 'il-personaggio/pg-adulto/modalita-di-gioco/trama-dell-anno' },
                    { label: 'Enclave', slug: 'il-personaggio/pg-adulto/modalita-di-gioco/enclave' },
                    { label: 'Aurora', slug: 'il-personaggio/pg-adulto/modalita-di-gioco/aurora' },
                    { label: 'PG Protagonisti — in revisione', slug: 'il-personaggio/pg-adulto/modalita-di-gioco/pg-protagonisti' },
                    { label: 'Eventi di Categoria e Mestiere', slug: 'il-personaggio/pg-adulto/modalita-di-gioco/eventi-categoria-mestiere' },
                    { label: 'CroNoTroSe', slug: 'il-personaggio/pg-adulto/modalita-di-gioco/cronotrose' },
                    { label: 'Mille e una Nottetempo', slug: 'il-personaggio/pg-adulto/modalita-di-gioco/mille-e-una-nottetempo' },
                    { label: 'Notizie dal Mondo Magico', slug: 'il-personaggio/pg-adulto/modalita-di-gioco/notizie-dal-mondo-magico' },
                    {
                      label: 'FantaWiz',
                      items: [
                        { label: 'Regole', slug: 'il-personaggio/pg-adulto/modalita-di-gioco/fantawiz' },
                        { label: 'Missioni', link: '/il-personaggio/pg-adulto/modalita-di-gioco/fantawiz/missioni/' },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              label: 'Razze',
              items: [
                { label: 'Guida e distribuzione', slug: 'il-personaggio/razze-guida' },
                { label: 'Elenco delle Razze', link: '/il-personaggio/razze/' },
              ],
            },
            { label: 'Bagaglio e Oggetti', slug: 'il-personaggio/bagaglio' },
            {
              label: 'Parametri',
              items: [
                { label: 'Panoramica', slug: 'il-personaggio/parametri' },
                {
                  label: 'Parametri Magici',
                  items: [
                    { label: 'Panoramica', slug: 'il-personaggio/parametri/parametri-magici' },
                    { label: 'Acume', link: '/il-personaggio/parametri/parametri-magici/#acume' },
                    { label: 'Empatia', link: '/il-personaggio/parametri/parametri-magici/#empatia' },
                    { label: 'Percezione', link: '/il-personaggio/parametri/parametri-magici/#percezione' },
                    { label: 'Potenza', link: '/il-personaggio/parametri/parametri-magici/#potenza' },
                    { label: 'Tecnica', link: '/il-personaggio/parametri/parametri-magici/#tecnica' },
                    { label: 'Volontà', link: '/il-personaggio/parametri/parametri-magici/#volontà' },
                    { label: 'Guadagnare/perdere/recuperare', link: '/il-personaggio/parametri/parametri-magici/#guadagnareperderemagici' },
                    { label: 'Categorie Magiche', link: '/il-personaggio/parametri/parametri-magici/#paraecat' },
                  ],
                },
                {
                  label: 'Parametri Fisici',
                  items: [
                    { label: 'Panoramica', slug: 'il-personaggio/parametri/parametri-fisici' },
                    {
                      label: 'Destrezza',
                      items: [
                        { label: 'Destrezza', link: '/il-personaggio/parametri/parametri-fisici/#destrezza' },
                        { label: 'Scontri 1 vs 1', link: '/il-personaggio/parametri/parametri-fisici/#1vs1' },
                        { label: 'Scontri tra più PG', link: '/il-personaggio/parametri/parametri-fisici/#1vsn' },
                      ],
                    },
                    { label: 'Fatica', link: '/il-personaggio/parametri/parametri-fisici/#fatica' },
                    { label: 'Resistenza', link: '/il-personaggio/parametri/parametri-fisici/#resistenza' },
                    { label: 'Salute', link: '/il-personaggio/parametri/parametri-fisici/#salute' },
                    { label: 'Guadagnare/perdere/recuperare', link: '/il-personaggio/parametri/parametri-fisici/#guadagnareperdefisici' },
                  ],
                },
                {
                  label: 'Parametri Sociali',
                  items: [
                    { label: 'Panoramica', slug: 'il-personaggio/parametri/parametri-sociali' },
                    {
                      label: 'Dialettica',
                      items: [
                        { label: 'Dialettica', link: '/il-personaggio/parametri/parametri-sociali/#dialettica' },
                        { label: 'Crescita', link: '/il-personaggio/parametri/parametri-sociali/#crescitadial' },
                      ],
                    },
                    {
                      label: 'Popolarità',
                      items: [
                        { label: 'Popolarità', link: '/il-personaggio/parametri/parametri-sociali/#popolarità' },
                        { label: 'PG Studenti', link: '/il-personaggio/parametri/parametri-sociali/#popstudenti' },
                        { label: 'PG Adulti', link: '/il-personaggio/parametri/parametri-sociali/#popadulti' },
                      ],
                    },
                    {
                      label: 'Stima e Prestigio',
                      items: [
                        { label: 'Panoramica', link: '/il-personaggio/parametri/parametri-sociali/#stimaprest' },
                        { label: 'Stima dei Docenti', link: '/il-personaggio/parametri/parametri-sociali/#stimastudenti' },
                        { label: 'Prestigio', link: '/il-personaggio/parametri/parametri-sociali/#prestigioadulti' },
                      ],
                    },
                    {
                      label: 'Bontà e Malvagità',
                      items: [
                        { label: 'Panoramica', link: '/il-personaggio/parametri/parametri-sociali/#bonmal' },
                        { label: 'Legame con Allineamento', link: '/il-personaggio/parametri/parametri-sociali/#legameallistudenti' },
                        { label: 'Punti Bontà', link: '/il-personaggio/parametri/parametri-sociali/#punti-bontà' },
                        { label: 'Punti Malvagità', link: '/il-personaggio/parametri/parametri-sociali/#punti-malvagità' },
                        { label: 'Come si guadagnano', link: '/il-personaggio/parametri/parametri-sociali/#guadagnobonmal' },
                        { label: 'Relazione tra i Punti', link: '/il-personaggio/parametri/parametri-sociali/#relazionebonmal' },
                        { label: 'Soglia di Neutralità', link: '/il-personaggio/parametri/parametri-sociali/#neutralitàbonmal' },
                      ],
                    },
                    {
                      label: 'Virtuosi e Sinistri',
                      items: [
                        { label: 'Panoramica', link: '/il-personaggio/parametri/parametri-sociali/#virtsin' },
                        { label: 'Legame con Allineamento', link: '/il-personaggio/parametri/parametri-sociali/#legameallineamento' },
                        { label: 'Punti Virtuosi', link: '/il-personaggio/parametri/parametri-sociali/#virt' },
                        { label: 'Punti Sinistri', link: '/il-personaggio/parametri/parametri-sociali/#sin' },
                        { label: 'Né Virtuoso né Sinistro', link: '/il-personaggio/parametri/parametri-sociali/#novirtsin' },
                        { label: 'Come si guadagnano', link: '/il-personaggio/parametri/parametri-sociali/#guadagnovirtsin' },
                        { label: 'Relazione tra i Punti', link: '/il-personaggio/parametri/parametri-sociali/#relazionevirtsin' },
                        { label: 'Soglia di Neutralità', link: '/il-personaggio/parametri/parametri-sociali/#neutralitàvirtsin' },
                      ],
                    },
                    { label: 'Guadagnare/perdere/recuperare', link: '/il-personaggio/parametri/parametri-sociali/#guadagnareperdesociali' },
                    {
                      label: 'Da Studente ad Adulto',
                      items: [
                        { label: 'Panoramica', link: '/il-personaggio/parametri/parametri-sociali/#fine' },
                        { label: 'Popolarità', link: '/il-personaggio/parametri/parametri-sociali/#finepop' },
                        { label: 'Stima e Prestigio', link: '/il-personaggio/parametri/parametri-sociali/#finestima' },
                        { label: 'Bontà/Malvagità → Virtuoso/Sinistro', link: '/il-personaggio/parametri/parametri-sociali/#bonmalvirtsin' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Giocare',
          items: [
            { label: 'Giocare', slug: 'giocare' },
            {
              label: 'Modalità di Gioco',
              items: [
                { label: 'Panoramica', slug: 'giocare/modalita-di-gioco' },
                {
                  label: 'Eventi',
                  items: [
                    { label: 'Panoramica', slug: 'giocare/modalita-di-gioco/eventi' },
                    { label: 'Ambient', link: '/giocare/modalita-di-gioco/eventi/#ambient' },
                    { label: 'Quest', link: '/giocare/modalita-di-gioco/eventi/#quest' },
                  ],
                },
                { label: 'Trama', slug: 'giocare/modalita-di-gioco/trama' },
                {
                  label: 'Sondaggi e Indizi',
                  items: [
                    { label: 'Panoramica', slug: 'giocare/modalita-di-gioco/sondaggi-e-indizi' },
                    { label: 'Sondaggi', link: '/giocare/modalita-di-gioco/sondaggi-e-indizi/#sondaggi' },
                    { label: 'Indizi', link: '/giocare/modalita-di-gioco/sondaggi-e-indizi/#indizi' },
                  ],
                },
                { label: 'Classificazione degli Eventi', slug: 'giocare/modalita-di-gioco/classificazione-eventi' },
              ],
            },
            {
              label: 'Le Role',
              items: [
                { label: 'Le Role', slug: 'giocare/le-role' },
                { label: 'Free Role', slug: 'giocare/le-role/free-role' },
                {
                  label: 'Role Masterate',
                  items: [
                    { label: 'Panoramica', slug: 'giocare/le-role/role-masterate' },
                    { label: 'Richieste al Narratore', link: '/giocare/le-role/role-masterate/#richieste' },
                  ],
                },
              ],
            },
            { label: 'Le Azioni', slug: 'giocare/le-azioni' },
            {
              label: 'Dadi e casualità',
              items: [
                { label: 'Panoramica', slug: 'giocare/dadi-e-risultati' },
                { label: 'Perché i dadi?', link: '/giocare/dadi-e-risultati/#perchèidadi' },
                { label: 'Lancio dei dadi', link: '/giocare/dadi-e-risultati/#lanciodadi' },
                { label: 'Quando lanciarli', link: '/giocare/dadi-e-risultati/#quandolancio' },
                { label: 'Player o Narratore?', link: '/giocare/dadi-e-risultati/#playernarr' },
                { label: 'Player', link: '/giocare/dadi-e-risultati/#lancioplayer' },
                { label: 'Narratore', link: '/giocare/dadi-e-risultati/#lancionarr' },
                { label: 'Aumentare/diminuire possibilità', link: '/giocare/dadi-e-risultati/#aumdimposs' },
                { label: 'Facce del dado', link: '/giocare/dadi-e-risultati/#faccedado' },
                { label: 'Risultato del dado', link: '/giocare/dadi-e-risultati/#risultatodado' },
                { label: 'Interpretare gli esiti', link: '/giocare/dadi-e-risultati/#interpretare' },
              ],
            },
            {
              label: 'Meccaniche di gioco',
              items: [
                { label: 'Panoramica', slug: 'giocare/meccaniche-di-gioco' },
                {
                  label: 'Spiare una role',
                  items: [
                    { label: 'Panoramica', link: '/giocare/meccaniche-di-gioco/#spiare' },
                    { label: 'Role pubblica', link: '/giocare/meccaniche-di-gioco/#spiarepubblico' },
                    { label: 'Fallire lo spionaggio', link: '/giocare/meccaniche-di-gioco/#fallirespiare' },
                    { label: 'Accesso Limitato', link: '/giocare/meccaniche-di-gioco/#ficcanasare' },
                    { label: 'Fallire il ficcanasare', link: '/giocare/meccaniche-di-gioco/#fallireficcanasare' },
                  ],
                },
                { label: 'Agire alle spalle', link: '/giocare/meccaniche-di-gioco/#agirespalle' },
                { label: 'PG Colto alle Spalle', link: '/giocare/meccaniche-di-gioco/#coltospalle' },
                { label: 'Intuire una menzogna', link: '/giocare/meccaniche-di-gioco/#intuiremente' },
                {
                  label: 'Rubare, scippare, rapinare',
                  items: [
                    { label: 'Panoramica', link: '/giocare/meccaniche-di-gioco/#rubarescipparerapinare' },
                    { label: 'Rubare', link: '/giocare/meccaniche-di-gioco/#rubare' },
                    { label: 'Fallire il furto', link: '/giocare/meccaniche-di-gioco/#fallirerubare' },
                    { label: 'Scippare', link: '/giocare/meccaniche-di-gioco/#scippare' },
                    { label: 'Fallire lo scippo', link: '/giocare/meccaniche-di-gioco/#fallirescippare' },
                    { label: 'Rapinare', link: '/giocare/meccaniche-di-gioco/#rapinare' },
                  ],
                },
                {
                  label: 'Duello verbale',
                  items: [
                    { label: 'Panoramica', link: '/giocare/meccaniche-di-gioco/#verbale' },
                    { label: 'Affrontare un duello', link: '/giocare/meccaniche-di-gioco/#duelloverbale' },
                    { label: 'Perdere il duello', link: '/giocare/meccaniche-di-gioco/#fallireverbale' },
                  ],
                },
                { label: 'Sensi Magici', link: '/giocare/meccaniche-di-gioco/#capirespecifico' },
              ],
            },
            {
              label: 'Guida agli Scontri',
              items: [
                { label: 'Guida agli Scontri', slug: 'giocare/guida-agli-scontri' },
                { label: 'Regole pratiche', slug: 'giocare/guida-agli-scontri/regole-pratiche' },
                { label: 'Turnazione', slug: 'giocare/guida-agli-scontri/turnazione' },
                { label: 'Destrezza negli Scontri', slug: 'giocare/guida-agli-scontri/destrezza' },
                {
                  label: 'Forza delle Conoscenze',
                  items: [
                    { label: 'Panoramica', slug: 'giocare/guida-agli-scontri/forza-delle-conoscenze' },
                    { label: 'Forza reale per tutti', link: '/giocare/guida-agli-scontri/forza-delle-conoscenze/#forzareale' },
                  ],
                },
              ],
            },
            {
              label: 'Ricerche Casuali',
              items: [
                { label: 'Ricerche Casuali', slug: 'giocare/ricerche-casuali' },
                {
                  label: 'Ricerca Piante',
                  items: [
                    { label: 'Panoramica', slug: 'giocare/ricerche-casuali/ricerca-piante' },
                    { label: 'Ricerca di Piante Magiche', link: '/giocare/ricerche-casuali/ricerca-piante/#ricercapiante' },
                    { label: 'Modalità', link: '/giocare/ricerche-casuali/ricerca-piante/#trovarequalcosa' },
                    { label: 'Come e dove', link: '/giocare/ricerche-casuali/ricerca-piante/#trovarepiante' },
                    { label: 'Il PG trova qualcosa?', link: '/giocare/ricerche-casuali/ricerca-piante/#pgtrova' },
                    { label: 'Cosa trova il PG?', link: '/giocare/ricerche-casuali/ricerca-piante/#cosatrova' },
                    { label: 'Primo incontro', link: '/giocare/ricerche-casuali/ricerca-piante/#primo' },
                    { label: 'Secondo incontro', link: '/giocare/ricerche-casuali/ricerca-piante/#secondo' },
                    { label: 'Terzo incontro', link: '/giocare/ricerche-casuali/ricerca-piante/#terzo' },
                    { label: 'Piante Esotiche', link: '/giocare/ricerche-casuali/ricerca-piante/#pianteesotiche' },
                  ],
                },
                {
                  label: 'Ricerca Creature',
                  items: [
                    { label: 'Panoramica', slug: 'giocare/ricerche-casuali/ricerca-creature' },
                    { label: 'Ricerca di Creature Magiche', link: '/giocare/ricerche-casuali/ricerca-creature/#ricercacreature' },
                    { label: 'Modalità', link: '/giocare/ricerche-casuali/ricerca-creature/#trovarequalcosa' },
                    { label: 'Come e dove', link: '/giocare/ricerche-casuali/ricerca-creature/#trovarecreature' },
                    { label: 'Il PG trova qualcosa?', link: '/giocare/ricerche-casuali/ricerca-creature/#pgtrova' },
                    { label: 'Cosa trova il PG?', link: '/giocare/ricerche-casuali/ricerca-creature/#cosatrova' },
                    { label: 'Primo incontro', link: '/giocare/ricerche-casuali/ricerca-creature/#primo' },
                    { label: 'Secondo incontro', link: '/giocare/ricerche-casuali/ricerca-creature/#secondo' },
                    { label: 'Terzo incontro', link: '/giocare/ricerche-casuali/ricerca-creature/#terzo' },
                    { label: 'Creature Esotiche', link: '/giocare/ricerche-casuali/ricerca-creature/#creatureesotiche' },
                  ],
                },
                {
                  label: 'Ricerca Ingredienti',
                  items: [
                    { label: 'Panoramica', slug: 'giocare/ricerche-casuali/ricerca-ingredienti' },
                    { label: 'Ricerca casuale', link: '/giocare/ricerche-casuali/ricerca-ingredienti/#ricercagredienti' },
                    { label: 'Ingredienti nel Regno Unito', link: '/giocare/ricerche-casuali/ricerca-ingredienti/#ingredientiuk' },
                    { label: 'Aiutante', link: '/giocare/ricerche-casuali/ricerca-ingredienti/#ricerca' },
                  ],
                },
                { label: 'Ricerca Pazienti', slug: 'giocare/ricerche-casuali/ricerca-pazienti' },
                { label: 'Ricerca Missioni', slug: 'giocare/ricerche-casuali/ricerca-missioni' },
                { label: 'Ricerca Maledizioni', slug: 'giocare/ricerche-casuali/ricerca-maledizioni' },
                { label: 'Ricerca Accordi', slug: 'giocare/ricerche-casuali/ricerca-accordi' },
                { label: 'Ricerca Casi', slug: 'giocare/ricerche-casuali/ricerca-casi' },
                { label: 'Ricerca Crimini', slug: 'giocare/ricerche-casuali/ricerca-crimini' },
              ],
            },
            {
              label: 'Azioni Illegali',
              items: [
                { label: 'Compiere Azioni Illegali', slug: 'giocare/azioni-illegali' },
                { label: 'Azioni Illegali Generiche', slug: 'giocare/azioni-illegali/azioni-illegali-generiche' },
                { label: 'Fuga e intervento delle autorità', slug: 'giocare/azioni-illegali/fuga-intervento-autorita' },
                { label: 'Produzione illegale', slug: 'giocare/azioni-illegali/produzione-illegale' },
              ],
            },
          ],
        },
        {
          label: 'Conoscenze e Sapienze',
          items: [
            { label: 'Conoscenze e Sapienze', slug: 'conoscenze-e-sapienze' },
            {
              label: 'Conoscenze',
              items: [
                { label: 'Le Conoscenze', slug: 'conoscenze-e-sapienze/conoscenze' },
                {
                  label: 'Autoconclusive',
                  items: [
                    { label: 'Panoramica', slug: 'conoscenze-e-sapienze/conoscenze/autoconclusive' },
                    { label: 'Cosa sono e come si usano', link: '/conoscenze-e-sapienze/conoscenze/autoconclusive/#cosasono' },
                    { label: 'Elenco Incantesimi', link: '/conoscenze-e-sapienze/conoscenze/autoconclusive/#elencoauto' },
                  ],
                },
                {
                  label: 'Scolastiche',
                  items: [
                    { label: 'Panoramica', slug: 'conoscenze-e-sapienze/conoscenze/scolastiche' },
                    { label: 'Cosa sono e come si usano', link: '/conoscenze-e-sapienze/conoscenze/scolastiche/#cosasono' },
                    { label: 'Elenco delle Conoscenze', link: '/conoscenze-e-sapienze/conoscenze/scolastiche/#elencoscola' },
                  ],
                },
                {
                  label: 'Extra',
                  items: [
                    { label: 'Panoramica', slug: 'conoscenze-e-sapienze/conoscenze/extra' },
                    { label: 'Cosa sono e come si usano', link: '/conoscenze-e-sapienze/conoscenze/extra/#cosasono' },
                    { label: 'Elenco delle Conoscenze', link: '/conoscenze-e-sapienze/conoscenze/extra/#elencoextra' },
                  ],
                },
                {
                  label: 'Avanzate',
                  items: [
                    { label: 'Panoramica', slug: 'conoscenze-e-sapienze/conoscenze/avanzate' },
                    { label: 'Cosa sono e come si usano', link: '/conoscenze-e-sapienze/conoscenze/avanzate/#cosasono' },
                    { label: 'Elenco delle Conoscenze', link: '/conoscenze-e-sapienze/conoscenze/avanzate/#elencoavanz' },
                  ],
                },
                {
                  label: 'Usare le Conoscenze',
                  items: [
                    { label: 'Panoramica', slug: 'conoscenze-e-sapienze/conoscenze/usare-le-conoscenze' },
                    {
                      label: 'Componenti',
                      items: [
                        { label: 'Panoramica', link: '/conoscenze-e-sapienze/conoscenze/usare-le-conoscenze/#componenti' },
                        { label: 'Incantesimi', link: '/conoscenze-e-sapienze/conoscenze/usare-le-conoscenze/#incantesimi' },
                        { label: 'Pozioni', link: '/conoscenze-e-sapienze/conoscenze/usare-le-conoscenze/#pozioni' },
                        { label: 'Creature Magiche', link: '/conoscenze-e-sapienze/conoscenze/usare-le-conoscenze/#creature' },
                        { label: 'Piante Magiche', link: '/conoscenze-e-sapienze/conoscenze/usare-le-conoscenze/#piante' },
                        { label: 'Altre Conoscenze', link: '/conoscenze-e-sapienze/conoscenze/usare-le-conoscenze/#altre' },
                      ],
                    },
                    {
                      label: 'L’uso delle Conoscenze',
                      items: [
                        { label: 'Panoramica', link: '/conoscenze-e-sapienze/conoscenze/usare-le-conoscenze/#usoconoscenze' },
                        { label: 'Adulti vs Studenti', link: '/conoscenze-e-sapienze/conoscenze/usare-le-conoscenze/#advsstud' },
                        { label: 'Conoscenze Scolastiche', link: '/conoscenze-e-sapienze/conoscenze/usare-le-conoscenze/#conscol' },
                        { label: 'Conoscenze Extra', link: '/conoscenze-e-sapienze/conoscenze/usare-le-conoscenze/#conex' },
                        { label: 'Conoscenze Avanzate', link: '/conoscenze-e-sapienze/conoscenze/usare-le-conoscenze/#conava' },
                        { label: 'Narrare gli esiti', link: '/conoscenze-e-sapienze/conoscenze/usare-le-conoscenze/#narraesito' },
                      ],
                    },
                    {
                      label: 'Annullare gli effetti',
                      items: [
                        { label: 'Panoramica', link: '/conoscenze-e-sapienze/conoscenze/usare-le-conoscenze/#annullare' },
                        { label: 'Annullare un Incantesimo', link: '/conoscenze-e-sapienze/conoscenze/usare-le-conoscenze/#anninc' },
                        { label: 'Annullare una Pozione', link: '/conoscenze-e-sapienze/conoscenze/usare-le-conoscenze/#annpoz' },
                        { label: 'Resistenza mentale', link: '/conoscenze-e-sapienze/conoscenze/usare-le-conoscenze/#resistenze' },
                      ],
                    },
                    { label: 'Incantesimi non verbali', link: '/conoscenze-e-sapienze/conoscenze/usare-le-conoscenze/#nonverb' },
                  ],
                },
                {
                  label: 'Ottenere nuove Conoscenze',
                  items: [
                    { label: 'Panoramica', slug: 'conoscenze-e-sapienze/conoscenze/ottenere-nuove-conoscenze' },
                    { label: 'Acquistare Conoscenze', link: '/conoscenze-e-sapienze/conoscenze/ottenere-nuove-conoscenze/#acquistare' },
                    {
                      label: 'Apprendere Conoscenze',
                      items: [
                        { label: 'Panoramica', link: '/conoscenze-e-sapienze/conoscenze/ottenere-nuove-conoscenze/#apprendere' },
                        { label: 'Da un altro PG', link: '/conoscenze-e-sapienze/conoscenze/ottenere-nuove-conoscenze/#apprenderePG' },
                        { label: 'Da un PNG', link: '/conoscenze-e-sapienze/conoscenze/ottenere-nuove-conoscenze/#apprenderePNG' },
                      ],
                    },
                  ],
                },
                {
                  label: 'Creare una Conoscenza',
                  items: [
                    { label: 'Panoramica', slug: 'conoscenze-e-sapienze/conoscenze/creare-conoscenze' },
                    { label: 'Creare un Incantesimo', link: '/conoscenze-e-sapienze/conoscenze/creare-conoscenze/#creareinca' },
                    { label: 'Creare una Pozione', link: '/conoscenze-e-sapienze/conoscenze/creare-conoscenze/#crearepoz' },
                    { label: 'Creare un Oggetto Magico', link: '/conoscenze-e-sapienze/conoscenze/creare-conoscenze/#creareoggettinuovi' },
                  ],
                },
                { label: 'Glossario', slug: 'conoscenze-e-sapienze/conoscenze/glossario' },
              ],
            },
            {
              label: 'Sapienze',
              items: [
                { label: 'Le Sapienze', slug: 'conoscenze-e-sapienze/sapienze' },
                { label: 'Sapienze Magiche', slug: 'conoscenze-e-sapienze/sapienze/magiche' },
                { label: 'Sapienze Fisiche', slug: 'conoscenze-e-sapienze/sapienze/fisiche' },
                { label: 'Sapienze Sociali', slug: 'conoscenze-e-sapienze/sapienze/sociali' },
                { label: 'Crescita a Debito', slug: 'conoscenze-e-sapienze/sapienze/crescita-a-debito' },
              ],
            },
            {
              label: 'Maestrie',
              items: [
                { label: 'Regole e funzionamento', slug: 'conoscenze-e-sapienze/maestrie' },
                { label: 'Catalogo delle 36 Maestrie', link: '/conoscenze-e-sapienze/maestrie/catalogo/' },
              ],
            },
          ],
        },
        {
          label: 'Manuali',
          items: [
            { label: 'Manuali', slug: 'manuali' },
            {
              label: 'Manuale degli Incantesimi',
              items: [
                { label: 'Catalogo dei 212 Incantesimi', link: '/manuali/incantesimi/' },
                { label: 'Guida e note generali', slug: 'manuali/incantesimi-guida' },
              ],
            },
            {
              label: 'Altre Conoscenze Scolastiche',
              items: [
                { label: 'Panoramica', slug: 'manuali/conoscenze-scolastiche' },
                { label: 'Catalogo delle 15 Conoscenze', link: '/manuali/conoscenze-scolastiche/conoscenze/' },
              ],
            },
            {
              label: 'Divinazione',
              items: [
                { label: 'Guida alla Divinazione', slug: 'manuali/divinazione' },
                { label: 'Catalogo delle 43 Tecniche', link: '/manuali/divinazione/tecniche/' },
              ],
            },
            {
              label: 'Medimagia',
              items: [
                { label: 'Guida e Tecniche', slug: 'manuali/medimagia' },
                { label: 'Sintomatologia di Base', slug: 'manuali/medimagia/sintomatologia' },
                { label: 'Malattie Magiche — 44 schede', link: '/manuali/medimagia/malattie/' },
                { label: 'Lesioni da Incantesimi/Pozioni', slug: 'manuali/medimagia/lesioni-incantesimi-pozioni' },
                { label: 'Incidenti da Manufatti', slug: 'manuali/medimagia/incidenti-manufatti' },
                { label: 'Avvelenamenti', slug: 'manuali/medimagia/avvelenamenti' },
                { label: 'Ferite da Creature e Piante', slug: 'manuali/medimagia/ferite-creature-piante' },
              ],
            },
            {
              label: 'Erbologia',
              items: [
                { label: 'Guida completa', slug: 'manuali/erbologia' },
                { label: 'Tecniche e Incantesimi', slug: 'manuali/erbologia/tecniche' },
                { label: 'Come leggere l’Erbario', slug: 'manuali/erbologia/erbario-guida' },
                { label: 'Erbario — 92 Piante', link: '/manuali/erbologia/erbario/' },
              ],
            },
            {
              label: 'Magizoologia',
              items: [
                { label: 'Introduzione', slug: 'manuali/magizoologia' },
                { label: 'Fiducia', slug: 'manuali/magizoologia/fiducia' },
                { label: 'Domesticazione', slug: 'manuali/magizoologia/domesticazione' },
                { label: 'Bestiario', link: '/manuali/magizoologia/bestiario/' },
              ],
            },
            {
              label: 'Pozionistica',
              items: [
                { label: 'Guida completa', slug: 'manuali/pozionistica' },
                { label: 'Pozionario — 136 Pozioni', link: '/manuali/pozionistica/pozionario/' },
              ],
            },
            {
              label: 'Tracciatura',
              items: [
                { label: 'Guida alla Tracciatura', slug: 'manuali/tracciatura' },
                { label: 'I Sensi Magici', slug: 'manuali/tracciatura/sensi-magici' },
                { label: 'Spezzamento', slug: 'manuali/tracciatura/spezzamento' },
                { label: 'Esorcismo', slug: 'manuali/tracciatura/esorcismo' },
              ],
            },
            {
              label: 'Ingredienti',
              items: [
                { label: 'Guida agli Ingredienti', slug: 'manuali/ingredienti-guida' },
                { label: 'Glossario — 317 Ingredienti', link: '/manuali/ingredienti/' },
              ],
            },
          ],
        },
        {
          label: 'Mondo Magico',
          items: [
            { label: 'Mondo Magico', slug: 'mondo-magico' },
            {
              label: 'Trasporti Magici',
              items: [
                { label: 'Introduzione', slug: 'mondo-magico/trasporti' },
                { label: 'Carrozza Volante', slug: 'mondo-magico/trasporti/carrozza-volante' },
                { label: 'Cavalcata o Volo su Creatura', slug: 'mondo-magico/trasporti/cavalcata-volo-creatura' },
                { label: 'Metropolvere', slug: 'mondo-magico/trasporti/metropolvere' },
                { label: 'Nottetempo', slug: 'mondo-magico/trasporti/nottetempo' },
                { label: 'Passaporta', slug: 'mondo-magico/trasporti/passaporta' },
                { label: 'Scope Volanti', slug: 'mondo-magico/trasporti/scope-volanti' },
                { label: 'Smaterializzazione', slug: 'mondo-magico/trasporti/smaterializzazione' },
                { label: 'Vascello Magico', slug: 'mondo-magico/trasporti/vascello-magico' },
                { label: 'Veicoli Volanti', slug: 'mondo-magico/trasporti/veicoli-volanti' },
              ],
            },
            {
              label: 'Quidditch',
              items: [
                { label: 'Introduzione', slug: 'mondo-magico/quidditch' },
                { label: 'Quidditch ad Hogwarts', slug: 'mondo-magico/quidditch/quidditch-ad-hogwarts' },
                { label: 'Quidditch tra PG Adulti', slug: 'mondo-magico/quidditch/quidditch-tra-pg-adulti' },
                { label: 'Come si gioca', slug: 'mondo-magico/quidditch/come-si-gioca' },
                { label: 'Partite da background', slug: 'mondo-magico/quidditch/partite-background' },
              ],
            },
            { label: 'Giochi Magici', slug: 'mondo-magico/giochi-magici' },
            {
              label: 'Commercio Magico',
              items: [
                { label: 'Introduzione', slug: 'mondo-magico/commercio' },
                { label: 'Acquistare Merci Magiche', slug: 'mondo-magico/commercio/acquistare-merci-magiche' },
                { label: 'Vendere Merci Magiche', slug: 'mondo-magico/commercio/vendere-merci-magiche' },
                { label: 'La Gringott', slug: 'mondo-magico/commercio/gringott' },
                { label: 'I Negozi', slug: 'mondo-magico/commercio/negozi' },
                { label: 'Oggetti', link: '/mondo-magico/commercio/oggetti/' },
              ],
            },
            { label: 'Medimagia', slug: 'mondo-magico/medimagia' },
            {
              label: 'Leggi Magiche',
              items: [
                { label: 'Guida completa', slug: 'mondo-magico/leggi-magiche' },
                { label: 'Documenti normativi', link: '/mondo-magico/leggi/' },
              ],
            },
            {
              label: 'Magisprudenza',
              items: [
                { label: 'La Magisprudenza', slug: 'mondo-magico/magisprudenza' },
                { label: 'Difensori e Opportunità di Gioco', slug: 'mondo-magico/magisprudenza/difensori' },
                { label: 'Iniziare una Causa ONGame', slug: 'mondo-magico/magisprudenza/iniziare-una-causa-ongame' },
                { label: 'Struttura del Patteggiamento', slug: 'mondo-magico/magisprudenza/patteggiamento' },
                { label: 'Struttura del Processo', slug: 'mondo-magico/magisprudenza/processo' },
              ],
            },
            {
              label: 'Wizengamot',
              items: [
                { label: 'Il Wizengamot', slug: 'mondo-magico/wizengamot' },
                { label: 'Sedute Straordinarie', slug: 'mondo-magico/wizengamot/sedute-straordinarie' },
                { label: 'Partecipare ad un Processo', slug: 'mondo-magico/wizengamot/partecipare-ad-un-processo' },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
