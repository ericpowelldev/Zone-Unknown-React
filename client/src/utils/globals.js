// Default persistent global object
let g = {

    // Sound state
    sound: true,

    // Default static global values object
    glob: {
        HPstart: 15,
        HPmax: 20,
        O2start: 15,
        O2max: 20,
        O2maxI: 25,
        O2gain: 10,
        O2gainI: 15,
        O2loss: 1,
        FUELstart: 0,
        FUELmax: 15,
        FUELrep: 3,
        FUELgain: 1,
        FUELgainI: 2,
        WARPstart: 0,
        ITEMstart: 0,
        PLANETstart: 0,
    },

    // Default persistent save object
    sav: {
        version: `0.2.0`, // Version of game the save was created in
        health: 15, // Health resource
        oxygen: 15, // Oxygen resource
        fuel: 0, // Fuel collected
        warpCount: 0, // Warp drive pieces collected
        itemCount: 0, // Items collected
        coords: [0, 0], // Current coordinates
        planet: 0, // Current planet
        planets: [
            {
                hexes: [
                    {
                        hexXY: [-2, 0],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-2, -1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-2, -2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-1, 1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-1, 0],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-1, -1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-1, -2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [0, 2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [0, 1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [0, 0],
                        visited: `false`,
                        reach: `true`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [0, -1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [0, -2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [1, 2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [1, 1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [1, 0],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [1, -1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [2, 2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [2, 1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [2, 0],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    }
                ]
            },
            {
                hexes: [
                    {
                        hexXY: [-3, 0],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-3, -1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-3, -2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-3, -3],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-2, 1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-2, 0],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-2, -1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-2, -2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-2, -3],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-1, 2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-1, 1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-1, 0],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-1, -1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-1, -2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-1, -3],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [0, 3],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [0, 2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [0, 1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [0, 0],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [0, -1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [0, -2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [0, -3],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [1, 3],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [1, 2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [1, 1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [1, 0],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [1, -1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [1, -2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [2, 3],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [2, 2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [2, 1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [2, 0],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [2, -1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [3, 3],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [3, 2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [3, 1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [3, 0],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    }
                ]
            },
            {
                hexes: [
                    {
                        hexXY: [-4, 0],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-4, -1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-4, -2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-4, -3],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-4, -4],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-3, 1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-3, 0],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-3, -1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-3, -2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-3, -3],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-3, -4],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-2, 2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-2, 1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-2, 0],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-2, -1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-2, -2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-2, -3],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-2, -4],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-1, 3],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-1, 2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-1, 1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-1, 0],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-1, -1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-1, -2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-1, -3],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [-1, -4],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [0, 4],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [0, 3],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [0, 2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [0, 1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [0, 0],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [0, -1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [0, -2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [0, -3],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [0, -4],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [1, 4],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [1, 3],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [1, 2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [1, 1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [1, 0],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [1, -1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [1, -2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [1, -3],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [2, 4],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [2, 3],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [2, 2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [2, 1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [2, 0],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [2, -1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [2, -2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [3, 4],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [3, 3],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [3, 2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [3, 1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [3, 0],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [3, -1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [4, 4],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [4, 3],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [4, 2],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [4, 1],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    },
                    {
                        hexXY: [4, 0],
                        visited: `false`,
                        reach: `false`,
                        current: `false`,
                        event: ``,
                        class: `hex`
                    }
                ]
            }
        ]
    },

    // Default persistent event object
    event: {
        text: ``,
        choices: [
            {
                text: ``,
                outcomes: [
                    {
                        text: ``,
                        change: 0
                    },
                    {
                        text: ``,
                        change: 0
                    },
                ]
            },
            {
                text: ``,
                outcomes: [
                    {
                        text: ``,
                        change: 0
                    },
                    {
                        text: ``,
                        change: 0
                    },
                ]
            }
        ]
    }
}

export default g;