import sav from './sav.js';

export default {

    // Function for a random integer between 2 numbers
    rdmInt: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    // Function for a random float between 2 numbers
    rdmFloat: function (min, max) {
        return Math.random() * (max - min) + min;
    },
}