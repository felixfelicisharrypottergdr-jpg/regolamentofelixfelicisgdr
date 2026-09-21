---
id: "5d67113d-0ae5-500d-83e0-6c48c9970959"
slug: "bracconiere"
name: "Il Bracconiere"
description: "Il PG alleva Creature Magiche Illegale, maltratta e/o sperimenta incantesimi, pozioni ed altro su di esse."
category: "Virtuosa"
illegal: true
completion: false
levels:
  - name: "Livello Facile"
    action: "Il PG utilizza Remuvo su una Creatura al punto da farle male, volontariamente o meno."
    requirements:
      - "//"
    rewards:
      - "+2 PP da richiedere nella propria Lista della Spesa +1 Sinistri"
    ifCaught:
      - "Denuncia +1 Popolarità PG Magizoologi: -15 Prestigio"
    illegal: true
    completion: false
  - name: "Livello Medio"
    action: "Il PG alleva Creature Illegali nella propria Riserva, nella Riserva di qualcun altro, nella propria Valigia Magica o in quella di qualcun altro in un qualsiasi altro luogo, a prescindere dall'uso che ne fa. Il premio si riscatta ogni volta che, durante una role di Allevamento di una Creatura ONGame, il PG lancia i dadi previsti dal Regolamento Azioni Illegali, può riscattarlo anche se viene scoperto. Il premio non può essere riscattato se l'allevamento della Creatura avviene soltanto OFFGame."
    requirements:
      - "2 Sinistri"
    rewards:
      - "+5 PP da richiedere nella propria Lista della Spesa +2 Sinistri"
    ifCaught:
      - "Denuncia PG Magizoologi: -15 Prestigio"
    illegal: true
    completion: false
  - name: "Livello Difficile"
    action: "- Il PG maltratta ONGame una Creatura Magica trovata tramite Ricerca o appartenente ad una Riserva. - Il PG trova e sperimenta su almeno una o più Creature e Piante Magiche. Per riscattare il premio è sufficiente completare una delle due azioni."
    requirements:
      - "5 Sinistri"
    rewards:
      - "2 PP a post +5 Sinistri"
    ifCaught:
      - "Denuncia PG Magizoologi: -20 Prestigio"
    illegal: true
    completion: false
  - name: "Livello Estremo"
    action: "Il PG uccide con mano propria, volontariamente o involontariamente, una Creature Magica. Il premio non si riscatta se la Creatura muore per vecchiaia o per malattia."
    requirements:
      - "10 Sinistri"
    rewards:
      - "+15 PP da richiedere nella propria Lista della Spesa +7 Sinistri -3 Empatia permanente PG Magizoologi: -5 Empatia permanente"
    ifCaught:
      - "Denuncia PG Magizoologi: -30 Prestigio"
    illegal: true
    completion: false
searchAliases:
  - "bracconiere"
  - "il bracconiere"
status: published
migration:
  status: migrated
  sources:
    - document: "7. Giocare un PG Adulto"
      section: "Modalità di gioco per PG Adulti"
      item: "FantaWiz — Missioni Virtuosa — Il Bracconiere"
---
