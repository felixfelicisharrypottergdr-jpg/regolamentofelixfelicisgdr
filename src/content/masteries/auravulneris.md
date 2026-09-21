---
id: "e5c07c0e-bcaf-5bfa-a2ee-5a4955147477"
slug: "auravulneris"
name: "Aura Vulneris"
description: "Incantesimo che altera temporaneamente l'essenza magica di un bersaglio, rendendola più debole: se colpito con successo, il bersaglio viene marchiato agli occhi dell'incantatore con un vivido contorno rosso luminoso, segno tangibile della sua vulnerabilità. Il primo attacco successivo che riesce effettivamente a colpirlo acquista una Forza notevolmente superiore. Questo effetto è visibile solo all'incantatore, sebbene della vulnerabilità possa beneficiare chiunque colpisca il bersaglio, e si dissolve quando il Marchio viene consumato o raggiunge la propria naturale scadenza."
wisdom: "Offensiva"
parameter: "Potenza"
image: "https://i.postimg.cc/sXXYbkvs/image.png"
values:
  - label: "Tipo"
    value: "Offensiva"
  - label: "Parametro"
    value: "Potenza"
  - label: "Forza"
    value: "200"
  - label: "Bersaglio"
    value: "Singolo"
  - label: "Raggio"
    value: "Vario"
  - label: "Fatica"
    value: "3"
  - label: "Durata"
    value: "Varia"
searchAliases:
  - "auravulneris"
  - "aura vulneris"
  - "maestria offensiva"
status: published
migration:
  status: migrated
  sources:
    - document: "Maestrie"
      section: "Maestrie Offensiva"
      item: "Aura Vulneris"
---

## Specifiche

**Applicazione del Marchio**
L'Evocatore sceglie un singolo bersaglio ed effettua il normale confronto di Destrezza previsto per colpirlo con una Maestria.
In caso di successo, l'essenza magica del bersaglio viene temporaneamente indebolita e, agli occhi del solo Evocatore, il suo corpo appare circondato da un vivido contorno rosso luminoso.
Il Marchio non provoca direttamente danni, Malus o perdita di Parametri: rende invece il bersaglio estremamente vulnerabile al primo attacco successivo che riesce effettivamente a colpirlo.
Ogni utilizzo di *Aura Vulneris* può applicare il Marchio a un solo bersaglio per volta.
L'applicazione del Marchio richiede 1 Azione Principale e consuma 3 Fatica.

**Forza del Marchio**
Il Marchio possiede una Forza base di 200, alla quale si aggiunge un Bonus determinato dal Livello della Maestria:
• *Livello I:* nessun Bonus
• *Livello II:* +50 Forza
• *Livello III:* +100 Forza
La Forza effettiva del Marchio viene calcolata al momento dell'applicazione secondo le normali regole previste per la Forza e rimane invariata fino alla sua dissoluzione.

**Aumento della Forza**
Finché il Marchio rimane attivo, il primo attacco singolo che va a segno contro il bersaglio beneficia di un aumento della propria Forza finale.
Può trattarsi di un Incantesimo offensivo, una Pozione offensiva, un attacco fisico oppure dell'attacco di una Creatura o Pianta.
Dopo aver calcolato normalmente la Forza dell'attacco, compresi tutti gli eventuali Bonus e Malus che la modificano, il risultato finale viene aumentato del:
• *Livello I:* +20%
• *Livello II:* +40%
• *Livello III:* +60%
La Forza così ottenuta viene poi utilizzata normalmente per calcolare eventuali danni o altri effetti dell'attacco.
L'aumento si applica indipendentemente da chi abbia sferrato l'attacco: può quindi beneficiarne l'Evocatore stesso oppure qualsiasi altro PG, PNG, Creatura o Pianta che colpisca il bersaglio.
Il Marchio viene consumato esclusivamente quando un attacco va effettivamente a segno. Un tentativo fallito, un colpo schivato o un attacco che non raggiunge il bersaglio non lo rimuovono.

