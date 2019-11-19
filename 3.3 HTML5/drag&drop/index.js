  /* events fired on the draggable target */
  document.addEventListener("drag", function( event ) {

}, false);

// at the beginning of the drag event
document.addEventListener("dragstart", function( event ) {
    // store a ref. on the dragged elem
    dragged = event.target;

    event.target.style.opacity = .5;
}, false);

// at the end of the drag event
document.addEventListener("dragend", function( event ) {
    event.target.style.opacity = "";
}, false);

 /* events fired on the drop targets */
 document.addEventListener("dragover", function( event ) {
    // prevent default to allow drop
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function( event ) {
    // highlight potential drop target when the draggable element enters it
    if ( event.target.className == "dropzone" ) {
        event.target.style.transform = 'translateY(-30px)';
        event.target.style.background = "yellow";
    }

}, false);

document.addEventListener("dragleave", function( event ) {
    // action on potential drop target when the draggable element leaves it
    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "white";
        // event.target.innerHTML = '';
        event.target.style.width = dragged.style.width;
        event.target.style.height = dragged.style.width;
        // event.target.style.border = '0';
    }

}, false);

document.addEventListener("drop", function( event ) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if ( event.target.className == "dropzone" ) {
        // event.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        // dragged.remove();
        event.target.appendChild( dragged );
        console.log(dragged.style);
    }
  
}, false);