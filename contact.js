"use strict";

const contacts = [
    "1|Scott|scott@murach.com|1-559-555-5555",
    "2|Joel|joel@murach.com|1-409-555-5555",
    "3|Mike|mike@murach.com|1-363-555-5555"
];

const menuString = "COMMAND MENU\n" +
    "list - List all contacts\n" +
    "get # - Get contact with the specified number\n" +
    "exit - Exit program";

const listContacts = () => {
    let message = "";

    for (let contact of contacts) {
        const contactInfo = contact.split("|");
        message += contactInfo[0] + " - " + contactInfo[1] + "\n";
    }

    alert(message);
};

const getContact = (number) => {
    let found = false;

    for (let contact of contacts) {
        const contactInfo = contact.split("|");

        if (contactInfo[0] === number) {
            alert("Name: " + contactInfo[1] +
                  "\nEmail: " + contactInfo[2] +
                  "\nPhone: " + contactInfo[3]);

            found = true;
            break;
        }
    }

    if (!found) {
        alert("Contact not found.");
    }
};

let command = "";

while (command !== "exit") {
    command = prompt(menuString);

    // Exit if the user clicks Cancel
    if (command === null) {
        break;
    }

    command = command.trim().toLowerCase();

    if (command === "list") {
        listContacts();
    }
    else if (command.startsWith("get ")) {
        const number = command.substring(4).trim();
        getContact(number);
    }
    else if (command === "exit") {
        break;
    }
    else {
        alert("Invalid command.");
    }
}
