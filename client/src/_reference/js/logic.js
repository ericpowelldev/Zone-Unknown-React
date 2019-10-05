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
        /////// SET THIS STUFF WHEN THE HEX IS CLICKED ON
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




