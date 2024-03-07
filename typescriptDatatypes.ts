// here we will learn about enum
// enum is a collection of constant values i.e they cannot be changed or definite values
// enum egs are direction, weekdays, signal lights
// enum cannot be used in js but s allows it
// we define enum with enum keyword
enum Gender {

    Male,

    Female

}

 

 

console.log(Gender.Male);

console.log(Gender.Female);

 

console.log(Gender[0]);

console.log(Gender[1]);

 

enum Weekends {

    Saturday = 6,

    Sunday = 7

}

 

console.log(Weekends[6]);
console.log(Weekends[7]);

// above we have assigned position to our element hence it will not run if we pass [0 and 1]