let heroInfo = {
   //Объект с информацией о герое
   name: [
      "Abaddon",
      "Underlord",
      "Alchemist",
      "Ancient Apparition",
      "Antimage",
      "Arc Warden",
      "Axe",
      "Bane",
      "Batrider",
      "Beastmaster",
   ],
   image: [
      "./images/heroes/abaddon.jpg",
      "./images/heroes/abyssal_underlord.jpg",
      "./images/heroes/alchemist.jpg",
      "./images/heroes/ancient_apparition.jpg",
      "./images/heroes/antimage.jpg",
      "./images/heroes/arc_warden.jpg",
      "./images/heroes/axe.jpg",
      "./images/heroes/bane.jpg",
      "./images/heroes/batrider.jpg",
      "./images/heroes/beastmaster.jpg",
   ],
   id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
};

let heroesQuantity = 10; //Общее количество героев
let n = heroesQuantity;
let chanceDefault = (n / n ** 2) * 100;

const heroes = [
   {
      heroesId: 0,
      heroesName: "NotAHero",
      heroesImage: "NotAHero",
      heroesChance: 0,
   },
   {
      heroesId: 1,
      heroesName: "Abaddon",
      heroesImage: "./images/heroes/abaddon.jpg",
      heroesChance: chanceDefault,
   },
   {
      heroesId: 2,
      heroesName: "Underlord",
      heroesImage: "./images/heroes/abyssal_underlord.jpg",
      heroesChance: chanceDefault,
   },
   {
      heroesId: 3,
      heroesName: "Abaddon",
      heroesImage: "./images/heroes/abaddon.jpg",
      heroesChance: chanceDefault,
   },
   {
      heroesId: 4,
      heroesName: "Underlord",
      heroesImage: "./images/heroes/abyssal_underlord.jpg",
      heroesChance: chanceDefault,
   },
   {
      heroesId: 5,
      heroesName: "Underlord",
      heroesImage: "./images/heroes/abyssal_underlord.jpg",
      heroesChance: chanceDefault,
   },
   {
      heroesId: 6,
      heroesName: "Abaddon",
      heroesImage: "./images/heroes/abaddon.jpg",
      heroesChance: chanceDefault,
   },
   {
      heroesId: 7,
      heroesName: "Underlord",
      heroesImage: "./images/heroes/abyssal_underlord.jpg",
      heroesChance: chanceDefault,
   },
   {
      heroesId: 8,
      heroesName: "Abaddon",
      heroesImage: "./images/heroes/abaddon.jpg",
      heroesChance: chanceDefault,
   },
   {
      heroesId: 9,
      heroesName: "Underlord",
      heroesImage: "./images/heroes/abyssal_underlord.jpg",
      heroesChance: chanceDefault,
   },
   {
      heroesId: 10,
      heroesName: "Underlord",
      heroesImage: "./images/heroes/abyssal_underlord.jpg",
      heroesChance: chanceDefault,
   },
];

let randId = 0;
let back = 0;
let heroButton = document.querySelector(".choose-button");
let heroImage = document.querySelector(".hero-image");
let lastHeroId = document.querySelector(".last-hero__id");
let lastHeroName = document.querySelector(".last-hero__name");
let rocketButton = document.querySelector(".rocket-button");
let rocketGo = document.querySelector(".rocket");
let lysina = document.querySelector(".lysina");

let summ = 0;
for (let i = 0; i <= heroes.length; i = i + 1) {
   summ = summ + heroes[i].heroesChance;
   console.log(summ);
}
