
Questa pagina è volta alla pratica della griglia CSS per la creazione
di un piccolo sito mock-up.
Di seguito altre funzionalità CSS di cui ho potuto fare pratica
con questo esercizio:
- html semantico
- flexbox
- object-fit
- git branching e merging
- scaricamento e utilizzo icone
- attribute selectors
- transform
- transition
- :hover, :active
- float
- scroll-behavior
- border-radius
- shape-outside
- opacity
- git tag

Riflessioni: 

- difficoltà nel resizing delle icone social, risolto impostando una percentuale come dimensione
  invece di usare rem
- avevo inizialmente intenzione di utilizzare la flexbox per rendere il menu responsive, dividendolo
  in due div anch'essi con proprietà "display: flex". Ho poi deciso invece di utilizzare le funzionalità della griglia, e aggiungere la proprietà "minmax(auto, 1fr)" per la barra all'interno della griglia 
  dell'header, così da poter semplificare sia struttura che stili.
- ho reso il contenuto della sezione Team responsive, il numero di colonne e la loro ampiezza è già
  impostato all'interno della griglia CSS, senza l'utilizzo di media queries