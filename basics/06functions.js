// function saymyName(){
//     console.log("amaan");
//     console.log("anita");
// }
// saymyName()

// function addtwonumber(num1, num2){
//     console.log(num1+num2)
// }
// addtwonumber(4,5)

// function addtwonumber(a,b){
//     let result = a + b
//     return result    
// }
// const result1 = addtwonumber(4,5)
// console.log("result:",result1);

// function loginUser(username){
//     if(username == undefined){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUser("amaan"));
// // console.log(loginUser());

// function loginUser(username = "sam"){
//     console.log(username)
//     return `${username}`
// }
// loginUser()
// // console.log(loginUser("anita"))

// function calculatecardprice(num1){
//     return num1
// }
// console.log(calculatecardprice(200,400,500,2000));

//rest operator
// function calculatecardprice(...num1){
//         return num1
//     }
//     console.log(calculatecardprice(200,400,500,2000));

// function calculatecardprice(val1, val2, ...num1){
//     return num1
// }
// // console.log(calculatecardprice(200,300,400,500));

// // objects using functions

// const user = {
//     username: "anita",
//     prices:299
// }

// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username}, place is ${anyobject.place}`);
// }
// handleObject({
//     username: "anita",
//     place: "nainital"
// // })

// const myArray = [200,400,300,500]

// function returnsecondvalue(getArray){
//     return getArray[1]
// }
// console.log(returnsecondvalue(myArray));
// console.log(returnsecondvalue([200,300,500]));

//global & local scope in functions


// if(true){
//     let a = 50
//     const b = 20
//     var c = 30
// }
// console.log(c);


// var c = 100
// if(true){
//     var c = 30
//     console.log(c);
    
// }
// console.log(c);

//let
// let a = 300
// if(true){
//     let a = 100
//     console.log(a);
    
// }
// console.log(a);

// scope part2
// function one(){
//     const username = "anita"

//     function two(){
//         const website = "youtube"
//         console.log(username);
        
//     }
//     // console.log(website);
//     two()
// }
// one()

// if(true){
//     const username = "anita"
//     if (username === "anita"){
//         const website = "youtube"
//         console.log(username,website);
        
//     }
//     // console.log(website);
    
// // }
// // console.log(username);
// console.log(addone(50))
// function addone(num){
//     return num + 1;
// }
// console.log(addone(45))



// const addtwo = function (num){
//     return num + 10
// }
// console.log(addtwo(40));

//arrow functions

// const user = {
//     username: "anita",
//     age:"23",
//     welcomeMessage: function (){
//         console.log(`${this.username}, welcome to website `);
//         console.log(this);
        
        
//     }
// }
// user.welcomeMessage()
// user.username = "amaan"
// user.welcomeMessage()

// function chai(){
//     console.log(this);
//     const username = "anita"
//     console.log(this);
//     console.log(this.username);
// }
// chai()

// const chai = function (){
//     let username = "amaan"
//     console.log(this);
// }
// chai()

// // arrow functions
// const chai = () => {
//     let username = 'amaan'
//     console.log(this);
    
// }
// chai()

// const addtwo = (num1, num2) => num1 + num2;
// console.log(addtwo(4,5));

// const addone = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addone(5,4));

// const addthree = () => ({username: "anita"})
// console.log(addthree());

// const myArray = [2,4,5,6,7]
// myArray.forEach()
// myArray.forEach(()=>{

// })

// function chai(){
//     console.log(`db connected`);
// }
// chai()

//IIFE immediately evolked function expressions

// ( function chai(){
//     console.log(`db connected`);
    
// })();

// (()=>{
//     console.log(`db connected two`);
    
// })()

//must check this function after wards

// ((name) => {
//     console.log(`db connnected ${name}`);
    
// // })("amaan") 

// function one(){
//     console.log("this is one function");
    
// }
// function two (){
//     console.log('this is two functions');
    
// }
// function three(){
//     console.log('this is three functions');
    
// }
// one()
// two()
// three()

// function risk(){
//     console.log("this is inside the function")
// }

// risk()

// const riskdata = () =>{
//     console.log("this is arrow funcitons inside")
// }

// riskdata()

// function risk(){}

// const riskdata = () => console.log("this is inside arrow function")

// riskdata()

// function Handleonchange(a, b, num){
//     num = a + b
//     return num
// }

// console.log(Handleonchange(2,3))

// function onchagne2(){

// }

// //this is the function for value adding or multiplying
// const onchange  = (a,b,num)=> { // this is the line in here we are passing parameters
//  num = a + b // here we are adding the values
// return num  // here we are returning the value of num
// }

// console.log(onchange(4,5)) // here we are passing the arguments 


// function one(){
//     const data = "anita pujari"

//     console.log("this is the first function")

//     function two(){
//         console.log(data)
//         console.log("this is the data of second function")
//     }
//     two()
//     console.log("this is the first function")
// }

// one()

// function firstFunction(){
//     const data = 
//     {
//         "name":"anitapujari",
//         "age":"23",
//         "location":"haldwani"
//     }

//     console.log(data)

// }

// const secondFunction = () => {

//     const newData = [1,23,4,5,6,7,8]

//     console.log(newData)
// }

// secondFunction()

// function outer(){
//     console.log("outer function is calling")


//     function inner(){
//         console.log("inner function is calling")
//     }
//     inner()

// }

// outer()




