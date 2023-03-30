const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiurl = "https://animechan.vercel.app/api/random";
async function fetchApi() {
  try {
    btnEl.innerText = "wait baka..";
    btnEl.disabled = true;
    quoteEl.innerText = "ara ara...";
    authorEl.innerText = "badass is loading..";
    const response = await fetch(apiurl);
    const data = await response.json();
    const animeQuote = data.quote;
    const animecharacter = data.character;
    quoteEl.innerText = animeQuote;
    authorEl.innerText = animecharacter;
    btnEl.innerText = "get a quote";
    btnEl.disabled = false;
    // console.log(data);
  } catch (error) {
    console.log(error);
    quoteEl.innerText = "error in fetching..";
    authorEl.innerText = "💀";
    btnEl.innerText = "error pirate";
    btnEl.disabled = false;
  }
}

btnEl.addEventListener("click", fetchApi);
// fetchApi();
