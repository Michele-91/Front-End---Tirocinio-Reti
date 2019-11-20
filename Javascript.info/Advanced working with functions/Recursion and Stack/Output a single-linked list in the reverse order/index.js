// Output a single-linked list from the previous task "Output a single-linked list" in the reverse order.
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

// Make two solutions: using a loop and using a recursion.
function printReverse(list) {
    let arr = [];
    let tmp = list;

    while(tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for( let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
    // console.log(arr.reverse().join(' \n'));
}


// function printReverse(list) {
//     if(list.next) {
//         printReverse(list.next);
//     }
//     console.log(list.value);
// }

printReverse(list);