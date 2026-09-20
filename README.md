# FELIX FELICIS — prototipo sito-libro

Prototipo tecnico del nuovo regolamento consultabile di FELIX FELICIS.

## Stack candidato

- GitHub / GitHub Pages
- Astro
- Starlight personalizzato
- Pages CMS
- Pagefind

## Obiettivi verificati dal prototipo

- separare contenuti e codice;
- modificare e creare contenuti tramite CMS senza HTML/YAML;
- mantenere UUID stabili e URL leggibili;
- generare cataloghi automaticamente;
- ricerca globale con alias;
- filtri specifici per ciascun Manuale;
- relazioni e backlink automatici;
- pagine libere per sistemi futuri non ancora modellati;
- provenienza della migrazione;
- compatibilità con GitHub Pages.

## Campioni verticali

### Magizoologia / Medimagia
Nundu → Nundacea e Ingredienti.

### Erbologia / Ingredienti / Pozionistica / Medimagia
Artemisia → Foglia di Artemisia → Kappaccino + → Kappalitosi.

Cespuglio Spinoso e Geranio Zannuto → Ingredienti → Vaccino AntiNundux + → Nundacea.

### Manuale degli Incantesimi
Più famiglie e valori eterogenei, compresa una relazione di controincantesimo.

### Mondo Magico
Primo modello Documento normativo → Articolo con stato ONGame.

## Test

Il test locale è rimandato. La prima esecuzione reale verrà effettuata su GitHub con GitHub Actions e GitHub Pages.

### Mondo Magico — Trasporti e Quidditch
Trasporti Magici con prime pagine dedicate a Metropolvere, Passaporta, Scope Volanti e Smaterializzazione.

Quidditch con distinzione fra Quidditch ad Hogwarts, Quidditch tra PG Adulti e nucleo comune di Come si gioca.


## Il Personaggio

Il prototipo include ora percorsi distinti per **PG Studente** e **PG Adulto**, con applicabilità visibile nelle pagine e filtrabile nella ricerca globale. La sezione **Razze** contiene le Regole sulle Razze e l'**Elenco delle Razze**, generato automaticamente dalla collection `races`.

I contenuti PG Studente/Adulto e le schede Razza sono estratti di prototipo: la migrazione definitiva conserverà integralmente i documenti sorgente.

## Parametri, Conoscenze, Sapienze e Maestrie

Il prototipo include ora i tre gruppi dei **Parametri** (Magici, Fisici e Sociali), le quattro tipologie di **Conoscenze** (Autoconclusive, Scolastiche, Extra, Avanzate) e le **Sapienze Magiche, Fisiche e Sociali**.

L'applicabilità è esplicita: le Sapienze del regolamento attuale riguardano i **PG Adulti**, mentre Parametri e Conoscenze hanno percorsi comuni con differenze interne fra Studente e Adulto.

**Maestrie** resta una nuova aggiunta nativa: viene collocata sopra le Sapienze, ma senza introdurre meccaniche non ancora progettate.

## Giocare — Role, Azioni, dadi e Scontri

Il prototipo include ora un primo percorso operativo completo: **Le Role** con Free Role e Role Masterate, **Le Azioni**, **Dadi e risultati** e la **Guida agli Scontri** con Regole pratiche, Turnazione, Destrezza e Forza delle Conoscenze.

Questo blocco serve a testare consultazione rapida durante una Role e collegamenti trasversali verso Parametri e Conoscenze. Tutte le pagine restano estratti di prototipo: la migrazione definitiva conserverà integralmente esempi, eccezioni e procedure delle fonti attuali.

## Stress-test Ricerche Casuali e Azioni Illegali

Il prototipo include ora tutte e nove le Ricerche come destinazioni navigabili e una prima struttura di Compiere Azioni Illegali. Il rapporto fra procedure specifiche di scoperta e procedura generale è volutamente evidenziato come nodo di revisione, senza introdurre una regola nuova.


## Incorporamento nel forum

Il prototipo è progettato full-viewport e responsive. Vedi `FORUM_EMBED.md` per il contratto dell’iframe nella pagina personalizzata del forum.

## Stato GitHub-ready

Il prototipo è predisposto per il primo caricamento su GitHub anche senza Node/npm installati sul PC dello Staff.

File principali aggiunti per il primo deploy:

- `.github/workflows/deploy.yml` — installazione, preflight, build e deploy GitHub Pages.
- `.github/workflows/validate.yml` — build di controllo per future pull request.
- `.nvmrc` — Node.js 24.
- `scripts/preflight.mjs` — controllo automatico di UUID, riferimenti e slug.
- `GITHUB_FIRST_UPLOAD.md` — procedura del primo caricamento.
- `GITHUB_BUILD_CHECKLIST.md` — checklist della prima build reale.
- `public/robots.txt` — disabilita l'indicizzazione ordinaria durante il prototipo.

Il primo deploy GitHub sarà anche il primo test completo Astro/Starlight perché l'ambiente locale usato per preparare il pacchetto non riesce a completare `npm install` verso il registry npm.
