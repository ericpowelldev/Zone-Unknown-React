// Dynamic save object (Defaults for new game)
let sav = {
    version: `1.1.0`, // Version of game the save was created
    // username: ``, // Username associated with the save
    // password: ``, // Password associated with the save
    health: 10, // Health resource
    oxygen: 10, // Oxygen resource
    fuel: 0, // Fuel collected
    warpCount: 0, // Warp drive pieces collected
    itemCount: 0, // Items collected
    planet: 1, // Current planet
    planet1: [
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
    ],
    planet2: [
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
    ],
    planet3: [
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

module.exports = sav;