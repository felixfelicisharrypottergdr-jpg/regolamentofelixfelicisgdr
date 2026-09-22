---
felixId: "f85b494b-f067-4b4a-b67b-2d6bf67ad250"
title: "Parametri Fisici"
description: "Destrezza, Fatica, Resistenza, Salute e regole complete."
contentType: rule
searchAliases:
  - "parametri fisici"
applicability:
  - student
  - adult
prototypeExcerpt: false
migration:
  status: revised
  sources:
    - document: "2. Parametri"
      section: "Parametri Fisici"
---

# Parametri Fisici

## Destrezza

La **Destrezza** stabilisce l'agilità e la reattività di un PG, la sua capacità di schivare i colpi, di evocare magie celermente, di muoversi furtivamente, di correre o compiere azioni che richiedono un certo sforzo fisico. Più è alta la Destrezza, più sono alte le possibilità di attaccare per primo.
La Destrezza viene utilizzata per determinare l'ordine delle azioni dei personaggi, in tutte quelle situazioni in cui è importante stabilire l'ordine con cui avvengono le azioni. Nel confronto tra le Destrezze, vengono lanciati tanti dadi quanti sono i PG coinvolti: ogni dado **ha tante facce quanto la Destrezza del PG che ne ha meno**.
Si tiene sempre in considerazione la Destrezza posseduta dal PG al momento dello scontro, e quindi eventualmente oggetto di malus e bonus.

<a id="1vs1"></a>
### Scontri 1 vs 1
In ogni confronto 1vs1, al risultato del PG con Destrezza maggiore dei due viene aggiunta la **differenza** tra le due Destrezze. L'ordine delle azioni è dato dai risultati finali ordinati dal maggiore al minore.
Un valore maggiore di Destrezza non garantisce di attaccare sempre per primi ma dà maggiori possibilità di estrarre esiti maggiori di quelli degli altri e un bonus dato dalla differenza con le Destrezze altrui.

>
**PG1**: DES 7
**PG2 **: DES 11
**PG1**: 1d (DES PG1)
**PG2 **: 1d (DES PG1) = al risultato + (DES PG2 - DES PG1)

> **Esempio.**
> PG1ha Destrezza 10, PG2 ha Destrezza 13: si sfidano.
Vengono lanciati 2d10: il primo esito è 6, il secondo è 4.
All'esito di PG2, che corrisponde alla Destrezza maggiore, si aggiunge la differenza tra le due Destrezze: 13-10=3. I risultati finali sono quindi: 6 per PG1 e 4+3=7 per PG2. L'azione di PG2 avviene prima di quella di PG1.

<a id="1vsn"></a>
### Scontri tra più PG
In ogni confronto tra più PG, ai singoli risultati dei PG con Destrezza maggiore viene aggiunta la **differenza** tra la propria Destrezza e quella del PG con il valore minore. L'ordine delle azioni sarà decretato dai risultati finali ordinati dal maggiore al minore.
Un valore maggiore di Destrezza non garantisce di attaccare sempre per primi ma dà maggiori possibilità di estrarre esiti maggiori di quelli degli altri e un bonus dato dalla differenza con le Destrezze altrui.

>
**PG1**: DES 7
**PG2 **: DES 11
**PG3 **: DES 9
**PG1**: 1d (DES PG1)
**PG2 **: 1d (DES PG1) = al risultato + (DES PG2 - DES PG1)
**PG3 **: 1d (DES PG1) = al risultato + (DES PG3 - DES PG1)

> **Esempio.**
> PG1ha Destrezza 10, PG2 ha Destrezza 13 e PG3 ha Destrezza 11: si sfidano in uno scontro che li vede tutti contro tutti.
Vengono lanciati **3d10**: il primo esito è 6, il secondo è 4 ed il terzo è 8.
All'esito di PG2 e PG3, che hanno una Destrezza maggiore, si aggiunge la rispettiva differenza tra le loro Destrezze con quella di PG1: 13-10=3 e 11-10=1. I risultati finali sono quindi: 6 per PG1, 4+3= **7** per PG2 e 8+1= **9** per PG3.
L'azione di PG3 avviene prima di tutti, ed a seguire PG2 e PG1.

