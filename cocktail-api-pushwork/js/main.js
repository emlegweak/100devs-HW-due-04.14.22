//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)

let count = 0;

function getDrink() {
    let drink = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            const drinkList = data.drinks;
            const drinkArray = Object.keys(drinkList);
            const randomDrink = Math.floor(Math.random() * drinkArray.length);
            document.querySelector('h2').innerText = data.drinks[count].strDrink
            document.querySelector('img').src = data.drinks[count].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[count].strInstructions
            let length = data.drinks.length
            if(count > length - 2){
                count = 0;
            }else{
                count += 1
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
   
}
setInterval(getDrink, 5000)


