// Global positive/negative constants
const GPOS = 2;
const GNEG = -4;

// Constant events object (Stores all events random & set)
const events = {
    psHP: [
        {
            text: `You discover a bush filled with bean pods, you've seen these before and you've concluded they are healthy.`,
            change: GPOS
        },
        {
            text: `You happen upon an abandoned vehicle. Searching it yields you a light aid kit.`,
            change: GPOS
        },
        {
            text: `You discover a thick patch of common berries and gorge upon them.`,
            change: GPOS
        },
        {
            text: `You roll over a rock and find some delicious fat grubs, bottoms up.`,
            change: GPOS
        },
        {
            text: `You come across an old outpost and find medical supplies inside. You use them to heal up.`,
            change: GPOS
        },
        {
            text: `A budding tree happens to have 1 ripe fruit on it. You take it and eat it.`,
            change: GPOS
        },
        {
            text: `You locate a garden patch filled with what looks like space cabbage. Space cabbage isn't your favorite, but food is food.`,
            change: GPOS
        },
        {
            text: `A swarm of gnat-like creatures form around your head. You open up your helmet to let them in and you get your protein for the day.`,
            change: GPOS
        },
        {
            text: `A small one-legged possum-like creature hops on by. You shoot it with your lazer and take its meat.`,
            change: GPOS
        },
        {
            text: `A hot spring is nearby. You hop in and relax for a bit.`,
            change: GPOS + 1
        },
        {
            text: `You find a stream of crystal clear water that emits a sparkling glow. You drink it and feel instantly restored.`,
            change: GPOS + 1
        },
        {
            text: `You happen upon an abandoned vehicle. Searching it yields you a full aid kit.`,
            change: GPOS + 1
        },
        {
            text: `You identify a medicinal plant you learned about in the academy. You re-purpose it it for its healing properties.`,
            change: GPOS + 1
        },
        {
            text: `You watch a predator chase down and kill a large game animal. You whip out your lazer, scare off the predator with pot shots and take its kill.`,
            change: GPOS + 1
        },
        {
            text: `You see an abandoned outpost on a high rocky cliff. You use your trusty jetpack to fly up and search around. You find some canned steak.`,
            change: GPOS + 2
        },
        {
            text: `You find a juicy steak, cooked to perfection just laying on the ground. You thought it was a mirage, but it seemed to give you some sustinence.`,
            change: GPOS + 2
        },
        {
            text: `You spot a flying space alligator and shoot it down. You eatin' good tonight.`,
            change: GPOS + 2
        },
        {
            text: `You smell a campfire nearby with some local aliens sitting around it. They tell you to join them and sing some campfire songs. You get a good hardy meal afterwards.`,
            change: GPOS + 2
        },
        {
            text: `You smell a freshly cooked meal. Following your nose, you find a shack where you sneak inside and find a 4 course meal on a platter. You eat as much as you can until you hear a toilet flush. You escape without a sound.`,
            change: GPOS + 2
        },
        {
            text: `You happen to find an ancient sap that the locals call "The Nectar of the Gods". You lick some off the tree and start seeing colors that you've never seen before.`,
            change: GPOS + 6
        },
    ],
    nsHP: [
        {
            text: `You stumble upon a hive of viscious space bees, they manage to sting you through your space suit somehow.`,
            change: GNEG + 2
        },
        {
            text: `Quicksand! You're not too hurt, but still lucky enough to escape with your life.`,
            change: GNEG + 2
        },
        {
            text: `The planet starts to shake violently, tossing you to the ground.`,
            change: GNEG + 2
        },
        {
            text: `You fall through a crack in the volcanic rock and twist your ankle.`,
            change: GNEG
        },
        {
            text: `A swarm of leathery-winged death bats attack you as you approach the mouth of a cave.`,
            change: GNEG
        },
        {
            text: `A gentle rain begins to fall. You are just about collect some until you notice it eating through your suit.`,
            change: GNEG
        },
        {
            text: `A geostorm whirls up a tornado on top of you and launches you a fair distance.`,
            change: GNEG
        },
        {
            text: `You are entranced by an incredible shifting light show in the atmosphere. It is truly a sight to behold. Too bad it's also blasting you with cosmic radiation...`,
            change: GNEG
        },
        {
            text: `A deep rumble emanates from beneath you. You've seen this movie before, and manage to get mostly out of the way of the giant worm that erupts from the ground.`,
            change: GNEG
        },
        {
            text: `Thoughts of home distract you from looking where you're going. You end up falling into a small ravine.`,
            change: GNEG
        },
        {
            text: `You run into some shady looking locals. They don't look to pleased that you just traversed into their territory, so they give you a good roughhousing.`,
            change: GNEG
        },
        {
            text: `You trip over a pebble and dislocate your shoulder upon landing.`,
            change: GNEG
        },
        {
            text: `A cute little furry creature approaches you. As you extend your hand to pet it, it growls and bites your arm then runs away.`,
            change: GNEG
        },
        {
            text: `A small group of alien wolves decide they want you for dinner. You made sure that didn't happen, but took a beating in the process.`,
            change: GNEG
        },
        {
            text: `You see a faint light that seems to be getting brighter by the second. It gives you a good thunk to the ground as it passes by and continues on.`,
            change: GNEG
        },
        {
            text: `You find a gentle giant that wants to play catch with you. It throws a large boulder to you, but it crushes you when you try to catch it. The creature goes to find someone else to play catch with.`,
            change: GNEG
        },
        {
            text: `You find a seemingly abandoned building. Out of nowhere, you get attacked by drones. You make it out just in time.`,
            change: GNEG
        },
        {
            text: `A supermassive geostorm forms around you and strikes you with lightning.`,
            change: GNEG - 2
        },
        {
            text: `You come face-to-face with a very large and unfriendly creature that the locals call "Samsquanch". This won't end well.`,
            change: GNEG - 2
        },
        {
            text: `You are ambushed by space pirates. You fend them off as much as you could, but you feel like you barely made it out alive.`,
            change: GNEG - 2
        },
    ],
    psO2: [
        {
            text: `You flatulate and your suit somehow converts it to oxygen.`,
            change: GPOS
        },
        {
            text: `You decide to take a break and focus on slowing your breathing, preserving your O2.`,
            change: GPOS
        },
        {
            text: `You find yourself in a thick forest teeming with oxygen. You open your helmet and grab a gulp.`,
            change: GPOS
        },
        {
            text: `Big-brain time! You figure that if you hold your breath, you can use less oxygen. At least it does on this planet. Or maybe the air is breathable on this planet. You are too scared to find out though.`,
            change: GPOS
        },
        {
            text: `You find a crashed land-speeder with a fuel compound that uses oxygen. You syphon what you can.`,
            change: GPOS + 1
        },
        {
            text: `You come across a vent of oxygen coming from the shore of a large lake. You collect what you can in a small reserve tank.`,
            change: GPOS + 1
        },
        {
            text: `You come across a downed ship, which has just enough power in the life support sytem to replenish some of your oxygen.`,
            change: GPOS + 1
        },
        {
            text: `You come upon a thick fog that you think is mostly O2. You collect what you can in a small reserve tank.`,
            change: GPOS + 1
        },
        {
            text: `You see a hidden door in the side of a cliff face. It seems no one has been here for years, but you did find an oxygen tank.`,
            change: GPOS + 1
        },
        {
            text: `You find a dirty pond, but rememberd you have a water-to-oxygen converter. You collect what you can.`,
            change: GPOS + 1
        },
        {
            text: `You get thoughts that you might be in a simulation. You quickly hack in some oxygen while the player looks away.`,
            change: GPOS + 1
        },
        {
            text: `You find an ocean. Your water-to-oxygen converter should help you out here.`,
            change: GPOS + 1
        },
        {
            text: `You see a lone space pirate with an O2 tank. You decide it's time to rob the robbers.`,
            change: GPOS + 1
        },
        {
            text: `A waterfall allows you to use your water-to-oxygen converter to grab some oxygen.`,
            change: GPOS + 1
        },
        {
            text: `function 4thWall() { oxygen += 4 }.`,
            change: GPOS + 2
        },
        {
            text: `A small trading post is nearby. You check the shop and find an O2 tank.`,
            change: GPOS + 2
        },
        {
            text: `You find an extra O2 tank filled to the brim!`,
            change: GPOS + 2
        },
        {
            text: `You follow some smoke to find a drop pod that landed a little too fast. You take the alien's half-filled O2 tank since he won't be needing it anymore.`,
            change: GPOS + 2
        },
        {
            text: `You find a couple O2 tanks near a radium deposit. The radiation seems to have converted it to super oxygen!`,
            change: GPOS + 4
        },
        {
            text: `You happen upon a group of aliens who only say "dude". They seem to be able to breathe the air here. They pass you what looks like a cigar. You smoke it, only to find out its pure oxygen.`,
            change: GPOS + 6
        },
    ],
    nsO2: [
        {
            text: `You sneeze pretty hard and end up losing some oxygen.`,
            change: GNEG + 2
        },
        {
            text: `Namaste. You find a nice spot to do some yoga and lose some O2 in the process. At least you are now calm and collected.`,
            change: GNEG + 2
        },
        {
            text: `You've been holding in a yawn for too long.`,
            change: GNEG + 2
        },
        {
            text: `You stumble and knock the wind out of yourself. You are unharmed, but your deep gasping has sapped some much needed O2.`,
            change: GNEG + 2
        },
        {
            text: `You spot a very attractive alien and start to breathe heavily.`,
            change: GNEG + 2
        },
        {
            text: `You seriously need to poop. This one is gonna be a doozy.`,
            change: GNEG + 1
        },
        {
            text: `You stop at a trade station to pee. For some reason, they put the restroom on the second floor.`,
            change: GNEG + 1
        },
        {
            text: `Nothing is worse than having to escape from flying space alligators snapping at you.`,
            change: GNEG + 1
        },
        {
            text: `You get caught in an anti-gravity trap, and the only way to free yourself is by releasing small blasts of O2 from your tank to propel you forward.`,
            change: GNEG + 1
        },
        {
            text: `You come across a forest. You're not sure how to navigate through, so it will take you a bit of extra time.`,
            change: GNEG + 1
        },
        {
            text: `While trudging through a jungle your oxygen tank gets snagged on a branch and starts leaking.`,
            change: GNEG
        },
        {
            text: `A robot challenges you to a knife fight. You dispatch him quickly, but he managed to knick your oxygen line.`,
            change: GNEG
        },
        {
            text: `While collecting samples of the local flora you accidentally snip your oxygen line.`,
            change: GNEG
        },
        {
            text: `You find yourself mired in a deep, dense bog from which it takes a significant time to free yourself.`,
            change: GNEG
        },
        {
            text: `An alien bully comes up to you and keeps opening your helmet so you can't breathe. Good thing he's not a great runner...`,
            change: GNEG
        },
        {
            text: `You find yourself in a labyrinth of caves and tunnels. You're not sure how to navigate through, so it will take you a bit of extra time.`,
            change: GNEG
        },
        {
            text: `You stop to take a nap.`,
            change: GNEG
        },
        {
            text: `You stop and set up a campfire until morning.`,
            change: GNEG
        },
        {
            text: `A creature the size of a building is lumbering towards you from the distance. You run as fast and as far as you can before stopping to catch your breath.`,
            change: GNEG
        },
        {
            text: `A portal starts to open up right in front of you. Thanos has come to get you! While running away, you lose a significant chunk of your O2.`,
            change: GNEG - 2
        },
    ],
    dHP: [
        {
            text: `You find a group of aliens. They don't see you yet. What do you do?`,
            choices: [
                {
                    text: `Approach them with a friendly greeting.`,
                    outcomes: [
                        {
                            text: `They invite you to a feast... You fill your stomach on space bugs.`,
                            change: GPOS
                        },
                        {
                            text: `They invite you to a feast... You are the main course.`,
                            change: GNEG
                        },
                    ]
                },
                {
                    text: `Attempt to sneak around them.`,
                    outcomes: [
                        {
                            text: `You succeed and manage to snag some food while they weren't looking.`,
                            change: GPOS
                        },
                        {
                            text: `You snap a twig and they start shooting lazers at you.`,
                            change: GNEG
                        },
                    ]
                },
            ]
        },
        {
            text: `You find a recently deceased animal, but you can't tell what killed it. Your stomach growls. What do you do?`,
            choices: [
                {
                    text: `You're too hungry not to take a chance, and carve yourself off a few thick steaks.`,
                    outcomes: [
                        {
                            text: `That was easily the best steak you've ever eaten!`,
                            change: GPOS
                        },
                        {
                            text: `You begin to feel nauseous only immediately, this is going to be a long night...`,
                            change: GNEG
                        },
                    ]
                },
                {
                    text: `You don't like the idea of eating carrion even if you're starving.`,
                    outcomes: [
                        {
                            text: `It turns out the beast wasn't actually dead! It thanks you for not eating it by leading you to a small stream teeming with fish.`,
                            change: GPOS
                        },
                        {
                            text: `It turns out the beast wasn't actually dead! You are too close to it, and the beast attacks you in fear`,
                            change: GNEG
                        },
                    ]
                },
            ]
        },
        {
            text: `While exploring a cave you find a shimmering portal in the wall. You do not know where it leads, but it has to be better than here, right?`,
            choices: [
                {
                    text: `Fortune favors the bold, dive in head-first!`,
                    outcomes: [
                        {
                            text: `You land softly on a bar stool in what seems to be an old timey saloon, and a waitress greets you with a cocktail and a menu.`,
                            change: GPOS
                        },
                        {
                            text: `You open your eyes and realize it is pitch black. You are in a deep part of the cave, and getting out in the dark takes a lot out of you.`,
                            change: GNEG
                        },
                    ]
                },
                {
                    text: `You should at least test it first. You pick up a rock and throw it into the portal.`,
                    outcomes: [
                        {
                            text: `A small amount of food comes flying back out. It seems you've inadvertently found an interstellar fast food portal`,
                            change: GPOS
                        },
                        {
                            text: `The rock comes hurtling back out of the portal directy at your face.`,
                            change: GNEG
                        },
                    ]
                },
            ]
        },
        {
            text: `At a long rickety bridge you are approached by a hulking creature that offers to let you pass if you can answer his riddle.`,
            choices: [
                {
                    text: `You love riddles, let's hear it!`,
                    outcomes: [
                        {
                            text: `You've actually heard this riddle before. You answer so quickly the creature is impressed and gives you some supplies.`,
                            change: GPOS
                        },
                        {
                            text: `His "riddle" involves advanced quantum mechanics. You try to make a break for it, but he quickly catches up to you...`,
                            change: GNEG
                        },
                    ]
                },
                {
                    text: `You politely decline and search for another way across.`,
                    outcomes: [
                        {
                            text: `Not used to rejection, the creature keeps pestering you and eventually is so desperate he bribes you with sweets.`,
                            change: GPOS
                        },
                        {
                            text: `Not used to rejection, the creature immediately attacks you in a fit of rage.`,
                            change: GNEG
                        },
                    ]
                },
            ]
        },
    ],
    dO2: [
        {
            text: `You see a crashed shuttle stuck in the tree tops. You may be able to salvage some supplies if you can get to it, but the climb will not be easy. What do you do?`,
            choices: [
                {
                    text: `Start climbing, humans are like 98% monkey right?`,
                    outcomes: [
                        {
                            text: `You reach the shuttle unscathed, and find an oxygen tank that survived the crash`,
                            change: GPOS
                        },
                        {
                            text: `About half way to the top you hear a noise above you. You've shaken the shuttle loose and now it's coming right for you!`,
                            change: GNEG
                        },
                    ]
                },
                {
                    text: `Leave it alone, it doesn't seem that sturdy anyway.`,
                    outcomes: [
                        {
                            text: `You walk away feeling confident in your decision making skills, and your spirits are raised`,
                            change: GPOS
                        },
                        {
                            text: `You kick the tree in frutration for good measure, and immediately hear snapping branches as the shuttle comes falling right for you!`,
                            change: GNEG
                        },
                    ]
                },
            ]
        },
        {
            text: `A pink squishy blob hops in front of you. It looks you directly in the eyes and makes a soft cooing noise.`,
            choices: [
                {
                    text: `It's so cute you have to give it a big hug!`,
                    outcomes: [
                        {
                            text: `It giggles as you squeeze it, and you realize it is excreting oxygen as you squeeze!`,
                            change: GPOS
                        },
                        {
                            text: `It growls as you squeeze it, and you realize it is squeezing you back only around your neck.`,
                            change: GNEG
                        },
                    ]
                },
                {
                    text: `It's cuteness is surely a trap, so you give it a swift kick`,
                    outcomes: [
                        {
                            text: `It may or may not have been a trap, but it excreted oxygen as it flew through the air which you were able to collect in a spare tank`,
                            change: GPOS
                        },
                        {
                            text: `It may or may not have been a trap, but kicking it really pissed off the blob's mom!`,
                            change: GNEG
                        },
                    ]
                },
            ]
        },
        {
            text: `A swarm of space bees have built a hive in an abandoned oxygen tank facility. You are pretty sure you can fill up your reserve tanks if you can avoid disturbing the space bees.`,
            choices: [
                {
                    text: `Space bees can smell fear, you calm your nerves and get your reserve tank ready`,
                    outcomes: [
                        {
                            text: `You calmly walk into the facility, fill up your reserve tank, and slip away without disrupting the space bees.`,
                            change: GPOS
                        },
                        {
                            text: `You calmly walk into the facility, but when you go to attach your reserve tank you drop it with a loud CLANG. You look up to see thousands of space bees staring right at you...`,
                            change: GNEG - 4
                        },
                    ]
                },
                {
                    text: `Space bees, shmace bees, you are getting that oxygen. You create a diversion to draw them out of the facility`,
                    outcomes: [
                        {
                            text: `It worked like a charm, and you are able to easily fill a couple tanks before the space bees start to return.`,
                            change: GPOS + 4
                        },
                        {
                            text: `Space bees come pouring out of every exit, including the vent you are currently standing on.`,
                            change: GNEG
                        },
                    ]
                },
            ]
        },
    ],
    fuel: [
        {
            text: `You come across a makeshift mineshaft and are able to scrounge around for some fuel.`,
        },
        {
            text: `You trip over something in the brush. Upon clearing the debris you discover a damaged alien shuttle with some fuel in it.`,
        },
        {
            text: `You find a fuel tank and siphon off as much as you can.`,
        },
        {
            text: `You find an old spaceship fueling station and locate a small amount of fuel left abandoned.`,
        },
        {
            text: `You see a lone space pirate guarding his shuttle and hold him at Lazer-point for some of his fuel.`,
        },
        {
            text: `You smell a strong scent of fuel through your suit. You follow it to a fuel stash.`,
        },
        {
            text: `You find an abandoned space bee hive. You read somewhere that you can use their honey for fuel.`,
        },
        {
            text: `You have a strange urge to look under a rock. Luckily, there was some fuel under there!`,
        },
        {
            text: `You are being chased by an alien. He runs faster than you and tackles you. He just wanted to give you some fuel.`,
        },
        {
            text: `Here. Have some fuel.`,
        },
    ],
    warp: [
        {
            text: "You found the first warp drive piece!",
        },
        {
            text: "You found the second warp drive piece!",
        },
        {
            text: "You found the third & final warp drive piece! Now look for some uranium to fuel it.",
        },
        {
            text: "You found uranium! Now get to the ship so you can warp home.",
        }
    ],
    item: [
        {
            text: `You found the Shield! This item gives a +1 defense bonus on all negative HP events.`
        },
        {
            text: `You found the Rebreather! This item gives a +1 defense bonus on all negative O2 events.`
        },
        {
            text: `You found the Syphon! This item gives a +1 collection bonus on all gain fuel events.`
        },
        {
            text: `You found the AI Drone! This item helps you achieve better outcomes on dynamic HP events!.`
        },
        {
            text: `You found the AI Drone Upgrade! This item helps you achieve better outcomes on dynamic O2 events.`
        },
        {
            text: `You found the Efficiency Tank! This item gives a +5 bonus when replenishing your oxygen at the ship & raises your max oxygen to 25.`
        },
    ],
    ship: {
        text: `You're back at your ship, what would you like to do now?`,
        choices: [
            {
                text: `Replenish your O2`
            },
            {
                text: `Advance to the next planet`
            },
            {
                text: `Continue`
            }
        ]
    }
}

export default events;