# Incorporamento nel forum — contratto full viewport

Il sito del Regolamento è progettato **desktop-first e responsive**. Non viene costruito dentro un contenitore da 700px e non conosce ForumFree: usa semplicemente tutto il viewport che il browser gli assegna.

Quando il Regolamento verrà mostrato in una pagina personalizzata del forum, la pagina ospite dovrà quindi dare all'`iframe` **tutta la superficie disponibile**. Il sito dentro l'iframe adatterà automaticamente header, sidebar, contenuto, filtri e versione mobile alle dimensioni effettive dell'iframe.

## Variante full viewport

```html
<style>
  html, body {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    height: 100% !important;
    overflow: hidden !important;
  }

  #felix-regolamento-frame {
    position: fixed;
    inset: 0;
    display: block;
    width: 100vw;
    height: 100dvh;
    border: 0;
    background: #0c1718;
  }
</style>

<iframe
  id="felix-regolamento-frame"
  src="URL_GITHUB_PAGES_DEL_REGOLAMENTO/"
  title="Regolamento FELIX FELICIS"
  loading="eager">
</iframe>
```

## Se si vuole mantenere una barra del forum sopra al Regolamento

Si userà invece una misura sottratta al viewport, per esempio:

```css
#felix-regolamento-frame {
  width: 100vw;
  height: calc(100dvh - var(--altezza-header-forum));
}
```

La misura reale verrà definita quando avremo l'HTML/CSS della pagina del forum.

## Importante

- Il **full viewport riguarda l'iframe**, non la larghezza di lettura del testo: il sito può usare l'intera finestra per sidebar e navigazione mantenendo una colonna di testo leggibile.
- Non verranno usate dimensioni fisse tipo `width="700"`.
- Su desktop il sito conserverà sidebar e strumenti persistenti; su viewport stretti userà i comportamenti responsive di Starlight/FELIX.
- L'incorporamento finale va provato sul vero URL GitHub Pages e sulla vera pagina ForumFree: le policy di framing dipendono anche dagli header HTTP dell'hosting e dal browser.
