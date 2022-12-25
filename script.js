const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Key': 'c84bbea8a3msh8ce5601fafc4525p17890djsn75f07ccac761',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
	}
};

jokeBtn.addEventListener('click', ()=>{
    joke.innerHTML = "<h3 style='color:#000'>wait...<h3>";
    fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
        .then(response => response.json())
        .then(response => joke.innerHTML = `<h5 style="color:#8300b3; font-family:cursive">${response.value}<h5>`)
        .catch(err => joke.innerText = err);
})