# FELIX FELICIS — Audit editoriale e funzionale

Data di apertura audit: 21 settembre 2026.\nUltimo aggiornamento: 22 settembre 2026.

## Scopo

Questo documento registra i problemi emersi dopo la migrazione delle fonti nel sito-regolamento.
L'audit distingue fra:

- **P0 — bloccante / contenuto o navigazione inaffidabile**;
- **P1 — importante / compromette consultazione, ricerca o coerenza**;
- **P2 — medio / debito editoriale e manutentivo**;
- **P3 — rifinitura / qualità tecnica o presentazionale non bloccante**.

Le correzioni puramente tecniche e non controverse possono essere applicate durante l'audit.
Le modifiche che cambiano il significato di una regola richiedono invece confronto con la fonte e, quando necessario, una decisione Staff.

## Stato sintetico

La precedente certificazione di “migrazione completa V1” è **sospesa** fino alla chiusura dei P0/P1.
L'audit ha verificato che gran parte del materiale sorgente è presente nel repository, ma non sempre nel punto canonico corretto:

- diverse guide complete convivono con sottopagine abbreviate o placeholder;
- alcune sottopagine dichiarate “migrate” contengono ancora testo al futuro (“ospiterà integralmente”, “versione integrale…”);
- questo crea più versioni della stessa regola e risultati di ricerca duplicati o incoerenti.

Non equivale necessariamente a contenuto sorgente perso: in Erbologia, Magizoologia, Commercio, Quidditch e Leggi/Magisprudenza molto materiale completo è conservato nelle pagine monolitiche principali.

## Registro P0

### P0-01 — Collisioni di route docs
**Stato: RISOLTO**

Tre coppie `topic.md` + `topic/index.md` generavano lo stesso slug Starlight:

- Coppa delle Case;
- Modalità di gioco PG Studenti;
- Studiare ad Hogwarts.

I tre `index.md` erano vecchi placeholder di prototipo e sono stati rimossi.
Il preflight ora tratta le collisioni di route docs come errore.

### P0-02 — Link interni relativi errati
**Stato: RISOLTO per i casi individuati; controllo globale in corso**

Corretti i link relativi che risolvevano la pagina target come figlia del file corrente anziché come sibling.

### P0-03 — Link Markdown assoluti incompatibili con il base path GitHub Pages
**Stato: RISOLTO E VERIFICATO SULL'ARTIFACT**

Nel render precedente circa 230 collegamenti interni rimanevano `/...` invece di includere il base
`/regolamentofelixfelicisgdr/`.
È stato aggiunto un passaggio Markdown che rende base-aware i link interni.

### P0-04 — Gerarchia H1 duplicata
**Stato: RISOLTO E VERIFICATO SULL'ARTIFACT**

Nel render precedente 472 pagine contenevano più di un H1:
Starlight produceva il titolo pagina e il Markdown migrato conservava uno o più `#`.
Il renderer ora sposta di un livello l'intera gerarchia Markdown quando trova un H1 nel contenuto,
lasciando il titolo Starlight come unico H1 di pagina.

### P0-05 — Pagine parziali/placeholder esposte come regole migrate
**Stato: RISOLTO E VERIFICATO**

Casi espliciti individuati:

- `manuali/magizoologia/domesticazione.md`;
- `mondo-magico/commercio/acquistare-merci-magiche.md`;
- `mondo-magico/commercio/vendere-merci-magiche.md`;
- `mondo-magico/magisprudenza/iniziare-una-causa-ongame.md`;
- `mondo-magico/magisprudenza/processo.md`;
- `mondo-magico/quidditch/quidditch-ad-hogwarts.md`;
- `mondo-magico/quidditch/quidditch-tra-pg-adulti.md`;
- `mondo-magico/wizengamot/partecipare-ad-un-processo.md`;
- `giocare/le-role/index.md` conserva inoltre il riferimento “In questo prototipo”.

Le pagine sopra elencate sono state completate a partire dalle fonti/guide canoniche, portate a `status: verified` e private dei flag di prototipo. L'audit automatico corrente non rileva più `to_migrate`, `prototypeExcerpt: true` o linguaggio di migrazione provvisoria.

## Registro P1

### P1-01 — Doppio canone: monoliti completi + sottopagine abbreviate
**Stato: APERTO**

Confermato almeno in:

