---
felixId: "6c56788b-32dd-5c2b-8a25-c7fcba0928ad"
title: "Quidditch ad Hogwarts — Partite da background"
description: "Sistema completo per simulare le partite di Quidditch di Hogwarts da background."
contentType: rule
searchAliases:
  - "quidditch background"
  - "partite background"
  - "punteggio ruolo"
applicability: [student]
prototypeExcerpt: false
migration:
  status: revised
  sources:
    - document: "8. Vivere nel Mondo Magico"
      section: "Quidditch ad Hogwarts (partite da background)"
---

# Quidditch ad Hogwarts (partite da background)

**INDICE**

• Definizioni rapide

• Corsa serve?

• Regole anti-sbilanciamento (Scope & Oggetti)

• Regole di calcolo generali

• Formazione virtuale

• Meteo

• Destrezza Scopa effettiva

• Punteggio Ruolo (PR) per ogni giocatore

• Valori di squadra (ATT/DIF/CERC)

• Durata della partita: Segmenti prima del Boccino

• Goal della partita

• Boccino (fine partita)

• Punteggio finale e spareggio

Quando una partita del Campionato di Quidditch di Hogwarts non può essere giocata ONGame per mancanza di player disponibili, viene comunque disputata “da background”.
La partita viene risolta dal Narratore tramite un sistema a dadi che tiene conto di: PG disponibili, PNG/PPNG di completamento, Parametri, Scope ed eventuale Equipaggiamento.

> **Nota.**
>
Questo regolamento serve solo per **simulare** le partite non giocate ONGame, mantenendo comunque coerenza con ruoli, punteggi e clima delle partite di Quidditch a Hogwarts. Per questo motivo, tutti i lanci di dadi vengono effettuati dal Narratore.

## Definizioni rapide

Per rendere il regolamento più chiaro, ecco i termini che compaiono più spesso. Sono tutti concetti che si ritrovano applicati nelle sezioni successive,

• **Destrezza scopa**: il valore di Destrezza associato alla scopa usata dal giocatore. Indica quanto la scopa lo aiuta nei movimenti in volo.
• **Destrezza scopa effettiva**: la Destrezza della scopa dopo aver applicato il limite massimo di 30 (vedi punto 6); se una scopa è più forte, il suo valore viene “tagliato” a 30 per evitare squilibri.
• **Oggetto extra**: un singolo oggetto (se ammesso al Quidditch) che può dare un piccolo bonus al giocatore.
• **BE (Bonus Extra)**: il bonus numerico dato dall’Oggetto extra; può valere solo 0 (nessun bonus) oppure +1 (oggetto che aiuta davvero).
• **PR (Punteggio Ruolo)**: il punteggio che misura quanto un singolo giocatore incide nel suo ruolo (Cacciatore, Battitore, Portiere, Cercatore) in quella partita.
• **ATT**: valore di squadra di **Attacco**, ottenuto combinando i PR dei tre Cacciatori. Più è alto, più la squadra è portata a segnare Pluffe [web:1].
• **DIF**: valore di squadra di **Difesa**, ottenuto combinando PR di Portiere e Battitori. Più è alto, più è difficile subire goal.
• **CERC**: valore legato al **Boccino**, coincide con il PR del Cercatore e misura quanto è bravo a trovare e catturare il Boccino.
• **Segmenti**: “momenti” di gioco in cui le squadre possono segnare goal prima della cattura del Boccino. Una partita è composta da più Segmenti.
• **Velocità**: valore che indica quanto un Cercatore è superiore all’altro. Più è alta la Velocità, più la partita è breve (meno Segmenti) perché il Boccino viene catturato prima.
• **Modificatore Goal**: un valore positivo o negativo che rappresenta il vantaggio/svantaggio di una squadra nel segnare goal rispetto all’altra. Deriva dalla differenza tra ATT e DIF avversaria e modifica i goal che la squadra segna in ogni Segmento (vedi punto 10).

## Cosa serve?

