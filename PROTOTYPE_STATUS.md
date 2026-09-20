# Stato prototipo FELIX FELICIS

## Implementato

- Astro + Starlight configurati per GitHub Pages.
- Pages CMS configurato per pagine/regole e i primi Manuali strutturati.
- Creazione e modifica dei contenuti predisposte nel CMS.
- Pagina libera disponibile per nuovi contenuti non ancora strutturati.
- Maestrie inserite come primo sistema nativo del nuovo sito, sopra le Sapienze, senza inventarne ancora le meccaniche.
- Bestiario generato automaticamente con filtri e URL condivisibili.
- Erbario generato automaticamente con filtri per Classificazione, Ostilità, Grado di Conoscenza, Anno scolastico ed Esotica.
- Pozionario generato automaticamente con filtri e URL condivisibili.
- Manuale degli Incantesimi generato automaticamente con filtri dedicati.
- Schede dinamiche Creature, Piante, Malattie, Ingredienti, Pozioni, Incantesimi, Documenti normativi e Articoli.
- Ricerca globale FELIX personalizzata sopra Pagefind con alias pesati e filtro per tipo.
- Backlink automatici fra contenuti strutturati e pagine regolamentari.
- Campione Magizoologia: Nundu, Nundacea e Ingredienti collegati.
- Campione Pozionistica: Vaccino AntiNundux + e Kappaccino +.
- Campione Erbologia: Artemisia, Cespuglio Spinoso, Geranio Zannuto + pagine Riconoscimento, Interazione, Trattamento, Coltivazione e Riproduzione.
- Catene relazionali di prova:
  - Artemisia → Foglia di Artemisia → Kappaccino + → Kappalitosi;
  - Cespuglio Spinoso / Geranio Zannuto → Ingredienti → Vaccino AntiNundux + → Nundacea.
- Campione Manuale degli Incantesimi con controincantesimo e backlink inverso.
- Primo prototipo del modello giuridico Documento normativo → Articoli.
- Mondo Magico esteso con Trasporti Magici: landing + Metropolvere, Passaporta, Scope Volanti e Smaterializzazione.
- Quidditch esteso con landing, Quidditch ad Hogwarts, Quidditch tra PG Adulti e Come si gioca.
- Distinzione PG Studente / PG Adulto testata anche in una sezione del Mondo Magico.
- Il Personaggio esteso con percorsi separati PG Studente / PG Adulto, pagine di creazione dedicate e applicabilità visibile.
- Razze introdotte come collection strutturata sotto Il Personaggio, con Regole sulle Razze + Elenco delle Razze.
- Campione Razze: Mezzogigante o Mezzagigante, Mezzelfo o Mezzelfa, Mezzoveela o Mezzaveela, Metamorfomagus, Lupi Mannari.
- Ricerca globale estesa con filtro per PG Studente / PG Adulto e tipo Razza.
- Matrice/stato di migrazione nei contenuti del campione.
- Il Personaggio esteso con Parametri Magici, Fisici e Sociali, con applicabilità comune e differenze Studente/Adulto esposte nel testo.
- Conoscenze e Sapienze esteso con Conoscenze Autoconclusive, Scolastiche, Extra e Avanzate; pagina Usare le Conoscenze.
- Sapienze correttamente marcate come sistema dei PG Adulti, con pagine Magiche, Fisiche e Sociali.
- Maestrie mantenute come nuova categoria sopra le Sapienze, ancora priva di meccaniche inventate.
- Giocare esteso con landing operativa e pagine dedicate a Le Role, Free Role, Role Masterate, Le Azioni e Dadi e risultati.
- Guida agli Scontri introdotta come mini-manuale con Regole pratiche, Turnazione, Destrezza negli Scontri e Forza delle Conoscenze negli Scontri.
- Turnazione testata con la terminologia attuale: Spostamento, Azione principale, Azione Bonus, Interazione e Reazione.
- Collegamenti trasversali testati da Giocare verso Parametri e Conoscenze senza duplicare le relative fonti canoniche.
- Ricerche Casuali introdotte come mini-manuale con tutte e nove le destinazioni: Piante, Creature, Ingredienti, Pazienti, Missioni, Maledizioni, Accordi, Casi e Crimini.
- Ricerca Creature e Ricerca Piante collegate ai rispettivi Manuali senza duplicare le schede di specie.
- Ricerca Crimini usata come stress-test per distinguere scoperta/identificazione e per rendere visibile il nodo con la procedura generale delle Azioni Illegali.
- Compiere Azioni Illegali introdotto con Azioni Illegali Generiche, Fuga/intervento delle autorità e Produzione illegale.
- Il prototipo NON somma automaticamente procedure specifiche e tiro generico: il rapporto resta una revisione Staff esplicitamente segnalata.

## Decisioni mantenute

- Fabbricazione ONGame degli Oggetti esclusa dalla migrazione.
- Schede/catalogo PNG fuori dalla migrazione V1 e lasciati sul sito attuale.
- Il testo completo resta editoriale; i campi strutturati servono a ricerca, filtri e relazioni.
- Ogni relazione ha una sola fonte canonica; il lato inverso viene generato automaticamente.

## Da verificare con una build reale su GitHub

L'ambiente di generazione non riesce a completare `npm install` verso il registry npm. La prima build end-to-end verrà quindi verificata direttamente tramite GitHub Actions/GitHub Pages.

Da verificare in quella fase:

- build Astro/Starlight;
- indicizzazione Pagefind;
- filtri in browser;
- autenticazione Pages CMS;
- modifica CMS → commit GitHub;
- deploy GitHub Actions → GitHub Pages.


## Mondo Magico — Commercio e ordinamento giuridico

Aggiunti al prototipo: Commercio Magico, Acquistare/Vendere Merci, Gringott, Negozi, primo Catalogo Oggetti, Carta/Codice/Corollario, Magisprudenza e Wizengamot. Gli Oggetti testano anche varianti di vendita per più Negozi. La Fabbricazione ONGame resta esclusa.

## Incorporamento nel forum

Fissato il requisito **full viewport**: il Regolamento non verrà inserito nel vecchio foglio/iframe da 700px. Il sito resta responsive e usa l’intera dimensione assegnata dall’iframe. È stato aggiunto `FORUM_EMBED.md` con il contratto di integrazione da adattare all’HTML/CSS reale del forum.

## GitHub readiness

Il prototipo è ora pronto per il **primo caricamento e primo build-test su GitHub**.

- Node target: 24 (`.nvmrc`).
- Deploy: GitHub Actions → GitHub Pages.
- Il primo workflow usa `npm install`, quindi non richiede ancora `package-lock.json`.
- Dopo la prima build riuscita verrà generato e versionato il lockfile e il workflow passerà a `npm ci`.
- `scripts/preflight.mjs` verifica prima della build: UUID mancanti/duplicati, riferimenti UUID inesistenti e slug duplicati nella stessa collection.
- Il preflight attuale rileva 122 file di contenuto e 122 UUID univoci senza errori.
- Il prototipo include `public/robots.txt` con `Disallow: /` finché non sarà pronto per il lancio pubblico.
- Il test dell'iframe full-viewport su ForumFree resta una verifica obbligatoria dopo il primo deploy.