## Fatica

La **Fatica** rappresenta la “riserva di energia” a disposizione del PG: in termini pratici, indica *quanto a lungo* e con *quanta continuità* il personaggio riesce a sostenere azioni impegnative senza cedere alla stanchezza.
La Fatica, quindi, non misura “quanto un PG regge i colpi che subisce” (quello è legato soprattutto a **Salute** e **Resistenza**), ma **per quanto riesce ancora ad agire** quando le azioni che deve compiere richiedono un certo sforzo fisico e magico. Un valore di Fatica basso descrive un PG affaticato, con riflessi meno pronti, meno lucidità e meno capacità di sostenere ulteriori azioni che richiedano consumo di energia fisica o magica.
Ogni Azione che consuma Fatica ne sottrae un numero di punti specificato nella descrizione dell’**Azione** stessa (un Incantesimo, una Conoscenza d'altro tipo, una Fase di preparazione di una Pozione ecc.). Se la Fatica arriva a 0, il PG non può lanciare Incantesimi o utilizzare Conoscenze che prevedono il consumo di Fatica, finché non ne recupera.
**Modifica dinamica e recupero:** La Fatica diminuisce ogni volta che il PG utilizza Incantesimi, Conoscenze, Tecniche o altre Azioni che prevedono un consumo di Fatica, sempre specificato nella descrizione dell’Azione stessa. Il consumo di Fatica viene quindi **tracciato e applicato durante la role** ai fini delle Azioni e dei requisiti di utilizzo (ad esempio: se la Fatica scende a 0, non è possibile usare Azioni che richiedano ulteriore consumo di Fatica).
Il valore di Fatica aggiornato va sempre tracciato dal player tramite spoiler all’interno della role, indicando almeno il valore di partenza, ogni spesa/recupero effettuato e il valore risultante.
In condizioni ordinarie, la Fatica spesa per l’utilizzo di Azioni che la consumano (Incantesimi, Conoscenze, Tecniche ecc.) **si considera recuperata automaticamente alla conclusione della role**. Di conseguenza, **il valore di Fatica in Scheda PG non viene modificato**, salvo le eccezioni indicate nel paragrafo successivo; resta invece valido quanto tracciato nello spoiler per gestire correttamente le Azioni durante la giocata.

## Resistenza

La **Resistenza** stabilisce la capacità di un PG di resistere fisicamente ad eventuali colpi, mitigando la perdita di Salute. A parità di colpo subito, un PG con Resistenza più alta subisce un danno minore, riducendo la Salute persa quando viene subito un danno. Questo significa che il PG può subire colpi più potenti senza subire danni immediati e gravi.
Tuttavia, un PG molto con alta Resistenza potrebbe essere meno veloce (Destrezza) o più soggetto a stancarsi rapidamente (Fatica).
Al contrario, un PG con Resistenza bassa può risultare più rapido (Destrezza) e capace di combattere per periodi più lunghi (Fatica), ma rischia di subire danni più seri quando viene colpito, finendo a terra più facilmente.
Scegliere un PG con alta Resistenza significa puntare sulla capacità di assorbire colpi, mentre una Resistenza bassa privilegia la velocità e l’agilità, con il rischio di essere più vulnerabili in combattimento.

## Salute

La **Salute** stabilisce la salute fisica di un PG e la condizione generale del suo corpo.
**Modifica dinamica:** il valore di Salute diminuisce ogni volta che si incassa un colpo, di un valore determinato dall'opportuna formula di danno. Quando il valore di Salute giunge a 0 il PG è in pericolo di vita e necessita di cure urgenti: un ulteriore colpo subito equivale a morte.
Il valore di Salute può ripristinarsi soltanto nei modi previsti dalla Guida alla Medimagia.
**Modifica dei Parametri Fisici:** il valore di Salute influenza gli altri Parametri Fisici: tutti i Parametri Fisici sono ridotti progressivamente col diminuire della Salute, fino a un massimo del 66% (Parametro Fisico ridotto al 33% del suo valore solito).

> **Esempio.**
> Un PG a riposo ha 60 Punti Salute, 11 Destrezza, 8 Fatica, 9 Resistenza.
Durante una quest perde 30 Punti Salute, cioè il 50% del suo massimo: tutti gli altri Parametri Fisici vengono ridotti del 33% (solo il 66% del loro valore viene influenzato dalla perdita, che è del 50%: il 50% del 66% corrisponde al 33% del totale).
Se non recupera Punti Salute in qualche modo, i suoi nuovi Parametri Fisici sono: 30 Punti Salute, 7 Destrezza, 5 Fatica, 6 Resistenza.
Un PG a riposo ha 10 Fatica. Durante una quest ne consuma 4 evocando incantesimi, cioè il 40% del suo massimo. Tutti i Parametri Magici sono ridotti dello stesso 40%, quindi le sue magie sono il 40% meno potenti.

> **Nota.**
>
A nessun giocatore è richiesto calcolare queste dinamiche. Le abbiamo presentate qui per trasparenza ma è appannaggio del Narratore calcolarle attraverso degli strumenti appositi e aggiornare di volta in volta i giocatori sulla condizione dei loro PG.
Tuttavia, se si vuole curiosare su come funziona questo meccanismo, si può giocare con questo foglio di calcolo automatico.

<a id="guadagnareperdefisici"></a>
## Guadagnare, perdere, recuperare Parametri Fisici

I Parametri Fisici possono essere guadagnati, persi e recuperati in base agli eventi di gioco e alle azioni intraprese dal personaggio. Le dinamiche sono suddivise come segue:
**Guadagnare Parametri Fisici**
I Parametri Fisici possono essere guadagnati in due modi:
**1) Permanentemente:** il valore massimo di un Parametro Fisico può essere aumentato oltre la soglia iniziale, rappresentando un miglioramento duraturo delle capacità fisiche del PG. Questo incremento può avvenire grazie all’allenamento, all’uso di Punti Post o a particolari situazioni di gioco che abbiano un impatto a lungo termine sul fisico del personaggio;
**2) Temporaneamente:** durante una giocata, è possibile aumentare il valore momentaneo o la soglia massima di un Parametro Fisico tramite l’uso di Pozioni, Incantesimi o Conoscenze legate al corpo. Questi bonus sono temporanei e cessano al termine del loro effetto, senza modificare il valore base del Parametro.
**Perdere Parametri Fisici**
I Parametri Fisici possono essere persi temporaneamente o permanentemente, a seconda delle circostanze:
- La **Salute** si perde ogni volta che il PG subisce un colpo. Una volta giunta a 0, il PG entra in pericolo di vita;
- La **Destrezza** e la **Resistenza** diminuiscono in proporzione alla Salute: più questa scende, più anche questi Parametri calano. Tuttavia, possono subire perdite indipendenti in seguito a malus o condizioni di gioco specifiche (es. Incantesimi subiti, Pozioni ingerite, situazioni di gioco varie);
- La **Fatica** diminuisce ogni volta che si utilizzano Incantesimi, Conoscenze o altre Azioni che ne richiedano il consumo. Alcuni effetti o condizioni (come la perdita di Salute) possono comportare un calo ulteriore o più rapido di Fatica.
**Recuperare Parametri Fisici**
Il recupero dei Parametri Fisici segue regole diverse in base alla causa della loro perdita:
- **Salute:** può essere recuperata esclusivamente tramite quanto previsto dalla Guida alla Medimagia.
Quando la perdita degli altri Parametri Fisici è causata da un calo di Salute, questi vengono recuperati automaticamente insieme alla Salute, nel momento in cui questa viene ripristinata completamente.
- **Destrezza e Resistenza:** se la perdita è dovuta alla Salute, il recupero avviene unitamente alla guarigione della Salute stessa. Se la perdita è dovuta ad altri malus (temporanei o permanenti), il recupero può avvenire con il passare del tempo o l'uso di Pozioni, Incantesimi o Conoscenze, o attraverso bonus forniti da Oggetti e situazioni di gioco.
- **Fatica:** la Fatica può ridursi per due cause principali, e ciascuna segue una gestione diversa.
**1) Fatica ridotta a causa della perdita di Salute**
Se la Fatica risulta ridotta **a causa della perdita di Punti Salute** (come previsto dal regolamento), essa **non** si considera recuperata automaticamente e segue le normali regole legate al recupero della Salute (vedi Manuale di Medimagia). In questo caso, la Fatica torna ai valori ordinari solo quando la Salute viene ripristinata secondo le regole previste.
**2) Fatica spesa per l’utilizzo di Azioni che la consumano**
Se la Fatica è stata spesa per l’utilizzo di Incantesimi, Conoscenze, Tecniche o altre Azioni che prevedono consumo di Fatica, vale la seguente regola generale:
- La Fatica si recupera **1 Punto Fatica per ogni post** in cui non si fa uso di magia (Conoscenze, Tecniche, Incantesimi ecc.), all'interno della stessa role in cui viene persa,, fino a recuperarne il massimo possibile. Solo e soltanto in questa role, ogni post di recupero aumenta il totale disponibile per quella stessa role: il PG può utilizzare subito la Fatica recuperata nei post successivi. Questo recupero può essere velocizzato, ad esempio tramite la Sapienza Fisica Prestanza, Pozioni (es. Pozione della Fatica) o altri strumenti e risorse di gioco.
- durante la role, il consumo di Fatica **va tracciato e applicato** ai fini dei requisiti di utilizzo (ad esempio: se la Fatica scende a 0, non è possibile usare ulteriori Azioni che richiedano consumo di Fatica);
- in condizioni ordinarie, alla conclusione della role la Fatica spesa **si considera recuperata autoconclusivamente** e, di conseguenza, **il valore in Scheda PG non viene modificato**. L'unica eccezione è quella presente nel **Nota Bene** di seguito.
Il recupero avviene **solo all’interno della role in cui è iniziata la stessa perdita**: non è quindi possibile distribuirlo tra più role aperte contemporaneamente e non è possibile dire di aver recuperato della Fatica persa in una role diversa da quella in cui si perde.
Il valore aggiornato della Fatica durante la role va tracciato dal player tramite Spoiler, indicando almeno: valore di partenza, spese/recuperi effettuati e valore risultante, in modo da rendere verificabile l’uso delle Azioni e dei requisiti.