**Per ogni Casa, per quella specifica partita, sono necessari:**
• un elenco dei PG disponibili (anche se la partita non si gioca ONGame), con il **ruolo** dichiarato per ognuno;
• per ogni PG: i **Parametri** (Destrezza, Fatica, Resistenza e, per il Cercatore, anche **Percezione**), la **Scopa** (Destrezza scopa) e, se desiderato, **1 solo Oggetto extra** (facoltativo);
• tutti i ruoli non coperti dai PG vengono completati con **PNG/PPNG** della Casa (Capitano incluso se non presente il PG Capitano Giocante), utilizzando i seguenti Parametri che devono essere distribuiti dai PG Giocanti a loro scelta per ogni PNG. I PPNG hanno a disposizione:
- **35 PUNTI PARAMETRO** da distribuire tra *DESTREZZA, FATICA E RESISTENZA* (è possibile distribuire al massimo 15 Punti ad un solo Parametro, tutti gli altri Parametri posso avere al massimo 14 Punti);
- Se il **Cercatore è un PPNG**, il PPNG Cercatore ha a disposizione un max di **50 PUNTI PARAMETRO** da distribuire tra *DESTREZZA, FATICA, RESISTENZA e PERCEZIONE* (è possibile distribuire al massimo 15 Punti ad un solo Parametro, tutti gli altri Parametri posso avere al massimo 14 Punti).
• I PG Giocanti possono decidere di assegnare **l'Oggetto extra** ai PPNG come spiegato sotto (vedi Regole anti-sbilanciamento).

> **Nota.**
>
Se un PG non dichiara la Scopa o l’Oggetto extra, si considera automaticamente **Stellafreccia** come scopa standard e **nessun oggetto extra**.

## Regole anti-sbilanciamento (Scope & Oggetti)

**CAP massimo Destrezza Scopa**
Nel calcolo dei tiri da background, la **Destrezza della scopa** viene considerata al massimo pari a **30**.
Questo significa che se una scopa possiede più di 30 Destrezza, ai fini di questo sistema viene comunque trattata come se avesse 30. Serve a evitare che poche scope “mostruose” rendano il risultato troppo scontato.

**Oggetto extra (massimo 1)**
È possibile considerare un Oggetto extra, rispetto alla Scopa, solo questo se è **coerente** e **ammesso** al Quidditch (esempio: divise, manuali, amuleti, eccetera).
In tal caso, al giocatore (PG/PNG/PPNG) viene assegnato un **Bonus Extra (BE)** pari a **+1**.

Il Bonus Extra non è cumulabile: il **BE è sempre e solo 0 oppure +1**.
• Se l’oggetto non è chiaramente applicabile al contesto del Quidditch, il **BE viene considerato 0**.
• Se l’oggetto prevede consumi (es. “-1 uso/post”), in una partita da background si considera consumato come **1 uso per la partita**, scalando quanto previsto dal regolamento per l’impiego in partita.
• I PG Giocanti **possono decidere di consumare usi in più** del loro Oggetto extra prescelto per dare il **BE anche ai PNG/PPNG** della propria squadra.
• Dell'Oggetto utilizzato come Oggetto extra, **non si considera mai l'effetto ON/OFF** che ha (quindi, i bonus o malus che dà), ma solo e soltanto la presenza stessa dell'Oggetto, che fornisce il **BE **al giocatore.

**... se il mio PG usa un Oggetto e ne consuma 1 uso/post, non può ottenere il bonus/malus dell'Oggetto stesso ma solo avere +1 Bonus Extra?**
Per una pura questione di bilanciamento, dovuta al fatto che questo intero meccanismo si basa solo e soltanto su dei numeri e dei dadi. Questi, per forza di cose, non saranno mai lo specchio perfetto di quanto potrebbe accadere ruolando lo svolgimento di una partita ONGame e narrando le azioni dei PG come di consueto, quindi facendoli reagire in base a quello che capita loro, facendogli fare delle scelte ben precise, interagendo con le circostanze, eccetera. Di conseguenza, sfruttare realmente gli effetti forniti dagli Oggetti significherebbe due cose:
• rischiare di concedere dei bonus troppo alti solo perchè un PG potrebbe aver speso più Galeoni di un altro;
• ridurre gli Oggetti magici del nostro gioco a dei semplici "*perk*" da videogame, e non degli elementi reali che hanno, nelle role, un funzionamento ben preciso.
Quello che gli Oggetti possono fornire in questa modalità di gioco è un piccolo bonus, in cambio del consumo di un solo uso/post dell'Oggetto per l'intera partita.

