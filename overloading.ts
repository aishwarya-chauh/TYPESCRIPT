// function overloading is a mechanism or ability to create multiple functions with same name but different Parameters

 // below u will see <1/3> this means there is method overriding in this angular function...
function doubleMe(x:number);

function doubleMe(x:string);

function doubleMe(x:string[]);

function doubleMe(x: any) {
    if (x && typeof x === "number") {
        console.log(x*2);
    } else if (x && typeof x === "string") {
        console.log(x + " " + x);
    } else if (Array.isArray(x))

    {
   return x.map(n => console.log(n));

    }
}
doubleMe(2);  // 4 

doubleMe('Jack'); // Jack Jack

doubleMe(['a']); 