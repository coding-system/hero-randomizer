let heroesQuantity = 4;

let heroInfo = {
   id: 1,
   name: "Abaddon",
   image: "alchemist.png",
   count: 1,
};

let wrapperClass = document.querySelector(".wrapper");
let contentClass = wrapperClass.querySelector(".content");
let heroClass = contentClass.querySelector(".choose-button");
let heroImage = contentClass.querySelector(".hero-image");

heroClass.addEventListener("click", heroesRandom);

function heroesRandom() {
   let randId = Math.ceil(Math.random() * heroesQuantity);
   if (randId === 1) {
      heroImage.setAttribute(
         "style",
         "background-image: url(../images/abaddon.png)"
      );
   } else if (randId === 2) {
      heroImage.setAttribute(
         "style",
         "background-image: url(../images/alchemist.png)"
      );
   } else if (randId === 3) {
      heroImage.setAttribute(
         "style",
         "background-image: url(../images/ancient_apparition.png)"
      );
   } else if (randId === 4) {
      heroImage.setAttribute(
         "style",
         "background-image: url(../images/antimage.png)"
      );
   }
   console.log("Номер " + randId);
}

console.log(heroClass.className);
