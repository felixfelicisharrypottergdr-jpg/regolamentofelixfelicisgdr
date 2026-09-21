---
id: 3387fe39-6baf-5434-9f63-392ea73cf1ad
slug: reporter
name: Il Reporter
description: Il PG si improvvisa giornalista intervistando i suoi compagni e/o scrivendo articoli su di loro o su ciò che accade fra le mura di Hogwarts.
category: Neutrale
illegal: false
completion: false
schoolYearOnly: false
levels:
  - name: Livello Facile
    action: Il PG scrive un articolo positivo su uno dei PNG di Hogwarts. Essi non possono essere mossi dai PG per essere intervistati. Se gli articoli puntano a denigrare il PNG, in forma anonima o meno, l'azione si trasforma in Caotica.
    requirements: ["//"]
    rewards:
      - +2 PP da chiedere nella propria Lista della Spesa
      - +1 Popolarità se l'articolo non è anonimo
      - +1 Bontà o Malvagità
    ifCaught: []
    illegal: false
    completion: false
    schoolYearOnly: false
  - name: Livello Facile Caotico
    action: Il PG scrive un articolo denigratorio su uno dei PNG di Hogwarts.
    requirements:
      - 3 Malvagità
    rewards:
      - +3 PP da chiedere nella propria Lista della Spesa
      - +1.5 Popolarità se l'articolo non è anonimo
      - +1.5 Malvagità
    ifCaught: []
    illegal: false
    completion: false
    schoolYearOnly: false
  - name: Livello Medio
    action: Il PG scrive un articolo su un avvenimento scolastico.
    requirements: ["//"]
    rewards:
      - +3 PP da chiedere nella propria Lista della Spesa
      - +2 Popolarità se l'articolo non è anonimo
      - +2 Bontà o Malvagità
    ifCaught: []
    illegal: false
    completion: false
    schoolYearOnly: false
  - name: Livello Difficile
    action: Il PG scrive un articolo su un PG Giocante. Se l'articolo viene pubblicato a seguito di un'intervista ruolata ONGame, il PG Reporter guadagna anche il premio extra.
    requirements: ["//"]
    rewards:
      - +3 PP da chiedere nella propria Lista della Spesa (+2 PP extra se a seguito di intervista)
      - +2 Popolarità al PG Reporter se l'articolo non è anonimo
      - +2 Popolarità al/ai PG dell'articolo se viene nominato
      - +1 Bontà o Malvagità
    ifCaught: []
    illegal: false
    completion: false
    schoolYearOnly: false
  - name: Livello Difficile Caotico
    action: Il PG denigra all'interno dell'articolo o falsifica negativamente le parole del PG intervistato.
    requirements:
      - 5 Malvagità
    rewards:
      - +3 PP da chiedere nella propria Lista della Spesa (+2 PP extra se a seguito di intervista)
      - +2.5 Popolarità al PG Reporter se l'articolo non è anonimo
      - +2.5 Popolarità al/ai PG dell'articolo se viene nominato
      - +2 Malvagità
    ifCaught: []
    illegal: false
    completion: false
    schoolYearOnly: false
searchAliases: [reporter, giornalista, articolo, intervista]
status: published
migration:
  status: revised
  sources:
    - document: 6. Giocare un PG Studente
      section: 5. Modalità di gioco per PG Studenti
      item: FantaHogwarts — Missioni Neutrali — Il Reporter
---

Il PG che scrive articoli denigratori su altri PG in forma anonima, o che cambia le originali parole dell'intervistato, trasforma la Missione in **Caotica**.
