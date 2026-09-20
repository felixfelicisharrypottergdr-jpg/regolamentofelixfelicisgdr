# Primo caricamento su GitHub — FELIX FELICIS

Questo pacchetto è predisposto affinché **GitHub faccia da solo il primo test reale**: installazione delle dipendenze, controlli di integrità, build Astro e pubblicazione su GitHub Pages.

## Prima di iniziare

Non serve avere Node o npm installati sul proprio PC.

Per il primo repository suggerisco il nome:

`felix-felicis-regolamento`

Il codice calcola automaticamente il `base` di GitHub Pages dal nome reale del repository, quindi non è obbligatorio usare esattamente questo nome.

> **Visibilità del repository:** con GitHub Free, GitHub Pages è disponibile per repository pubblici. I repository privati con Pages richiedono un piano GitHub che lo supporti. Durante il prototipo è presente `public/robots.txt` con `Disallow: /` per scoraggiare l'indicizzazione dei motori di ricerca; il repository pubblico resta comunque visibile a chi ne conosce l'indirizzo.

## Creazione del repository

1. Accedi a GitHub.
2. Crea un nuovo repository.
3. Scegli il nome (es. `felix-felicis-regolamento`).
4. Usa `main` come branch predefinito.
5. **Non aggiungere automaticamente README, .gitignore o License**, perché sono già presenti/gestiti nel pacchetto o verranno scelti in seguito.
6. Carica **il contenuto della cartella del prototipo**, non lo ZIP come unico file. Devono arrivare su GitHub anche `.github/`, `.pages.yml`, `.gitignore` e `.nvmrc`.

Se il caricamento dal browser risultasse scomodo per il numero di file, non modificare il progetto: appena sarà disponibile il collegamento GitHub a ChatGPT possiamo fare il primo caricamento direttamente nel repository.

## Abilitare GitHub Pages

Dopo che i file sono nel repository:

1. `Settings`
2. `Pages`
3. sotto `Build and deployment`, scegli **GitHub Actions** come Source.

Il workflow `.github/workflows/deploy.yml` parte automaticamente a ogni push su `main` e può anche essere lanciato manualmente da `Actions`.

## Cosa fa il primo workflow

GitHub:

1. scarica il repository;
2. prepara Node.js 24;
3. installa le dipendenze con `npm install`;
4. esegue `npm run preflight`;
5. costruisce il sito con `npm run build`;
6. carica `dist/` come artifact GitHub Pages;
7. pubblica il sito.

Il workflow usa intenzionalmente `npm install`, non `npm ci`, perché in questa fase non abbiamo ancora un `package-lock.json` generato da un'installazione npm completa. Dopo il primo deploy riuscito genereremo e committeremo il lockfile, poi passeremo a `npm ci` per build completamente riproducibili.

## Primo risultato atteso

Per un repository chiamato `felix-felicis-regolamento`, GitHub Pages userà normalmente un indirizzo simile a:

`https://NOMEUTENTE.github.io/felix-felicis-regolamento/`

La configurazione Astro riconosce automaticamente owner e nome repository nell'ambiente GitHub Actions.

## Se il workflow diventa rosso

Non tentare correzioni casuali.

Apri:

`Actions → Build and deploy FELIX FELICIS to GitHub Pages → run fallita → build`

Copia il testo dell'errore (o manda screenshot/log a ChatGPT). Il primo caricamento serve apposta a individuare eventuali incompatibilità reali non verificabili offline.

## Dopo il primo deploy riuscito

Verificheremo nell'ordine:

- Home e navigazione;
- pagine Regola;
- Bestiario/Erbario/Pozionario/Incantesimi;
- filtri;
- ricerca globale Pagefind;
- relazioni e backlink;
- `base` corretto nelle URL;
- visualizzazione desktop e mobile;
- apertura del sito dentro un iframe full-viewport su ForumFree;
- Pages CMS e modifica Staff;
- creazione di un nuovo contenuto.

## Prima del lancio pubblico definitivo

`public/robots.txt` blocca al momento la normale indicizzazione. Prima del vero lancio verrà modificato/rimosso.
