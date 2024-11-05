prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100 + 1;
loveScore = Math.floor(loveScore);

if (loveScore === 100) {
    alert("Your love score is 100%");
} else if (loveScore > 80) {
    alert("Your love score is " + loveScore + "%. You love each other like Kanye loves Kanye.");
} else if (loveScore > 40) {
    alert("Your love score is " + loveScore + "%. You are alright together.");
} else {
    alert("Your love score is " + loveScore + "%.");
}


console.log(loveScore);
alert("Your love score is " + loveScore + "%");