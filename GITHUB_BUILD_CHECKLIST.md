# Checklist della prima build GitHub

## Build

- [ ] Workflow parte automaticamente su `main`
- [ ] `npm install` completa senza errori
- [ ] `npm run preflight` supera i controlli
- [ ] `npm run build` completa
- [ ] Artifact `dist/` viene caricato
- [ ] Job `deploy` completa
- [ ] URL GitHub Pages viene mostrata nel job

## Navigazione

- [ ] Home si apre
- [ ] Header e sidebar funzionano
- [ ] `Il Personaggio` funziona
- [ ] `Giocare` funziona
- [ ] `Conoscenze e Sapienze` funziona
- [ ] `Manuali` funziona
- [ ] `Mondo Magico` funziona

## Contenuti strutturati

- [ ] Nundu si apre
- [ ] Nundacea mostra il backlink dal Nundu
- [ ] un Ingrediente mostra `Ottenibile da`
- [ ] una Pozione mostra Ingredienti e dosi
- [ ] una Pianta si apre dall'Erbario
- [ ] un Incantesimo si apre dal Manuale
- [ ] una Razza si apre dall'Elenco delle Razze
- [ ] un Oggetto si apre dal Commercio
- [ ] un Articolo di Legge si apre dal Documento normativo

## Ricerca e cataloghi

- [ ] `Ctrl/Cmd + K` apre la ricerca
- [ ] `Nundu` restituisce la Creatura
- [ ] `fare amicizia con una creatura` porta verso Fiducia
- [ ] alias con errore controllato (es. `magizologia`) produce un risultato utile
- [ ] Bestiario filtra per Classificazione
- [ ] Bestiario filtra per Ostilità
- [ ] link ai filtri è condivisibile

## Responsive / iframe

- [ ] Desktop usa tutto il viewport
- [ ] la colonna di lettura resta leggibile
- [ ] sidebar/indice non schiacciano il contenuto
- [ ] mobile comprime correttamente la navigazione
- [ ] iframe ForumFree usa l'intero viewport disponibile
- [ ] ricerca e sidebar funzionano dentro iframe

## CMS (fase successiva)

- [ ] Pages CMS apre il repository
- [ ] Nundu è modificabile senza codice
- [ ] una Pagina/Regola esistente è modificabile
- [ ] `Crea nuovo → Creatura` funziona
- [ ] `Crea nuovo → Pagina libera` funziona
- [ ] reference verso un altro contenuto mostra il nome ma salva UUID
