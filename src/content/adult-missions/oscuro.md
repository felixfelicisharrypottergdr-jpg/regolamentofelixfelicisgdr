---
id: "92940987-19cb-58d7-a5bb-db7077bda233"
slug: "oscuro"
name: "L'Oscuro"
description: "Il PG utilizza le Arti Oscure o Pozioni Illegali contro un altro PG."
category: "Sinistra"
illegal: true
completion: false
levels:
  - name: "Livello Facile"
    action: "Il PG utilizza su un altro PG una Fattura o una Pozione Fatturante."
    requirements:
      - "//"
    rewards:
      - "+1 PP da richiedere nella propria Lista della Spesa +0,5 Sinistro"
    ifCaught: []
    illegal: false
    completion: false
  - name: "Livello Medio"
    action: "Il PG utilizza su un altro PG una Conoscenza Oscura Extra - Pozioni Illegali incluse - ad eccezione di Avada Kedavra."
    requirements:
      - "3 Sinistri"
    rewards:
      - "+3 PP da richiedere nella propria Lista della Spesa +1 Sinistri"
    ifCaught:
      - "Denuncia"
    illegal: true
    completion: false
  - name: "Livello Difficile"
    action: "Il PG utilizza su un altro PG una Conoscenza Oscura Avanzata o un Veleno."
    requirements:
      - "5 Sinistri"
    rewards:
      - "+5 PP da richiedere nella propria Lista della Spesa +2 Sinistri"
    ifCaught:
      - "-10 Prestigio Denuncia"
    illegal: true
    completion: false
  - name: "Livello Estremo"
    action: "Il PG utilizza su un altro PG l'Avada Kedavra. La missione si considera completata a prescindere che riesca o meno ad uccidere l'altro PG."
    requirements:
      - "20 Sinistri"
    rewards:
      - "+15 PP da richiedere nella propria Lista della Spesa +10 Sinistri -10 Empatia permanente"
    ifCaught:
      - "+20 Popolarità Prestigio = 0 Arresto"
    illegal: true
    completion: false
searchAliases:
  - "oscuro"
  - "l'oscuro"
status: published
migration:
  status: migrated
  sources:
    - document: "7. Giocare un PG Adulto"
      section: "Modalità di gioco per PG Adulti"
      item: "FantaWiz — Missioni Sinistra — L'Oscuro"
---

## Note e condizioni

> Non completano questa Missione i PG Esoteristi che insegnano le Arti Oscure legalmente . Con “legalmente” si intende un utilizzo delle Arti Oscure o delle Pozioni considerate illegali che avviene in un contesto autorizzato e regolamentato, ad esempio durante incarichi ufficiali, ricerche approvate o attività svolte per conto di istituzioni che ne consentano espressamente l’impiego. Al contrario, se un PG fa uso di tali pratiche contro un altro PG al di fuori di queste circostanze, con l’intenzione effettiva di arrecare danno, allora l’azione è considerata Illegale e la Missione può essere riscattata.
