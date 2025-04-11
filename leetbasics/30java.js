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

