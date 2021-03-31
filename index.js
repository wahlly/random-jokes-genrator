const baseUrl = 'https://official-joke-api.appspot.com/jokes/random';
const content = document.querySelector('#joke');
const button = document.querySelector('#btn');


//fetching API...
const getData = async () => {
    const response = await fetch(`${baseUrl}`);
    const data = await response.json();
    return data;
}


button.addEventListener('click', async () => {
    const getJoke = await getData();

//inputing the API content into the HTML DOM...
content.innerHTML = `
    <h2>${getJoke.setup}</h2>
    <h3 id='sub'>${getJoke.punchline}</h3>
    `
});