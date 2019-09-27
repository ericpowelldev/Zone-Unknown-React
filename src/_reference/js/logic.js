//////////////////////////////   EXPORTED OBJECTS   //////////////////////////////



// var sav = require("./modelSave.js");
// var EVT = require("./modelEvents.js");



//////////////////////////////   SAVE OBJECT   //////////////////////////////



let sav = {
    version: `0.1.4`, // Version of game the save was created
    health: 10, // Health resource
    oxygen: 10, // Oxygen resource
    fuel: 0, // Fuel collected
    warpCount: 0, // Warp drive pieces collected
    itemCount: 0, // Items collected
    planet: 0, // Current planet
    planets: [
        {
            hexes: [
                {
                    hexXY: [0, 2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [1, 2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [2, 2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-1, 1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [0, 1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [1, 1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [2, 1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-2, 0],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-1, 0],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [0, 0],
                    visited: true,
                    event: `ship`
                },
                {
                    hexXY: [1, 0],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [2, 0],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-2, -1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-1, -1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [0, -1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [1, -1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-2, -2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-1, -2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [0, -2],
                    visited: false,
                    event: ``
                }
            ]
        },
        {
            hexes: [
                {
                    hexXY: [0, 3],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [1, 3],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [2, 3],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [3, 3],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-1, 2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [0, 2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [1, 2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [2, 2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [3, 2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-2, 1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-1, 1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [0, 1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [1, 1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [2, 1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [3, 1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-3, 0],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-2, 0],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-1, 0],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [0, 0],
                    visited: true,
                    event: `ship`
                },
                {
                    hexXY: [1, 0],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [2, 0],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [3, 0],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-3, -1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-2, -1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-1, -1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [0, -1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [1, -1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [2, -1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-3, -2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-2, -2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-1, -2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [0, -2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [1, -2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-3, -3],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-2, -3],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-1, -3],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [0, -3],
                    visited: false,
                    event: ``
                }
            ]
        },
        {
            hexes: [
                {
                    hexXY: [0, 4],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [1, 4],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [2, 4],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [3, 4],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [4, 4],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-1, 3],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [0, 3],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [1, 3],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [2, 3],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [3, 3],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [4, 3],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-2, 2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-1, 2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [0, 2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [1, 2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [2, 2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [3, 2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [4, 2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-3, 1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-2, 1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-1, 1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [0, 1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [1, 1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [2, 1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [3, 1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [4, 1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-4, 0],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-3, 0],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-2, 0],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-1, 0],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [0, 0],
                    visited: true,
                    event: `ship`
                },
                {
                    hexXY: [1, 0],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [2, 0],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [3, 0],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [4, 0],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-4, -1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-3, -1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-2, -1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-1, -1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [0, -1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [1, -1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [2, -1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [3, -1],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-4, -2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-3, -2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-2, -2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-1, -2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [0, -2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [1, -2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [2, -2],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-4, -3],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-3, -3],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-2, -3],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-1, -3],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [0, -3],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [1, -3],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-4, -4],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-3, -4],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-2, -4],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [-1, -4],
                    visited: false,
                    event: ``
                },
                {
                    hexXY: [0, -4],
                    visited: false,
                    event: ``
                }
            ]
        }
    ]
}



//////////////////////////////   EVENTS OBJECT   //////////////////////////////



// Global positive/negative constants
const GPOS = 2;
const GNEG = -4;

// Constant events object (Stores all events random & set)
const EVT = {
    psHP: [
        {
            event: `You discover a bush filled with bean pods, you've seen these before and you've concluded they are healthy.`,
            change: GPOS
        },
        {
            event: `You happen upon an abandoned vehicle. Searching it yields you a light aid kit.`,
            change: GPOS
        },
        {
            event: `You discover a thick patch of common berries and gorge upon them.`,
            change: GPOS
        },
        {
            event: `You roll over a rock and find some delicious fat grubs, bottoms up.`,
            change: GPOS
        },
        {
            event: `You come across an old outpost and find medical supplies inside. You use them to heal up.`,
            change: GPOS
        },
        {
            event: `A budding tree happens to have 1 ripe fruit on it. You take it and eat it.`,
            change: GPOS
        },
        {
            event: `You locate a garden patch filled with what looks like space cabbage. Space cabbage isn't your favorite, but food is food.`,
            change: GPOS
        },
        {
            event: `A swarm of gnat-like creatures form around your head. You open up your helmet to let them in and you get your protein for the day.`,
            change: GPOS
        },
        {
            event: `A small one-legged possum-like creature hops on by. You shot it with your lazer and take its meat.`,
            change: GPOS
        },
        {
            event: `A hot spring is nearby. You hop in and relax for a bit.`,
            change: GPOS + 1
        },
        {
            event: `You find a stream of crystal clear water that emits a sparkling glow. You drink it and feel instantly restored.`,
            change: GPOS + 1
        },
        {
            event: `You happen upon an abandoned vehicle. Searching it yields you a full aid kit.`,
            change: GPOS + 1
        },
        {
            event: `You identify a medicinal plant you learned about in the academy. You re-purpose it it for its healing properties.`,
            change: GPOS + 1
        },
        {
            event: `You watch a predator chase down and kill a large game animal. You whip out your lazer, scare off the predator with pot shots and take its kill.`,
            change: GPOS + 1
        },
        {
            event: `You see an abandoned outpost on a high rocky cliff. You use your trusty jetpack to fly up and search around. You find some canned steak.`,
            change: GPOS + 2
        },
        {
            event: `You find a juicy steak, cooked to perfection just laying on the ground. You thought it was a mirage, but it seemed to give you some sustinence.`,
            change: GPOS + 2
        },
        {
            event: `You spot a flying space alligator and shoot it down. You eatin' good tonight.`,
            change: GPOS + 2
        },
        {
            event: `You smell a campfire nearby with some local aliens sitting around it. They tell you to join them and sing some campfire songs. You get a good hardy meal afterwards.`,
            change: GPOS + 2
        },
        {
            event: `You smell a freshly cooked meal. Following your nose, you find a shack where you sneak inside and find a 4 course meal on a platter. You eat as much as you can until you hear a toilet flush. You escape without a sound.`,
            change: GPOS + 2
        },
        {
            event: `You happen to find an ancient sap that the locals call "The Nectar of the Gods". You lick some off the tree and start seeing colors that you've never seen before.`,
            change: GPOS + 6
        },
    ],
    nsHP: [
        {
            event: `You stumble upon a hive of viscious space bees, they manage to sting you through your space suit somehow.`,
            change: GNEG + 2
        },
        {
            event: `Quicksand! You're not too hurt, but still lucky enough to escape with your life.`,
            change: GNEG + 2
        },
        {
            event: `The planet starts to shake violently, tossing you to the ground.`,
            change: GNEG + 2
        },
        {
            event: `You fall through a crack in the volcanic rock and twist your ankle.`,
            change: GNEG
        },
        {
            event: `A swarm of leathery-winged death bats attack you as you approach the mouth of a cave.`,
            change: GNEG
        },
        {
            event: `A gentle rain begins to fall. You are just about collect some until you notice it eating through your suit.`,
            change: GNEG
        },
        {
            event: `A geostorm whirls up a tornado on top of you and launches you a fair distance.`,
            change: GNEG
        },
        {
            event: `You are entranced by an incredible shifting light show in the atmosphere. It is truly a sight to behold. Too bad it's also blasting you with cosmic radiation...`,
            change: GNEG
        },
        {
            event: `A deep rumble emanates from beneath you. You've seen this movie before, and manage to get mostly out of the way of the giant worm that erupts from the ground.`,
            change: GNEG
        },
        {
            event: `Thoughts of home distract you from looking where you're going. You end up falling into a small ravine.`,
            change: GNEG
        },
        {
            event: `You run into some shady looking locals. They don't look to pleased that you just traversed into their territory, so they give you a good roughhousing.`,
            change: GNEG
        },
        {
            event: `You trip over a pebble and dislocate your shoulder upon landing.`,
            change: GNEG
        },
        {
            event: `A cute little furry creature approaches you. As you extend your hand to pet it, it growls and bites your arm then runs away.`,
            change: GNEG
        },
        {
            event: `A small group of alien wolves decide they want you for dinner. You made sure that didn't happen, but took a beating in the process.`,
            change: GNEG
        },
        {
            event: `You see a faint light that seems to be getting brighter by the second. It gives you a good thunk to the ground as it passes by and continues on.`,
            change: GNEG
        },
        {
            event: `You find a gentle giant that wants to play catch with you. It throws a large boulder to you, but it crushes you when you try to catch it. The creature goes to find someone else to play catch with.`,
            change: GNEG
        },
        {
            event: `You find a seemingly abandoned building. Out of nowhere, you get attacked by drones. You make it out just in time.`,
            change: GNEG
        },
        {
            event: `A supermassive geostorm forms around you and strikes you with lightning.`,
            change: GNEG - 2
        },
        {
            event: `You come face-to-face with a very large and unfriendly creature that the locals call "Samsquanch". This won't end well.`,
            change: GNEG - 2
        },
        {
            event: `You are ambushed by space pirates. You fend them off as much as you could, but you feel like you barely made it out alive.`,
            change: GNEG - 2
        },
    ],
    psO2: [
        {
            event: `You flatulate and your suit somehow converts it to oxygen.`,
            change: GPOS
        },
        {
            event: `You decide to take a break and focus on slowing your breathing, preserving your O2.`,
            change: GPOS
        },
        {
            event: `You find yourself in a thick forest teeming with oxygen. You open your helmet and grab a gulp.`,
            change: GPOS
        },
        {
            event: `Big-brain time! You figure that if you hold your breath, you can use less oxygen. At least it does on this planet. Or maybe the air is breathable on this planet. You are too scared to find out though.`,
            change: GPOS
        },
        {
            event: `You find a crashed land-speeder with a fuel compound that uses oxygen. You syphon what you can.`,
            change: GPOS + 1
        },
        {
            event: `You come across a vent of oxygen coming from the shore of a large lake. You collect what you can in a small reserve tank.`,
            change: GPOS + 1
        },
        {
            event: `You come across a downed ship, which has just enough power in the life support sytem to replenish some of your oxygen.`,
            change: GPOS + 1
        },
        {
            event: `You come upon a thick fog that you think is mostly O2. You collect what you can in a small reserve tank.`,
            change: GPOS + 1
        },
        {
            event: `You see a hidden door in the side of a cliff face. It seems no one has been here for years, but you did find an oxygen tank.`,
            change: GPOS + 1
        },
        {
            event: `You find a dirty pond, but rememberd you have a water-to-oxygen converter. You collect what you can.`,
            change: GPOS + 1
        },
        {
            event: `You get thoughts that you might be in a simulation. You quickly hack in some oxygen while the player looks away.`,
            change: GPOS + 1
        },
        {
            event: `You find an ocean. Your water-to-oxygen converter should help you out here.`,
            change: GPOS + 1
        },
        {
            event: `You see a lone space pirate with an O2 tank. You decide it's time to rob the robbers.`,
            change: GPOS + 1
        },
        {
            event: `A waterfall allows you to use your water-to-oxygen converter to grab some oxygen.`,
            change: GPOS + 1
        },
        {
            event: `function 4thWall() { oxygen += 4 }.`,
            change: GPOS + 2
        },
        {
            event: `A small trading post is nearby. You check the shop and find an O2 tank.`,
            change: GPOS + 2
        },
        {
            event: `You find an extra O2 tank filled to the brim!`,
            change: GPOS + 2
        },
        {
            event: `You follow some smoke to find a drop pod that landed a little too fast. You take the alien's half-filled O2 tank since he won't be needing it anymore.`,
            change: GPOS + 2
        },
        {
            event: `You find a couple O2 tanks near a radium deposit. The radiation seems to have converted it to super oxygen!`,
            change: GPOS + 4
        },
        {
            event: `You happen upon a group of aliens who only say "dude". They seem to be able to breathe the air here. They pass you what looks like a cigar. You smoke it, only to find out its pure oxygen.`,
            change: GPOS + 6
        },
    ],
    nsO2: [
        {
            event: `You sneeze pretty hard and end up losing some oxygen.`,
            change: GNEG + 2
        },
        {
            event: `Namaste. You find a nice spot to do some yoga and lose some O2 in the process. At least you are now calm and collected.`,
            change: GNEG + 2
        },
        {
            event: `You've been holding in a yawn for too long.`,
            change: GNEG + 2
        },
        {
            event: `You stumble and knock the wind out of yourself. You are unharmed, but your deep gasping has sapped some much needed O2.`,
            change: GNEG + 2
        },
        {
            event: `You spot a very attractive alien and start to breathe heavily.`,
            change: GNEG + 2
        },
        {
            event: `You seriously need to poop. This one is gonna be a doozy.`,
            change: GNEG + 1
        },
        {
            event: `You stop at a trade station to pee. For some reason, they put the restroom on the second floor.`,
            change: GNEG + 1
        },
        {
            event: `Nothing is worse than having to escape from flying space alligators snapping at you.`,
            change: GNEG + 1
        },
        {
            event: `You get caught in an anti-gravity trap, and the only way to free yourself is by releasing small blasts of O2 from your tank to propel you forward.`,
            change: GNEG + 1
        },
        {
            event: `You come across a forest. You're not sure how to navigate through, so it will take you a bit of extra time.`,
            change: GNEG + 1
        },
        {
            event: `While trudging through a jungle your oxygen tank gets snagged on a branch and starts leaking.`,
            change: GNEG
        },
        {
            event: `A robot challenges you to a knife fight. You dispatch him quickly, but he managed to knick your oxygen line.`,
            change: GNEG
        },
        {
            event: `While collecting samples of the local flora you accidentally snip your oxygen line.`,
            change: GNEG
        },
        {
            event: `You find yourself mired in a deep, dense bog from which it takes a significant time to free yourself.`,
            change: GNEG
        },
        {
            event: `An alien bully comes up to you and keeps opening your helmet so you can't breathe. Good thing he's not a great runner...`,
            change: GNEG
        },
        {
            event: `You find yourself in a labyrinth of caves and tunnels. You're not sure how to navigate through, so it will take you a bit of extra time.`,
            change: GNEG
        },
        {
            event: `You stop to take a nap.`,
            change: GNEG
        },
        {
            event: `You stop and set up a campfire until morning.`,
            change: GNEG
        },
        {
            event: `A creature the size of a building is lumbering towards you from the distance. You run as fast and as far as you can before stopping to catch your breath.`,
            change: GNEG
        },
        {
            event: `A portal starts to open up right in front of you. Thanos has come to get you! While running away, you lose a significant chunk of your O2.`,
            change: GNEG - 2
        },
    ],
    eFuel: [
        {
            event: `You come across a makeshift mineshaft and are able to scrounge around for some fuel.`
        },
        {
            event: `You trip over something in the brush. Upon clearing the debris you discover a damaged alien shuttle with some fuel in it.`
        },
        {
            event: `You find a fuel tank and siphon off as much as you can.`
        },
        {
            event: `You find an old spaceship fueling station and locate a small amount of fuel left abandoned.`
        },
        {
            event: `You see a lone space pirate guarding his shuttle and hold him at Lazer-point for some of his fuel.`
        },
        {
            event: `You smell a strong scent of fuel through your suit. You follow it to a fuel stash.`
        },
        {
            event: `You find an abandoned space bee hive. You read somewhere that you can use their honey for fuel.`
        },
        {
            event: `You have a strange urge to look under a rock. Luckily, there was some fuel under there!`
        },
        {
            event: `You are being chased by an alien. He runs faster than you and tackles you. He just wanted to give you some fuel.`
        },
        {
            event: `Here. Have some fuel.`
        },
    ],
    eWarp: [
        {
            event: undefined
        },
        {
            event: "You found the first warp drive piece!"
        },
        {
            event: "You found the second warp drive piece!"
        },
        {
            event: "You found the third & final warp drive piece! Now look for some uranium to fuel it."
        },
        {
            event: "You found uranium! You can now warp home!"
        }
    ],
    eItem: [
        {
            event: undefined,
            item: undefined
        },
        {
            event: `You found the Shield! This item gives a +1 defense bonus on all negative HP events.`,
            item: `shield`
        },
        {
            event: `You found the Rebreather! This item gives a +1 defense bonus on all negative O2 events.`,
            item: `rebreather`
        },
        {
            event: `You found the Syphon! This item gives a +1 collection bonus on all gain fuel events.`,
            item: `syphon`
        }
    ]
}



//////////////////////////////   PLANET GENERATION   //////////////////////////////



function rdmInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePlanets() {

    // Looping through each planet to generate
    for (let inc = 0; inc < 3; inc++) {

        // Declaring variables we need to generate a planet
        let psHPCount, nsHPCount, psO2Count, nsO2Count;
        let fuelCount, warpCount, itemCount;
        let eventArray = [`psHP`, `nsHP`, `psO2`, `nsO2`];
        let numArray = [];

        // Setting default random & set event counts for each specific planet
        if (inc === 0) {
            psHPCount = 5;
            nsHPCount = 4;
            psO2Count = 5;
            nsO2Count = 4;
            fuelCount = 3;
            warpCount = 1;
            itemCount = 1;
        }
        else if (inc === 1) {
            psHPCount = 9;
            nsHPCount = 9;
            psO2Count = 9;
            nsO2Count = 9;
            fuelCount = 6;
            warpCount = 1;
            itemCount = 1;
        }
        else if (inc === 2) {
            psHPCount = 15;
            nsHPCount = 15;
            psO2Count = 15;
            nsO2Count = 15;
            fuelCount = 10;
            warpCount = 2;
            itemCount = 1;
        }
        else {
            console.log(`WTF! How did you get here?`);
        }

        // Loop to generate random events for each hex
        for (let i = 0; i < sav.planets[inc].hexes.length; i++) {
            if (i !== (sav.planets[inc].hexes.length - 1) / 2) {
                let rdmEvent = eventArray[Math.floor(Math.random() * eventArray.length)];

                if (rdmEvent === `psHP` && psHPCount > 0) {
                    sav.planets[inc].hexes[i].event = rdmEvent;
                    console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                    psHPCount--;
                }
                else if (rdmEvent === `nsHP` && nsHPCount > 0) {
                    sav.planets[inc].hexes[i].event = rdmEvent;
                    console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                    nsHPCount--;
                }
                else if (rdmEvent === `psO2` && psO2Count > 0) {
                    sav.planets[inc].hexes[i].event = rdmEvent;
                    console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                    psO2Count--;
                }
                else if (rdmEvent === `nsO2` && nsO2Count > 0) {
                    sav.planets[inc].hexes[i].event = rdmEvent;
                    console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                    nsO2Count--;
                }
                else {
                    i--;
                }
            }
            else {
                sav.planets[inc].hexes[i].event = `ship`;
                console.log(`SET EVENT ADDED "ship" to HEX${i}`);
            }
        }

        // Loop to generate random placements for the set events
        for (let e = 0; e < (fuelCount + warpCount + itemCount); e++) {
            let num = rdmInt(0, sav.planets[inc].hexes.length - 1);

            if (inc === 0) {
                if (num !== 4 && num !== 5 && num !== 8 && num !== 9 && num !== 10 && num !== 13 && num !== 14 && !numArray.includes(num)) {
                    numArray.push(num);
                }
                else {
                    e--;
                }
            }
            else if (inc === 1) {
                if (num !== 11 && num !== 12 && num !== 17 && num !== 18 && num !== 19 && num !== 24 && num !== 25 && !numArray.includes(num)) {
                    numArray.push(num);
                }
                else {
                    e--;
                }
            }
            else if (inc === 2) {
                if (num !== 21 && num !== 22 && num !== 29 && num !== 30 && num !== 31 && num !== 38 && num !== 39 && !numArray.includes(num)) {
                    numArray.push(num);
                }
                else {
                    e--;
                }
            }
            else {
                console.log(`WTF! How did you get here?`);
            }
        }

        // Loop to assign set events using the random number array
        for (let f = 0; f < numArray.length; f++) {
            if (fuelCount > 0) {
                sav.planets[inc].hexes[numArray[f]].event = `fuel`;
                console.log(`SET EVENT ADDED "fuel" to HEX${numArray[f]}`);
                fuelCount--;
            }
            else if (warpCount > 0) {
                sav.planets[inc].hexes[numArray[f]].event = `warp`;
                console.log(`SET EVENT ADDED "warp" to HEX${numArray[f]}`);
                warpCount--;
            }
            else if (itemCount > 0) {
                sav.planets[inc].hexes[numArray[f]].event = `item`;
                console.log(`SET EVENT ADDED "item" to HEX${numArray[f]}`);
                itemCount--;
            }
        }

        // Save the planets
        localStorage.setItem('save', JSON.stringify(sav));
    }
}



//////////////////////////////   MAIN MENU FUNCTIONS   //////////////////////////////



// Continue button on home page
function continueGame() {
    let username = $(`#usernameInput`).val().trim().toLowerCase();

    // Check if username is valid
    if (username.length > 2 && username.length < 26) {
        localStorage.setItem('username', username);
        location.href = `/game`;
    }
}

// New Game button on home page
function newGame() {
    let username = $(`#usernameInput`).val().trim().toLowerCase();

    // Check if username is valid
    if (username.length > 2 && username.length < 26) {
        let newBool = confirm(`Are you sure you want to start a new game? This will erase any previous progress.`);

        if (newBool) {
            generatePlanets();
            localStorage.setItem('username', username);
            localStorage.setItem('save', JSON.stringify(sav));
            location.href = `/game`;
        }
    }
    else {
        alert("Please enter a username between 3 & 25 characters!");
    }
}

$(document).on("click", "#continue", continueGame);
$(document).on("click", "#newGame", newGame);



//////////////////////////////   GAME FUNCTIONS   //////////////////////////////

let chatUser = "";
chatUser = localStorage.getItem('username');
console.log(chatUser);

function start() {
    loadSavedGame()
    hideHTML();
    showPlanet();
    gridChange();
    getMessages();
}

// Function to load a previously saved game
function loadSavedGame() {
    sav = JSON.parse(localStorage.getItem('save'));
    console.log(sav);
    statusCheck();
}

function hideHTML() {
    $(`#modalDrop`).hide();
}

function showPlanet() {
    if (sav.planet === 0) {
        $(`#grid-sm`).show();
        $(`#grid-md`).hide();
        $(`#grid-lg`).hide();
    }
    else if (sav.planet === 1) {
        $(`#grid-sm`).hide();
        $(`#grid-md`).show();
        $(`#grid-lg`).hide();
    }
    else if (sav.planet === 2) {
        $(`#grid-sm`).hide();
        $(`#grid-md`).hide();
        $(`#grid-lg`).show();
    }
    else {
        alert(`I can't believe you've done this...`);
    }
}

function goHome() {
    location.href = `/`;
}
function getEvent(hexEvent) {
    if (hexEvent === "psHP") {
        let thisEvent = EVT.psHP[rdmInt(0, EVT.psHP.length - 1)];
        $(`#modalDrop`).show();
        $(`#mc1`).text(thisEvent.event);
        $(`#mc2`).text(`[ GAIN ${thisEvent.change} HEALTH ]`);
        $(`#mb1`).text("Continue");
        $(`#but2`).hide();
        $(`#but3`).hide();
        sav.health += thisEvent.change;
    }
    else if (hexEvent === "nsHP") {
        let thisEvent = EVT.nsHP[rdmInt(0, EVT.nsHP.length - 1)];
        $(`#modalDrop`).show();
        $(`#mc1`).text(thisEvent.event);
        $(`#mb1`).text("Continue");
        $(`#but2`).hide();
        $(`#but3`).hide();
        if (sav.itemCount >= 1) {
            sav.health += 1 + thisEvent.change;
            $(`#mc2`).text(`[ LOSE ${1 + thisEvent.change} HEALTH ]`);
        }
        else {
            sav.health += thisEvent.change;
            $(`#mc2`).text(`[ LOSE ${thisEvent.change} HEALTH ]`);
        }
    }
    else if (hexEvent === "psO2") {
        let thisEvent = EVT.psO2[rdmInt(0, EVT.psO2.length - 1)];
        $(`#modalDrop`).show();
        $(`#mc1`).text(thisEvent.event);
        $(`#mc2`).text(`[ GAIN ${thisEvent.change} OXYGEN ]`);
        $(`#mb1`).text("Continue");
        $(`#but2`).hide();
        $(`#but3`).hide();
        sav.oxygen += thisEvent.change;
    }
    else if (hexEvent === "nsO2") {
        let thisEvent = EVT.nsO2[rdmInt(0, EVT.nsO2.length - 1)];
        $(`#modalDrop`).show();
        $(`#mc1`).text(thisEvent.event);
        $(`#mb1`).text("Continue");
        $(`#but2`).hide();
        $(`#but3`).hide();
        if (sav.itemCount >= 2) {
            sav.oxygen += 1 + thisEvent.change;
            $(`#mc2`).text(`[ LOSE ${1 + thisEvent.change} OXYGEN ]`);
        }
        else {
            sav.oxygen += thisEvent.change;
            $(`#mc2`).text(`[ LOSE ${thisEvent.change} OXYGEN ]`);
        }
    }
    else if (hexEvent === "ship") {
        $(`#but2`).show();
        $(`#but3`).show();
        $(`#modalDrop`).show();
        $(`#mc1`).text("You're back at your ship, what would you like to do now?");
        $(`#mc2`).text(`[ SELECT ONE ]`);
        $(`#mb1`).text("Save and replenish O2");
        $(`#mb2`).text("Save and advance to next planet");
        $(`#mb3`).text("Continue");
    }
    else if (hexEvent === "fuel") {

        $(`#modalDrop`).show();
        $(`#mc1`).text(EVT.eFuel[rdmInt(0, EVT.eFuel.length - 1)].event);
        $(`#mb1`).text("Continue");
        $(`#but2`).hide();
        $(`#but3`).hide();
        if (sav.itemCount >= 3) {
            sav.fuel += 2;
            $(`#mc2`).text(`[ GAIN 2 FUEL ]`);
        }
        else {
            sav.fuel += 1;
            $(`#mc2`).text(`[ GAIN 1 FUEL ]`);
        }
    }
    else if (hexEvent === "warp") {
        sav.warpCount++;
        $(`#modalDrop`).show();
        $(`#mc1`).text(EVT.eWarp[sav.warpCount].event);
        $(`#mc2`).text(`[ WARP PIECES COLLECTED: ${sav.warpCount} ]`);
        $(`#mb1`).text("Continue");
        $(`#but2`).hide();
        $(`#but3`).hide();
    }
    else if (hexEvent === "item") {
        sav.itemCount++;
        $(`#modalDrop`).show();
        $(`#mc1`).text(EVT.eItem[sav.itemCount].event);
        $(`#mc2`).text(`[ ITEMS COLLECTED: ${sav.itemCount} ]`);
        $(`#mb1`).text("Continue");
        $(`#but2`).hide();
        $(`#but3`).hide();
    }
    statusCheck();
}

function gridMove() {
    if ($(this).data(`reach`) === true) {
        $(this).data(`visited`, true);
        let coordinates = $(this).data(`coordinates`).split(`, `);
        let coords = $(this).data(`coordinates`);

        let myX = 0;
        let myY = 0;
        myX = parseInt(coordinates[0]);
        myY = parseInt(coordinates[1]);

        if (coords === "0, 0") {
            getEvent("ship");
        }

        let curPlanet = sav.planets[sav.planet];

        for (let i = 0; i < curPlanet.hexes.length; i++) {
            if (curPlanet.hexes[i].hexXY[0] + ", " + curPlanet.hexes[i].hexXY[1] === coords) {
                sav.oxygen -= 1;
                if (curPlanet.hexes[i].visited === true) {
                    capCheck();
                }
                else {
                    curPlanet.hexes[i].visited = true;
                    getEvent(curPlanet.hexes[i].event);
                }
            }
        }

        $(`.hex`).each(function (index) {
            let xyCheck = $(this).data(`coordinates`).split(`, `);
            let cX = parseInt(xyCheck[0]);
            let cY = parseInt(xyCheck[1]);

            if (Math.abs(cX - myX) <= 1 && Math.abs(cY - myY) <= 1 && cX + cY !== myX + myY) {
                $(this).data(`reach`, true);
            }
            else {
                $(this).data(`reach`, false);
            }

            if (cX === myX && cY === myY) {
                $(this).data(`current`, true);
            }
            else {
                $(this).data(`current`, false);
            }
        });
        gridChange();
    }
    else {
        alert(`You cannot move there!`);
    }
}
function gridChange() {
    $(`.hex`).each(function (index) {

        $(this).removeClass(`hexCurrent`);
        $(this).removeClass(`hexVisitedReach`);
        $(this).removeClass(`hexVisitedNoReach`);
        $(this).removeClass(`hexNotVisitedReach`);
        $(this).removeClass(`hexNotVisitedNoReach`);

        if ($(this).data(`current`) === true) {
            $(this).addClass(`hexCurrent`);
        }
        else if ($(this).data(`visited`) === true && $(this).data(`reach`) === true) {
            $(this).addClass(`hexVisitedReach`);
        }
        else if ($(this).data(`visited`) === true && $(this).data(`reach`) === false) {
            $(this).addClass(`hexVisitedNoReach`);
        }
        else if ($(this).data(`visited`) === false && $(this).data(`reach`) === true) {
            $(this).addClass(`hexNotVisitedReach`);
        }
        else if ($(this).data(`visited`) === false && $(this).data(`reach`) === false) {
            $(this).addClass(`hexNotVisitedNoReach`);
        }
        else {
            console.log(`No change was made for this hex...`);
        }
    });
    statusCheck();
}

function gameAction() {
    let butText = $(this).children().text();
    console.log(butText);
    if (butText === "Save and replenish O2") {
        if (sav.fuel >= 2) {
            sav.oxygen += 10;
            sav.fuel -= 2;
            localStorage.setItem('save', JSON.stringify(sav));
            $("#modalDrop").hide();
        }
        else {
            alert(`You need at least 1 fuel to replenish your oxygen!`);
        }
    }
    else if (butText === "Save and advance to next planet") {
        if (sav.warpCount > sav.planet && sav.planet !== 2) {
            if (sav.health < 5) sav.health = 5;
            if (sav.oxygen < 10) sav.oxygen = 10;
            sav.planet++;
            localStorage.setItem('save', JSON.stringify(sav));
            $("#modalDrop").hide();
            showPlanet();
        }
        else if (sav.planet === 2) {
            alert("You must find uranium to return home!");
        }
        else {
            alert("You must have the warp piece to continue to the next planet!");
        }
    }
    else if (butText === "Continue") {
        $("#modalDrop").hide();
    }
    capCheck();
}

function capCheck() {
    if (sav.warpCount >= 4) {
        alert("You have survived! Congratulations on getting back home!");
        location.href = "/";
    }

    if (sav.health >= 20) {
        sav.health = 20;
    }
    if (sav.oxygen >= 20) {
        sav.oxygen = 20;
    }

    if (sav.oxygen <= 0) {
        sav.health += sav.oxygen;
    }
    if (sav.health <= 0) {
        alert("You have died!");
        location.href = "/";
    }

    statusCheck();
}

function statusCheck() {
    $(`#health`).text(`HEALTH: [ ${sav.health} ]`);
    $(`#oxygen`).text(`OXYGEN: [ ${sav.oxygen} ]`);
    $(`#fuel`).text(`FUEL: [ ${sav.fuel} ]`);
    $(`#statPlanet`).text(`CURRENT PLANET: [ ${sav.planet + 1} ]`);
    $(`#statHealth`).text(`HEALTH: [ ${sav.health} ]`);
    $(`#statOxygen`).text(`OXYGEN: [ ${sav.oxygen} ]`);
    $(`#statFuel`).text(`FUEL: [ ${sav.fuel} ]`);
    $(`#statWarp`).text(`WARP PIECES: [ ${sav.warpCount} ]`);
    if (sav.itemCount <= 0) {
        $(`#statShield`).text(`HAS SHIELD: [ false ]`);
        $(`#statRebreather`).text(`HAS REBREATHER: [ false ]`);
        $(`#statSyphon`).text(`HAS SYPHON: [ false ]`);
    }
    else if (sav.itemCount === 1) {
        $(`#statShield`).text(`HAS SHIELD: [ true ]`);
        $(`#statRebreather`).text(`HAS REBREATHER: [ false ]`);
        $(`#statSyphon`).text(`HAS SYPHON: [ false ]`);
    }
    else if (sav.itemCount === 2) {
        $(`#statShield`).text(`HAS SHIELD: [ true ]`);
        $(`#statRebreather`).text(`HAS REBREATHER: [ true ]`);
        $(`#statSyphon`).text(`HAS SYPHON: [ false ]`);
    }
    else if (sav.itemCount >= 3) {
        $(`#statShield`).text(`HAS SHIELD: [ true ]`);
        $(`#statRebreather`).text(`HAS REBREATHER: [ true ]`);
        $(`#statSyphon`).text(`HAS SYPHON: [ true ]`);
    }
}

$(document).ready(function () {
    // console.log(`HREF: ` + window.location.href);
    // console.log(`HOSTNAME: ` + window.location.hostname);
    // console.log(`PATHNAME: ` + window.location.pathname);
    if (window.location.pathname === `/`) {

    }
    else if (window.location.pathname === `/game`) {
        start();
    }
    else {
        console.log(`PATHNAME: ` + window.location.pathname);
    }

});
$(document).on("click", "#home", goHome);
$(document).on("click", ".hex", gridMove);
$(document).on("click", ".modalButton", gameAction);



//////////////////////////////   CHAT FUNCTIONS (SOCKET-IO)   //////////////////////////////


//get function to grab all messages in the database and display in the chatroom
function getMessages() {

    $.ajax({
        method: "GET",
        url: "/api/messages/",
        accept: "application/json"
    }).then(function (data) {
        // console.log("This Data: " + data);
        messages = data;
        if (!messages || !messages.length) {
            displayEmpty();
        } else {
            for (var i = 0; i < messages.length; i++) {
                var final_message = $("<p />").text(messages[i].message);
                $("#history").append(final_message);
            }
        }
        onRowAdded();
    });
}

//displays no chat history if there is none in the database
function displayEmpty() {
    var noMessages = "******No Chat History******"
    var final_message = $("<p />").text(noMessages);
    $("#history").append(final_message);
}

//connects to socket, sends to server and displays chat message
var socket = io.connect();
$("form#chatForm").submit(function (e) {
    e.preventDefault();

    socket.emit("send message", $(this).find("#msg_text").val(), chatUser, function () {
        $("form#chatForm #msg_text").val("");
    });
});
socket.on("update messages", function (msg) {
    var final_message = $("<p />").text(msg);
    $("#history").append(final_message);

    console.log(msg);
    saveMessage(msg);
    onRowAdded();
});

//alters message and user into an object and runs post
function saveMessage(msg) {
    var newMessage = {
        message: msg,
        user: chatUser
    };
    submitMessage(newMessage);
};
//post function for message object with username
function submitMessage(newMessage) {
    console.log(newMessage);
    $.ajax({
        url: "/api/messages",
        type: "POST",
        data: newMessage
    }).then((response) => {
        console.log(response);
    });
};

//scrolling function
onRowAdded = function () {
    $('#history').animate({ scrollTop: $('#history').prop('scrollHeight') });
};

///opens modal for chat

function openSocket() {
    document.getElementById("myNav").style.height = "100%";
}

//closes modal for chat

function closeSocket() {
    document.getElementById("myNav").style.height = "0%";
}

//////////////////////////////////////////////// STATUS MODAL ////////////////////////////////////////

//opens status modal

function openStatus() {
    document.getElementById("myMenu").style.height = "100%";
}

//closes modal for status

function closeStatus() {
    document.getElementById("myMenu").style.height = "0%";
}




