// setTimeout(function (){
//     console.log('anita pujari')
// }, 2000)

// const time = ()=>{
//     console.log('amaan ansari')
// }

// setTimeout(time, 3000);

// const changetext = function (){
//     document.querySelector('h1').innerHTML = 'best girl is anita pujari'
// }
// // setTimeout(changetext,2000)

// const changeme = setTimeout(changetext, 2000);

// const timeout = document.querySelector('#stop').addEventListener('click', function (e){
//     clearTimeout(changeme)
//     console.log('stopped')
// })

// setInterval(() => {
//     console.log('anita is doing work', Date.now())
// }, 2000);

// const saydate = function (str){
//     console.log('anita pujari',str, Date.now())
// }

// setInterval(saydate,1000,'hiiii')

// const intervalid = setInterval(saydate,1000,'hii')
// clearInterval(intervalid)

// const requetURL = "https://randomuser.me/api/"
// const xhr = new XMLHttpRequest();
// xhr.open('GET', requetURL)

// xhr.onreadystatechange = function (){
//     console.log(xhr.readyState)
//     if (xhr.readyState === 4) {
//         const data = JSON.parse(this.responseText)
//         console.log(typeof data)
//         console.log(data)
//     }
// }


// const promiseOne = new Promise(function (resolve, reject){
//     setTimeout(() => {
//         console.log('async task is completed')
//         resolve()
//     }, 2000);
// })

// promiseOne.then(function (){
//     console.log('promise consumed')
// })

// new Promise(function (res, rej){
//     setTimeout(() => {
//         console.log('async task is in working')
//         res()
//     }, 2000);
// }).then(function (){
//     console.log('async task is cosumed and resolved');
// })

// const promisethree = new Promise(function (res, rej){
//     setTimeout(() => {
//         res({username: 'anita', email: "anita@gmail.com"})
//     }, 2000);
// })

// promisethree.then(function(user){
//     console.log(user.username)
//     console.log(user.email)
// })

const promisefour = new Promise(function (res, rej){
    setTimeout(() => {
        let error = false;
        if(!error){
            res({username:'anitapujari', passwrod:"123"})
        }
        else{
            rej('error: something went wrong')
        }
    }, 2000);
})

// promisefour.then((u)=>{
//     console.log(u.username)
//     return u
// }).catch(function (error){
//     console.log(error)
// }).finally(()=>{
//     console.log('the promis has been rejected or resolve');
    
// })


// promisefour.then((e)=>{
//     console.log(e)
//     return e.username
// }).then((username)=>{
//     console.log(username);
    
// }).catch((error)=>{
//     console.log(error,'something went wrong')
// }).finally(()=>{
//     console.log('the promis has been resolve or rejected');
    
// })

// const promisefive = new Promise(function (resolve, reject){
//     setTimeout(() => {
//         let error = true;
//         if(!error){
//             resolve({username:"anita pujari", age:"23", password:"1234"})
//         } else{
//             reject("error something went wrong")
//         }
//     }, 2000);
// })

// async function consumePromise(){
//   try{
//     const response = await promisefive
//     console.log(response)
//   }
//   catch(error){
//     console.log(error)
//   }
// }
// consumePromise()

// function getdata(dataid){
//     setTimeout(() => {
//         console.log('data id :',dataid)
//     }, 2000);
    
// }
// // getdata(123

// )

// const getpromise = ()=>{
//     return new Promise((resolve, reject)=>{
//         console.log('im a promise')
//         resolve('success')
//         reject('error')
//     })
// }
// let promise = getpromise()
// promise.then((res)=>{
//     console.log('promise fulfilled',res)
// }).catch((err)=>{
//     console.log('promise failed',err)
// })

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('weather data')
//             resolve(200)
//         }, 2000);
//     })
// }
// // api()

// async function getweatherdata(){
//     await api()
// }
// getweatherdata()

// async function getalldata(){
//     await getdata(1)
//     await getdata(2)
//     await getdata(3)
// }


// const url= 'https://cat-fact.herokuapp.com/facts'
// const getFacts = async ()=>{
//     console.log('getting data....')
//     let response = await fetch(url)
//     console.log(response)
//     let data = response.json()
//     console.log(data)
//     // console.log(data[0].text);
//     // console.log(data[2])
    
// }
// getFacts()



