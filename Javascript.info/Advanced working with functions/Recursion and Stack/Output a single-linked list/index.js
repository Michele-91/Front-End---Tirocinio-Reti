let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

// Write a function printList(list) that outputs list items one-by-one.
// Make two variants of the solution: using a loop and using recursion.
// function printList(list) {
//     let temp = list;

//     while(temp) {
//         console.log(temp.value);
//         temp = temp.next;
//     }
// }

// function printList(list) {
//     console.log(list.value);
//     if(!list.next) return;
//     return printList(list.next);
// }

function printList(list) {
    console.log(list.value);
    if(list.next) printList(list.next);
}


printList(list);
