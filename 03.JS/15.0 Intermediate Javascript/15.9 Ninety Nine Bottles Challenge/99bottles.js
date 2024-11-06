var numberOfBottles = 99;

while (numberOfBottles > 0) {       
   var bottleWord = "bottle";
   if (numberOfBottles === 1) {
       bottleWord = "bottles";
   }
   console.log(numberOfBottles + " " + bottleWord + " of beer on the wall, " + numberOfBottles + " " + bottleWord + " of beer.");   
   console.log("Take one down, pass it around, " + (numberOfBottles - 1) + " " + bottleWord + " of beer on the wall.");

   numberOfBottles = numberOfBottles - 1;

}   

console.log("No more bottles of beer on the wall, no more bottles of beer.");
