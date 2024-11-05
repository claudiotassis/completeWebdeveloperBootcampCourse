prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70){
    alert("Your score is " + loveScore + "%. You love each other like Kanye loves Kanye.");
} else if (loveScore > 30 && loveScore <= 70) {
    alert("Your score is " + loveScore + "%. You are alright together.");
} else if (loveScore <= 30) {
    alert("Your score is " + loveScore + "%.");
}

console.log(loveScore);
alert("Your love score is " + loveScore + "%");