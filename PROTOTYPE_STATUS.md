# Stato del progetto FELIX FELICIS

Ultimo aggiornamento: 22 settembre 2026.

> **Nota sul nome del file:** `PROTOTYPE_STATUS.md` è un nome storico. Il progetto non è più un prototipo sul piano dei contenuti; il file viene mantenuto per compatibilità e tracciabilità.

## Migrazione sorgente

La migrazione delle fonti regolamentari previste per la V1 è completata, con le due esclusioni deliberate:

- Fabbricazione/Crafting generico di Oggetti ONGame;
- catalogo dettagliato delle schede PNG.

Durante l'audit successivo sono stati individuati e corretti residui che rendevano troppo ottimistica la prima certificazione: placeholder, route duplicate e sottopagine abbreviate. Lo stato analitico è mantenuto in `AUDIT_EDITORIALE_FUNZIONALE.md`.

## Infrastruttura disponibile

- Astro + Starlight.
- GitHub Pages e GitHub Actions.
- Pages CMS.
- Astro Content Collections + Zod.
- Pagefind e ricerca FELIX personalizzata.
- Cataloghi e schede dinamiche.
- Filtri con URL condivisibili.
- Grafo relazionale e backlink.
- Navigazione per macroaree.
- Supporto responsive.
- Contratto di incorporamento full-viewport in ForumFree.

## Guardrail attuali

La pipeline esegue:

- preflight UUID, riferimenti e slug;
- controllo collisioni delle route documentali;
- validazione dei link interni;
- audit editoriale automatico;
- build Astro/Starlight;
- generazione Pagefind;
- deploy GitHub Pages.

## Fase attuale

È in corso l'**audit editoriale e funzionale dell'intero sito**. Le priorità sono:

1. eliminare residui di conversione e incoerenze editoriali;
2. consolidare un solo luogo canonico per ciascuna regola;
3. verificare relazioni, ricerca e filtri;
4. preparare la nuova architettura dell'informazione;
5. passare quindi a UX/UI estrema e rifinitura grafica.