## Regole di calcolo generali

Queste regole si applicano sempre, a tutte le formule del regolamento:

• In tutte le divisioni, si arrotonda **sempre per difetto**: se una divisione produce decimali, si tiene solo la parte intera (es. 7/2 = 3).
• Quando deve essere applicato un **limite minimo/massimo**, si segue questa regola: se il risultato è più basso del minimo viene portato al minimo; se è più alto del massimo viene portato al massimo; se è in mezzo, resta com’è.
• Quando serve la **differenza** fra due valori, si intende sempre “valore più alto meno valore più basso”, così la differenza risulta sempre positiva.

## Formazione virtuale

Per la risoluzione da background, ogni Casa viene considerata sempre schierata con una formazione completa di **7 giocatori**, a coprire tutti i ruoli:
• **3 Cacciatori**
• **2 Battitori**
• **1 Portiere**
• **1 Cercatore**

I ruoli dichiarati dai PG disponibili vengono assegnati a loro; tutti i ruoli rimanenti vengono coperti dai **PNG/PPNG** della Casa con i loro Parametri ufficiali/assegnati.

## Meteo

All’inizio della partita si determina il meteo tramite un tiro di **1d6**.

• **1 – Sole forte:** tutti i Giocatori subiscono **-3 Fatica**
• **2 – Pioggia:** tutti i Giocatori subiscono **-3 Destrezza**
• **3 – Neve:** si applica un **Modificatore Goal** pari a **-1d5 goal** a **entrambe** le squadre. Si effettua un solo tiro di 1d5, e il malus si sottrae ai goal totali a fine partita (senza mai scendere sotto 0).
• **4 – Nebbia:** si applica un **Modificatore Boccino** pari a **-1d5** a **entrambi** i Cercatori, che sarà usato al momento del tiro per la cattura del Boccino.
• **5 – Grandine:** tutti i Giocatori subiscono **-3 Resistenza**
• **6 – Mite:** nessun modificatore

> **Nota.**
>
Il meteo può influenzare direttamente i **Parametri**, il numero di **goal** oppure la fase del **Boccino**, a seconda della condizione ottenuta.

## Destrezza Scopa effettiva

Prima di calcolare qualsiasi Punteggio Ruolo, si definisce la **Destrezza scopa effettiva** per ciascun giocatore.

• se DES_scopa ≤ 30, la Destrezza Scopa effettiva è uguale a DES_scopa;
• se DES_scopa > 30, la Destrezza Scopa effettiva è uguale a 30.

In pratica: si parte dalla Destrezza reale della scopa, ma se è sopra 30 si abbassa a 30. Questo valore “effettivo” è quello che verrà usato in tutte le formule successive.

## Punteggio Ruolo (PR) per ogni giocatore

Ogni Giocatore (PG/PNG/PPNG) ottiene un **Punteggio Ruolo (PR)**, che rappresenta quanto incide nel proprio reparto (Attacco, Difesa o Boccino).
Il **PR** viene calcolato usando i Parametri del giocatore (già modificati dal meteo, se previsto), la Destrezza scopa effettiva (punto 6) e il BE (punto 2).

L’idea di base è sempre la stessa:
1) si sommano la Destrezza del PG e la Destrezza della scopa (effettiva),
2) si divide per 7 per “normalizzare” il contributo del volo,
3) si aggiunge una parte di un altro Parametro (Resistenza o Fatica, e per il Cercatore anche Percezione),
4) si aggiunge il BE, se presente.

**Cacciatore/Portiere**
Per un Cacciatore o un Portiere, il PR tiene conto di Destrezza e **Resistenza**:

>
PR (Cacciatore/Portiere) = (DES_PG + DES_scopa_effettiva)/7 + Resistenza/5 + BE