> **Nota.**
> Il recupero autoconclusivo a fine role non si applica automaticamente **se la role successiva appartiene allo **stesso arco narrativo**

** della role in cui la Fatica è stata spesa. In tal caso, la Fatica non si “resetta” tra una role e l’altra: la role successiva parte con la Fatica risultante dalla role precedente (come tracciata nello spoiler) e la spesa/recupero continua a essere monitorata allo stesso modo fino a quando l’arco narrativo si considera concluso.
**Cosa si intende per “arco narrativo”?**
Per **arco narrativo** si intende una **stessa scena/situazione**, oppure un **insieme di scene strettamente collegate**, che rappresentano la prosecuzione diretta dello stesso evento di gioco, **senza uno “stacco” credibile** in cui il PG possa realmente riprendere fiato, riorganizzarsi o recuperare energie.
In altre parole: due role appartengono allo stesso arco narrativo quando, ONGame, la seconda role **riprende la prima** come continuità naturale (anche cambiando luogo), e la role fa parte della stessa “fase” della storia: la tensione non si scioglie, l’urgenza non si interrompe, e non c’è spazio narrativo per considerare il personaggio “riposato”.
**In termini pratici, cosa significa?**
Due o più role fanno parte dello stesso arco narrativo se:
- la role successiva nasce come **conseguenza immediata** della precedente (non come scena nuova e scollegata);
- non avvengono, anche da background, momenti credibili riposo/recupero (es. pausa, sonno, tempo di decompressione, ritorno alla normalità);
- i PG sono ancora dentro la stessa "urgenza" (es. inseguimento, fuga, gestione feriti, allarme, scontro, interrogatorio in corso).
**Esempi:** una role in cui si giocano le conseguenze immediate di una Quest; un inseguimento che prosegue da un luogo a un altro; fuga/evacuazione che continua senza interruzioni; interrogatorio iniziato in una role e proseguito subito dopo; gestione immediata di un ferito prima che vi sia modo di fermarsi davvero.
In caso di dubbio, è preferibile considerare le role come parte dello **stesso arco narrativo** e applicare la regola più cautelativa; eventuali indicazioni diverse possono essere fornite dal Narratore o dallo Staff.