- Erbologia;
- Magizoologia;
- Commercio;
- Quidditch;
- Leggi Magiche / Magisprudenza / Wizengamot.

Effetti:

- due punti del sito possono descrivere la stessa regola con dettaglio diverso;
- Pagefind indicizza versioni concorrenti;
- gli aggiornamenti futuri possono modificare una copia e lasciare l'altra obsoleta;
- il player non sa quale pagina sia canonica.

Obiettivo della fase editoriale: un solo luogo canonico per ogni regola; landing e panoramiche devono rimandare alla regola, non duplicarla.

### P1-02 — Tipi Pagefind duplicati
**Stato: FIX IMPLEMENTATO, VERIFICA BUILD IN CORSO**

Le entità strutturate ricevevano sia il tipo specifico (es. `Incantesimo`) sia il tipo editoriale di default `Regola`.
Il filtro “Regole” inglobava quindi gran parte dei cataloghi.
Il metadata editoriale è stato disattivato sulle route strutturate.

### P1-03 — Filtri ricerca incompleti
**Stato: PARZIALMENTE RISOLTO**

Aggiunti all'interfaccia i tipi già presenti nell'indice:

- Maestrie;
- Conoscenze Scolastiche;
- Tecniche Divinatorie;
- Missioni FantaHogwarts;
- Missioni FantaWiz.

Il filtro globale Studente/Adulto è stato temporaneamente nascosto:
molte collezioni strutturate non possiedono ancora metadata di applicabilità completi e produceva falsi negativi.

### P1-04 — Macroarea ricerca “Inizia da qui”
**Stato: RISOLTO**

Le pagine di onboarding venivano indicizzate come macroarea generica `Regolamento`.
Aggiunta la macroarea corretta `Inizia da qui`.

### P1-05 — Copertura relazioni/rail non uniforme
**Stato: RISOLTO TECNICAMENTE — qualità semantica da auditare**

Il rail relazionale è disponibile per buona parte dei Manuali e delle entità commerciali/normative,
ma è assente da:

- Maestrie;
- Tecniche Divinatorie;
- Conoscenze Scolastiche;
- Missioni FantaHogwarts;
- Missioni FantaWiz.

Il grafo backlink è stato esteso a tutte le collezioni strutturate e il rail gestisce ora anche Maestrie, Tecniche Divinatorie, Conoscenze Scolastiche e Missioni. Resta aperto il lavoro editoriale sulla qualità e completezza delle singole relazioni, che appartiene alla fase relazioni/architettura.

### P1-06 — Anomalia Ingredienti: Grinzafico / Giunchiglia / Grinzafigo
**Stato: APERTO — decisione editoriale richiesta**

La collection contiene 318 file ma 317 nomi distinti perché due schede risultano intitolate **Petalo di Giunchiglia strombazzante**.

Il confronto con la fonte `10.9 Ingredienti` mostra che l'anomalia è già presente a monte:

- l'indice elenca **Petalo di Grinzafico**;
- l'anchor dedicato è `petalodigrinzafico`;
- il blocco corrispondente è però intitolato erroneamente **Petalo di Giunchiglia strombazzante**;
- poco dopo compare anche una voce distinta **Petalo di Grinzafigo**.

Non va corretta automaticamente finché non viene verificato quale denominazione sia quella canonica nelle ricette e nelle altre fonti.

### P1-07 — Pagine orfane ridondanti
**Stato: RISOLTO**

Sono state rimosse cinque pagine senza link in ingresso che duplicavano contenuti già presenti nelle pagine canoniche:

- quattro sottopagine procedurali di Erbologia;
- la vecchia guida autonoma alle Malattie Magiche.

La rimozione non elimina regole: il contenuto completo resta nelle guide canoniche e nei cataloghi.

### P1-08 — ID HTML duplicati nel Pozionario
**Stato: FIX IMPLEMENTATO; NUOVO RENDER DA VERIFICARE**

132 schede Pozione contenevano già una sezione sorgente **Ingredienti e dosi** e il template generava una seconda sezione strutturata con lo stesso id HTML.
La tabella strutturata usa ora l'anchor `ingredienti-e-dosi-tabella`.

La duplicazione editoriale fra testo sorgente e tabella strutturata resta da valutare nella fase di consolidamento.

## Registro P2

### P2-01 — Residui `prototypeExcerpt` e `to_migrate`
**Stato: RISOLTO**

