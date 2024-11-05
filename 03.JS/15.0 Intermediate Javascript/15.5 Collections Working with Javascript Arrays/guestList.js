var guestList = ["Claudio", "Andressa", "Benjamin", "Jesus"];

var guestName = prompt("What is your name? ");

if (guestList.includes(guestName)) {
    alert("Hello " + guestName + ", you are welcome!");
} else {
    alert("Hello " + guestName + ", you are not on the guest list.");
}
