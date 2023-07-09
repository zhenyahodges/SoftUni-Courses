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
function id(item) {
    return item;
}
var num = id({ prop: '1', prop1: 1 });
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
var MyClass = /** @class */ (function () {
    function MyClass(name, age) {
        this.name = name;
        this.age = age;
    }
    return MyClass;
}());
// class MyClassJS {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
var ivan = new MyClass('Ivan', 20);
// NB! can still use private as follows
// (ivan as any).age=1000;
