// user story: Grade Calculator
// story point : means days to complete user story
function CalculateGrade(a: number, b: number, c: number) {

 

    // calculate the avg of three subj divide result by 3

    var avg : number = (a+b+c) / 3;

 

    if (avg <= 70) {

        return `Grade C (${avg})`;

    } else if (avg > 70 && avg < 90) {

        return `Grade B (${avg})`;

    } else 

    {

        return `Grade A (${avg})`;

    }

}

 
 

var math: number = Number(prompt(`Enter the Math marks`)) ; // type of prompt is string hence its return value is string but we need output numeric
// so to do so we convert promt to number using Number()

var physics: number = Number(prompt(`Enter the Physics marks`)) ;

var chemistry : number = Number(prompt(`Enter the Chemistry marks`))

console.log(CalculateGrade(math,physics,chemistry));

