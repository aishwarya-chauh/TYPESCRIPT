// union is a powerfull feature which has the ability to combine multiple data types
// in it we use 'pipe | to separate different data types 
function sayHellow(arg: number| string) {
    if (arg == "number") {
        console.log(typeof arg);
        
        
    } else if (arg == " string") {
        console.log(typeof arg);
        
    } 
}
sayHellow(10)
sayHellow("How are You")
