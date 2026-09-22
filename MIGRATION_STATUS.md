# Stato della migrazione del Regolamento FELIX FELICIS

> **Aggiornamento audit — 21 settembre 2026:** la precedente certificazione di completezza è sospesa durante l’audit editoriale e funzionale. Il repository contiene gran parte del testo sorgente, ma sono emerse sottopagine parziali/placeholder e duplicazioni fra guide monolitiche e pagine granulari. Fare riferimento a `AUDIT_EDITORIALE_FUNZIONALE.md` per lo stato corrente.

Data audit iniziale: 21 settembre 2026.\nUltimo aggiornamento: 22 settembre 2026.

## Esito

La migrazione delle **fonti sorgente** è completa per la V1, fatte salve le due esclusioni deliberate definite nel brief del progetto. L'audit editoriale successivo ha però individuato e corretto alcuni residui di prototipo, collisioni di route e sottopagine inizialmente abbreviate. Per questo la completezza sorgente va distinta dalla **rifinitura editoriale/architetturale**, ancora in corso:

1. **Fabbricazione/Crafting generico di Oggetti ONGame**: escluso dalla V1.
2. **Catalogo dettagliato delle schede PNG**: resta esterno al sito nella V1.

Le regole relative ai PNG, alle interazioni, ai PNG di Hogwarts e ai relativi sistemi restano invece migrate; l'esclusione riguarda il catalogo dettagliato delle singole schede PNG.

## Matrice di copertura

| Fonte | Stato | Lotto principale |
| --- | --- | --- |
| 1. Le Regole del Gioco | Completa | PR #37 |
| 2. Parametri | Completa | PR #41 |
| 3. Le Conoscenze | Completa | PR #41 |
| 4. Guida agli Scontri | Completa | PR #41 |
| 5. Le Sapienze | Completa | PR #41 + integrazioni PR #27 |
| 6. Modalità di Gioco | Completa | PR #26 |
| 6. Giocare un PG Studente | Completa | PR #5–#17 |
| 7. Giocare un PG Adulto | Completa | PR #18, #19, #22 |
| 8. Vivere nel Mondo Magico | Completa per la V1 | PR #36 |
| 9. Ricerche Casuali | Completa | PR #39 |
| 10.1 Manuale di Incantesimi | Completa | PR #28 |
| 10.2 Altre Conoscenze Scolastiche | Completa | PR #27 |
| 10.3 Manuale di Divinazione | Completa | PR #25 + #29 |
| 10.4 Enciclopedia Medimagica | Completa | PR #40 |
| 10.5 Erbologia | Completa | PR #31 |
| 10.6 Magizoologia | Completa | PR #32 |
| 10.7 Pozionistica | Completa | PR #33 |
| 10.8 Tracciatura | Completa | PR #24 |
| 10.9 Ingredienti | Completa | PR #30 |
| Maestrie | Completa | PR #23 |

## Cataloghi strutturati migrati

- **36 Maestrie**.
- **212 Incantesimi**.
- **15 Altre Conoscenze Scolastiche**.
- **43 Tecniche Divinatorie**.
- **317 Ingredienti**.
- **92 Piante** dell'Erbario.
- **141 Creature** del Bestiario.
- **136 Pozioni**.
- **44 Malattie Magiche**.
- **102 Sintomi** Medimagici.
- **69 Missioni FantaHogwarts**.
- **100 Missioni FantaWiz**.
- **229 voci uniche del Prezzario** migrate come Oggetti strutturati.

## Contenuti regolamentari completi non ridotti a catalogo

Sono inoltre migrate integralmente le guide e le procedure associate, tra cui:

- PG Studente: creazione, Parametri, cariche, Piano di Studi, miglioramento, passaggi di anno, Borse di Studio, Coppa delle Case, vita e indagini a Hogwarts, Regolamento Scolastico, Quidditch, Club, Trama, Alfieri Rossi, Resistenza e FantaHogwarts.
- PG Adulto: creazione, Categorie Magiche, Parametri, Mestieri, Carriera e Prestigio, Locandieri, Luoghi di Maestria, Trama, Enclave, Aurora, Eventi di Categoria/Mestiere, CroNoTroSe, Nottetempo, Notizie e FantaWiz.
- Modalità di Gioco comuni: Free Role, Role Masterate, Eventi, Ambient, Quest, Trama, Sondaggi, Indizi e Classificazione degli Eventi.
- Regole di base: Valute, Dadi, Allineamenti, Bagaglio, Oggetti, PNG e interazioni, Popolometro, Razze e Staff.
- Mondo Magico: Commercio, Prezzari, Trasporti, Quidditch, Giochi Magici, Azioni Illegali, Leggi Magiche, Magisprudenza, Wizengamot e testi normativi.
- Manuali: guide complete di Incantesimi, Divinazione, Medimagia, Erbologia, Magizoologia, Pozionistica, Tracciatura e Ingredienti.
- Ricerche Casuali: tutte e nove le procedure.
- Parametri, Conoscenze, Sapienze e Guida agli Scontri: testo sorgente completo nelle pagine canoniche.

## Normalizzazioni e anomalie preservate

La migrazione non deve essere confusa con la revisione editoriale finale. Sono state applicate soltanto normalizzazioni necessarie e concordate, come **Elemental → Elementale** nel Manuale degli Incantesimi.

Le anomalie della fonte che non potevano essere corrette senza una decisione editoriale sono state conservate, ad esempio:

- duplicazioni o varianti divergenti nel Bestiario;
- una duplicazione nominale nel Glossario Ingredienti;
- nomi di Ingredienti non perfettamente coincidenti fra Manuali;
- eventuali sovrapposizioni o discrepanze esplicitamente presenti nelle tabelle sorgente.

Questi casi appartengono alla fase successiva di audit editoriale, non alla migrazione.

## Verifiche tecniche

I lotti di migrazione sono stati sottoposti alla pipeline GitHub con:

- preflight FELIX;
- controllo UUID e relazioni;
- controllo slug;
- build Astro/Starlight.

Il preflight è stato inoltre corretto affinché consideri relazioni soltanto gli UUID presenti nei veri campi relazionali YAML e non UUID casualmente contenuti negli URL delle immagini.

## Fase attuale

La migrazione sorgente è chiusa. È in corso l'**audit editoriale e funzionale**, tracciato in `AUDIT_EDITORIALE_FUNZIONALE.md`. Le attività successive sono:

1. audit editoriale delle anomalie preservate;
2. relazioni e backlink mancanti;
3. filtri e cataloghi;
4. architettura dell'informazione;
5. UX/UI estrema;
6. resa grafica aderente al render approvato;
7. responsive e iframe ForumFree;
8. verifica finale di ricerca, Pages CMS e manutenzione editoriale.

La completezza del contenuto non deve più essere sacrificata per semplificare la UI: ogni intervento successivo deve lavorare sopra questa base completa.