**Attacchi validi**
Il Marchio può essere attivato esclusivamente da un attacco diretto rivolto specificamente contro il Bersaglio e dotato di una propria Forza.
Gli attacchi ad Area, gli effetti ambientali, i danni già in corso, le conseguenze indirette di un attacco precedente e gli effetti privi di Forza non consumano né beneficiano del Marchio.
Nel caso di un attacco composto da più colpi o effetti consecutivi derivanti dalla stessa Azione, l'aumento della Forza si applica soltanto al primo colpo che va effettivamente a segno. Il Marchio viene quindi immediatamente consumato e i colpi successivi vengono risolti normalmente.

**Durata**
Se nessun attacco riesce a colpire il bersaglio, il Marchio rimane attivo fino a:
• *Livello I:* 5 post dell'Evocatore
• *Livello II:* 3 post dell'Evocatore
• *Livello III:* 1 post dell'Evocatore
Alla scadenza della durata il Marchio si dissolve automaticamente senza produrre effetti.

**Marchi contemporanei**
L'Evocatore può mantenere attivi contemporaneamente fino a:
• *Livello I:* 3 Marchi
• *Livello II:* 2 Marchi
• *Livello III:* 1 solo Marchio
Ogni bersaglio deve essere marchiato attraverso un diverso utilizzo della Maestria, sostenendone ogni volta i normali costi di Fatica e Azioni.
Se l'Evocatore ha già raggiunto il limite massimo di Marchi attivi e tenta di applicarne uno nuovo, deve prima scegliere uno dei precedenti Marchi da dissolvere.

**Marchi sullo stesso Bersaglio**
Uno stesso Bersaglio non può essere soggetto contemporaneamente a più Marchi di *Aura Vulneris*, anche qualora questi siano stati applicati da Evocatori differenti.
Se un nuovo Marchio viene applicato con successo a un Bersaglio già marchiato, il precedente si dissolve e viene sostituito dal nuovo.
Gli aumenti di Forza, le durate e gli altri effetti di più Marchi non possono quindi sommarsi.

**Accorgersi del Marchio**
Il contorno luminoso generato da *Aura Vulneris* è visibile esclusivamente all'Evocatore. Il Bersaglio non può quindi accorgersi visivamente di essere stato marchiato.
Può tuttavia percepire l'alterazione della propria essenza magica tramite Tracciatura (Linguaggio Magico).
Immediatamente dopo essere stato colpito da *Aura Vulneris*, il Bersaglio può effettuare gratuitamente un tentativo di rilevazione ed ha successo se estrae un esito compreso tra 1 e Percezione + Livello Tracciante dopo aver lanciato:
• *Livello I:* 1d60
• *Livello II:* 1d50
• *Livello III:* 1d40
In caso di successo, il PG percepisce una forte anomalia magica aderente alla propria essenza e comprende di essere stato reso temporaneamente più vulnerabile agli attacchi.
Non conosce tuttavia la percentuale esatta di aumento della Forza né la durata residua del Marchio.

**Rimozione del Marchio**
Un PG che abbia individuato il Marchio tramite Tracciatura può tentare di dissolverlo utilizzando *Finite Incantatem*.
La Forza di *Finite Incantatem* viene confrontata con la Forza effettiva posseduta dal Marchio al momento della sua applicazione.
Se la Forza di *Finite Incantatem* è pari o superiore a quella del Marchio, *Aura Vulneris* viene dissolta immediatamente senza potenziare alcun attacco.
Se la Forza di *Finite Incantatem* è inferiore, il tentativo fallisce e il Marchio rimane attivo fino a quando viene consumato, sostituito, rimosso con successo oppure raggiunge la propria naturale scadenza.
Individuare il Marchio attraverso Tracciatura è necessario per poterlo bersagliare consapevolmente con *Finite Incantatem*.

Accorgersi della dissoluzione
Un Bersaglio che si sia precedentemente accorto del Marchio non percepisce automaticamente il momento in cui questo scompare.
Può verificare se l'alterazione sia ancora presente effettuando un nuovo tiro di Tracciatura (Linguaggio Magico), utilizzando lo stesso dado previsto dal Livello di *Aura Vulneris* che lo ha colpito e sostenendo il normale costo previsto per la Tracciatura.
In caso di successo comprende se l'anomalia magica è ancora presente oppure si è dissolta.
