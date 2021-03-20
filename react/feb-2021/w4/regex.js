// sometimes you want to find or replace parts of a string

// example
let str = "bbbbbye";

console.log(str.replace("b", "a")); // this prints "aye"
// but what if you have multiple 'b's not just one?
// this is where regex could come in handy

// regex syntax: /pattern/optionalFlags

// basic example
let regex = /b/g;
let str2 = "bbbbbbbye";
console.log(str2.replace(regex, "a")); // this still prints "aye"

// global flag example
let regex2 = /[ebyc]/gi;
let str3 = "BBbBbBbye";
console.log(str3.replace(regex2, "a")); // this still prints "ayeaaa"

// resources
// https://www.w3schools.com/js/js_regexp.asp
