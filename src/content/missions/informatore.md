---
id: ec1631c0-1657-519f-be09-a95bedc02997
slug: informatore
name: L'Informatore
description: Il PG che viene a sapere di un'azione illegale la denuncia ad uno dei Docenti o dei Prefetti.
category: Legale
illegal: true
completion: false
schoolYearOnly: true
levels:
  - name: Livello Facile
    action: Il PG che viene a sapere di un'azione illegale la denuncia ad un Docente, Prefetto o Caposcuola.
    requirements: ["//"]
    rewards: ["+2 PP da richiedere nella propria Lista della Spesa", "+2 Popolarità", "+2 Stima", "+2 Bontà", "+50 Punti Casa"]
    ifCaught: []
    illegal: false
    completion: false
    schoolYearOnly: true
  - name: Livello Facile Caotico
    action: Il PG denuncia, inventando o falsificando un accaduto, un altro PG ad un Docente, Prefetto o Caposcuola. Il Narratore adotterà i meccanismi che ritiene più opportuni per far scoprire al PNG se il PG mente.
    requirements: ["3 Malvagità", "12 Stima"]
    rewards: ["+3 PP da richiedere nella propria Lista della Spesa", "+2 Popolarità", "+2 Stima", "+2 Malvagità", "+50 Punti Casa"]
    ifCaught: ["+1 Popolarità", "-5 Stima", "- Punti Casa/Punizione"]
    illegal: true
    completion: false
    schoolYearOnly: true
searchAliases: [informatore, denuncia, azione illegale, docente, prefetto]
status: published
migration:
  status: revised
  sources:
    - document: 6. Giocare un PG Studente
      section: 5. Modalità di gioco per PG Studenti
      item: FantaHogwarts — Missioni Legali — L'Informatore
---

Il PG deve richiedere l'intervento del Narratore per muovere un PNG a cui denunciare l'accaduto.

Se l'accaduto è falso o inventato, l'azione si trasforma in **Caotica**.

I favoritismi della Carica Scolastica peggiorano quando interpellata direttamente: se Favorevole diventa Oggettiva, se Oggettiva diventa Sfavorevole, perché messa di fronte al fatto compiuto.
