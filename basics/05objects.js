// const mysymbol = Symbol("key1")

// const jsuser = {
//     name: "anita",
//     "full_name": "anita pujari",
//     age: 23,
//     [mysymbol]: "mykey1",
//     email: "anita@gmail.com",
//     city:"jaipur"
// }
// // console.log(typeof jsuser.name);
// // console.log(jsuser["name"]);
// // console.log(jsuser.full_name);
// // console.log(jsuser[mysymbol]);

// // Object.freeze(jsuser)
// // jsuser.email = "amaan@gmail.com"
// // console.log(jsuser.email);
// // console.log(jsuser);

// // jsuser.greeting = function(){
// //     console.log("hello user");
    
// // }
// // jsuser.greetingtwo = function(){
// //     console.log(`hello user, ${this.name}`);
    
// // }

// // jsuser.greeting()
// // jsuser.greetingtwo()

// const tinderuser = new Object()
// tinderuser.id = "12"
// tinderuser.name = "sam"
// tinderuser.isloggedin = false
// // console.log(tinderuser);

// const regularuser = {
//     email:"some@example.com",
//     full_name:{
//         userfullname:{
//             firstname:"amaan",
//             lastname:"ansari"
//         }
//     }}
//     // console.log(regularuser.full_name.userfullname.firstname);

//     const obj1 = {1:"a", 2:"b"}
//     const obj2 = {3:"c", 4:"d"}
//     const obj3 = {5:"e", 6:"f"}

//     // const obj4 = {obj1,obj2,obj3}

//     // console.log(obj4);
    
//     // const obj6 = {...obj1,...obj2,...obj3}
//     // console.log(obj6);


// console.log(tinderuser);
// console.log(Object.keys(tinderuser)); //gives keys of object
// console.log(Object.values(tinderuser)); //gives values of object
// console.log(Object.entries(tinderuser)); // gives no. of enteries in the object

// console.log(tinderuser.hasOwnProperty('isloggedin')); //is this key or value exist or not

// const users = [
//     {
//         id:'1',
//         email:'amaan@gmail.com'
//     },
//     {
//         id:'2',
//         email:'anita@gmail.com'
//     },
//     {
//         id:'3',
//         email:'rosh2gmail.com'
//     }
// ]
// console.log(users[0]);
// console.log(users[1].email);

//destructuring of object

// const course = {
//     coursename: "js hindi",
//     price:999,
//     courseteacher:"aubhav sir"
// }
// const {courseteacher:teacher} = course
// console.log(teacher);
// console.log(course.courseteacher);

 // apis can be object & arrays

//  [
//     {},
//     {},
//     {},
//     {}
//  ]

// const sample1 = "anita"
// const value = true
// console.log(sample1)

// if(value){
//     const data = "this is my data"
//     console.log(data)
//     console.log(sample1)

// }

// function anita(){
//     const script = " this is the script data that i'm calling"
//     console.log(script)
//     console.log(sample1)

// }
// anita()

// console.log(sample1)



    
    

    