var x : number = 20
console.log(x);
// console.log is a method of script
// console is a global object and windows property
// funcionn overloading i.e same name with different parameters
// console is javascript lang but it does not understnd typescript hence we convert it to javascript by compiller 
//we need to do this by terminal.. shortcut to open terminal is ctrl + {escape k neeche ka} tilt

// here : and data type can be given
// ab mera ts js me convert nai hora tha toh windows powershell me jaake run as administyrator karke usko Set-ExecutionPolicy RemoteSigned
// ye command diya aur fir ebnter dabaake Yes bola..
// jab b hum update karre hai ts tab tab tsc karna.. 
// there is a shrtcut which we will see further

var a: string = "Powerfull people make history "
console.log(a);

var b1: boolean = true
var b2 : boolean = false
var b3 : boolean;
 console.log(b1,b2);

 function test(){
   return b3=false
    console.log(b3);
    
 }
 console.log(test());
 // note jab mene return nai liha tha toh test k console me it showwed undefined..
 // jab mene return lilkha tab false diya..
 // also code beneath return will not execute..
 // : any ===== using this :any we can store any datatype..
 // suppose we have api(no website workss witout api applctn programming interface) we can use : any there
 // any is not to be used everywheere just where it is required..
 // how to declare array 
 var arr : string[] = ['Angular', 'React', 'Javascript']
console.log(arr[0]);
console.log(arr.length);


  
