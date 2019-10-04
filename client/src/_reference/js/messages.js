var userName = "";
//prompt for user to get name
    var userInfo = prompt("Please enter your username", "Username Here")
    if (userInfo != null) {
        userName = userInfo;
    }
    console.log(userInfo);
    getMessages();
//connects to socket, sends to server and displays chat message
    var socket = io.connect();
    $("form#chat").submit(function (e) {
        e.preventDefault();

        socket.emit("send message", $(this).find("#msg_text").val(), userName, function () {
            $("form#chat #msg_text").val("");
        });
    });
    socket.on("update messages", function (msg) {
        var final_message = $("<p />").text(msg);
        $("#history").append(final_message);

        console.log(msg);
        saveMessage(msg);
    });

//alters message and user into an object and runs post
function saveMessage(msg) {
    var newMessage = {
        message: msg,
        user: userName
    };
    submitMessage(newMessage);
};
//post function for message object with username
function submitMessage(newMessage) {
    console.log(newMessage);
    $.ajax({ url: "/api/messages", type: "POST", data: newMessage }).then((response) => {
        console.log(response);
    });
};
//get function to grab all messages in the database and display in the chatroom
function getMessages() {
    $.get("/api/messages", function (data) {
        console.log("Data: ", data);
        messages = data;
        if (!messages || !messages.length) {
            displayEmpty();
        } else {
            for (var i = 0; i < messages.length; i++) {
                var final_message = $("<p />").text(messages[i].message);
                $("#history").append(final_message);
            }

        }
    });
}
//displays no chat history if there is none in the database
function displayEmpty() {
    var noMessages = "******No Chat History******"
    var final_message = $("<p />").text(noMessages);
    $("#history").append(final_message);
}