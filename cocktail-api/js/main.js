//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)
function getDrink() {
    let drink = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data.drinks)
            console.log(data.strDrink)
            //get random drink from user input (drink type)
            const drinkList = data.drinks;
            const drinkArray = Object.keys(drinkList);
            const randomDrink = Math.floor(Math.random() * drinkArray.length);
            document.querySelector('h2').innerText = data.drinks[randomDrink].strDrink
            document.querySelector('img').src = data.drinks[randomDrink].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[randomDrink].strInstructions
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
   
}



