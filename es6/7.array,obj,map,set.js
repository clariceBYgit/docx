
{
 // array,object,map,set 四个增删改查操作
let arr = []
let obj = {}
let map = new Map()
let set = new Set()
const item = { fruit: 'apple'}

// 增加
arr.push(item)
obj['fruit'] = 'apple'
map.set('fruit','apple')  // key  value的格式
set.add(item)
console.log('增加',arr, obj, map, set)  //add [ { fruit: 'apple' } ] { fruit: 'apple' } Map { { fruit: 'apple' } => undefined } Set { { fruit: 'apple'} }


// 查询
console.log('查询',
    arr.includes(item),
    'fruit' in obj ,
    map.has('fruit') ,
    set.has(item)
)   //true true true true


// 修改
arr.forEach((item) => {
    return item.fruit = item.fruit ? '西瓜' : ''
})
obj['fruit'] = '西瓜'
map.set('fruit','西瓜')
set.forEach((item)=>{
    return item.fruit = item.fruit ? '西瓜' : ''
})
console.log('修改', arr, obj, map, set )

// 删除
let index = arr.findIndex(item => item.fruit)
arr.splice(index,1)
delete obj.fruit
map.delete('fruit')
set.delete(item)
console.log('删除', arr, obj, map, set)  //删除 [] {} Map {} Set {}

}

{
    //===== 类型转换 ====
    // map和对象之间的转换
    let obj = {name:'Coco',age:18}
    // 对象  --->  Map    使用Object.entries()
    console.log(Object.entries(obj))  //[ [ 'name', 'Coco' ], [ 'age', 18 ] ]  转换成了数组键值对
    let map = new Map(Object.entries(obj))
    console.log('map', map)   //map Map { 'name' => 'Coco', 'age' => 18 }
    //  Map  --->  对象  使用Object.fromEntries()
    console.log(Object.fromEntries(map))
    let obj2 = Object.fromEntries(map)
    console.log('obj', obj2)  //obj { name: 'Coco', age: 18 }

    // 数组 和 set 
    let arr = [1, 2, 3, 4]
    //  array  --> set
    let set = new Set(arr)
    console.log(set)  //Set { 1, 2, 3, 4 }
    // set ---> array
    let arr2 = Array.from(set)
    console.log('array', arr2)  //array [ 1, 2, 3, 4 ]

}