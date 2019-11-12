Riflessioni sull'esercizio:

   Ho dato per scontato che non dovessi modificare il contenuto e la 
   struttura della pagina HTML (a parte l'ultima parte). Non mi era ben chiaro come tenere tutti i
   div di primo livello sulla stessa linea e al tempo stesso far in modo
   che uno diventasse una sorta di menu di navigazione. Per questa ragione
   ho creato due versioni, una con un menù laterale, una con un menù
   orizzontale (quest'ultimo è anche la versione che adempie alle richieste
   dell'ultima parte dell'esercizio).
   Avevo inizialmente semplicemente reso body più grande del viewport, in modo
   da permettermi di scorrere in basso la pagina. Ho successivamente deciso cmq di aggiungere
   elementi HTML.
   Seconda versione è diversa anche nell'utilizzo di :not, e utilizza flexbox all'interno del menù.
   Ho poi spostato, o "floatato" l'ultimo div di primo livello verso destra.
   Ho modificato i tag <li> del menu in tag <a>. Non ho inserito <a> all'interno di <li> perché avrebbe rotto
   troppo il codice e richiesto ulteriore tempo per sistemare la parte css.

   La terza versione è responsive.
   Ho modificato le dimensioni di body da 1200px, quindi una dimensione fissa, a 100% del suo contenitore (html),
   e 110% nel media queries perché il bordo dei div di primo livello rompeva leggermente il layout.
   Attraversata verso il basso la soglia degli 800px, viene modificato il layout della pagina, e la dimensione
   dei font all'interno del menu e dei paragraphi nei div aumentata per rendere più agevole la lettura.