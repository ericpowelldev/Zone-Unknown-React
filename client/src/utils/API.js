import axios from "axios";

export default {
    // Get all users
    getUsers: function () {
        return axios.get("/api/users");
    },
    // Get the user with the given id
    getUser: function (id) {
        return axios.get("/api/users/" + id);
    },
    // Creates a user in the database
    postUser: function (data) {
        return axios.post("/api/users", data);
    },
    // Saves the user's savegame to the database
    saveUser: function (data) {
        return axios.put("/api/users/", data);
    },
    // Deletes the user with the given id
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    // Gets all messages for socket
    getMessage: function () {
        return axios.get("/api/messages");
    },
    // Saves a message to the database for socket
    saveMessage: function (messageData) {
        return axios.post("/api/messages", messageData);
    }
};

