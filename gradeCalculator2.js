// user story: Grade Calculator
// story point : means days to complete user story
function CalculateGrade(a, b, c) {
    // calculate the avg of three subj divide result by 3
    var avg = (a + b + c) / 3;
    if (avg <= 70) {
        return "Grade C (".concat(avg, ")");
    }
    else if (avg > 70 && avg < 90) {
        return "Grade B (".concat(avg, ")");
    }
    else {
        return "Grade A (".concat(avg, ")");
    }
}
var math = Number(prompt("Enter the Math marks")); // type of prompt is string hence its return value is string but we need output numeric
// so to do so we convert promt to number using Number()
var physics = Number(prompt("Enter the Physics marks"));
var chemistry = Number(prompt("Enter the Chemistry marks"));
console.log(CalculateGrade(math, physics, chemistry));
