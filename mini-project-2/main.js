
document.querySelector('button').addEventListener('click', getRon)
const toHide = document.getElementById('toHide')
const btn = document.getElementById('toggle')
btn.onclick = function () {
    if(toHide.style.display !== "none") {
        toHide.style.display = "none";
    }else {
        toHide.style.display = "block";
    }
}
function getRon() {
    fetch(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data[0]
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}
