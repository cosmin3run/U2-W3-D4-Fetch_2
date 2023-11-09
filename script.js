const cardsDiv = document.getElementById("card-div");
const fetchData = () => {
  fetch("https://api.pexels.com/v1/search?query=dog", {
    method: "get",
    headers: new Headers({
      Authorization: "stvrQ48cX4GPqdlgEqPYHorKHgtuhK7fGOY1y3OaWn4D9RTHgG9Kd65L"
    })
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("API Error");
      }
      return response.json();
    })
    .then((dogs) => {
      console.log(dogs);
      dogs.photos.forEach((photo) => {
        const cardDivEst = document.createElement("div");
        cardDivEst.className = "col-md-4";
        const cardDiv = document.createElement("div");
        cardDiv.className = "card mb-4 shadow-sm";
        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = photo.src.medium;
        const divBody = document.createElement("div");
        divBody.className = "card-body";
        const h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerText = "";
        const p = document.createElement("p");
        p.className = "card-text";
        p.innerText = "";
        const footDiv = document.createElement("div");
        footDiv.className = "d-flex justify-content-between align-items-center";
        const buttonDiv = document.createElement("div");
        buttonDiv.className = "d-flex justify-content-between align-items-center";
        const button1 = document.createElement("button");
        button1.className = "btn btn-sm btn-outline-secondary";
        button1.type = "button";
        button1.innerText = "View";
        const button2 = document.createElement("button");
        button2.className = "btn btn-sm btn-outline-secondary";
        button2.type = "button";
        button2.innerText = "Hide";
        const small = document.createElement("small");
        small.className = "text-muted";
        small.innerText = "id: " + photo.id;
        // APPEND
        buttonDiv.appendChild(button1);
        buttonDiv.appendChild(button2);
        divBody.appendChild(h5);
        divBody.appendChild(p);
        footDiv.appendChild(buttonDiv);
        footDiv.appendChild(small);
        cardDiv.appendChild(img);
        cardDiv.appendChild(divBody);
        cardDiv.appendChild(footDiv);
        cardDivEst.appendChild(cardDiv);
        cardsDiv.appendChild(cardDivEst);
        // REMOVE CARD
        button2.addEventListener("click", function (e) {
          cardDivEst.remove();
        });
      });
    });
};

const loadImages = document.getElementById("load");
loadImages.addEventListener("click", function (e) {
  cardsDiv.innerHTML = "";
  fetchData();
});
