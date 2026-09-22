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
