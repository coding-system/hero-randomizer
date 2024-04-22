let heroesQuantity = 124;

let heroInfo = {
   id: 0,
   name: "",
   image: "",
};

function heroesRandom() {
   let randId = Math.ceil(Math.random() * heroesQuantity);
   console.log("Номер " + randId);
}

heroesRandom();
