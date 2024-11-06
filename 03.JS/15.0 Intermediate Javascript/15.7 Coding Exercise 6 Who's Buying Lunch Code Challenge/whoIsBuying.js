function whoIsPaying(names) {

    var numberOfPeople = names.length;
    var randomPerson = Math.floor(Math.random() * numberOfPeople);
    var randomPersonName = names[randomPerson];

    return randomPersonName + " is going to buy lunch today!";    
}