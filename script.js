const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.querySelector("#result");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", () => {
  let inputword = document.getElementById("inputWord").value;
  fetch(`${url}${inputword}`)
    .then((r) => r.json())
    .then((data) => {
      result.innerHTML = `<div class="ms-2 d-flex">
      <h4 class="fw-bold">${inputword}</h4>
  </div>

  <div class="ms-2 d-flex text-secondary">
      <span class="me-1">${data[0].meanings[0].partOfSpeech} |</span>
      <p class="fst-italic">${data[0].phonetic}</p>
  </div>
  <div class="ms-2">
      <p>${data[0].meanings[0].definitions[0].definition}</p>
      <span class="text-secondary">|</span>
      <span class="text-secondary fst-italic"> "${data[0].meanings[0].definitions[0].example}" </span>
  </div>`;
      document.getElementById("inputWord").value = "";
    })
    .catch(() => {
      result.innerHTML = `<h5 class="ms-2">No Results Found.
      </h5>`;
    });
});
