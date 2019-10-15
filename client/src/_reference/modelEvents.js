// let dHpEvents = [
//     {
//         event: "You discover a tree with a strange alluring fruit. You aren't sure if it is healthy or harmful.",
//         eventBioScannerA: "You discover a tree with a strange alluring fruit. Your scanner tells you the fruit is healthy (Gain HP).",
//         eventBioScannerB: "You discover a tree with a strange alluring fruit. Your scanner tells you the fruit is harmful (Continue on).",
//         choiceA: "Eat the fruit.",
//         choiceB: "Continue on.",
//         outcomeA1: "The fruit satisfies your hunger (Gain HP).",
//         outcomeA2: "The fruit gave you the runs (Lose HP).",
//         outcomeB1: "You avoid the berries."
//     },
//     {
//         event: "An enormous sandstorm appears in the distance.",
//         choiceA: "Hunker down and wait out the storm.",
//         choiceB: "Push yourself harder to beat the storm.",
//         outcomeA1: "You use additional oxygen (Lose O2).",
//         outcomeB1: "You expend a lot of energy racing the storm (Lose HP)."
//     },
//     {
//         event: "The natural hot springs of this planet are reported to have restorative properties.",
//         choiceA: "Take a little 'Me time'.",
//         choiceB: "Continue your search.",
//         outcomeA1: "You feel fantastic (Gain HP).",
//         outcomeB1: "You avoid the hot springs, who knows what's growing in there."
//     },
//     {
//         event: "You come to a fork in the path.",
//         choiceA: "Go left.",
//         choiceB: "Go right.",
//         outcomeA1: "You find more berries (Gain HP).",
//         outcomeB1: "The land is bare and you move on."
//     },
//     {
//         event: "You see a small creature caught in a snare.",
//         choiceA: "Take it and run.",
//         choiceB: "Leave it and continue on.",
//         outcomeA1: "You needed that meal badly (Gain HP).",
//         outcomeB1: "Your stomach growls, but you feel better safe than sorry."
//     },
//     {
//         event: "You see a small creature caught in a snare.",
//         choiceA: "Take it and run.",
//         choiceB: "Leave it and continue on.",
//         outcomeA1: "You're attacked before you get it released, and barely escape with your life (Lose HP).",
//         outcomeB1: "Your stomach growls, but you feel better safe than sorry."
//     },
//     {
//         event: "There is a strange cloud floating a few feet off the ground ahead of you. It seems to be faintly glowing and pulsating, and gives you an odd sense of comfort.",
//         choiceA: "Get a better look.",
//         choiceB: "Get out of there now.",
//         outcomeA1: "You feel a brief sense of euphoria before the pain kicks in (Lose HP).",
//         outcomeB1: "You really want to go check out that cloud, but you would rather make it home safely."
//     },
//     {
//         event: "You kick over some rocks and notice a corner of old paper sticking out. It appears to be a crudely drawn map with an X seemingly a short distance away.",
//         choiceA: "You know there are space pirates in these parts, maybe they have something you need.",
//         choiceB: "You know there are space pirates in these parts, better put the map back and steer clear",
//         outcomeA1: "You found rations and rum (Gain HP).",
//         outcomeB1: "You trudge onward, dreaming of pirate treasure."
//     },
//     {
//         event: "You kick over some rocks and notice a corner of old paper sticking out. It appears to be a crudely drawn map with an X seemingly a short distance away.",
//         choiceA: "You know there are space pirates in these parts, maybe they have something you need.",
//         choiceB: "You know there are space pirates in these parts, better put the map back and steer clear",
//         outcomeA1: "As you're digging you hear the rumble of an approching speeder and flee as fast as you can (Lose HP).",
//         outcomeB1: "You trudge onward, dreaming of pirate treasure."
//     },
//     {
//         event: "It's probably time for a quick rest before you pass out from exhaustion",
//         choiceA: "Keep going, you have to keep going.",
//         choiceB: "Find a cozy looking rock and snuggle up.",
//         outcomeA1: "You wake up with a busted knee and blood in your mouth, you did pass out (Lose HP).",
//         outcomeB1: "You wake up feeling a little better, but that rock was not kind to your neck."
//     },
// ];

