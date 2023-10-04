const joke = document.querySelector(".js-joke");
const buttonElem = document.querySelector(".js-btn");

const apiKey = "silwAmK5g4wRTFq5Ig5ulQ==hbvh8ZWBnz6VS1BB";

const options = {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

// Function to get the joke
const getJoke = async () => {
  try {
    joke.innerText = "Updating...";
    buttonElem.disabled = true;
    buttonElem.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    joke.innerText = data[0].joke;
    buttonElem.disabled = false;
    buttonElem.innerText = "Tell me a Joke";
  } catch (error) {
    joke.innerText = "An error occured. Please try again later!";
    buttonElem.disabled = false;
    buttonElem.innerText = "Tell me a Joke";
  }
};

// Get a new joke every time you click the button
buttonElem.addEventListener("click", getJoke);
