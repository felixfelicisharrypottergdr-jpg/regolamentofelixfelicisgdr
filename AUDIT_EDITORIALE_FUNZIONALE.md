# Audit editoriale e funzionale — FELIX FELICIS

Data di apertura audit: 22 settembre 2026.

Questo è un registro vivo. Gli errori **funzionali o di codice** vengono corretti automaticamente quando la soluzione è univoca. Le anomalie **editoriali o regolamentari** vengono invece registrate senza scegliere o riscrivere la regola al posto dello Staff.

## Stato funzionale

L'audit corrente censisce **169 documenti**, **1.617 file di contenuto** e **1.633 route note**.

La pipeline automatica esegue, in ordine:

1. preflight di UUID, riferimenti e slug;
2. audit funzionale/editoriale sui sorgenti;
3. build Astro/Starlight;
4. audit dell'HTML realmente renderizzato;
5. deploy GitHub Pages.

All'ultimo controllo risultano:

- **0** errori strutturali;
- **0** route documentali duplicate;
- **0** link Markdown interni verso route inesistenti;
- **0** UUID duplicati o riferimenti UUID inesistenti;
- **0** `migration.status: to_migrate`;
- **0** `prototypeExcerpt: true`;
- **0** frasi residue che annunciano una futura migrazione;
- **0** markup legacy intercettato dall'audit;
- **0** titoli duplicati nel frontmatter;
- **0** candidati automatici a conflitto numerico con identica struttura testuale;
- build, audit HTML e deploy riusciti.

Restano **91 link root-relative nei sorgenti Markdown**. Non sono attualmente rotti: il processor Markdown FELIX li riscrive con il `base` corretto e l'audit dell'HTML finale ne verifica la destinazione. Sono quindi **debito di manutenzione del sorgente**, non un difetto utente attuale.

### Audit dell'HTML finale

Il controllo post-build verifica oltre **1.600 pagine HTML renderizzate**, decine di migliaia di collegamenti locali e i relativi frammenti/ancore. La pipeline fallisce per:

- destinazioni locali inesistenti;
- frammenti/ancore inesistenti;
- link interni che bypassano il `base` di GitHub Pages.

Sono già stati corretti automaticamente:

- le tre collisioni di slug dei vecchi `index.md` di prototipo;
- il link “Salta ai contenuti” della Home;
- gli indici obsoleti dei Trasporti;
- l'ancora `#principi` di Regole Generali;
- due H1 identici al titolo pagina;
- la configurazione i18n italiana;
- la pagina 404 e il conflitto con la route 404 predefinita di Starlight;
- la configurazione Markdown deprecata di Astro 7, migrata al processor `unified()`;
- import e calcoli di relazioni ridondanti in varie schede strutturate;
- l'applicabilità Pagefind inequivocabile delle Missioni FantaHogwarts/FantaWiz.

L'unico warning tecnico residuo della pipeline è esterno al codice FELIX: `actions/configure-pages@v5` dichiara ancora runtime Node 20 mentre il runner GitHub lo forza su Node 24.

## P0 editoriale — canonicità duplicata

Il problema editoriale più importante attualmente confermato non è una mancanza di migrazione, ma la presenza della **stessa regola in due luoghi canonici concorrenti**.

Il confronto per righe significative mostra:

| Sistema | Pagina autonoma confrontata con il monolite | Sovrapposizione esatta |
| --- | --- | ---: |
| Magizoologia | Domesticazione | 96% |
| Magizoologia | Fiducia | 95% |
| Commercio | Acquistare Merci Magiche | 100% |
| Commercio | Vendere Merci Magiche | 100% |
| Quidditch | Quidditch ad Hogwarts | 100% |
| Quidditch | Quidditch tra PG Adulti | 100% |
| Leggi/Magisprudenza | Iniziare una Causa ONGame | 100% |
| Leggi/Magisprudenza | Struttura del Processo | 100% |
| Leggi/Wizengamot | Partecipare ad un Processo | 100% |

L'audit incrociato individua attualmente **150 candidati di paragrafo duplicato fra documenti differenti**. Queste sottopagine non sono semplici approfondimenti: in molti casi duplicano letteralmente blocchi della pagina principale. Finché entrambe le versioni restano editabili, una futura modifica può aggiornare una copia e lasciare l'altra indietro.

**Da decidere in architettura dell'informazione:** per ciascun sistema va scelto un solo luogo canonico. L'altra versione dovrà diventare una landing/rimando oppure il monolite dovrà essere realmente suddiviso senza duplicazioni.

## P1 editoriale — pagine monolitiche

Sono attualmente segnalate **24 pagine oltre 30.000 caratteri**. Le più estese includono:

- Mondo Magico / Medimagia: circa 117.000 caratteri;
- Leggi Magiche: circa 110.000;
- Sintomatologia: circa 92.000;
- Magizoologia: circa 81.000;
- Pozionistica: circa 78.000;
- Quidditch: circa 73.000;
- Meccaniche di gioco: circa 70.000.

La lunghezza non è di per sé un errore. Diventa un problema quando contiene più sistemi autonomi, produce duplicazioni con pagine figlie o rende difficile raggiungere una singola regola.

## P1 editoriale — gerarchia dei titoli

Dopo la correzione automatica dei due H1 identici al titolo pagina, l'audit segnala **7 pagine con più H1 nel corpo**: Orario/Regolamento Scolastico, Scoprire Stanze/Passaggi, Tecniche Erbologiche, Magizoologia, Medimagia, Sintomatologia e Pozionistica.

Segnala inoltre **8 salti H2 → H4** nelle Ricerche Casuali. Questi casi vanno normalizzati quando si riorganizzeranno i contenuti: possono alterare indice di pagina, accessibilità e gerarchia visiva.

I due casi puramente tecnici — **Regole Generali** e **Luoghi di Maestria**, dove il medesimo H1 era ripetuto due volte — sono già stati corretti automaticamente. Gli H1 multipli rimasti corrispondono invece a sezioni autonome inglobate nello stesso documento e vanno risolti assieme all'architettura dell'informazione.

## P1 editoriale — refusi di conversione verificati

