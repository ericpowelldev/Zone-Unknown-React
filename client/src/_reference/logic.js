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




