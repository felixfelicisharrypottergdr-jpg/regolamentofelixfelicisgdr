# Audit editoriale e funzionale — FELIX FELICIS

Data di apertura audit: 22 settembre 2026.

Questo documento è un registro vivo. Le anomalie **funzionali e di codice** vengono corrette automaticamente quando la soluzione è univoca; le anomalie **editoriali o regolamentari** vengono registrate e lasciate intatte finché non viene scelta la versione canonica.

## P0 — anomalie funzionali certe

### Route documentali duplicate

La build segnalava tre coppie di documenti con lo stesso slug:

- `il-personaggio/pg-studente/coppa-delle-case`
- `il-personaggio/pg-studente/modalita-di-gioco`
- `il-personaggio/pg-studente/studiare-ad-hogwarts`

In ogni coppia esisteva una pagina revisionata e un vecchio `index.md` di prototipo con testo futuro (“questa sezione ospiterà/raccoglierà…”). I tre residui di prototipo vengono eliminati nell'audit tecnico.

### Validazione dei link

Il precedente preflight verificava UUID e slug delle collection strutturate, ma non:

- collisioni fra route dei documenti Starlight;
- link Markdown interni verso route inesistenti;
- dipendenze esterne verso ForumFree.

Lo script `scripts/audit-content.mjs` viene esteso per costruire l'inventario delle route reali (documenti, pagine Astro e collection strutturate) e fallire la pipeline in presenza di collisioni o link interni inesistenti.

I link Markdown che iniziano con `/` non vengono considerati automaticamente errati: `remarkFelixBaseLinks` li riscrive già con il `base` GitHub Pages durante la build.

### Applicabilità delle Razze nella ricerca

Le schede Razza pubblicavano nel metadata Pagefind entrambe le applicabilità (“PG Studente” e “PG Adulto”) anche quando il dato strutturato della singola Razza ne prevedeva una sola. Il filtro viene collegato al valore reale di `entry.data.applicability`.

## P0 — anomalie editoriali da NON correggere automaticamente

### Canonicità duplicata fra pagine monolitiche e sottopagine

Sono presenti sistemi in cui la regola completa vive ancora nella pagina principale, mentre la navigazione espone anche sottopagine abbreviate o di prototipo. Questo crea due versioni concorrenti della stessa regola.

Casi già confermati:

- **Magizoologia**: la pagina principale contiene la Domesticazione completa; `manuali/magizoologia/domesticazione.md` è ancora una “voce di prova” marcata `to_migrate`.
- **Erbologia**: Riconoscimento, Interazione, Trattamento e Coltivazione sono presenti integralmente nella pagina principale, mentre esistono anche sottopagine più brevi.
- **Commercio Magico**: la pagina principale contiene Acquisto, Vendita e Gringott; alcune sottopagine dichiarano ancora che “ospiteranno integralmente” la procedura.
- **Quidditch**: la pagina principale contiene l'intero sistema (Hogwarts, Adulti, ruoli, scenari e gioco); alcune sottopagine sono sintesi e dichiarano ancora l'esistenza di una futura “versione integrale”.
- **Leggi Magiche / Magisprudenza / Wizengamot**: la pagina `mondo-magico/leggi-magiche/index.md` incorpora anche Magisprudenza e Wizengamot, mentre le stesse sezioni esistono come pagine autonome abbreviate.

Decisione editoriale necessaria: scegliere per ogni sistema **un solo luogo canonico** della regola e trasformare gli altri documenti in vere landing/rimandi oppure suddividere il monolite senza perdita di contenuto.

### Falsi positivi di migrazione

Sono state individuate pagine marcate `migrated` o incluse nella certificazione “completa” che contengono ancora linguaggio di migrazione futura, per esempio:

- Acquistare Merci Magiche;
- Vendere Merci Magiche;
- Iniziare una Causa ONGame;
- Struttura del Processo;
- Quidditch ad Hogwarts;
- Quidditch tra PG Adulti;
- Partecipare ad un Processo.

Questi casi non vengono riscritti automaticamente perché occorre stabilire se la sottopagina debba contenere il testo integrale o diventare un rimando alla pagina canonica.

### Documentazione di stato non più affidabile come certificazione

`MIGRATION_STATUS.md`, `PROTOTYPE_STATUS.md` e `SOURCES_USED.md` dichiarano la V1 integralmente migrata. L'audit ha dimostrato che questa affermazione non può essere usata come prova di completezza pagina-per-pagina finché non vengono risolti i casi di canonicità/placeholder sopra elencati.

## P1 — debito editoriale e di architettura già rilevato

L'audit automatico registra inoltre:

- pagine con più H1 nel corpo;
- pagine monolitiche oltre 30.000 caratteri;
- `prototypeExcerpt: true` residui;
- `migration.status: to_migrate` residui;
- linguaggio obsoleto relativo a prototipo/migrazione;
- markup legacy;
- salti anomali nella gerarchia dei titoli;
- titoli duplicati;
- possibili parole incollate durante la conversione;
- link esterni a ForumFree da censire come dipendenze funzionali.

Questi segnali sono diagnostici: non equivalgono automaticamente a errori regolamentari.

## Regola operativa dell'audit

1. **Codice univocamente errato:** correggere e testare.
2. **Testo incompleto ma completo altrove:** segnalare sovrapposizione e decidere il luogo canonico.
3. **Contraddizione fra due regole:** non scegliere automaticamente; confrontare le fonti e sottoporre la decisione.
4. **Anomalia presente nella fonte:** conservarla fino a decisione Staff.
5. **Miglioramento UX/IA:** registrarlo ora, implementarlo nelle fasi dedicate salvo che blocchi la consultazione.
