---
id: "972fa490-463d-5220-89ae-f6239b74fd2c"
slug: "giocatoreazzardo"
name: "Il Giocatore d'Azzardo"
description: "Il PG gestisce o partecipa a scommesse illegali su qualsiasi cosa."
category: "Sinistra"
illegal: true
completion: false
levels:
  - name: "Livello Facile"
    action: "Il PG partecipa ad una scommessa illegale. Valgono anche quelle gestite dal Narratore tramite PNG."
    requirements:
      - "//"
    rewards:
      - "+2 PP da richiedere nella propria Lista della Spesa +0,5 Sinistro"
    ifCaught:
      - "Denuncia"
    illegal: true
    completion: false
  - name: "Livello Medio"
    action: "Il PG dà inizio ad una scommessa illegale."
    requirements:
      - "2 Sinistri"
    rewards:
      - "+3 PP da richiedere nella propria Lista della Spesa +1 Sinistri"
    ifCaught:
      - "Denuncia"
    illegal: true
    completion: false
  - name: "Livello Difficile"
    action: "Il PG scommette più di 200 Galeoni."
    requirements:
      - "//"
    rewards:
      - "+5 PP da richiedere nella propria Lista della Spesa +1,5 Sinistri"
    ifCaught:
      - "Denuncia"
    illegal: true
    completion: false
  - name: "Livello Estremo"
    action: "Il PG perde più di 1000 Galeoni in scommesse illegali."
    requirements:
      - "//"
    rewards:
      - "+7 PP da richiedere nella propria Lista della Spesa +2 Sinistri"
    ifCaught: []
    illegal: false
    completion: false
searchAliases:
  - "giocatoreazzardo"
  - "il giocatore d'azzardo"
status: published
migration:
  status: migrated
  sources:
    - document: "7. Giocare un PG Adulto"
      section: "Modalità di gioco per PG Adulti"
      item: "FantaWiz — Missioni Sinistra — Il Giocatore d'Azzardo"
---

## Note e condizioni

> Non è necessario che il PG vinca la scommessa per riscattare il premio.
