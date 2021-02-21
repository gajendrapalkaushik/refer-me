console.log("this is tutorial 53");

function greet(name, greetText = "Greetings from JavaScript") {
    // let name1 = "Name1";
    console.log(greetText + " " + name)
    console.log(name + " is good boy");
}

function sum(a, b, c) {
    let d = a + b + c;
    return d;
    // this line will never execute (unreachable code)
    // console.log("function is returned ");
}



let name = "Harry";
let name1 = "Shubham";
let name2 = "Rohan";
let name3 = "Sagar";
let greetText1 = "Good Morning";
greet(name, greetText1);
greet(name1, greetText1);
greet(name2, greetText1);

// let returnVal = greet(name3);
// console.log(returnVal);
let returnVal = sum(1, 2, 3);
console.log(returnVal);

// console.log(name + " is good boy");
// console.log(name2 + " is good boy");
// console.log(name3 + " is good boy");
// console.log(name4 + " is good boy");