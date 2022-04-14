document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const url = `http://api.open-notify.org/iss-now.json`
        fetch(url)
        .then(response => response.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = `The latitude is ${data.iss_position.latitude}`
            document.querySelector('h3').innerText = `The longitude is ${data.iss_position.longitude}`
            document.querySelector('div').innerText = `As of timestamp ${data.timestamp}`
        })
        .catch(err => {
         console.log(`error ${err}`)
         });
        
        
   
}




