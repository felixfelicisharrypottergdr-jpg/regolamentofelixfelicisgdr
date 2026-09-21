---
id: "0e67989c-8e31-5f70-8d25-41c9826c6533"
slug: "praem"
name: "Praemunitio"
description: "Incantesimo Medimagico che consente all'evocatore di preparare preventivamente l'organismo proprio o di un altro individuo a sopportare le conseguenze di un eventuale trauma grave. La magia non rende il bersaglio più resistente, non impedisce che venga colpito e non riduce i danni subiti: rimane invece latente nel corpo fino a quando una perdita particolarmente consistente di Salute non ne provoca automaticamente l'attivazione. Quando questo avviene, l'organismo entra per breve tempo in una particolare condizione di stasi traumatica: il danno che provoca l'attivazione viene temporaneamente sospeso, concedendo al bersaglio del tempo supplementare per allontanarsi dal pericolo, raggiungere un luogo sicuro o ricevere assistenza medica prima che il trauma manifesti pienamente le proprie conseguenze."
wisdom: "Medimagica"
parameter: "Tecnica"
image: "https://i.postimg.cc/B6kDx9x5/image.png"
values:
  - label: "Tipo"
    value: "Medimagico"
  - label: "Parametro"
    value: "Tecnica"
  - label: "Raggio"
    value: "Singolo"
  - label: "Gittata"
    value: "Corta"
  - label: "Durata"
    value: "Varia"
searchAliases:
  - "praem"
  - "praemunitio"
  - "maestria medimagica"
status: published
migration:
  status: migrated
  sources:
    - document: "Maestrie"
      section: "Maestrie Medimagiche"
      item: "Praemunitio"
---

## Specifiche

**Funzionamento OFFGame**
*Praemunitio* può essere evocato preventivamente su sé stessi o su un singolo PG entro Gittata Corta. Il bersaglio non deve necessariamente essere ferito né trovarsi già in una situazione di pericolo.
L'Incantesimo rimane latente nell'organismo per un massimo di 24 ore ONGame, corrispondenti alla medesima occasione o giocata OFFGame. Durante questo periodo non modifica Salute, Resistenza, Fatica, Destrezza o altri Parametri del bersaglio e non fornisce alcuna protezione dagli attacchi.
Se trascorrono 24 ore senza che si verifichino le condizioni necessarie alla sua attivazione, *Praemunitio* si esaurisce senza produrre ulteriori effetti.
L'applicazione di *Praemunitio* richiede 1 Azione Principale e il pagamento della Fatica prevista dall'Efficacia della Maestria.

**Attivazione di Praemunitio**
L'Incantesimo si attiva automaticamente quando il bersaglio dovrebbe subire, attraverso un singolo attacco, pericolo o altro evento, una perdita di Salute pari o superiore al 20% della propria Salute massima.
Più perdite di Salute inferiori alla soglia non vengono sommate tra loro. L'attivazione è automatica: né l'evocatore né il bersaglio possono scegliere volontariamente di anticiparla, ritardarla o impedirla.
La perdita di Salute che provoca l'attivazione non viene immediatamente sottratta al bersaglio, ma viene registrata come Danno sospeso. Il trauma è realmente avvenuto e non viene cancellato o ridotto: viene soltanto ritardato il momento in cui le sue conseguenze vengono pienamente applicate all'organismo.
I Sintomi, le Complicazioni e gli aggravamenti direttamente derivanti da quel Danno sospeso rimangono ugualmente sospesi per la durata della Stasi, mentre eventuali conseguenze dell'attacco indipendenti dalla perdita di Salute si applicano normalmente.
ONGame, nel momento in cui *Praemunitio* entra in funzione, il bersaglio avverte una breve e inconfondibile sensazione di freddo e torpore attraversargli il corpo. Un PG consapevole di essere stato precedentemente sottoposto all'Incantesimo può quindi comprendere che la Stasi si è attivata.