Il rilevatore automatico di parole “incollate” è volutamente euristico: intercetta sia errori reali sia nomi propri, formule e identificativi legittimi. I candidati non vengono quindi corretti in massa.

Il confronto diretto con le fonti ha già confermato come **refusi introdotti dalla conversione** almeno i seguenti casi:

| Pagina | Testo migrato anomalo | Origine del problema |
| --- | --- | --- |
| Conoscenze / Ottenere nuove Conoscenze | `IncantesimoFianto` | confine di link rimosso |
| Conoscenze Scolastiche | `apprendereConoscenze` | confine di link rimosso |
| Usare le Conoscenze | `dallaGuida` | confine di link rimosso |
| Ricerca Accordi | `CategorieMagiche`, `zonaIl` | link / interruzione di paragrafo rimossi |
| Ricerca Casi | `DifensoriSe` | interruzione di paragrafo rimossa |
| Ricerca Creature | `AlleyValli` | due link consecutivi saldati |
| Ricerca Maledizioni | `qualiAffaticamento` | confine di link rimosso |
| Parametri Sociali | `eCrescita`, `FantaHogwartse` | link consecutivi saldati |
| Ricerca Piante | `oValigia` | confine di link rimosso |
| Tecniche Magizoologiche | `ilPG`, `eLolly` | confini di link/formattazione rimossi |
| Magizoologia | `PossibilitàAggiungere` | confine di blocco/formattazione rimosso |
| Sintomatologia | `spinaleLesioni`, `InfezioneInsonnia`, `FerulaTecniche` | voci/link adiacenti saldati |
| Pozionistica | `FacileSi` | fine del richiamo al tool saldata all'inizio della frase successiva |
| Medimagia | `ClassificazioneXXXXX` | spazio/formattazione persi |

Questi sono **errori editoriali certi**, ma non vengono modificati automaticamente durante l'audit perché alterano il testo regolamentare. Possono essere corretti in un lotto editoriale dedicato dopo conferma Staff.

Sono invece risultati **legittimi e già presenti nelle fonti**, quindi non vanno corretti: nomi come `TricoPozione`, formule/variabili come `N°ProprieGobbiglieInGioco`, `1dN°CarteInMano`, `TiroSegmento`, `GoalSegmento`, `GoalBase`, il segnaposto URL `entryYYYYY` e identificativi tecnici interni agli URL delle immagini.

## P1 funzionale — ricerca, applicabilità e relazioni

I cataloghi verificati non mostrano mismatch fra i nomi dei filtri e gli attributi `data-*` delle card. I filtri locali risultano quindi tecnicamente coerenti.

La ricerca globale dispone del filtro **PG Studente / PG Adulto**, ma non tutte le collection strutturate espongono un campo di applicabilità. È stato corretto automaticamente solo ciò che è semanticamente certo:

- Missioni FantaHogwarts → **PG Studente**;
- Missioni FantaWiz → **PG Adulto**.

Non viene attribuita automaticamente un'applicabilità a Incantesimi, Pozioni, Creature, Maestrie, Ingredienti ecc.: questa informazione va modellata nella fase relazioni/IA sulla base delle regole effettive, non dedotta dal codice.

Le relazioni vengono già mostrate nel rail laterale. L'indice dei backlink copre le principali collection e le relazioni specialistiche. Resta da decidere in architettura se le relazioni generiche debbano essere:

- sempre bidirezionali;
- tipizzate semanticamente;
- mostrate anche nel corpo pagina;
- utilizzabili come filtri o percorsi di navigazione.

Non è un errore di runtime, ma una decisione strutturale necessaria prima della fase “filtri/relazioni”.

## Dipendenze esterne

Il regolamento contiene attualmente link ForumFree in **9 documenti**, principalmente verso:

- generatori PG;
- Smistamento;
- Club Scolastici;
- Notizie da Hogwarts;
- sezioni PNG/informazioni;
- Alfieri Rossi.

Sono collegamenti intenzionali, ma costituiscono dipendenze esterne da mantenere sotto controllo. In una fase successiva si deciderà quali devono restare sul forum e quali informazioni devono essere internalizzate nel sito-libro.

## Correzioni tecniche applicate durante l'audit

Principali commit di questa fase:

- `c1a7287a` — configurazione/markup e codice ridondante;
- `9a9a3a97` — i18n, 404 e pulizia delle schede strutturate;
- `0147e1d0` — applicabilità ricerca Missioni + configurazione Markdown Astro 7;
- `c5864da6` — rilevazione automatica di duplicazioni interdocumento e candidati a conflitto numerico;
- `cdfbd59d` — eliminazione del conflitto della route 404.

L'ultimo ciclo completo ha superato **preflight, audit sorgenti, build, audit HTML e deploy**.

## Regola operativa dell'audit

1. **Codice univocamente errato:** correggere e testare automaticamente.
2. **Duplicazione della stessa regola:** segnalare e scegliere prima il luogo canonico.
3. **Contraddizione fra due regole:** non scegliere automaticamente; confrontare le fonti.
4. **Anomalia presente nella fonte:** conservarla fino a decisione Staff.
5. **Refuso di conversione:** verificare il contesto e la fonte prima di correggere.
6. **Miglioramento UX/IA:** registrarlo ora e implementarlo nella fase dedicata, salvo che blocchi la consultazione.


## Blocco 1 — Inizia da qui, Il Personaggio, Giocare

Audit puntuale completato su **95 documenti**.

### Correzioni funzionali applicate

- Le tre vecchie collisioni di route dei PG Studenti erano già state eliminate nella prima fase dell'audit.
- I controlli automatici correnti non rilevano route documentali duplicate, link Markdown interni inesistenti, UUID mancanti o residui `to_migrate` / `prototypeExcerpt`.
- Sono stati normalizzati **25 link interni root-relative** presenti in questo blocco, distribuiti fra onboarding, Modalità di Gioco e creazione del PG Adulto. Il sito non dipende più dal processor Markdown per correggere questi collegamenti nel primo blocco.
- Commit della normalizzazione: `a44781dd`.

### Anomalie editoriali da NON correggere automaticamente

#### Contraddizione Prestigio / avanzamento di carriera

La fonte **7. Giocare un PG Adulto** contiene due indicazioni incompatibili:

