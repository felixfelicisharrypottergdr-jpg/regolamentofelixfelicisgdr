# FELIX FELICIS — Validation Report

Ultimo aggiornamento: 22 settembre 2026.

## Stato corrente

La pipeline GitHub è operativa e il sito viene costruito e distribuito su GitHub Pages.

L'ultima pipeline completamente verificata prima del lotto editoriale del 22 settembre è quella del commit `0fd87b7e`, conclusa con successo.

## Controlli automatici attivi

### Preflight

Verifica:

- frontmatter dei contenuti;
- UUID univoci;
- riferimenti UUID esistenti;
- slug univoci nelle collezioni strutturate;
- route documentali univoche;
- link interni verso route esistenti.

Nella build verificata:

- **1616 file di contenuto**;
- **1616 UUID univoci**;
- **1631 route note**;
- nessun errore di integrità.

### Audit editoriale

`npm run audit` rileva automaticamente:

- stato di migrazione;
- `to_migrate`;
- `prototypeExcerpt`;
- linguaggio provvisorio di migrazione;
- markup legacy;
- pagine monolitiche;
- H1 multipli nel sorgente;
- descrizioni sospette.

Nella build verificata risultavano:

- zero `to_migrate`;
- zero `prototypeExcerpt: true`;
- zero linguaggio di migrazione provvisoria;
- zero descrizioni sospette.

### Build e deploy

La pipeline esegue inoltre:

- Astro/Starlight build;
- Pagefind;
- upload artifact GitHub Pages;
- deploy Pages.

## Debito non bloccante ancora noto

Restano da affrontare nell'audit:

- markup legacy residuo e pulizia editoriale;
- pagine monolitiche da riorganizzare senza perdita di contenuto;
- salti di gerarchia heading;
- qualità semantica di filtri e relazioni;
- warning Starlight relativi a i18n/404;
- favicon;
- verifica responsive e iframe ForumFree.

Il registro operativo aggiornato è `AUDIT_EDITORIALE_FUNZIONALE.md`.
