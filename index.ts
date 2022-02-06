//Core types in typescript

const add: (a:number, b:number) => number = (a: number, b: number) : number => a+b;
console.log("Addition of two numbers: " + add(1,1));

const printFunc = ():void => console.log("Prinitng function");

enum ROLE { MANAGER = 'manager', ENGINEER = 'engineer'} // enum

const person : {
    name: string; //string
    age : number; //number
    married: boolean; //boolean
    hobbies: string[]; //string array
    props: any[]; //Array of any type
    role: ROLE; //enum
} = {
    name : 'eshita',
    age: 31,
    married: true,
    hobbies: ['keyboard', 'guitar', 'singing'],
    props: ['heloo', 12, '234'],
    role: ROLE.ENGINEER
}
console.log(person.role)

type User = {name : string, age: number}; //type (Alias of a type)
const user:User = {name : "eshita", age: 31};