> **Perché?**
> **... la Fatica si recupera autoconclusivamente alla fine della giocata, ma **non** se la role successiva appartiene allo stesso arco narrativo?**
Perché il recupero autoconclusivo della Fatica è una **semplificazione per la gestione della stessa**: evita che il gioco richieda role dedicate al recupero per ogni singola spesa, e permette di mantenere scorrevole l’esperienza OFFGame per i player e per lo Staff.
Quando però due role sono la prosecuzione diretta della stessa scena, il recupero immediato diventerebbe **incoerente** dal punto di vista ONGame: un PG non può passare da “sfinito” a “perfettamente ripreso” soltanto perché OFFGame si è chiusa una role e se ne è aperta un’altra.
Il principio è lo stesso del concetto di **riposo** in molti sistemi di gioco: il recupero pieno richiede uno **stacco narrativo credibile**. Se lo stacco non esiste perché l’azione continua senza tregua, la Fatica rimane quella già spesa e continua a pesare finché l’arco narrativo non si conclude definitivamente.

> **Principio.**
>
- La Fatica va sempre **tracciata durante la role** perché incide immediatamente su ciò che il PG può o non può fare (in particolare quando scende a 0).
- In condizioni ordinarie, si recupera **1 Punto Fatica per ogni post** in cui non si utilizza ulteriore magia di alcun tipo (anche Conoscenze che consumano 0 Fatica). Alla chiusura della role la Fatica spesa per Azioni che la consumano **si considera recuperata** e non modifica il valore in Scheda PG.
- Se le role fanno parte dello **stesso arco narrativo**, la Fatica non si resetta fra una e l’altra: la continuità ONGame prevale sulla chiusura OFFGame.
- Resta fermo che la Fatica ridotta per effetto della **Salute** non segue il recupero autoconclusivo e si riallinea solo tramite le regole di Guarigionepreviste.

> **Esempio.**
>
- **PG1** ha come valore base 15 Fatica.
In una role spende 6 Fatica per Incantesimi/Conoscenze. Durante la role la Fatica viene tracciata nello spoiler (15 → 9) per gestire correttamente le Azioni. Alla chiusura, in condizioni ordinarie, la Fatica spesa si considera recuperata autoconclusivamente e in Scheda PG resta 15/15.
Se però la role successiva è dichiarata prosecuzione dello **stesso arco narrativo** (es. inseguimento che continua, conseguenze immediate della stessa Quest), la role successiva non parte da 15/15: parte dalla Fatica risultante (9) e la gestione continua nello spoiler finché l’arco narrativo non si conclude.
- **PG2** ha Fatica ridotta perché ha perso Punti Salute.
In questo caso non si applica il recupero autoconclusivo: la Fatica rimane ridotta finché la Salute non viene recuperata secondo le regole del Manuale di Medimagia.
