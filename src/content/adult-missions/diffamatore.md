---
id: "214184d2-b7f0-5222-b2c1-bbc375c91aa6"
slug: "diffamatore"
name: "Il Diffamatore"
description: "Il PG danneggia gravemente la reputazione o il prestigio di un PG diffondendo notizie disonorevoli e false tramite dialoghi con altri PG o articoli della Gazzetta del Profeta."
category: "Virtuosa"
illegal: true
completion: false
levels:
  - name: "Livello Facile"
    action: "Il PG Diffamatore diffama un altro PG durante un discorso con almeno altri 5 PG , escluso il proprio ed eventuali PG Giornalisti. Il malus di Prestigio che ottiene il PG Diffamato corrisponde alla somma di Popolarità/2 e Prestigio dell'Adulatore diviso 10 e diviso 2 [(Popolarità/2+Prestigio Diffamatore/10)/2]."
    requirements:
      - "//"
    rewards:
      - "PG Diffamatore: +3 PP da richiedere nella propria Lista della Spesa; +1 Sinistro; +1 Popolarità PG Diffamato: -Prestigio da formula in Livelli; +2 Popolarità"
    ifCaught:
      - "Possibile Denuncia dal PG Diffamato"
    illegal: true
    completion: false
  - name: "Livello Medio"
    action: "Il PG Diffamatore è un Giornalista e pubblica un Articolo in seguito ad un'intervista con il PG Diffamato. Il malus di Prestigio che ottiene il PG Diffamato corrisponde alla somma di Popolarità/2 e Prestigio del PG Diffamatore Giornalista diviso 10, diviso 2. [(Popolarità/2+Prestigio PG Diffamatore Giornalista/10)/2]."
    requirements:
      - "2 Sinistri PG Giornalista"
    rewards:
      - "PG Diffamatore Giornalista: +5 PP da richiedere nella propria Lista della Spesa; +2 Sinistro PG Diffamato: +Prestigio da formula in Livelli; +2 Popolarità"
    ifCaught:
      - "PG Diffamatore Giornalista: -3 Prestigio; Possibile Denuncia dal PG Diffamato PG Diffamato: Non perde Prestigio"
    illegal: true
    completion: false
searchAliases:
  - "diffamatore"
  - "il diffamatore"
status: published
migration:
  status: migrated
  sources:
    - document: "7. Giocare un PG Adulto"
      section: "Modalità di gioco per PG Adulti"
      item: "FantaWiz — Missioni Virtuosa — Il Diffamatore"
---

## Note e condizioni

> Le notizie devono essere false in maniera oggettiva, non soltanto secondo la percezione del PG.
