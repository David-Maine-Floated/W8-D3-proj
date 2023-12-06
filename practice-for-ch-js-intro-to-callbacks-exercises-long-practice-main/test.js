class Clock {
    constructor() {
        let timeObj = new Date()
        this.seconds = timeObj.getSeconds();
        this.minutes = timeObj.getMinutes();
        this.hours = timeObj.getHours();
    }

    printTime = () => {
        let time = `${this.hours}:${this.minutes}:${this.seconds}`
        console.log(time)
    }

    _tick = () => {
        this.seconds++;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
        }
        if (this.minutes === 60) {
            this.minutes = 0;
            this.hours++;
        }
        if (this.hours === 13) {
            this.hours = 1;
        }
        this.printTime()
    }
}



const clock = new Clock()

// setInterval(clock._tick, 1000)


// const readline = require("readline");
// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// function addNumbers(sum, numsLeft, completionCallback) {
//     if (numsLeft === 0) {completionCallback(sum)}
//     if (numsLeft > 0) {
//         reader.question('Enter a number betch ', response => {
//             input = parseInt(response)
//             sum += input 
//             console.log(sum)
//             addNumbers(sum, numsLeft - 1, completionCallback)
//         })

//     }
// }


// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


// function myBind(context) {

// }
Function.prototype.myBind = function(context) {
    originalFunction = this; 
    return function() {
        originalFunction.apply(context);
    }
};



// function myBind(contex, func) {
//     console.log(context)

//     return () => {
//         Function.prototype.apply(context, [])
//         // Function.prototype.apply(context, [])
//     }
// }



// Function.prototype.myBind = function (context) {
//   // 'this' refers to the function on which myBind is called
//   const originalFunction = this;

//   // Return an arrow function that captures 'this' and 'context'
//   return () => {
//     // Inside the arrow function, call apply on the original function
//     // with 'context' as the value of 'this'
//     originalFunction.apply(context);
//   };
// };




// class Lamp {
//   constructor() {
//     this.name = "a lamp";
//   }
// }

// const turnOn = function() {
//   console.log("Turning on " + this.name);
// };

// const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"


const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




function askIfGreaterThan(el1, el2, callback) {
    reader.question(`is ${el1} > ${el2}  `, result => {callback(result)} )
}

function innerBubbleSortLoop(arr, i, madeAnySwaps = false, outerBubbleSortLoop) {
    if (i < arr.length  - 1) {
        askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan) {
            if (isGreaterThan === 'yes') {
                madeAnySwaps = true; 
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            }
            
            // console.log('innerbubblsortcall')
            // console.log(madeAnySwaps)
            innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)
        }) 
    } else if (i === (arr.length - 1)) {
        // console.log('else', madeAnySwaps)
        outerBubbleSortLoop(madeAnySwaps)
    }
}


function absurdBubbleSort(arr, sortCompletionCallback) {
    // console.log('hello')
    outerBubbleSort(true)
    function outerBubbleSort(madeAnySwaps) {
        // console.log('hello')
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr, i = 0, false, outerBubbleSort);
        } else {
            sortCompletionCallback(arr)
        }
    }
}

absurdBubbleSort([1,3,4,8,10,2], function(arr) {console.log(arr)})


