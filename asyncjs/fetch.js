//best method fethc to get data from api's
// async function getAllUser(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data[0].address.street)
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// getAllUser()

//.then .catch method

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((Response)=>{
//     return Response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })


// async function getUser(){
//     try{
//         const url = 'https://jsonplaceholder.typicode.com/users'
//         const response = await fetch(url)

//         if(!response.ok){
//             throw new Error(`Response status: ${response.status}`);
//         }
//         const json = await response.json()
//         console.log(json)
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// getUser()

//syntac fetch api

// let promise = fetch(URL,[options]) without options a get request is sent

//getting data in two stage process 
const accessToken = "11ac8888daade7d07e0be8f515ee2e39"
const url = `https://superheroapi.com/api/${accessToken}`

const superheroapi = async ()=>{
const response = await fetch(url)
const data = response.json()

console.log(data,"---data---")

}

superheroapi()



