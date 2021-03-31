const baseUrl = 'https://official-joke-api.appspot.com/jokes/random';
const content = document.querySelector('#joke');
const button = document.getElementById('btn');


//fetching API...
    const getData = async () => {
        const response = await fetch(`${baseUrl}`);
        const data = await response.json();
        return data;
    }
console.log(getData());

button.addEventListener('click', async () => {
    const getJoke = await getData();

    content.innerHTML = `
        <h2>${getJoke.setup}</h2>
        <h3 id='sub'>${getJoke.punchline}</h3>
    `
});