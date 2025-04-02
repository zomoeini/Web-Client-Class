function getJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data =>{
        const joke = `${data.setup} - ${data.punchline}`;
        document.getElementById('joke').innerText = joke
    })
    .catch(error =>{
        document.getElementById('joke').innerText ="Failed to load joke,";
        console.error('Error',error);
    });
}