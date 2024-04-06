function displayJoke(response) {
   new Typewriter("#poem", {
     strings: response.data.answer,
     autoStart: true,
     delay: 1,
     cursor: "",
   });
}

function generateJoke(event) {
   event.preventDefault();

   let instructionsInput = document.querySelector("#user-instructions");
   let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
   let context =
     "You are a comediant. You mission is to tell really good jokes";
   let prompt = `User instructions: Generate a joke about ${instructionsInput.value}`;
   let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

   let poemElement = document.querySelector("#poem");
   poemElement.classList.remove("hidden");
   poemElement.innerHTML = `<div class="generating">⏳ Generating a joke about ${instructionsInput.value}</div>`;

   axios.get(apiURL).then(displayJoke);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generateJoke);
