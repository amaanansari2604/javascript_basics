// for (let i = 0; i < 10 ; i ++){
//     console.log(i);
// }

// for (let i = 0; i<10; i++){
//     const element = i;
//     if(element == 5){
//         console.log("5 is best no.");
        
//     }
//     console.log(element);
    
// }

// for ( let i = 0; i<=10; i++){
//     // console.log(`outer loop:${i}`);
    
//     for(let j = 0; j <= 10; j++){
//         // console.log(`inner loop:${j}`);
//         console.log(i + "x" + j + "=" + i*j);
        
        
//     }
    
// }

// let myArr = ["flash", "batman", "superman"]

// for ( let index = 0; index < myArr.length; index++){
//     const element = myArr[index]
//     console.log(element);
    
// }

// for ( let index = 1; index <= 20; index++){
//     if(index == 5){
//         console.log(`detected 5`)
//         break;
//         continue;
        
//     }
//     console.log(`value of i is:${index}`);
// }

//while loop
// while(condition){
//     print statement 
//     increment
// }

// let index = 0
// while(index<=10){
//     console.log(`value of index:${index}`);
//     index = index + 2
// }

// let i = 0
// while(i<=20){
//     console.log(`value of i : ${i}`);
//     i = i + 1
    
// }

// let myArray = ["flash", "batman","superman"]
// let arr = 0
// while(arr<myArray.length){
//     console.log(`value of ${myArray[arr]}`);
//     arr++
// }

//do while loop
// do{statement 
//     increment
// }
// while(condition)

// let score=0
// do{
//     console.log(`score:${score}`);
//     score = score + 1
    
// }
// while(score<=10)

// const arr = [1,2,3,4]
// for(const num of arr){
//     console.log(`${num}`);
// }

// const greeting = "hello world"
// for(const greet of greeting){
//     console.log(`each char is ${greet}`);
// }

// const number = [7,7,8,9,8,7,8,7,8,7,7]
// for(const num of number){
//     console.log(`these are number:${num}`);
    
// }

// maps

// const map = new Map()
// map.set('IN','INDIA')
// map.set('USE','UNITED STATES')
// map.set('Fr','France')
// map.set('IN','INDIA')
// // console.log(map.get('IN'));
// // console.log(map);

// for(const [key,value] of map){
//     console.log(key,':',value);
    
// }

//for-in loop for object
// const myobject = {
//     js:'javascript',
//     cpp:'c++',
//     rb:'ruby',
//     swift:'swift by apple'
// }

// for(const key in myobject){
//     console.log(`${key} shortcut is for ${myobject[key]}`);
    
// }

// const programming = ['js','rb','py','java','cpp']
// for(const key in programming){
//     console.log(programming[key]);
    
// }

//callback function inme function name pass nhi hoga bs props m variable pass krayenge
// const coding = ['js','ruby','java','python','cpp']
// coding.forEach(function(val1){
//     console.log(val1);
    
// })
// coding.forEach((val)=>{
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) =>{
//     console.log(item,index,arr);
// } )

// const myCoding = [
//     {languageName:"javascript", languagefile:"js"},
//     {languageName:"python", languagefile:"py"},
//     {languageName:"c++", languagefile:"cpp"},
//     {languageName:"java", languagefile:"j"},
//     {languageName:"cascading", languagefile:"css"},
//     {languageName:"hypertext", languagefile:"html"},

// ]
// myCoding.forEach((item)=>{
//     console.log(item.languagefile);
    
// })

//filter map and reduce

// const coding = ['js','ruby','java','python','cpp']

// const values = coding.forEach((item)=>{
//         return item // this return returns undefines value which meand forEach always return undefined value
// })
// console.log(values);

// //filter  - it is a callback function use return
// const myNums = [1,2,3,4,5,6,7]
// // const newNums = myNums.filter((num)=> num>4)
// // console.log(newNums);

// const mynewNums = myNums.filter((num)=>{
//     return num>4
// })
// console.log(mynewNums);

// const myitems = [1,2,1,4,7,8,4,9,4,8,7,6]
// const newNums = []
// myitems.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {title:'books',genre:'science',publish:'2011',addition:'2016'},
    {title:'books',genre:'history',publish:'1452',addition:'2000'},
    {title:'books',genre:'maths',publish:'1995',addition:'2005'},
    {title:'books',genre:'sst',publish:'1999',addition:'2012'},
    {title:'books',genre:'chemistry',publish:'1865',addition:'1900'},
]
// let userBooks = books.filter((bk)=>{
//     return bk.genre === 'history'
// })
// console.log(userBooks);

// let userBooks = books.filter((bk)=>{
//     return bk.title === 'books'
// })
// console.log(userBooks);

// let userBooks = books.filter((bk)=>{
//     return bk.genre === 'history' && bk.publish === '1452'
// })
// console.log(userBooks);

// reduce

// const myNumbers = [1,2,3,4,5,6,7]
// const newNums = myNumbers.map((num)=>{
//     return num + 10
// })
// console.log(newNums);

// const newNums = myNumbers.map((num)=> num * 10).map((num=>num + 1)).filter((num)=> num>=40)
// console.log(newNums);

// const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc:${acc} and current value: ${currval}`)
//     return acc + currval
// },0)
// console.log(myTotal);

// const mytotal = myNums.reduce((acc,curr)=> acc+curr,0)
// console.log(mytotal);

// const shoppingcart = [
//     {
//         itemName:'js course',
//         price: 999
//     },
//     {
//         itemName:'python course',
//         price: 500
//     },
//     {
//         itemName: 'c++ course',
//         price: 1500
//     },
//     {
//         itemName: 'java course',
//         price: 2000
//     }
// ]

// const price = shoppingcart.reduce((acc,item)=>{
//     return acc + item.price;
// },0)
// console.log(price);

