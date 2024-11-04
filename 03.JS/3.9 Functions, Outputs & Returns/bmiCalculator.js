function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return Math.round(bmi);
}

var myBmi = bmiCalculator(101, 1.81);
console.log(myBmi);