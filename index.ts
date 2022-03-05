const a: string = "Hello world!";



function getLowerCase (str: string){
    return str.toLowerCase();
};

console.log(getLowerCase('MIZAN'));
// console.log(getLowerCase(7 as string));

const b : number = 234;

function add(num1: number, num2: number){
    return num1 + num2;
};

const sub = (num1: number = 23 , num2: number = 21): number =>{
    return num1 - num2;
};

console.log(add(8, 3));
console.log(add(3, b));
console.log(sub(8, 3));

const arr: number[] = [1, 2, 3, 4, 5, 6];
const arr2: string[] = ["1", "2", "3"];

// type anotation
type numAndStr = number | string;
const id: numAndStr = "12";

// interface
interface iPerson {
    name: string,
    age: number,
    hobby?: string
}
const person1 : iPerson = {
    name: "dmr",
    age: 25,
    hobby : "programming"
};

const person2: iPerson = {
    name : "dm",
    age: 22,
    hobby: "suffer"
};

const person3: iPerson ={
    name: "zz",
    age: 19
}