**Durata della Stasi**
Il conteggio della durata comincia soltanto con l'attivazione dell'Incantesimo e dipende dall'Efficacia della Maestria:
Livello I: 4 Azioni
Livello II: 6 Azioni
Livello III: 8 Azioni
Ai fini del conteggio sono considerate separatamente Azione Principale, Azione Bonus e Reazione. Ciascuna Azione effettivamente utilizzata dal bersaglio consuma quindi una delle Azioni disponibili, anche quando più Azioni vengono compiute all'interno dello stesso Post.
Spostamento e Interazione non consumano la durata della Stasi.
Le Azioni effettuate da altri PG non consumano la durata della Stasi.

**Numero di bersagli**
Nell'arco delle medesime 24 ore l'evocatore può applicare *Praemunitio* a un numero massimo di PG determinato dall'Efficacia della Maestria:
Livello I: 1 PG
Livello II: fino a 2 PG
Livello III: fino a 3 PG
L'evocatore viene conteggiato normalmente tra questi bersagli qualora utilizzi l'Incantesimo anche su sé stesso. Ogni applicazione è indipendente dalle altre e può attivarsi o esaurirsi autonomamente.

**Limiti**
Uno stesso PG può ricevere una sola applicazione di Praemunitio ogni 24 ore, indipendentemente dall'Efficacia posseduta da chi la evoca, dall'identità dell'evocatore e dal fatto che l'Incantesimo si sia successivamente attivato oppure no.
Non è quindi possibile applicare una seconda *Praemunitio* allo stesso bersaglio durante la medesima occasione o Role per sostituire, rinnovare o accumulare quella precedente.

**Danni successivi all'attivazione**
La Stasi riguarda esclusivamente il Danno sospeso che ne ha provocato l'attivazione. Qualsiasi successiva perdita di Salute viene applicata immediatamente e normalmente al bersaglio e si somma alla sua situazione clinica corrente.
Un PG che possiede, per esempio, 25 punti di Danno sospeso e subisce successivamente altri 10 danni perde immediatamente questi ultimi 10 punti di Salute. Alla scadenza verranno poi applicati anche i 25 precedentemente sospesi.
La Stasi non può attivarsi nuovamente in risposta ai danni successivi.

**Cure durante la Stasi**
Durante l'effetto il bersaglio può essere curato normalmente e può recuperare la Salute già persa prima dell'attivazione o quella persa in seguito a nuovi danni.
La Salute recuperata viene applicata alla Salute effettiva del PG e può quindi consentirgli di trovarsi in condizioni migliori quando la Stasi terminerà.
Il Danno sospeso, invece, non può essere curato, ridotto, trasferito o annullato e rimane invariato fino alla scadenza di *Praemunitio*.

**Conclusione della Stasi**
Immediatamente dopo il completamento dell'ultima Azione concessa, l'intero Danno sospeso viene sottratto dalla Salute corrente del bersaglio.
In quel momento vengono applicati normalmente tutti i Sintomi, le Complicazioni e le altre conseguenze direttamente derivanti da quella perdita di Salute. Se il danno porta il PG a 0 Salute o al di sotto di 0 Salute, si applicano normalmente le regole previste per tale condizione.
Se la Role termina prima che il bersaglio abbia consumato tutte le Azioni disponibili, il Danno sospeso viene comunque applicato alla conclusione della Role.

**Impossibilità di annullamento e individuazione**
Una volta applicata, *Praemunitio* non può essere dissolta o contrastata. *Finite Incantatem*, controincantesimi e altri sistemi destinati ad annullare magie attive non possono rimuoverla né interromperne la Stasi.
La presenza di *Praemunitio* nell'organismo non lascia tracce magiche riconoscibili e, prima della sua attivazione, non può essere individuata, identificata o compresa attraverso sistemi di analisi magica.

**Fatica Consumata**
L'applicazione di *Praemunitio* consuma Fatica in base all'Efficacia della Maestria:
Livello I: 3 Fatica
Livello II: 2 Fatica
Livello III: 1 Fatica
La Fatica viene consumata al momento dell'applicazione dell'Incantesimo, indipendentemente dal fatto che *Praemunitio* si attivi successivamente oppure si esaurisca senza produrre alcun effetto.
