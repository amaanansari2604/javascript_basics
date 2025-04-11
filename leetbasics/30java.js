// 2667. Create Hello World Function
// Solved
// Easy
// Companies
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".

function createHelloWorld(){
    return function(...args){
        return "Hello World"
    }
}

const f = createHelloWorld()

console.log(f())
console.log(f(1,2,3))
console.log(f("anything"))
console.log(f({},null, 42))

// 2620. Counter
// Solved
// Easy
// Companies
// Hint
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

 

// Example 1:

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.

function createCounter(n){
    let counter = n;
    return function(){
        return counter++
    }
}

const counter = createCounter(-2)
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())


// 2704. To Be Or Not To Be
// Solved
// Easy
// Companies
// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 

// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.
// Example 2:

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".

function expect(val){
    return {
        toBe: function(expected){
            if(val===expected) return true;
            throw new Error ("Not Equal")
        },
        notToBe: function(expected){
            if(val !== expected) return true;
            throw new Error ("Equal")
        }
    }
}