// let dO2Events = [
//     {
//         event: "You find a crashed pod. You notice there is an O2 tank bolted to the wall. You can use what you have to pry it, but you may damage it.",
//         choiceA: "Try to pry the O2 tank.",
//         choiceB: "Continue on.",
//         outcomeA1: "You successfully pry the O2 tank without damaging it (Gain O2).",
//         outcomeA2: "You detatch the O2 tank from the wall, but it falls to the ground and cracks. You wasted your time here (Lose O2).",
//         outcomeB1: "You avoid the crashed pod."
//     },
//     {
//         event: "An enormous sandstorm appears in the distance.",
//         choiceA: "Hunker down and wait out the storm.",
//         choiceB: "Push yourself harder to beat the storm.",
//         outcomeA1: "You use additional oxygen (Lose O2).",
//         outcomeB1: "You expend a lot of energy racing the storm (Lose HP)."
//     },
//     {
//         event: "You hear a beautiful song coming from what appears to be a clearing in the forest.",
//         choiceA: "You are drawn to follow the song, and believe it's creator can probably help you.",
//         choiceB: "You've got better things to do than listen to music.",
//         outcomeA1: "Oh no, it’s a giant man-eating Siren Plant! It's tendrils squeeze tight, forcing you to shed and O2 tank to escape (Lose O2).",
//         outcomeB1: "You continue on your journey."
//     },
//     {
//         event: "A polar vortex blasts you with icy wind as you exit a cave. Should you risk it?",
//         choiceA: "Cozy up and wait out the storm.",
//         choiceB: "Brave the storm, moving will keep you warmer anyway.",
//         outcomeA1: "You use additional oxygen (Lose some O2).",
//         outcomeB1: "Icy shards tear at your suit and O2 tank (Lose double O2)."
//     },
//     {
//         event: "You find an unusual looking air canister. You aren't sure if it is O2 or something else.",
//         eventO2ScrubberA: "You find an unusual looking air canister. You use your O2 Scrubber on it, and get a reserve tank (Gain O2).",
//         eventO2ScrubberB: "You find an unusual looking air canister. You use your O2 Scrubber on it, but there was no O2 in the canister.",
//         choiceA: "You're desperate, you've got to take a chance.",
//         choiceB: "Continue on.",
//         outcomeA1: "The canister has O2! (Gain O2).",
//         outcomeA2: "It smells like farts, and sure isn't O2 (Lose O2).",
//         outcomeB1: "You leave the canister behind."
//     },
//     {
//         event: "You see a crashed escape pod stuck in the canopy of the forest",
//         eventJetpackA: "You see a crashed escape pod stuck in the canopy of the forest. You quickly jet up to it and strip the O2 tanks (Gain O2).",
//         choiceA: "Find a way to climb to the top.",
//         choiceB: "It's not worth the risk, continue on.",
//         outcomeA1: "You find a relatively easy tree to climb and enter the pod. It has a spare O2 tank that is still serviceable (Gain O2).",
//         outcomeA2: "You spend hours trying to traverse the trees, wasting oxygen due to the exertion (Lose O2)",
//         outcomeB1: "You continue on your journey."
//     },
//     {
//         event: "You kick over some rocks and notice a corner of old paper sticking out. It appears to be a crudely drawn map with an X seemingly a short distance away.",
//         choiceA: "You know there are space pirates in these parts, maybe they have something you need.",
//         choiceB: "You know there are space pirates in these parts, better put the map back and steer clear",
//         outcomeA1: "You found an O2 tank (Gain O2).",
//         outcomeB1: "You trudge onward, dreaming of pirate treasure."
//     }
// ];