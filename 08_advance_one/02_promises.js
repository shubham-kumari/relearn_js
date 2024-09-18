const promiseOne = new Promise(function (resolve, reject) {
    // do an async task
    // DB Calls, cryptography, network
    setTimeout(function () {
        console.log("async task is complete");
        resolve();
    }, 1000)
})

promiseOne.then(function () {
    console.log("promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async task 2");
        resolve();
    }, 1000)
}).then(function () {
    console.log("async two consumed");
})

const promiseThird = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "shubham", email: "example@gmail.com" })
    }, 1000)
})
promiseThird.then(function (user) {
    // yha se sari value return hoti h
    console.log(user);
})




const promiseFourth = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "shubham", password: "123" })
        }
        else {
            reject('Error: Something went wrong')
        }
    }, 1000)
})
const username = promiseFourth.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((err) => {
    console.log(err);
}).finally(() => console.log("the promise is either resolved or rejcted"))





const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ courseName: "java-script", password: "12" })
        }
        else {
            reject('Error: js went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()



// async function getAllusers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllusers();


fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch(function(err){
    console.log(err);
})

