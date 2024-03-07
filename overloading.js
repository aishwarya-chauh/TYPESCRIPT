// function overloading is a mechanism or ability to create multiple functions with same name but different Parameters
function doubleMe(x) {
    if (x && typeof x === "number") {
        console.log(x * 2);
    }
    else if (x && typeof x === "string") {
        console.log(x + " " + x);
    }
    else if (Array.isArray(x)) {
        return x.map(function (n) { return console.log(n); });
    }
}
doubleMe(2); // 4 
doubleMe('Jack'); // Jack Jack
doubleMe(['a']);