- grado **Esperto**: requisito testuale **Prestigio 36**;
- tariffario per grado: **Neo 0–36**, **Esperto 37–70**.

La pagina `pg-adulto/lavorare/carriera-prestigio.md` conserva correttamente entrambe le indicazioni e mostra ancora una nota interna di migrazione. Lo Staff deve stabilire se la soglia corretta dell'Esperto sia **36** oppure **37**; la nota di audit dovrà poi essere rimossa dal contenuto pubblico.

#### Refusi di conversione confermati nel blocco

Restano da correggere editorialmente, dopo approvazione, almeno:

- Parametri Sociali: `eCrescita`, `FantaHogwartse`;
- Ricerca Accordi: `CategorieMagiche`, `zonaIl`;
- Ricerca Casi: `DifensoriSe`;
- Ricerca Creature: `AlleyValli`;
- Ricerca Maledizioni: `qualiAffaticamento`;
- Ricerca Piante: `oValigia`.

Sono errori derivati dalla rimozione di link o interruzioni di paragrafo nella conversione, non termini regolamentari intenzionali.

#### Gerarchia editoriale

Nel blocco restano:

- **2 pagine con più H1 nel corpo**:
  - Orario delle lezioni e Regolamento Scolastico;
  - Scoprire Stanze Segrete o Passaggi Segreti.
- **8 salti H2 → H4** nelle Ricerche Casuali, distribuiti fra Ricerca Accordi, Casi, Crimini, Ingredienti, Maledizioni, Missioni e Pazienti.

Questi casi non vengono corretti automaticamente perché gli heading segnalano spesso sezioni autonome inglobate in un unico documento: vanno risolti assieme all'architettura dell'informazione.

#### Pagine monolitiche del blocco

Superano circa 30.000 caratteri:

- Meccaniche di Gioco ~70k;
- Ricerca Casi ~56k;
- Parametri Sociali ~48k;
- PNG ~44k;
- Ricerca Missioni ~43k;
- Ricerca Crimini ~41k;
- Ricerca Accordi ~36k;
- Ricerca Maledizioni ~36k;
- Regole Generali ~35k;
- Ricerca Creature ~34k;
- Valute ~32k;
- Bagaglio ~31k.

Non sono errori automaticamente correggibili. Vanno valutate in IA in base a densità, autonomia delle sottosezioni e frequenza di consultazione.

#### Dipendenze dal forum

Nel blocco rimangono link intenzionali a ForumFree in **9 documenti**, soprattutto per generatori PG, Smistamento, Club, Notizie da Hogwarts, sistemi PNG/informazioni e Piano di Studi. Devono essere classificati nella fase IA come:

1. azioni che devono restare sul forum;
2. contenuti che dovrebbero essere internalizzati nel sito-libro;
3. strumenti esterni da mantenere ma rendere riconoscibili come tali.

#### Onboarding “Inizia da qui”

La nuova landing svolge correttamente la funzione di orientamento e riduce il carico di lettura iniziale. Rispetto al vecchio topic di onboarding restano però da decidere editorialmente alcuni passaggi operativi:

- presentazione facoltativa del Player;
- tutorial di compilazione della Scheda;
- accesso a “Schede in Costruzione”;
- indicazione del passaggio finale di revisione Staff / spostamento della Scheda approvata;
- percorso equivalente e completo per il PG Adulto.

Questi elementi non vanno reinseriti meccanicamente: bisogna decidere quali azioni appartengono al sito-libro e quali devono restare sul forum.


## Blocco 2 — Conoscenze, Sapienze e Manuali

Audit puntuale completato su **40 documenti** fra Conoscenze e Sapienze, Maestrie e i manuali di Conoscenze Scolastiche, Divinazione, Erbologia, Incantesimi, Ingredienti, Magizoologia, Medimagia, Pozionistica e Tracciatura.

### Correzioni funzionali applicate

- Sono stati normalizzati i link interni root-relative residui del blocco, eliminando la dipendenza dal processor Markdown per queste pagine.
- Le correzioni hanno interessato Maestrie, Conoscenze Scolastiche, Divinazione, Erbologia, Guida agli Incantesimi, Ingredienti, Magizoologia, Medimagia e Pozionistica.
- La Guida agli Incantesimi conteneva da sola diverse decine di link root-relative verso le singole schede del catalogo: ora sono relativi alla route corrente.
- Nessuna regola o valore regolamentare è stato modificato nel lotto tecnico.

### Anomalie editoriali da NON correggere automaticamente

#### Refusi di conversione confermati nel blocco

Restano da correggere editorialmente, dopo approvazione Staff:

- Ottenere nuove Conoscenze: `IncantesimoFianto`;
- Conoscenze Scolastiche: `apprendereConoscenze`;
- Usare le Conoscenze: `dallaGuida`;
- Tecniche Magizoologiche: `ilPG`, `eLolly`;
- Magizoologia: `PossibilitàAggiungere`;
- Sintomatologia: `spinaleLesioni`, `InfezioneInsonnia`, `FerulaTecniche`;
- Pozionistica: `FacileSi`;
- Medimagia: `ClassificazioneXXXXX`.

I termini camelCase tecnici del frontmatter e nomi intenzionali come `OssoFast`, `DolorFast`, `OrganFast`, `TricoPozione` e le denominazioni dei vaccini/antidoti non sono stati trattati come errori.

#### Canonicità duplicata

Nel blocco resta prioritario il problema già rilevato in Magizoologia:

- Domesticazione duplica quasi integralmente la sezione corrispondente del monolite Magizoologia;
- Fiducia duplica quasi integralmente la sezione corrispondente del monolite Magizoologia.

La correzione non è tecnica: va scelto il luogo canonico e poi rimossa la duplicazione, evitando due copie editabili della stessa regola.

#### Gerarchia editoriale

Restano pagine con più H1 nel corpo, coerentemente con quanto segnalato dall'audit globale:

- Tecniche Erbologiche;
- Magizoologia;
- Medimagia;
- Sintomatologia;
- Pozionistica.

Questi H1 corrispondono a sezioni autonome inglobate in pagine più ampie e vanno risolti assieme alla suddivisione editoriale, non con una sostituzione meccanica del livello heading.

