{
    // es6-es8
    // 对象中扩展运算符的使用（浅拷贝）

    // 1.复制对象 2.设置对象默认值
    const obj = {name:'coco',video: 'ed6'}
    const obj2 = {color:'red'}
    let newObj = { ...obj, name:'yiyi' } //设置默认值
    console.log(newObj)  // {name: "yiyi", video: "ed6"}

    // 3.合并对象
    let newObj2 = {...obj, ...obj2}
    console.log( newObj2)  //object.js:12 {name: "coco", video: "ed6", color: "red"}

    // 坑点
    // 简单类型的时候，使用扩展运算符是没问题的，如扩展运算符展开对象之后还是一个对象，我们复制的就只是一个指针
} 

{

    // es6
    let name = '小明'
    let age = 18
    let es5Obj = {
        name: name,
        age: age,
        sayHello: function(){
            console.log('it is es5 Object')
        }
    }
    let es6Obj = {
        name,
        age,
        sayHello(){
            console.log('it is es6 Object')
        }
    }

    console.log('es5',es5Obj)
    console.log('es6',es6Obj)
}

{
    // es6可计算的属性名
    let name = 'name'
    let es5Obj = {}
    es5Obj[name] = '小鸡'

    let es6Obj = {
        [name]: '小雅'
    }
    console.log(es5Obj, es6Obj)                                  
}
{
    // 新增方法

    // 1.Object.is() 判断两个值是否相当，值相等返回true 和 ‘====’
    let result = Object.is(NaN , NaN)
    console.log(result, NaN===NaN)  // true false (NaN很特殊)

    // 2.Object.assign() 浅拷贝
    const person = {name: '大米', age: 18, info: {height: 186}}
    let person2 = {}
    Object.assign(person2, person)
    person.info.height = 150
    console.log(person2, person) //高度都会变成150
}
{
    // 新增方法--遍历
    // Object.keys()  Object.values()  Object.entries()
    //   遍历属性名      遍历属性值       遍历键值对


    const json = {name: 'coco', video: 'es6', date :2019}
    let obj = {}
    for (const key of Object.keys(json)) {
        obj[key] = json[key]
    }
    console.log(obj)
    console.log(Object.values(obj))  // ["coco", "es6", 2019]
    // 返回数组键值对
    console.log(Object.entries(obj))  // 0: (2) ["name", "coco"]
                                      //1: (2) ["video", "es6"]
                                      //2: (2) ["date", 2019]
}