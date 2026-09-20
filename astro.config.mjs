import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const [githubOwner, githubRepo] = (process.env.GITHUB_REPOSITORY || '/').split('/');
const githubUserSite = githubOwner && githubRepo === `${githubOwner}.github.io`;
const site = process.env.SITE_URL || (githubOwner ? `https://${githubOwner}.github.io` : 'https://example.github.io');
const base = process.env.BASE_PATH || (githubOwner && githubRepo && !githubUserSite ? `/${githubRepo}` : '/');

export default defineConfig({
  site,
  base,
  integrations: [
    starlight({
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
            { label: 'Cosa siamo', slug: 'inizia-da-qui/cosa-siamo' },
            { label: 'Regole Generali', slug: 'inizia-da-qui/regole-generali' },
            { label: 'Valute di Gioco', slug: 'inizia-da-qui/valute' },
            { label: 'Allineamenti', slug: 'inizia-da-qui/allineamenti' },
            { label: 'Popolometro', slug: 'inizia-da-qui/popolometro' },
            { label: 'Personaggi Non Giocanti', slug: 'inizia-da-qui/png' },
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
                { label: 'Studiare ad Hogwarts', slug: 'il-personaggio/pg-studente/studiare-ad-hogwarts' },
                { label: 'Coppa delle Case', slug: 'il-personaggio/pg-studente/coppa-delle-case' },
                { label: 'Modalità di gioco', slug: 'il-personaggio/pg-studente/modalita-di-gioco' },
              ],
            },
            {
              label: 'PG Adulto',
              items: [
                { label: 'Il gioco dei PG Adulti', slug: 'il-personaggio/pg-adulto' },
                { label: 'Creare un PG Adulto', slug: 'il-personaggio/pg-adulto/creare-un-pg-adulto' },
                { label: 'Lavorare nel Mondo Magico', slug: 'il-personaggio/pg-adulto/lavorare' },
                { label: 'Modalità di gioco', slug: 'il-personaggio/pg-adulto/modalita-di-gioco' },
              ],
            },
            { label: 'Razze', link: '/il-personaggio/razze/' },
            { label: 'Bagaglio e Oggetti', slug: 'il-personaggio/bagaglio' },
            {
              label: 'Parametri',
              items: [
                { label: 'Parametri', slug: 'il-personaggio/parametri' },
                { label: 'Parametri Magici', slug: 'il-personaggio/parametri/parametri-magici' },
                { label: 'Parametri Fisici', slug: 'il-personaggio/parametri/parametri-fisici' },
                { label: 'Parametri Sociali', slug: 'il-personaggio/parametri/parametri-sociali' },
              ],
            },
          ],
        },
        {
          label: 'Giocare',
          items: [
            { label: 'Giocare', slug: 'giocare' },
            { label: 'Modalità di Gioco', slug: 'giocare/modalita-di-gioco' },
            {
              label: 'Le Role',
              items: [
                { label: 'Le Role', slug: 'giocare/le-role' },
                { label: 'Free Role', slug: 'giocare/le-role/free-role' },
                { label: 'Role Masterate', slug: 'giocare/le-role/role-masterate' },
              ],
            },
            { label: 'Le Azioni', slug: 'giocare/le-azioni' },
            { label: 'Dadi e risultati', slug: 'giocare/dadi-e-risultati' },
            { label: 'Meccaniche di gioco', slug: 'giocare/meccaniche-di-gioco' },
            {
              label: 'Guida agli Scontri',
              items: [
                { label: 'Guida agli Scontri', slug: 'giocare/guida-agli-scontri' },
                { label: 'Regole pratiche', slug: 'giocare/guida-agli-scontri/regole-pratiche' },
                { label: 'Turnazione', slug: 'giocare/guida-agli-scontri/turnazione' },
                { label: 'Destrezza negli Scontri', slug: 'giocare/guida-agli-scontri/destrezza' },
                { label: 'Forza delle Conoscenze', slug: 'giocare/guida-agli-scontri/forza-delle-conoscenze' },
              ],
            },
            {
              label: 'Ricerche Casuali',
              items: [
                { label: 'Ricerche Casuali', slug: 'giocare/ricerche-casuali' },
                { label: 'Ricerca Piante', slug: 'giocare/ricerche-casuali/ricerca-piante' },
                { label: 'Ricerca Creature', slug: 'giocare/ricerche-casuali/ricerca-creature' },
                { label: 'Ricerca Ingredienti', slug: 'giocare/ricerche-casuali/ricerca-ingredienti' },
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
                { label: 'Autoconclusive', slug: 'conoscenze-e-sapienze/conoscenze/autoconclusive' },
                { label: 'Scolastiche', slug: 'conoscenze-e-sapienze/conoscenze/scolastiche' },
                { label: 'Extra', slug: 'conoscenze-e-sapienze/conoscenze/extra' },
                { label: 'Avanzate', slug: 'conoscenze-e-sapienze/conoscenze/avanzate' },
                { label: 'Usare le Conoscenze', slug: 'conoscenze-e-sapienze/conoscenze/usare-le-conoscenze' },
                { label: 'Ottenere nuove Conoscenze', slug: 'conoscenze-e-sapienze/conoscenze/ottenere-nuove-conoscenze' },
                { label: 'Creare nuove Conoscenze', slug: 'conoscenze-e-sapienze/conoscenze/creare-conoscenze' },
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
            { label: 'Maestrie', slug: 'conoscenze-e-sapienze/maestrie' },
          ],
        },
        {
          label: 'Manuali',
          items: [
            { label: 'Manuali', slug: 'manuali' },
            { label: 'Manuale degli Incantesimi', link: '/manuali/incantesimi/' },
            { label: 'Altre Conoscenze Scolastiche', slug: 'manuali/conoscenze-scolastiche' },
            { label: 'Divinazione', slug: 'manuali/divinazione' },
            {
              label: 'Medimagia',
              items: [
                { label: 'Enciclopedia Medimagica', slug: 'manuali/medimagia' },
                { label: 'Malattie Magiche', link: '/manuali/medimagia/malattie/' },
              ],
            },
            {
              label: 'Erbologia',
              items: [
                { label: 'Introduzione', slug: 'manuali/erbologia' },
                { label: 'Erbario', link: '/manuali/erbologia/erbario/' },
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
                { label: 'Introduzione', slug: 'manuali/pozionistica' },
                { label: 'Pozionario', link: '/manuali/pozionistica/pozionario/' },
              ],
            },
            { label: 'Tracciatura', slug: 'manuali/tracciatura' },
            { label: 'Ingredienti', link: '/manuali/ingredienti/' },
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
                { label: 'Metropolvere', slug: 'mondo-magico/trasporti/metropolvere' },
                { label: 'Passaporta', slug: 'mondo-magico/trasporti/passaporta' },
                { label: 'Scope Volanti', slug: 'mondo-magico/trasporti/scope-volanti' },
                { label: 'Smaterializzazione', slug: 'mondo-magico/trasporti/smaterializzazione' },
              ],
            },
            {
              label: 'Quidditch',
              items: [
                { label: 'Introduzione', slug: 'mondo-magico/quidditch' },
                { label: 'Quidditch ad Hogwarts', slug: 'mondo-magico/quidditch/quidditch-ad-hogwarts' },
                { label: 'Quidditch tra PG Adulti', slug: 'mondo-magico/quidditch/quidditch-tra-pg-adulti' },
                { label: 'Come si gioca', slug: 'mondo-magico/quidditch/come-si-gioca' },
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
            { label: 'Leggi Magiche', link: '/mondo-magico/leggi/' },
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
