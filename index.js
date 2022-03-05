var a = "Hello world!";
function getLowerCase(str) {
    return str.toLowerCase();
}
;
console.log(getLowerCase('MIZAN'));
// console.log(getLowerCase(7 as string));
var b = 234;
function add(num1, num2) {
    return num1 + num2;
}
;
var sub = function (num1, num2) {
    if (num1 === void 0) { num1 = 23; }
    if (num2 === void 0) { num2 = 21; }
    return num1 - num2;
};
console.log(add(8, 3));
console.log(add(3, b));
console.log(sub(8, 3));
var arr = [1, 2, 3, 4, 5, 6];
var arr2 = ["1", "2", "3"];
var id = "12";
var person1 = {
    name: "dmr",
    age: 25,
    hobby: "programming"
};
var person2 = {
    name: "dm",
    age: 22,
    hobby: "suffer"
};
var person3 = {
    name: "zz",
    age: 19
};
// Enums
// const color1 = "#eeeeee";
// const color2 = "#ffffff";
// const color3 = "#dddddd";
var Colors;
(function (Colors) {
    Colors["color1"] = "#eeeeee";
    Colors["color2"] = "#ffffff";
    Colors["color3"] = "#dddddd";
})(Colors || (Colors = {}));
;
console.log(Colors.color2);
console.log(Colors.color3);
