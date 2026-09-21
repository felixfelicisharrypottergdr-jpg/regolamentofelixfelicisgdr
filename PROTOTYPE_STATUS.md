# Stato del progetto FELIX FELICIS

> **Aggiornamento audit — 21 settembre 2026:** la precedente certificazione di completezza è sospesa durante l’audit editoriale e funzionale. Il repository contiene gran parte del testo sorgente, ma sono emerse sottopagine parziali/placeholder e duplicazioni fra guide monolitiche e pagine granulari. Fare riferimento a `AUDIT_EDITORIALE_FUNZIONALE.md` per lo stato corrente.

> **Nota sul nome del file:** questo documento si chiamava `PROTOTYPE_STATUS.md` durante la fase iniziale. Il progetto ha ormai superato la fase di prototipo per quanto riguarda la migrazione dei contenuti.

## Migrazione

La migrazione dei contenuti regolamentari caricati nel progetto è **completa per la V1**, secondo la matrice descritta in `MIGRATION_STATUS.md`.

Restano escluse soltanto le due eccezioni deliberate del brief:

- Fabbricazione/Crafting generico di Oggetti ONGame;
- catalogo dettagliato delle schede PNG.

## Infrastruttura disponibile

- Astro + Starlight.
- GitHub Pages e GitHub Actions.
- Pages CMS.
- Astro Content Collections + Zod.
- Pagefind e ricerca FELIX personalizzata.
- Cataloghi e schede dinamiche.
- Filtri con URL condivisibili.
- Relazioni e backlink.
- Navigazione per macroaree.
- Supporto responsive.
- Contratto di incorporamento full-viewport in ForumFree.

## Validazione

I lotti di migrazione vengono verificati attraverso:

- preflight FELIX;
- integrità degli UUID;
- riferimenti relazionali;
- slug;
- build Astro/Starlight.

## Stato attuale

La priorità non è più trasferire materiale dalle fonti: la base regolamentare è completa.

La fase successiva riguarda:

- audit editoriale;
- coerenza e deduplicazione;
- relazioni mancanti;
- UX e architettura dell'informazione;
- grafica finale;
- cataloghi e filtri;
- responsive;
- test iframe reale;
- rifinitura del workflow CMS.

Il riferimento visivo finale resta il render approvato nel progetto.
