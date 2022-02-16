/*
let a1 = Symbol('kk')
let a2 = Symbol('kk')
console.log(a1 === a2) //false
*/

let a1 = Symbol.for('kk')
let a2 = Symbol.for('kk')
console.log(a1 === a2) //true
//定义个对象的属性名 方法一
let a3 = Symbol.for("kk")
let obj = {
    kk : 123,
    a3 : 123,
   [a3] : 123
}
console.log(obj)  // { kk: 123, a3: 123, [Symbol(kk)]: 123 }
// 定义个对象的属性名 方法二
let obj2 = {}
obj2[a3] = 4
console.log(obj2) //{ [Symbol(kk)]: 4 }
//  定义个对象的属性名 方法三
Object.defineProperty( obj, a3, {value: 456})
console.log(obj)  //{ kk: 123, a3: 123, [Symbol(kk)]: 456 }

// 当做字符串常量使用
const name = Symbol('Coco')
console.log(name)     //Symbol(Coco)