// let username='Ivan';

// console.log(username);

// d2.

// let isOpen: boolean=false;
// let isOpenArray: boolean[]=[false];

// function createUser(username: string, age?:number) {
//     // age:number=0
//     return {
//         username,
//         age
//     };
// }

// const ivan = createUser('Ivan',100);

// d3.
function id<T>(item: T): T {
    return item;
}

interface IMyDto {
    prop: string;
    prop1: number;
}

// types
type MyDtoOrNumber = IMyDto | number;
// type BooleanArray=boolean[];
type BooleanArray = Array<boolean>;

let num = id<MyDtoOrNumber>({ prop: '1', prop1: 1 });
// let num = id<IMyDto| number>({ prop: '1', prop1: 1 });
// let num = id<IMyDto>({ prop: '1', prop1: 1 });

// typisation?!
// let num=id<{prop: string; prop1: number}>({prop: '1', prop1: 1});

// let num=id('1');
// const num=id('1');

// let num=id(1);
// const num=id(1);
// const num=id<number>(1);

// ========CLASSES=============
// class MyClass implements IMyDto{
//     prop: string;
//     prop1: number;
// }
// =======================
class MyClass {
    constructor(public name: string, private age: number) {}
}

// class MyClassJS {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

const ivan = new MyClass('Ivan', 20);

// NB! can still use private as follows
// (ivan as any).age=1000;

