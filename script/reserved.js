let heroesQuantity = 124; //Общее количество героев

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
      "Bloodseeker",
      "Bounty Hunter",
      "Brewmaster",
      "Bristleback",
      "Broodmother",
      "Centaur Warrunner",
      "Chaos Knight",
      "Chen",
      "Clinkz",
      "Crystal Maiden",
      "Dark Seer",
      "Dark Willow",
      "Dawnbreaker",
      "Dazzle",
      "Death Prophet",
      "Disruptor",
      "Doom",
      "Dragon Knight",
      "Drow Danger",
      "Earth Spirit",
      "Earthshaker",
      "Elder Titan",
      "Ember Spirit",
      "Enchantress",
      "Enigma",
      "Faceless Void",
      "Nature's Prophet",
      "Grimstroke",
      "Gyrocopter",
      "Hoodwink",
      "Huskar",
      "Invoker",
      "Jakiro",
      "Juggernaut",
      "Keeper of the light",
      "Kunkka",
      "Legion Commander",
      "Leshrac",
      "Lich",
      "Lifestealer",
      "Lina",
      "Lion",
      "Lone Druid",
      "Luna",
      "Lycan",
      "Magnus",
      "Marci",
      "Mars",
      "Medusa",
      "Meepo",
      "Mirana",
      "Monkey King",
      "Morphling",
      "Muerta",
      "Naga Siren",
      "Necrophos",
      "Shadow Fiend",
      "Night Stalker",
      "Nyx",
      "Outworld Destroyer",
      "Ogre Magi",
      "Omniknight",
      "Oracle",
      "Pangolier",
      "Phantom Assassin",
      "Phantom Lancer",
      "Phoenix",
      "Primal Beast",
      "Puck",
      "Pudge",
      "Pugna",
      "Queen of pain",
      "Clockwerk",
      "Razor",
      "Riki",
      "Rubick",
      "Sand King",
      "Shadow Demon",
      "Shadow Shaman",
      "Timbersaw",
      "Silencer",
      "Wraith king",
      "Skywrath Mage",
      "Slardar",
      "Slark",
      "Snapfire",
      "Sniper",
      "Spectre",
      "Spirit Breaker",
      "Storm Spirit",
      "Sven",
      "Techies",
      "Templar Assassin",
      "Terrorblade",
      "Tidehunter",
      "Tinker",
      "Tiny",
      "Treant Protector",
      "Troll Warlord",
      "Tusk",
      "Undying",
      "Ursa",
      "Vengeful Spirit",
      "Venomancer",
      "Viper",
      "Visage",
      "Void Spirit",
      "Warlock",
      "Weaver",
      "Windranger",
      "Winter Wyvern",
      "IO",
      "Witch Doctor",
      "Zeus",
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
      "./images/heroes/bloodseeker.jpg",
      "./images/heroes/bounty_hunter.jpg",
      "./images/heroes/brewmaster.jpg",
      "./images/heroes/bristleback.jpg",
      "./images/heroes/broodmother.jpg",
      "./images/heroes/centaur.jpg",
      "./images/heroes/chaos_knight.jpg",
      "./images/heroes/chen.jpg",
      "./images/heroes/clinkz.jpg",
      "./images/heroes/crystal_maiden.jpg",
      "./images/heroes/dark_seer.jpg",
      "./images/heroes/dark_willow.jpg",
      "./images/heroes/dawnbreaker.jpg",
      "./images/heroes/dazzle.jpg",
      "./images/heroes/death_prophet.jpg",
      "./images/heroes/disruptor.jpg",
      "./images/heroes/doom_bringer.jpg",
      "./images/heroes/dragon_knight.jpg",
      "./images/heroes/drow_ranger.jpg",
      "./images/heroes/earth_spirit.jpg",
      "./images/heroes/earthshaker.jpg",
      "./images/heroes/elder_titan.jpg",
      "./images/heroes/ember_spirit.jpg",
      "./images/heroes/enchantress.jpg",
      "./images/heroes/enigma.jpg",
      "./images/heroes/faceless_void.jpg",
      "./images/heroes/furion.jpg",
      "./images/heroes/grimstroke.jpg",
      "./images/heroes/gyrocopter.jpg",
      "./images/heroes/hoodwink.jpg",
      "./images/heroes/huskar.jpg",
      "./images/heroes/invoker.jpg",
      "./images/heroes/jakiro.jpg",
      "./images/heroes/juggernaut.jpg",
      "./images/heroes/keeper_of_the_light.jpg",
      "./images/heroes/kunkka.jpg",
      "./images/heroes/legion_commander.jpg",
      "./images/heroes/leshrac.jpg",
      "./images/heroes/lich.jpg",
      "./images/heroes/life_stealer.jpg",
      "./images/heroes/lina.jpg",
      "./images/heroes/lion.jpg",
      "./images/heroes/lone_druid.jpg",
      "./images/heroes/luna.jpg",
      "./images/heroes/lycan.jpg",
      "./images/heroes/magnataur.jpg",
      "./images/heroes/marci.jpg",
      "./images/heroes/mars.jpg",
      "./images/heroes/medusa.jpg",
      "./images/heroes/meepo.jpg",
      "./images/heroes/mirana.jpg",
      "./images/heroes/monkey_king.jpg",
      "./images/heroes/morphling.jpg",
      "./images/heroes/muerta.jpg",
      "./images/heroes/naga_siren.jpg",
      "./images/heroes/necrolyte.jpg",
      "./images/heroes/nevermore.jpg",
      "./images/heroes/night_stalker.jpg",
      "./images/heroes/nyx_assassin.jpg",
      "./images/heroes/obsidian_destroyer.jpg",
      "./images/heroes/ogre_magi.jpg",
      "./images/heroes/omniknight.jpg",
      "./images/heroes/oracle.jpg",
      "./images/heroes/pangolier.jpg",
      "./images/heroes/phantom_assassin.jpg",
      "./images/heroes/phantom_lancer.jpg",
      "./images/heroes/phoenix.jpg",
      "./images/heroes/primal_beast.jpg",
      "./images/heroes/puck.jpg",
      "./images/heroes/pudge.jpg",
      "./images/heroes/pugna.jpg",
      "./images/heroes/queenofpain.jpg",
      "./images/heroes/rattletrap.jpg",
      "./images/heroes/razor.jpg",
      "./images/heroes/riki.jpg",
      "./images/heroes/rubick.jpg",
      "./images/heroes/sand_king.jpg",
      "./images/heroes/shadow_demon.jpg",
      "./images/heroes/shadow_shaman.jpg",
      "./images/heroes/shredder.jpg",
      "./images/heroes/silencer.jpg",
      "./images/heroes/skeleton_king.jpg",
      "./images/heroes/skywrath_mage.jpg",
      "./images/heroes/slardar.jpg",
      "./images/heroes/slark.jpg",
      "./images/heroes/snapfire.jpg",
      "./images/heroes/sniper.jpg",
      "./images/heroes/spectre.jpg",
      "./images/heroes/spirit_breaker.jpg",
      "./images/heroes/storm_spirit.jpg",
      "./images/heroes/sven.jpg",
      "./images/heroes/techies.jpg",
      "./images/heroes/templar_assassin.jpg",
      "./images/heroes/terrorblade.jpg",
      "./images/heroes/tidehunter.jpg",
      "./images/heroes/tinker.jpg",
      "./images/heroes/tiny.jpg",
      "./images/heroes/treant.jpg",
      "./images/heroes/troll_warlord.jpg",
      "./images/heroes/tusk.jpg",
      "./images/heroes/undying.jpg",
      "./images/heroes/ursa.jpg",
      "./images/heroes/vengefulspirit.jpg",
      "./images/heroes/venomancer.jpg",
      "./images/heroes/viper.jpg",
      "./images/heroes/visage.jpg",
      "./images/heroes/void_spirit.jpg",
      "./images/heroes/warlock.jpg",
      "./images/heroes/weaver.jpg",
      "./images/heroes/windrunner.jpg",
      "./images/heroes/winter_wyvern.jpg",
      "./images/heroes/wisp.jpg",
      "./images/heroes/witch_doctor.jpg",
      "./images/heroes/zuus.jpg",
   ],
   id: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
      58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
      76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
      94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109,
      110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124,
      125,
   ],
};

