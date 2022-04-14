//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const choice = document.querySelector('input').value.toLowerCase()
    const url = `https://pokeapi.co/api/v2/pokemon/${choice}` 
   

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data.name
            document.querySelector('img').src = data.sprites.front_default
            document.querySelector('h3').innerText = data.types[0].type.name
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
