"use strict";
const chuckSays = document.getElementById("chuckSays");
// chuckSays.innerHTML = "new text";
const button = document.querySelector('button');
const quoteBox = document.querySelector("#quoteGenerator");
const submitForm = document.querySelector("#submitForm");
button.innerHTML = "refresh quote";
const defaultCategory = "dev";

const getQuote = (category) => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`
    get(url).then(function(response) {        
        chuckSays.innerHTML = response.value;    
    })
}




button.addEventListener('click', function (event) {
    event.preventDefault;
    getQuote(defaultCategory);

});

submitForm.addEventListener('click', function (e) {
    e.preventDefault();
    const userInput = document.getElementById("categoryInput")
    const category = userInput.value;
    getQuote(category);
});

(function() {
    getQuote(defaultCategory)
})








// https://api.chucknorris.io/

// function dataFromAPI {
//     return fetch(function(response) {
//         console.log("the response is:", response);
//         return response.json()
//     })
//     .then(function(data) {
//         console.log(data);
//         return data
//     })
// }
// console.log("data is:", dataFromAPI)