let randId = 0;
let back = 0;
let heroButton = document.querySelector(".choose-button");
let heroImage = document.querySelector(".hero-image");
let lastHero = document.querySelector(".last-hero_default");
let lastHeroId = document.querySelector(".last-hero__id");
let lastHeroName = document.querySelector(".last-hero__name");
let rocketButton = document.querySelector(".rocket-button");
let heroesListButton = document.querySelector(".heroes-list__button");
let rocketGo = document.querySelector(".rocket");

// lastHero.classList.remove("last-hero");
heroButton.addEventListener("click", heroesRandom);

// Выбор героя через рандом и изменение стилей
function heroesRandom() {
   randId = Math.floor(Math.random() * heroesQuantity);
   back = back + 1;
   if (back === 30) {
      alert(
         "Поздравляем, вы нажали на кнопку целых 30 раз 🎉 Это большое достижение. Столько нажатий не все могут сделать. Мало кто может это сделать. Поэтому получите награду!"
      );
      headFly.setAttribute(`style`, `display: block`);
   }
   heroImage.setAttribute(
      `style`,
      `background-image: url('${heroInfo.image[randId]}')`
   );
   heroImage.classList.add("hero-image_visible");
   heroButton.classList.add("choose-button_moved");
   rocketButton.classList.add("rocket-button_moved");
   // heroesListButton.classList.add("heroes-list__button_moved");
   lastHero.classList.add("last-hero");
   lastHero.classList.remove("last-hero-animation");
   lastHeroId.classList.add("changed");
   lastHeroName.classList.add("changed");
   lastHeroId.textContent = heroInfo.id[randId];
   lastHeroName.textContent = `- ${heroInfo.name[randId]}`;
   console.log(
      "Ваш герой:    --- " +
         heroInfo.name[randId] +
         " ---     под номером  - " +
         (randId + 1) +
         " -"
   );
   console.log(back);
}

rocketButton.addEventListener("click", rocketToMoon);
function rocketToMoon() {
   rocketGo.classList.toggle("rocket-go");
}

console.log(heroInfo.id[0]);

// ase
