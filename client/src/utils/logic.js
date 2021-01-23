import { Howl, Howler } from "howler";
import g from "../utils/globals";

export default {
  // Function for a random integer between 2 numbers
  rdmInt: (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  // Function for a random float between 2 numbers
  rdmFloat: (min, max) => {
    return Math.random() * (max - min) + min;
  },

  // Function to mute Howler
  toggleMute: () => {
    g.sound = !g.sound;

    if (g.sound) {
      Howler.volume(1);
    } else {
      Howler.volume(0);
    }
  },

  // Play track functions
  playTrack1: function () {
    let music = new Howl({ src: [`/sounds/ccm1.mp3`], volume: 0.333, onend: () => this.playTrack2() });
    music.play();
    // console.log(`PLAYING TRACK 1`);
  },
  playTrack2: function () {
    let music = new Howl({ src: [`/sounds/ccm2.mp3`], volume: 0.25, onend: () => this.playTrack3() });
    music.play();
    // console.log(`PLAYING TRACK 2`);
  },
  playTrack3: function () {
    let music = new Howl({ src: [`/sounds/ccm3.mp3`], volume: 0.25, onend: () => this.playTrack4() });
    music.play();
    // console.log(`PLAYING TRACK 3`);
  },
  playTrack4: function () {
    let music = new Howl({ src: [`/sounds/ccm4.mp3`], volume: 0.25, onend: () => this.playTrack1() });
    music.play();
    // console.log(`PLAYING TRACK 4`);
  },

  // Function to play back sound
  sfx_back: () => {
    let sfx = new Howl({ src: [`/sounds/sfx_back.wav`], volume: 0.2 });
    sfx.play();
  },
  // Function to play continue sound
  sfx_continue: () => {
    let sfx = new Howl({ src: [`/sounds/sfx_continue.wav`], volume: 0.25 });
    sfx.play();
  },
  // Function to play select sound
  sfx_select: () => {
    let sfx = new Howl({ src: [`/sounds/sfx_select.wav`], volume: 0.25 });
    sfx.play();
  },
  // Function to play start sound
  sfx_start: () => {
    let sfx = new Howl({ src: [`/sounds/sfx_start.wav`], volume: 0.25 });
    sfx.play();
  },
  // Function to play tick sound
  sfx_tick: () => {
    let sfx = new Howl({ src: [`/sounds/sfx_tick.wav`], volume: 0.1 });
    sfx.play();
  },
};