Quindi: sommi Destrezza PG e Destrezza scopa effettiva, dividi il totale per 7 (arrotondando per difetto), aggiungi la Resistenza divisa per 5 (arrotondata) e infine il BE.

**Battitore**
Per un Battitore, la struttura è la stessa, ma conta la **Fatica** al posto della Resistenza:

>
PR (Battitore) = (DES_PG + DES_scopa_effettiva)/7 + Fatica/5 + BE

**Cercatore**
Per un Cercatore, oltre a Destrezza e scopa, contano sia la Fatica sia la Percezione:

>
PR (Cercatore) = (DES_PG + DES_scopa_effettiva)/7 + Fatica/5 + Percezione/5 + BE

## Valori di squadra (ATT/DIF/CERC)

Una volta calcolati i PR dei singoli giocatori, per ciascuna Casa vengono determinati tre valori di squadra:
• **ATT** (Attacco – Cacciatori)
• **DIF** (Difesa – Portiere + Battitori)
• **CERC** (Boccino – Cercatore)

**ATT (Attacco – Cacciatori)**

Si prendono i PR dei tre Cacciatori e si ordinano dal più alto al più basso, ottenendo PR1, PR2 e PR3.

>
ATT = PR1 + PR2 + (PR3 diviso 2, arrotondato per difetto)

In pratica: i due Cacciatori migliori contano al 100%, il terzo (quello meno incisivo) conta solo per metà.

**DIF (Difesa – Portiere + Battitori)**

Si prende il PR del Portiere e i PR dei due Battitori.
Tra i due Battitori, quello con PR più alto viene considerato per intero, quello con PR più basso viene considerato a metà (diviso 2, arrotondato per difetto).

>
DIF = PR_portiere + PR_battitore_piu_alto + (PR_battitore_piu_basso diviso 2, arrotondato per difetto)

**CERC (Boccino – Cercatore)**

Il CERC coincide con il PR del Cercatore:

>
CERC = PR_Cercatore

**Perché, nel calcolo di ATT e DIF, il valore più basso pesa solo la metà?**

Perché in ogni reparto c’è quasi sempre un elemento che incide meno (il più giovane, il meno in forma, o semplicemente il meno efficace in quella partita).
Inoltre, questo meccanismo funziona come **valvola anti-sbilanciamento**: se tutti i valori venissero sommati al 100%, basterebbe avere tre numeri altissimi nello stesso reparto per renderlo troppo dominante e ridurre molto l’incidenza dei dadi.

## Durata della partita: Segmenti prima del Boccino

La partita da background viene simulata tramite un certo numero di **Segmenti** (ovvero, i momenti di gioco) prima della cattura del Boccino. Durante ogni Segmento, le squadre possono segnare goal.
Più un Cercatore è superiore all’altro, più è probabile che il Boccino venga preso prima: questo significa **meno Segmenti** e quindi **meno occasioni** di segnare.

**Velocità (vantaggio del Cercatore)**
Per determinare la **Velocità** si prendono i due valori CERC (uno per Casa), se ne calcola la differenza (sempre valore più alto meno valore più basso) e si divide il risultato per 3, arrotondando per difetto.

>
Velocità = (differenza tra CERC_A e CERC_B)/3

Più la differenza tra i due Cercatori è alta, maggiore è la Velocità: la partita “scorre” più in fretta verso la cattura del Boccino.

**Numero di Segmenti**

Il numero di Segmenti viene determinato con un tiro di 1d8, ma non potranno mai essere più di 15 e meno di 5.
Il risultato del dado si aggiunge ad un valore di base di **9**, ed al risultato si sottrae la Velocità:

>
Segmenti = 9 + 1d8 - Velocità (minimo 5, massimo 15)

Se il risultato finale è inferiore a 5, viene portato a 5; se è superiore a 15, viene portato a 15.

## Goal della partita

Durante ciascun Segmento, **entrambe** le squadre possono segnare un certo numero di goal.

**Modificatore di squadra per i goal**

