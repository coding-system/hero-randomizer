let heroesQuantity = 124; //Общее количество героев

let HeroAbaddon = {
   //Объект с информацией о герое
   id: 1,
   name: "Abaddon",
   image: "../images/alchemist.png",
   count: 1,
   discription: "",
};

let heroInfo = {
   //Объект с информацией о герое
   name: [
      "../images/abaddon.png",
      "../images/abaddon.png",
      "../images/abyssal_underlord.png",
      "../images/alchemist.png",
      "../images/ancient_apparition.png",
      "../images/antimage.png",
      "../images/arc_warden.png",
      "../images/axe.png",
      "../images/bane.png",
      "../images/batrider.png",
      "../images/beastmaster.png",
      "../images/bloodseeker.png",
      "../images/bounty_hunter.png",
      "../images/brewmaster.png",
      "../images/bristleback.png",
      "../images/broodmother.png",
      "../images/centaur.png",
      "../images/chaos_knight.png",
      "../images/chen.png",
      "../images/clinkz.png",
      "../images/crystal_maiden.png",
      "../images/dark_seer.png",
      "../images/dark_willow.png",
      "../images/dawnbreaker.png",
      "../images/dazzle.png",
      "../images/death_prophet.png",
      "../images/disruptor.png",
      "../images/disruptor.png",
      "../images/doom_bringer.png",
      "../images/dragon_knight.png",
      "../images/drow_ranger.png",
      "../images/earth_spirit.png",
      "../images/earthshaker.png",
      "../images/elder_titan.png",
      "../images/ember_spirit.png",
      "../images/enchantress.png",
      "../images/enigma.png",
      "../images/faceless_void.png",
      "../images/furion.png",
      "../images/grimstroke.png",
      "../images/gyrocopter.png",
      "../images/hoodwink.png",
      "../images/huskar.png",
      "../images/invoker.png",
      "../images/jakiro.png",
      "../images/juggernaut.png",
      "../images/keeper_of_the_light.png",
      "../images/kunkka.png",
      "../images/legion_commander.png",
      "../images/leshrac.png",
      "../images/lich.png",
      "../images/life_stealer.png",
      "../images/lina.png",
      "../images/lion.png",
      "../images/lone_druid.png",
      "../images/luna.png",
      "../images/lycan.png",
      "../images/magnataur.png",
      "../images/marci.png",
      "../images/mars.png",
      "../images/medusa.pngv",
      "../images/meepo.png",
      "../images/mirana.png",
      "../images/monkey_king.png",
      "../images/morphling.png",
      "../images/muerta.png",
      "../images/naga_siren.png",
      "../images/necrolyte.png",
      "../images/nevermore.png",
      "../images/night_stalker.png",
      "../images/nyx_assassin.png",
      "../images/obsidian_destroyer.png",
      "../images/ogre_magi.png",
      "../images/omniknight.png",
      "../images/oracle.png",
      "../images/pangolier.png",
      "../images/phantom_assassin.png",
      "../images/phantom_lancer.png",
      "../images/phoenix.png",
      "../images/primal_beast.png",
      "../images/puck.png",
      "../images/pudge.png",
      "../images/pugna.png",
      "../images/queenofpain.png",
      "../images/rattletrap.png",
      "../images/razor.png",
      "../images/riki.png",
      "../images/rubick.png",
      "../images/sand_king.png",
      "../images/shadow_demon.png",
      "../images/shadow_shaman.png",
      "../images/shredder.png",
      "../images/silencer.png",
      "../images/skeleton_king.png",
      "../images/skywrath_mage.png",
      "../images/slardar.png",
      "../images/snapfire.png",
      "../images/sniper.png",
      "../images/spectre.png",
      "../images/spirit_breaker.png",
      "../images/storm_spirit.png",
      "../images/sven.png",
      "../images/sven.png",
      "../images/techies.png",
      "../images/templar_assassin.png",
      "../images/terrorblade.png",
      "../images/tidehunter.png",
      "../images/tinker.png",
      "../images/tiny.png",
      "../images/treant.png",
      "../images/troll_warlord.png",
      "../images/tusk.png",
      "../images/undying.png",
      "../images/ursa.png",
      "../images/vengefulspirit.png",
      "../images/venomancer.png",
      "../images/viper.png",
      "../images/visage.png",
      "../images/void_spirit.png",
      "../images/warlock.png",
      "../images/weaver.png",
      "../images/windrunner.png",
      "../images/winter_wyvern.png",
      "../images/wisp.png",
      "../images/witch_doctor.png",
      "../images/zuus.png",
   ],
   image: [
      "./images/abaddon.png",
      "./images/abaddon.png",
      "./images/abyssal_underlord.png",
      "./images/alchemist.png",
      "./images/ancient_apparition.png",
      "./images/antimage.png",
      "./images/arc_warden.png",
      "./images/axe.png",
      "./images/bane.png",
      "./images/batrider.png",
      "./images/beastmaster.png",
      "./images/bloodseeker.png",
      "./images/bounty_hunter.png",
      "./images/brewmaster.png",
      "./images/bristleback.png",
      "./images/broodmother.png",
      "./images/centaur.png",
      "./images/chaos_knight.png",
      "./images/chen.png",
      "./images/clinkz.png",
      "./images/crystal_maiden.png",
      "./images/dark_seer.png",
      "./images/dark_willow.png",
      "./images/dawnbreaker.png",
      "./images/dazzle.png",
      "./images/death_prophet.png",
      "./images/disruptor.png",
      "./images/disruptor.png",
      "./images/doom_bringer.png",
      "./images/dragon_knight.png",
      "./images/drow_ranger.png",
      "./images/earth_spirit.png",
      "./images/earthshaker.png",
      "./images/elder_titan.png",
      "./images/ember_spirit.png",
      "./images/enchantress.png",
      "./images/enigma.png",
      "./images/faceless_void.png",
      "./images/furion.png",
      "./images/grimstroke.png",
      "./images/gyrocopter.png",
      "./images/hoodwink.png",
      "./images/huskar.png",
      "./images/invoker.png",
      "./images/jakiro.png",
      "./images/juggernaut.png",
      "./images/keeper_of_the_light.png",
      "./images/kunkka.png",
      "./images/legion_commander.png",
      "./images/leshrac.png",
      "./images/lich.png",
      "./images/life_stealer.png",
      "./images/lina.png",
      "./images/lion.png",
      "./images/lone_druid.png",
      "./images/luna.png",
      "./images/lycan.png",
      "./images/magnataur.png",
      "./images/marci.png",
      "./images/mars.png",
      "./images/medusa.png",
      "./images/meepo.png",
      "./images/mirana.png",
      "./images/monkey_king.png",
      "./images/morphling.png",
      "./images/muerta.png",
      "./images/naga_siren.png",
      "./images/necrolyte.png",
      "./images/nevermore.png",
      "./images/night_stalker.png",
      "./images/nyx_assassin.png",
      "./images/obsidian_destroyer.png",
      "./images/ogre_magi.png",
      "./images/omniknight.png",
      "./images/oracle.png",
      "./images/pangolier.png",
      "./images/phantom_assassin.png",
      "./images/phantom_lancer.png",
      "./images/phoenix.png",
      "./images/primal_beast.png",
      "./images/puck.png",
      "./images/pudge.png",
      "./images/pugna.png",
      "./images/queenofpain.png",
      "./images/rattletrap.png",
      "./images/razor.png",
      "./images/riki.png",
      "./images/rubick.png",
      "./images/sand_king.png",
      "./images/shadow_demon.png",
      "./images/shadow_shaman.png",
      "./images/shredder.png",
      "./images/silencer.png",
      "./images/skeleton_king.png",
      "./images/skywrath_mage.png",
      "./images/slardar.png",
      "./images/snapfire.png",
      "./images/sniper.png",
      "./images/spectre.png",
      "./images/spirit_breaker.png",
      "./images/storm_spirit.png",
      "./images/sven.png",
      "./images/sven.png",
      "./images/techies.png",
      "./images/templar_assassin.png",
      "./images/terrorblade.png",
      "./images/tidehunter.png",
      "./images/tinker.png",
      "./images/tiny.png",
      "./images/treant.png",
      "./images/troll_warlord.png",
      "./images/tusk.png",
      "./images/undying.png",
      "./images/ursa.png",
      "./images/vengefulspirit.png",
      "./images/venomancer.png",
      "./images/viper.png",
      "./images/visage.png",
      "./images/void_spirit.png",
      "./images/warlock.png",
      "./images/weaver.png",
      "./images/windrunner.png",
      "./images/winter_wyvern.png",
      "./images/wisp.png",
      "./images/witch_doctor.png",
      "./images/zuus.png",
   ],
   id: [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
      58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
      76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 89, 90, 91, 92, 93, 94,
      95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
      111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124,
   ],
};

let randId = 0;
let heroButton = document.querySelector(".choose-button");
let heroImage = document.querySelector(".hero-image");
let markers = document.querySelector(".markers", "::before");

heroButton.addEventListener("click", heroesRandomer);

function heroesRandom() {
   randId = Math.ceil(Math.random() * heroesQuantity);
   if (randId !== 0) {
      heroButton.textContent = "Try again";
   }
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
         `style`,
         `background-image: url(../images/antimage.png)`
      );
   }
   console.log("Номер " + randId);
}

function heroesRandomer() {
   randId = Math.ceil(Math.random() * heroesQuantity);
   if (randId !== 0) {
      heroButton.textContent = "Try again";
   }
   heroImage.setAttribute(
      `style`,
      `background-image: url('${heroInfo.image[randId]}')`
   );
   console.log("Ваш герой " + heroInfo.name[randId] + " под номером " + randId);
}

console.log(heroButton.textContent);
console.log(heroInfo.id[0]);
console.log(markers);