Il preflight e l'audit automatico li controllano. Nell'ultima build verificata risultano **zero** pagine `to_migrate`, **zero** `prototypeExcerpt: true` e **zero** descrizioni sospette di prototipo.

### P2-02 — Formattazione ForumFree/BBCode visibile
**Stato: PULIZIA ESTESA — verifica automatica in corso**

Nel render precedente 17 pagine mostravano letteralmente token come
`[QUOTE]`, `[CODE]`, `[URL]`, `[/color]` o sequenze `****testo****`.
Il primo lotto è stato convertito in Markdown senza modificare il significato delle regole.
Il preflight ora segnala nuovi residui.

### P2-03 — Pagine monolitiche eccessivamente lunghe
**Stato: APERTO — input per architettura dell'informazione**

Fra i casi più grandi:

- Mondo Magico / Medimagia;
- Leggi Magiche;
- Sintomatologia;
- Magizoologia;
- Pozionistica;
- Quidditch;
- Meccaniche di gioco;
- varie Ricerche Casuali.

Non vanno semplicemente “accorciate”: devono essere scomposte mantenendo una sola fonte canonica per ogni regola.

### P2-04 — Documentazione tecnica obsoleta
**Stato: RISOLTO NEL PRIMO LOTTO DI AUDIT**

`MIGRATION_STATUS.md`, `PROTOTYPE_STATUS.md`, `SOURCES_USED.md` e `VALIDATION_REPORT.md`
contengono affermazioni non più coerenti con quanto emerso nell'audit o con lo stato tecnico attuale.

### P2-05 — Gerarchia heading con salti di livello
**Stato: APERTO**

Dopo la normalizzazione dell'H1 restano circa 17 pagine con salti semantici di heading (per esempio H2 → H4).
Non rompe la navigazione, ma peggiora struttura documentale e accessibilità.

### P2-06 — Peso delle pagine e dei cataloghi
**Stato: APERTO — input per IA/UX e performance**

L'artifact mostra alcune pagine molto pesanti, fra cui cataloghi Oggetti/Bestiario e grandi guide come Sintomatologia, Medimagia, Pozionistica, Quidditch e Magizoologia.
Il problema non va risolto tagliando contenuto: occorre separare dati, filtri e sezioni canoniche nella futura architettura.

## Registro P3

### P3-01 — Favicon mancante
**Stato: APERTO**

Il render richiama `favicon.svg`, ma il file non è presente in `public/`.

### P3-02 — Warning build non funzionali
**Stato: APERTO**

Da ripulire separatamente:

- collection `i18n` vuota;
- warning relativo alla pagina 404;
- warning GitHub Actions/Node 20 di `actions/configure-pages@v5`.

## Guardrail introdotti durante l'audit

Il preflight verifica o segnala ora:

- UUID e riferimenti;
- slug delle collection strutturate;
- collisioni delle route docs;
- pagine `to_migrate`;
- pagine `prototypeExcerpt: true`;
- frasi tipiche di placeholder/migrazione;
- formattazione BBCode legacy;
- link Markdown assoluti da verificare;
- sintassi di `astro.config.mjs` prima del preflight contenuti.

## Prossimi controlli

1. ottenere una build verde con i nuovi guardrail;
2. audit del nuovo artifact HTML:
   - H1;
   - link interni;
   - Pagefind metadata;
   - BBCode visibile;
   - pagine placeholder;
3. confronto sistematico monolite ↔ sottopagine per stabilire il canonico senza perdita di testo;
4. verifica terminologica e delle contraddizioni di regola;
5. verifica Quick Facts ↔ corpo pagina;
6. verifica relazioni e backlink;
7. solo dopo: nuova architettura dell'informazione e UX.


## Aggiornamento 22 settembre 2026

Dopo i lotti di correzione del 21 settembre, l'ultima pipeline completamente verificata (`0fd87b7e`) riportava:

- **1616 file di contenuto / 1616 UUID univoci**;
- **1631 route note**;
- zero `to_migrate`;
- zero `prototypeExcerpt: true`;
- zero linguaggio di migrazione provvisoria;
- build e deploy GitHub Pages riusciti.

Il 22 settembre è stata inoltre avviata una seconda pulizia delle sequenze di enfasi legacy `****` nelle pagine ancora segnalate dall'audit. Le regole e i valori numerici non sono stati modificati.
