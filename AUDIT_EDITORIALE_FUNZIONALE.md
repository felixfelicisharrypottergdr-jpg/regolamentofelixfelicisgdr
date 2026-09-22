# Audit editoriale e funzionale — FELIX FELICIS

Data di apertura audit: 22 settembre 2026.

Questo è un registro vivo. Gli errori **funzionali o di codice** vengono corretti automaticamente quando la soluzione è univoca. Le anomalie **editoriali o regolamentari** vengono invece registrate senza scegliere o riscrivere la regola al posto dello Staff.

## Stato funzionale

L'audit pre-build corrente censisce **168 documenti**, **1.616 file di contenuto** e **1.632 route note**.

Dopo i primi fix risultano:

- nessuna route documentale duplicata;
- nessun link Markdown interno verso route inesistenti;
- nessun UUID duplicato o riferimento UUID inesistente;
- nessun `migration.status: to_migrate`;
- nessun `prototypeExcerpt: true`;
- nessuna frase residua che annunci una futura migrazione;
- build Astro e deploy GitHub Pages riusciti.

Il controllo delle route ora include anche le pagine Astro statiche, oltre ai documenti Starlight e alle collection strutturate.

### Audit dell'HTML finale

È stato aggiunto un secondo controllo eseguito **dopo la build**. Verifica l'HTML realmente pubblicato e fallisce la pipeline per:

- destinazioni locali inesistenti;
- frammenti/ancore inesistenti;
- link interni che bypassano il `base` di GitHub Pages.

Registra inoltre warning su `lang`, `title` e immagini prive di `alt`.

Il primo controllo manuale del pacchetto renderizzato aveva individuato tre difetti funzionali ora corretti:

1. il link “Salta ai contenuti” della Home puntava a `#_top`, assente nella Home personalizzata;
2. la pagina Trasporti conteneva due vecchi indici con 18 link a frammenti non più presenti dopo la suddivisione dei singoli Trasporti in sottopagine;
3. l'indice di Regole Generali puntava a `#principi`, che non veniva generato a causa di un confine Markdown errato.

## P0 editoriale — canonicità duplicata

Il problema editoriale più importante attualmente confermato non è una mancanza di migrazione, ma la presenza della **stessa regola in due luoghi canonici concorrenti**.

Il confronto per righe significative mostra:

| Sistema | Pagina autonoma confrontata con il monolite | Sovrapposizione esatta |
| --- | --- | ---: |
| Magizoologia | Domesticazione | 96% |
| Magizoologia | Fiducia | 95% |
| Commercio | Acquistare Merci Magiche | 100% |
| Commercio | Vendere Merci Magiche | 100% |
| Quidditch | Quidditch ad Hogwarts | 100% |
| Quidditch | Quidditch tra PG Adulti | 100% |
| Leggi/Magisprudenza | Iniziare una Causa ONGame | 100% |
| Leggi/Magisprudenza | Struttura del Processo | 100% |
| Leggi/Wizengamot | Partecipare ad un Processo | 100% |

Queste sottopagine non sono semplici approfondimenti: in molti casi duplicano letteralmente blocchi della pagina principale. Finché entrambe le versioni restano editabili, una futura modifica può aggiornare una copia e lasciare l'altra indietro.

**Da decidere in architettura dell'informazione:** per ciascun sistema va scelto un solo luogo canonico. L'altra versione dovrà diventare una landing/rimando oppure il monolite dovrà essere realmente suddiviso senza duplicazioni.

## P1 editoriale — pagine monolitiche

Sono attualmente segnalate **24 pagine oltre 30.000 caratteri**. Le più estese includono:

- Mondo Magico / Medimagia: circa 117.000 caratteri;
- Leggi Magiche: circa 110.000;
- Sintomatologia: circa 92.000;
- Magizoologia: circa 81.000;
- Pozionistica: circa 78.000;
- Quidditch: circa 73.000;
- Meccaniche di gioco: circa 70.000.

La lunghezza non è di per sé un errore. Diventa un problema quando contiene più sistemi autonomi, produce duplicazioni con pagine figlie o rende difficile raggiungere una singola regola.

## P1 editoriale — gerarchia dei titoli

L'audit segnala **9 pagine con più H1 nel corpo**, fra cui Regole Generali, Pozionistica, Magizoologia, Medimagia e Sintomatologia.

Segnala inoltre **8 salti H2 → H4** nelle Ricerche Casuali. Questi casi vanno normalizzati quando si riorganizzeranno i contenuti: possono alterare indice di pagina, accessibilità e gerarchia visiva.

La duplicazione identica degli H1 in Regole Generali viene corretta subito perché è solo un residuo di markup, non una modifica della regola.

## P1 editoriale — possibili parole incollate

La conversione delle fonti ha lasciato candidati che richiedono revisione contestuale. Alcuni sono nomi propri legittimi, ma altri sembrano refusi di migrazione, ad esempio:

- `IncantesimoFianto`;
- `apprendereConoscenze`;
- `dallaGuida`;
- `CategorieMagiche`;
- `DifensoriSe`;
- `AlleyValli`;
- `qualiAffaticamento`;
- `FantaHogwartse`;
- `PossibilitàAggiungere`;
- `ClassificazioneXXXXX`.

Non vengono corretti automaticamente: per ciascuno va controllata la frase originale e la fonte.

## Dipendenze esterne

Il regolamento contiene attualmente link ForumFree in **9 documenti**, principalmente verso:

- generatori PG;
- Smistamento;
- Club Scolastici;
- Notizie da Hogwarts;
- sezioni PNG/informazioni;
- Alfieri Rossi.

Sono collegamenti intenzionali, ma costituiscono dipendenze esterne da mantenere sotto controllo. In una fase successiva si deciderà quali devono restare sul forum e quali informazioni devono essere internalizzate nel sito-libro.

## Regola operativa dell'audit

1. **Codice univocamente errato:** correggere e testare automaticamente.
2. **Duplicazione della stessa regola:** segnalare e scegliere prima il luogo canonico.
3. **Contraddizione fra due regole:** non scegliere automaticamente; confrontare le fonti.
4. **Anomalia presente nella fonte:** conservarla fino a decisione Staff.
5. **Refuso di conversione:** verificare il contesto e la fonte prima di correggere.
6. **Miglioramento UX/IA:** registrarlo ora e implementarlo nella fase dedicata, salvo che blocchi la consultazione.
