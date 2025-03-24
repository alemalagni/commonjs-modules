const names = require("./names");
const hobbies = require("./hobbies");

function people() {
    const person = {
        "full name": names(),
        hobby: hobbies()
    }

    return person;
}