#### Pagine monolitiche del blocco

Fra le pagine più estese del blocco risultano:

- Sintomatologia ~94k;
- Magizoologia ~82k;
- Pozionistica ~79k;
- Medimagia ~52k;
- Usare le Conoscenze ~50k;
- Erbologia ~47k;
- Ferite da Creature e Piante ~40k;
- Tecniche Magizoologiche ~33k.

Sono candidate forti alla suddivisione in pagine canoniche più piccole, soprattutto dove esistono già sottopagine o sistemi autonomi.

#### Architettura dei manuali

Il blocco mostra una struttura ibrida: alcuni manuali hanno una pagina guida più catalogo strutturato, altri mantengono ancora grandi monoliti testuali, altri ancora duplicano regole in sottopagine. Prima della fase UX/filtri va uniformato il principio editoriale: **pagina guida breve + catalogo strutturato + sottopagine canoniche per sistemi complessi**, evitando di conservare contemporaneamente la stessa regola nel monolite e nella pagina figlia.


## Blocco 3 — Mondo Magico

Audit puntuale completato sulle **32 pagine documentali** della macroarea Mondo Magico, sui cataloghi strutturati di **Oggetti** e **Leggi**, e sulle relative pagine Astro di consultazione.

### Correzioni funzionali applicate

- Normalizzato il collegamento dal topic **Negozi** al Catalogo Oggetti. Un primo percorso relativo risultava troppo corto ed è stato bloccato dal preflight; il percorso corretto è stato applicato e validato dalla pipeline.
- Rimossa dalla landing strutturata delle Leggi la frase residua `Il prototipo comprende...`, sostituita con formulazione coerente con il sito ormai migrato.
- Esteso l'audit del linguaggio di prototipo/migrazione anche alle pagine Astro scritte a mano, non soltanto ai documenti Markdown.
- Rimossi import e calcoli inutilizzati dalle pagine strutturate di Documenti normativi e Articoli; le relazioni sono già gestite dal rail laterale comune.
- Ultimo ciclo completo validato: **1.617 file di contenuto**, **1.617 UUID univoci**, **1.633 route note**, **1.631 pagine HTML**, **94.563 link locali** e **15.090 frammenti/ancore** controllati; preflight, audit sorgenti, build, audit HTML e deploy riusciti.

### P0/P1 editoriale — canonicità concorrente

Nel blocco la duplicazione della stessa regola fra monoliti e sottopagine è particolarmente estesa.

Confronti puntuali per paragrafi significativi confermano, fra gli altri:

- Commercio / Acquistare Merci Magiche: forte sovrapposizione con il monolite Commercio;
- Commercio / Vendere Merci Magiche: forte sovrapposizione con il monolite Commercio;
- Commercio / Gringott: forte sovrapposizione con il monolite Commercio;
- Quidditch / Quidditch ad Hogwarts: quasi interamente duplicato nel monolite Quidditch;
- Quidditch / Quidditch tra PG Adulti: duplicazione sostanzialmente integrale;
- Quidditch / Come si gioca: quasi interamente duplicato nel monolite Quidditch;
- Leggi Magiche / Iniziare una Causa ONGame: quasi interamente duplicato nella pagina Magisprudenza dedicata;
- Leggi Magiche / Struttura del Processo: quasi interamente duplicato nella pagina Processo;
- Leggi Magiche / Partecipare ad un Processo: ampiamente duplicato nella sezione Wizengamot.

La pagina **Partite da background** del Quidditch, invece, risulta sostanzialmente autonoma rispetto al monolite e non va assimilata automaticamente alle duplicazioni precedenti.

La soluzione resta architetturale: scegliere una sola copia canonica della regola e trasformare le altre occorrenze in landing/rimandi, oppure completare la suddivisione del monolite eliminando dal monolite i blocchi trasferiti.

### P1 editoriale — Leggi Magiche a tre livelli

Le Leggi presentano attualmente tre livelli di rappresentazione concorrenti:

1. il monolite `mondo-magico/leggi-magiche`;
2. i 3 Documenti normativi strutturati completi;
3. una collection di soli **5 Articoli strutturati**.

I tre Documenti strutturati contengono già integralmente numerosi articoli: la Carta contiene oltre venti occorrenze di articoli, il Codice oltre cento, il Corollario diverse decine. I cinque Articoli strutturati rappresentano quindi soltanto una parte della granularità disponibile.

Non manca il testo delle leggi, ma va deciso se:

- strutturare realmente **tutti** gli articoli e usare i Documenti come contenitori;
- mantenere i Documenti completi e rinunciare alle singole copie degli articoli;
- dichiarare esplicitamente la collection Articoli come selezione/indice di articoli notevoli, evitando di farla apparire come scomposizione completa.

### P1 regolamentare — range sovrapposti nella Cavalcata/Volo

Nella regola **Cadere dalla Creatura in volo** sono presenti contemporaneamente:

- Adulti con **1–15 Sapienza Magizoologica** → +3 possibilità;
- Adulti con **10–25 Sapienza Magizoologica** → +4 possibilità.

I valori **10–15** ricadono quindi in entrambe le fasce. La medesima anomalia è presente nella fonte migrata, quindi il sito la conserva correttamente e non viene corretta automaticamente.

Nella regola immediatamente precedente relativa alla corsa le fasce sono invece **1–15** e **16–25**. Questo rende plausibile un refuso, ma non è sufficiente per sostituire la regola senza decisione Staff.

### P1 funzionale/editoriale — filtro PG e applicabilità

La ricerca globale applica il filtro Pagefind `PG Studente / PG Adulto` in maniera esatta: una pagina senza metadato di applicabilità **non compare** quando il filtro è attivo.

Nel Blocco 3 risultano **15 pagine di tipo rule** con `applicability: []`, fra cui:

- Commercio e relative regole;
- Giochi Magici;
- Leggi Magiche;
- Magisprudenza e relative procedure;
- La Medimagia;
- il monolite Quidditch e Partite da background.

I Trasporti, Quidditch ad Hogwarts, Quidditch tra PG Adulti e Wizengamot sono invece già modellati.