Il **Modificatore Goal** rappresenta quanto l’Attacco di una squadra è migliore (o peggiore) rispetto alla Difesa avversaria.
Per ogni squadra si confronta l’Attacco (ATT) con la Difesa avversaria (DIF_avversaria).
Si calcola quindi la differenza ATT - DIF_avversaria e si divide il risultato per 2, arrotondando per difetto:

>
Modificatore Goal = (ATT - DIF_avversaria)/2 (minimo -2, massimo +2)

• Se il valore è superiore a +2, viene comunque riportato a +2.
• Se il valore è inferiore a -2, viene comunque riportato a -2.

Un Modificatore Goal positivo significa che la squadra tende a segnare leggermente più spesso; uno negativo indica che fa più fatica a superare la difesa avversaria.

**Tiro del Segmento**

Per ogni Segmento e per ciascuna squadra si tira **1d8**. Questo tiro determina i goal “base” del Segmento.

• Se TiroSegmento = 1–2 → **0 goal**
• Se TiroSegmento = 3–4 → **1 goal**
• Se TiroSegmento = 5–6 → **2 goal**
• Se TiroSegmento = 7 → **3 goal**
• Se TiroSegmento = 8 → **4 goal**

**Goal del Segmento**

Una volta determinati i goal base, si applica il Modificatore Goal della squadra, ottenendo i goal effettivi di quel Segmento:

>
GoalSegmento = GoalBase + Modificatore Goal (minimo 0, massimo 5)

Se il risultato finale scende sotto 0, viene considerato 0; se supera 5, viene considerato 5.
In questo modo, il Modificatore Goal non stravolge il tiro di dado, ma lo “sposta” leggermente verso risultati più o meno favorevoli in base alla forza dei reparti.

**Totale goal e Punteggio Pluffa**

Alla fine di tutti i Segmenti, si sommano i goal totali segnati dalla squadra.
Se è uscito **Meteo 3 (Neve)**, si sottrae il Modificatore Goal Meteo (-1d5) ai goal totali di **entrambe** le squadre, senza scendere sotto 0.

Infine, il Punteggio Pluffa si ottiene moltiplicando i goal finali per 10:

>
Punteggio Pluffa = (goal totali) × 10

## Boccino (fine partita)

Terminati tutti i Segmenti, si passa alla cattura del Boccino, che chiude la partita.

**Modificatore CERC**

Si calcola la differenza fra i due CERC (CERC - CERC_avversaria) e si divide il risultato per 2, arrotondando per difetto.

>
Modificatore CERC = (CERC - CERC_avversaria) / 2 (minimo -3, massimo +3)

Se il risultato è superiore a +3, viene considerato comunque +3; se è inferiore a -3, viene considerato comunque -3.
Anche qui, il Cercatore più forte parte avvantaggiato, ma il dado può ancora cambiare le cose.

**Tiro Boccino**

Per la cattura del Boccino, per ciascun Cercatore si tira 1d20 e si sommano:
• il Modificatore CERC;
• l’eventuale Modificatore Boccino dato dal meteo (se presente).

>
Tiro Boccino = 1d20 + Modificatore CERC + Modificatore Boccino Meteo

Il risultato più alto indica il Cercatore che **prende il Boccino**: la sua squadra ottiene **+150 punti** e la partita termina.

In caso di **parità**, lo stesso tiro viene ripetuto una sola volta; se la parità persiste, la decisione finale avviene tramite 1d2.

## Punteggio finale e spareggio

Il punteggio finale della squadra è dato dalla somma tra il Punteggio Pluffa e l’eventuale bonus di 150 punti per la cattura del Boccino.

>
Totale = Punteggio Pluffa + (150 se la squadra ha catturato il Boccino)

**In caso (raro) di punteggio finale pari:**

• si gioca **1 Segmento extra** per entrambe le squadre seguendo le stesse regole del punto 10 (tiro 1d8, Modificatore Goal, ecc.);
• si ricalcola il Punteggio Pluffa aggiungendo i nuovi goal;
• il Boccino **non** viene ritirato: resta valido chi l’ha preso prima.
