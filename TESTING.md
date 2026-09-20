# Come testare il prototipo FELIX FELICIS senza GitHub

Non serve collegare GitHub per il primo test locale.

## 1. Requisito

Serve **Node.js** installato sul PC. Per controllare, apri Terminale / PowerShell nella cartella del prototipo ed esegui:

```bash
node -v
npm -v
```

Se entrambi restituiscono un numero di versione, puoi continuare.

## 2. Estrarre il prototipo

Estrai `felix-felicis-prototype.zip` in una cartella normale, ad esempio sul Desktop.

## 3. Aprire il Terminale nella cartella

Su Windows 11 puoi aprire la cartella, fare clic destro in uno spazio vuoto e scegliere **Apri nel Terminale**. In alternativa apri PowerShell e usa `cd` per entrare nella cartella.

## 4. Installare le dipendenze

Solo la prima volta:

```bash
npm install
```

Serve una connessione internet.

## 5. Test rapido del sito

```bash
npm run dev
```

Il terminale mostrerà un indirizzo locale, normalmente:

```text
http://localhost:4321/
```

Aprilo nel browser.

In questa modalità prova soprattutto:

- Home e sidebar;
- Magizoologia → Fiducia / Domesticazione;
- Bestiario;
- filtri del Bestiario e link condivisibile dei filtri;
- Nundu → Nundacea / Saliva di Nundu;
- Pozionistica → Pozionario → Vaccino AntiNundux +;
- Ingredienti collegati alla Pozione;
- Maestrie.

## 6. Test della ricerca globale

Pagefind genera l'indice durante la build. Per testare davvero la ricerca esegui:

```bash
npm run build
npm run preview
```

Apri l'indirizzo indicato dal terminale e prova almeno:

```text
Nundu
Fiducia
fare amicizia con una creatura
magizologia
fiato tossico
AntiNundux
vaccino nundacea
Germoglio di Bubotubero
```

La ricerca deve poter trovare sia corrispondenze esatte sia alias editoriali.

## 7. Cosa NON puoi ancora testare senza GitHub

Il flusso **Pages CMS → modifica → commit → GitHub Pages** richiede l'accesso a GitHub e verrà testato più avanti.

Puoi però aprire e navigare l'intero frontend locale senza GitHub.

## 8. Se qualcosa non funziona

Non cercare di correggere il codice. Mandami:

1. il comando che hai eseguito;
2. il messaggio di errore completo del Terminale;
3. se utile, uno screenshot della pagina.

Così correggiamo il prototipo senza introdurre modifiche manuali non tracciate.


## Manuale degli Incantesimi

Apri `/manuali/incantesimi/` e verifica:

- ricerca locale per nome/alias;
- filtri Famiglia, Tipo, Parametro, Grado di Conoscenza e Anno scolastico;
- URL condivisibile dopo l’applicazione dei filtri;
- schede `Expelliarmus`, `Bombarda`, `Incendio`, `Wingardium Leviosa`, `Sonorus`, `Quietus`;
- `Quietus` deve mostrare **Annulla → Sonorus**;
- `Sonorus` deve mostrare automaticamente **Può essere annullato da → Quietus**.

Query globali utili:

- `disarmare` → Expelliarmus;
- `amplificare voce` → Sonorus;
- `controincantesimo sonorus` → Quietus;
- `distruggere porta` → Bombarda;
- `bruciare` → Incendio.

## Nuovo percorso Giocare

Quando il prototipo verrà eseguito su GitHub, prova anche:

- `Giocare → Le Role → Free Role`;
- `Giocare → Le Role → Role Masterate`;
- `Giocare → Le Azioni`;
- `Giocare → Dadi e risultati`;
- `Giocare → Guida agli Scontri → Turnazione`;
- i link da **Destrezza negli Scontri** verso Parametri Fisici e da **Forza delle Conoscenze** verso Conoscenze/Parametri.

Query di ricerca utili: `role masterata`, `cosa conta come azione`, `chi agisce prima`, `reazione`, `forza conoscenze`.

## Test Ricerche Casuali e Azioni Illegali

Quando il sito sarà su GitHub, verificare almeno:

- ricerca `ricerca crimini` → pagina dedicata;
- ricerca `essere scoperti` → Azioni Illegali Generiche;
- ricerca `Periculum` → Fuga ed intervento delle autorità;
- navigazione Ricerca Creature → Bestiario e Ricerca Piante → Erbario;
- distinzione visibile fra scoperta del misfatto e Riconoscimento del PG;
- nota di revisione sul rapporto tra Ricerca Crimini e Azioni Illegali chiaramente visibile senza presentarla come regola definitiva.