Non assegno automaticamente Studente/Adulto alle 15 pagine mancanti: alcune contengono regole miste o sezioni con destinatari differenti. Va completata la modellazione prima di considerare il filtro PG semanticamente affidabile.

### P1 editoriale — monoliti e gerarchia interna

Nel blocco spiccano quattro monoliti:

- La Medimagia ~117k caratteri;
- Le Leggi Magiche ~110k;
- Quidditch ~73k;
- Giochi Magici ~50k.

La criticità non è soltanto la lunghezza. La gerarchia Markdown mostra numerosi elementi secondari promossi a H2:

- Medimagia: `Esempio`, `X`, `XX`, `XXX`, `XXXX`, `XXXXX`, `Click per il riassuntone!` e blocchi operativi;
- Quidditch: esempi, singole azioni di gioco e scenari allo stesso livello delle sezioni principali;
- Leggi Magiche: passaggi operativi come `- Contattare eventuali Testimoni` trattati come H2;
- Giochi Magici: numerose intestazioni identiche `Come si gioca?` senza il nome del gioco nel titolo.

Questo produce indici di pagina lunghi, ripetitivi o semanticamente poco chiari. La correzione va fatta insieme alla suddivisione dei monoliti, non con un abbassamento automatico indiscriminato degli heading.

### P1 architettura — due aree Medimagia

Esistono due sezioni distinte ma semanticamente molto vicine:

- **Mondo Magico / La Medimagia**: Salute, Sintomi, cure, guarigione, San Mungo e meccanica di gioco;
- **Manuali / Enciclopedia Medimagica**: conoscenze, tecniche, sintomatologia e compendio medico.

Il confronto testuale non mostra una duplicazione significativa fra i due monoliti: il problema è soprattutto di **naming e orientamento**. La pagina Mondo Magico cita l'Enciclopedia come manuale di riferimento ma non la rende immediatamente un percorso strutturale evidente.

In fase IA/UX conviene rendere esplicita la distinzione fra **sistema di Salute e Cure** e **manuale delle Conoscenze Medimagiche**, con collegamenti reciproci molto visibili.

### Refusi di conversione/editoriali confermati nel blocco

Resta da correggere editorialmente, dopo approvazione, almeno:

- Medimagia: `ClassificazioneXXXXX` → perdita del separatore/formattazione fra “Classificazione” e “XXXXX”.

Sono invece intenzionali o tecnicamente legittimi formule e identificativi come `N°ProprieGobbiglieInGioco`, `1dN°CarteInMano`, `TiroSegmento`, `GoalSegmento`, `GoalBase`, nonché nomi propri come McClan/McPhail e denominazioni di Pozioni/Vaccini in camel case.


## Audit di fedeltà strutturale — Blocco A — Inizia da qui

Avviato dopo il completamento dei tre blocchi dell'audit editoriale/funzionale, a seguito del riscontro che parte delle anomalie di gerarchia e leggibilità deriva dalla conversione della formattazione HTML originaria e non dal contenuto regolamentare.

### Principio adottato

La fonte viene trattata come autorevole non soltanto per il testo, ma anche per la **funzione semantica della formattazione**:

- gli indici HTML diventano navigazione nella sidebar e non vengono duplicati come testo nel corpo;
- `<details>/<summary>` restano contenuti richiudibili;
- le tabelle restano tabelle;
- i pallini usati come elenchi diventano liste semantiche;
- note, esempi e blocchi equivalenti restano distinti dal testo corrente;
- gli anchor espliciti della fonte vengono conservati, quando utili, come identificatori stabili;
- immagini e supporti visuali con funzione informativa/editoriale non vengono scartati;
- la separazione in paragrafi viene conservata invece di fondere righe originariamente distinte.

### Correzioni applicate

#### Valute di Gioco

- rimosso l'INDICE copiato nel corpo e trasferita la sua gerarchia nella sidebar sinistra;
- ripristinati gli anchor originali della fonte per Punti Post, Galeoni, Felix Token e sottosezioni;
- convertiti i pallini testuali in liste reali;
- ripristinata la tabella del guadagno mensile dei Galeoni;
- ripristinate le due mini-tabelle dell'esempio Studente/Adulto;
- ripristinati **20 disclosure** Fanta Felix Felicis presenti nella fonte: obiettivi, codice Spam nidificato e categorie dei premi.

#### Allineamenti

- rimosso l'INDICE dal corpo e trasferita la sua gerarchia nella sidebar;
- ripristinati gli anchor originali per Allineamenti Adulti, Legali/Neutrali/Caotici e Allineamenti Studenti.

#### Popolometro

- rimosso l'INDICE dal corpo e trasferita la voce “Le soglie” nella sidebar;
- ripristinata come tabella la scala dei sette stati di convivenza, precedentemente appiattita in righe isolate;
- ripristinata l'immagine del Popolometro associata allo specchietto della fonte;
- normalizzato l'elenco degli effetti sulle meccaniche.

#### Personaggi Non Giocanti

- rimosso l'INDICE dal corpo e trasferita la sua gerarchia nella sidebar;
- convertiti i pallini testuali in liste reali;
- ripristinati gli anchor originali delle sezioni principali;
- ripristinati i **4 disclosure** presenti nella fonte: Clienti Abituali, Punti Virtuosi, Punti Sinistri e Numeri Guastafeste;
- ripristinate come tabelle le due scale di successo Virtuosi/Sinistri e la tabella a cinque colonne dei Numeri Guastafeste.

#### Cosa siamo

- ripristinata la separazione dei paragrafi della premessa, che la migrazione aveva quasi completamente fuso;
- ripristinato l'allineamento centrato della citazione conclusiva.

#### Staff

- ripristinate le quattro grafiche originarie degli Admin, eliminate dalla conversione;
- ripristinata come tabella la lista Mansione / Staff Token;
- mantenuti distinti principio, motivazione, esempi e note.

#### Sidebar

- gli indici delle pagine del blocco sono stati trasferiti nella navigazione sinistra usando gli anchor originari;
- corretto il componente della sidebar per evitare che tutti i link `#ancora` della pagina corrente vengano evidenziati contemporaneamente come pagina attiva.

### Verifica quantitativa del campione

Dopo la correzione:

- Valute: **20 disclosure su 20** della fonte ripristinati;
- PNG: **4 disclosure su 4** ripristinati;
- nessuna delle pagine corrette conserva un'intestazione `INDICE` nel corpo;
- nessuna delle pagine corrette conserva pallini `•` usati al posto di liste semantiche;
- le principali tabelle appiattite individuate nel campione sono state ricostruite.

### Limite di verificabilità: Regole Generali

La pagina `inizia-da-qui/regole-generali` dichiara nel frontmatter come fonte “1. Le Regole del Gioco / Regole Generali”, ma nel documento Google Drive e nel file sorgente attualmente disponibili non risulta una sezione identificabile come “Regole Generali”, “Norme generali” o “Temi Sensibili”.

Sono state quindi applicate soltanto normalizzazioni tecniche evidenti (rimozione dell'indice HTML dal corpo e conversione dei pallini in liste), ma **la fedeltà strutturale di quella pagina non può essere certificata contro la fonte attuale**. Questo punto resta aperto finché non viene individuata la fonte corretta.

### Conseguenza sull'audit precedente

Le anomalie di heading, monolite e duplicazione rilevate nei primi tre blocchi restano utili, ma devono essere considerate **preliminari** finché la relativa area non ha superato l'audit di fedeltà strutturale. Elementi trasformati erroneamente da `<details>`, tabelle, callout o formattazioni HTML possono infatti produrre falsi H2/H3 e falsi problemi di gerarchia.


## Audit di fedeltà strutturale — Blocco B — Giocare (Dadi, Meccaniche, Role e Modalità)

Confronto eseguito contro le fonti **1. Le Regole del Gioco** e **6. Modalità di Gioco**.

### Dadi e casualità

- rimosso l'INDICE copiato nel corpo;
- trasferita nella sidebar la gerarchia originale Perché i dadi / Lancio / Quando / Player-Narratore / possibilità / facce-risultato / interpretazione;
- ripristinati gli anchor originali della fonte;
- convertiti i pallini testuali in liste semantiche.

La fonte non contiene disclosure o tabelle in questa sezione, quindi non risultano strutture di quel tipo mancanti dopo la correzione.

### Meccaniche di gioco

Questa pagina rappresentava il caso più grave incontrato finora nella conversione:

- la fonte contiene **48 `<details>`**;
- la pagina migrata ne conteneva **0**;
- i 48 summary erano stati quasi tutti trasformati in H2/H3, producendo un indice estremamente lungo e una falsa gerarchia editoriale.

Sono stati ripristinati **48 disclosure su 48**, inclusa la gerarchia annidata originale:

- Luoghi di Hogwarts → Affollati / Isolati / Vietati / Personali;
- Luoghi del Mondo Magico → Affollati / Isolati / Personali / Sorvegliati;
- Aumentare / Diminuire le possibilità;
- i quattro confronti per intuire una menzogna;
- le ripetizioni delle strutture per spionaggio, ficcanasare, furto e scippo.

Sono inoltre stati:

- rimossi l'INDICE dal corpo e i pallini grezzi;
- ripristinati gli anchor originali per Spiare, Ficcanasare, Agire alle spalle, Intuire una menzogna, Rubare/Scippare/Rapinare, Duello verbale e Sensi Magici;
- trasferita la struttura dell'indice nella sidebar sinistra.

Questa correzione ridimensiona sostanzialmente la precedente anomalia di “troppi H2” della pagina: una parte molto consistente non era una scelta editoriale della fonte, ma un errore di conversione.

### Modalità di Gioco

La fonte **6. Modalità di Gioco** è stata confrontata con le pagine in cui il monolite è stato suddiviso nel nuovo sito.

La divisione in più pagine può essere mantenuta: la sidebar ricostruisce ora la gerarchia dell'indice originale tramite collegamenti alle pagine e agli anchor pertinenti.

Ripristinati gli anchor originari per:

- Free Role;
- Role Masterate e Richieste al Narratore;
- Eventi, Ambient e Quest;
- Trama;
- Sondaggi e Indizi;
- Classificazione degli Eventi.

Nella sezione Sondaggi la fonte conteneva due disclosure:

- PG Adulti;
- PG Studenti.

Nella migrazione erano diventati titoli con tabelle sempre aperte. Sono stati ripristinati **2 disclosure su 2**, mantenendo le tabelle interne già correttamente strutturate.

### Sidebar

L'indice originale di Modalità di Gioco viene ora rappresentato dalla navigazione laterale anche se il contenuto è distribuito su più route. Sono state aggiunte le voci annidate per Ambient/Quest, Richieste al Narratore e Sondaggi/Indizi.

### Stato quantitativo dopo la correzione

- Meccaniche di gioco: **48 disclosure aperti / 48 chiusi**;
- Sondaggi e Indizi: **2 disclosure aperti / 2 chiusi**;
- Dadi, Meccaniche e Sondaggi: **0 INDICI residui nel corpo**;
- Dadi e Meccaniche: **0 pallini grezzi** usati come pseudo-liste;
- nessun anchor duplicato introdotto nelle pagine corrette.

### Perimetro del Blocco B

Questo lotto riguarda le sezioni direttamente verificabili contro **1. Le Regole del Gioco** e **6. Modalità di Gioco**. Guida agli Scontri e Ricerche Casuali vengono trattati in blocchi successivi contro le rispettive fonti dedicate, per evitare di mescolare conversioni provenienti da documenti diversi.


## Audit di fedeltà strutturale — Blocco F — Conoscenze

Confronto eseguito contro la fonte **3. Le Conoscenze**.

### Riscontro principale

La migrazione aveva conservato il testo ma aveva appiattito una parte significativa della struttura HTML originaria. Nella fonte sono presenti **29 disclosure `<details>`**, distribuiti come segue:

- Conoscenze Scolastiche: **5**;
- Conoscenze Extra: **10**;
- Usare le Conoscenze: **11**;
- Creare una Conoscenza: **3**.

Le pagine migrate ne contenevano **0**.

### Correzioni applicate

#### Conoscenze Autoconclusive

- rimosso l'INDICE dal corpo;
- convertiti i pallini testuali in liste semantiche;
- ripristinati gli anchor originari `cosasono` ed `elencoauto`;
- trasferito l'indice nella sidebar.

#### Conoscenze Scolastiche

- rimosso l'INDICE dal corpo;
- ripristinati **5 disclosure su 5** della fonte, relativi ai gruppi di Piante/Creature condensati;
- convertiti i pallini grezzi in liste;
- ripristinati gli anchor `cosasono` ed `elencoscola`;
- trasferito l'indice nella sidebar.

#### Conoscenze Extra

- rimosso l'INDICE dal corpo;
- ripristinati **10 disclosure su 10**: Piante Esotiche, Creature Esotiche, Incantatore e le categorie di Pozioni/Veleni condensate;
- convertiti i pallini grezzi in liste;
- ripristinati gli anchor `cosasono` ed `elencoextra`;
- trasferito l'indice nella sidebar.

#### Conoscenze Avanzate

La fonte non contiene disclosure in questa sezione. Sono stati quindi:

- rimosso l'INDICE dal corpo;
- normalizzate le liste;
- ripristinati gli anchor `cosasono` ed `elencoavanz`;
- trasferito l'indice nella sidebar.

#### Usare le Conoscenze

Questa era la seconda anomalia strutturale più rilevante del blocco:

- ripristinati **11 disclosure su 11**;
- sette riguardano gli specchietti delle Componenti (Specifiche, Ingredienti e dosi, Ricetta, ecc.);
- uno riguarda le Complicazioni;
- tre riguardano “Usare una Conoscenza Scolastica / Extra / Avanzata”;
- rimosso l'INDICE dal corpo;
- convertite le pseudo-liste;
- ripristinati gli anchor originali dell'indice (Componenti, tipi di Conoscenza, uso, narrazione degli esiti, annullamento, resistenza mentale e Incantesimi non verbali);
- trasferita l'intera gerarchia dell'indice nella sidebar.

Gli anchor espliciti `incantesimi` e `pozioni` non sono stati mantenuti come elementi HTML aggiuntivi perché i rispettivi heading Markdown generano già quegli ID: in questo modo si evita un duplicato nel DOM preservando comunque i link originari.

#### Ottenere nuove Conoscenze

- rimosso l'INDICE dal corpo;
- normalizzate le liste;
- ripristinati gli anchor `acquistare`, `apprendere`, `apprenderePG`, `apprenderePNG`;
- trasferita la gerarchia nella sidebar.

#### Creare una Conoscenza

- rimosso l'INDICE dal corpo;
- ripristinati **3 disclosure su 3** per i modelli di creazione di Incantesimo, Pozione e Oggetto Magico;
- normalizzate le liste;
- ripristinati gli anchor `creareinca`, `crearepoz`, `creareoggettinuovi`;
- trasferito l'indice nella sidebar.

### Stato quantitativo dopo la correzione

- Autoconclusive: **0 disclosure**, come in fonte;
- Scolastiche: **5 aperti / 5 chiusi**;
- Extra: **10 / 10**;
- Avanzate: **0**, come in fonte;
- Usare le Conoscenze: **11 / 11**;
- Ottenere nuove Conoscenze: **0**, come in fonte;
- Creare una Conoscenza: **3 / 3**;
- totale disclosure ripristinati: **29 / 29**;
- **0 INDICI residui** nel corpo delle sette pagine;
- **0 pallini grezzi** usati come pseudo-liste;
- nessun ID custom duplicato rilevato nel controllo sorgente.


## Audit di fedeltà strutturale — Blocco G — Le Sapienze

Confronto eseguito contro la fonte **5. Le Sapienze**.

### Riscontro principale

Il problema strutturale dominante non riguardava disclosure: la fonte non contiene alcun `<details>`. Il trasferimento aveva invece appiattito **26 tabelle HTML** trasformandole in sequenze verticali di testo.

Distribuzione delle tabelle nella fonte:

- Sapienze Magiche: **16**;
- Sapienze Fisiche: **5**;
- Sapienze Sociali: **5**.

Nel sito migrato, prima della correzione, le cinque pagine del blocco contenevano **0 tabelle semantiche**.

### Correzioni applicate

#### Cosa sono le Sapienze

- rimosso dal corpo l'indice generale della fonte;
- normalizzate le liste delle configurazioni massime;
- ripristinato l'anchor originale `definizione`;
- trasferito l'indice generale nella sidebar, distribuendo correttamente i collegamenti fra le pagine separate Magiche, Fisiche e Sociali.

#### Sapienze Magiche

- ricostruite **16 tabelle su 16**:
  - tabella modello “Nome Sapienza”;
  - tre tabelle degli esempi sulla Sapienza Difensiva;
  - dodici tabelle delle Sapienze Magiche disponibili;
- ripristinate intestazioni, colonne di costo e Livelli I–V;
- mantenuti i nomi visibili delle Conoscenze senza reintrodurre il vecchio BBCode ForumFree dei link;
- normalizzate le liste dei bonus di Forza;
- ripristinati gli anchor originali `magiche`, `compomagiche`, `costosapmagica`, `magichedovecome`, `adulticreati`, `studadul`, `noaffine`, `sapmagcelate`, `magichedisp`;
- ripristinati anche i dodici anchor delle singole Sapienze (`sapienzarcaica` … `sapienzatrasfigurativa`) davanti alle rispettive tabelle;
- corretto un primo inserimento degli anchor che li collocava dentro `<thead>`: ora sono esterni alla tabella, come nella fonte e secondo HTML valido.

#### Sapienze Fisiche

- ricostruite **5 tabelle su 5**:
  - tabella modello dei costi;
  - Prestanza;
  - Rapidità;
  - Resilienza;
  - Vigore;
- ripristinati gli anchor `fisiche`, `fisichedovecome`, `compofisiche`, `costosapfisiche`, `fisichedisp`.

#### Sapienze Sociali

- ricostruite **5 tabelle su 5**:
  - tabella modello dei costi;
  - Leader;
  - Motivatore;
  - Oppositore;
  - Persuasore;
- ripristinati gli anchor `sociali`, `socialidovecome`, `composociali`, `costosapsociale`, `socialidisp`.

#### Crescita a Debito

La fonte contiene un secondo indice autonomo e tre strutture ordinate che la migrazione non aveva preservato correttamente.

Sono stati:

- rimosso l'INDICE dal corpo e trasferito nella sidebar;
- ripristinati gli anchor `condizioni`, `distribuzione`, `limiti`, `convivere`, `fasce`, `costi`, `compiladebito`;
- normalizzati tutti i pallini testuali in liste semantiche;
- ripristinato l'elenco numerato delle **7 fasce di crescita**, mantenendo la numerazione originale con partenza da **0**;
- ripristinati i due elenchi ordinati da **1 a 5** dei costi per Livello di Sapienze Magiche e Sapienze Fisiche/Sociali;
- eliminate le righe isolate `-` generate erroneamente dalla conversione delle liste ordinate.

### Sidebar e navigazione

La sidebar ricostruisce ora i due indici della fonte senza duplicarli nel testo:

- indice generale delle Sapienze, distribuito tra pagina introduttiva, Magiche, Fisiche e Sociali;
- indice specifico della Crescita a Debito, con condizioni, distribuzione, limiti, convivenza col debito, fasce, costi e compilazione.

Sono conservati **39 anchor originari**, distribuiti sulle cinque pagine canoniche.

### Stato quantitativo dopo la correzione

- tabelle Sapienze Magiche: **16 aperte / 16 chiuse**;
- tabelle Sapienze Fisiche: **5 / 5**;
- tabelle Sapienze Sociali: **5 / 5**;
- totale tabelle ripristinate: **26 / 26**;
- disclosure: **0**, coerentemente con la fonte;
- INDICI residui nel corpo: **0**;
- pallini grezzi usati come pseudo-liste: **0**;
- ID custom duplicati nel sorgente: **0**;
- elenchi ordinati della Crescita a Debito: ripristinati tutti e **3**.

### Validazione tecnica

Il commit funzionale finale del blocco ha superato:

- FELIX preflight;
- audit editoriale sorgenti;
- build Astro;
- audit del sito renderizzato;
- generazione dell'artifact GitHub Pages.


## Audit di fedeltà strutturale — Blocco H — Maestrie

Confronto eseguito contro la fonte **Maestrie**.

### Struttura della fonte

La fonte contiene:

- **70 disclosure** `<details>`;
- **37 tabelle**;
- 36 Maestrie, organizzate per le 12 Sapienze Magiche.

Nel nuovo sito le tabelle non risultavano realmente perse:

- la tabella generale delle 36 Maestrie è stata sostituita da un **catalogo filtrabile e ricercabile**, che ne preserva e migliora la funzione di consultazione;
- le altre 36 tabelle “Valori”, una per Maestria, sono già modellate nei rispettivi frontmatter tramite `values` e renderizzate da `FelixDataTable`.

Durante la correzione è stato verificato, per ciascuna delle 36 schede, che il numero dei campi `values` coincidesse con il numero delle voci della tabella Valori originaria. Non sono emerse discrepanze.

### Problema di conversione principale

I **70 disclosure** della fonte erano invece stati completamente appiattiti:

- la pagina generale aveva perso il disclosure “Tutte le possibili combinazioni per Maestrie della stessa Sapienza Magica”;
- ciascuna delle 36 schede aveva perso il disclosure principale “Specifiche”;
- nove Maestrie contenevano ulteriori disclosure annidati o separati, anch'essi trasformati in normali heading.

Sono stati ripristinati **70 disclosure su 70**.

### Ripristino delle schede

Ogni scheda Maestria conserva ora:

- il disclosure principale **Specifiche**;
- le liste semantiche al posto dei pallini testuali;
- i campi Valori strutturati già esistenti;
- il catalogo moderno come punto di accesso canonico.

Sono inoltre stati demoti gli heading falsamente creati dalla conversione:

- `Effetti`, che nella fonte è semplice testo evidenziato, non H2;
- `Livello I / II / III`, che nella fonte sono etichette sottolineate, non H3.

Dopo la correzione, le 36 schede non conservano H2/H3 derivati artificialmente da queste etichette.

### Disclosure speciali ripristinati

Oltre ai 36 “Specifiche”, sono stati ripristinati i disclosure aggiuntivi delle Maestrie più complesse:

- **Genesi Primordiale:** Fioritura Bellica; Accelerazione Botanica;
- **Seconda Fioritura:** Rinascita della Senescenza; Salvezza dal Declino;
- **Manipolazione dell'Energia:** Assorbimento; Deviazione; Rilancio Cinetico; Telecinesi;
- **Signore delle Fatture:** Fatture; Pozioni Fatturanti;
- **Padre dell'Increato:** Molliccio; Poltergeist; Dissennatore;
- **Signore degli Homuncoli:** Procedimento;
- **Mimesi Chimerica:** Procedimento e cinque tipologie razziali;
- **Transmutazione Alchemica:** quattro tecniche annidate dentro Specifiche e il disclosure autonomo “Procedimento ONGame”;
- **Amato Animo Animato Animagus:** Il Rito e i sette Archetipi.

### Pagina generale

Nella pagina `Maestrie` è stato ripristinato il disclosure della lista delle possibili combinazioni di Livelli per Maestrie appartenenti alla stessa Sapienza.

La tabella originaria delle 36 Maestrie **non viene reintrodotta** nel corpo: il catalogo strutturato ne svolge già la stessa funzione con ricerca, filtri per Sapienza e Parametro e accesso diretto alle singole schede.

### Stato quantitativo dopo la correzione

- disclosure nelle 36 schede: **69 aperti / 69 chiusi**;
- disclosure nella pagina generale: **1 / 1**;
- totale: **70 / 70**, identico alla fonte;
- tabelle funzionalmente preservate: **37 / 37** (1 catalogo strutturato + 36 tabelle Valori strutturate);
- pallini grezzi nelle schede corrette: **0**;
- H2/H3 residui derivati dalla conversione nelle schede: **0**;
- disclosure sbilanciati: **0**.

### Validazione tecnica

Il commit funzionale finale `dab7918ecb41dd38528185a84077f641e2bb63e0` ha superato:

- FELIX preflight;
- audit editoriale sorgenti;
- build Astro;
- audit del sito renderizzato;
- generazione artifact GitHub Pages.
