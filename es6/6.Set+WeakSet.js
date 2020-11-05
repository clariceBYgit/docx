{
    let set = new Set(['1',2,3,4])
    // 添加元素 使用add() 或者直接在声明是添加
    //   内部使用Object.is() 同值相等
    set.add(1)
    console.log(set)  //Set { '1', 2, 3, 4, 1 }
    // size
    console.log(set.size)  //5
}

{
    // 判断属性 has  删除属性  delete 清空 clear 
    // 判断实质 是判断其对象指向的内存地址是否一样 
    // 如何避免？  将需要加入的对象元素存在一个变量里面
    let set = new Set()
    let item = { fruit1: '小米'}
    set.add({fruit: 'apple'})
    set.add(item)
    console.log( set.has({fruit: 'apple'}))  //false
    console.log( set.has(item))  //true
}

{

  //遍历生成器函数  keys()  vaules() entries()  set里面的key和values的值相等，for of 默认遍历values 
    const set = new Set([1, 2, 3, 4])
    console.log(set.keys())  //[Set Iterator] { 1, 2, 3, 4 }
    console.log(set.values())  //[Set Iterator] { 1, 2, 3, 4 }
    console.log(set.entries())  //[Set Entries] { [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ] }

    for( let key of set){
        console.log(key) //1   2   3  4  默认遍历values
    }
}

{
    // 使用场景 数组去重
    const array = [1,2,3,2,1,4,5]
    let unique = new Set(array)
    console.log(unique)  //Set(5) {1, 2, 3, 4, 5}
    let uniqueArr = Array.from(unique)  //// Array.from  将类数组对象转化为数组 有length
    console.log(uniqueArr)  //6.Set+WeakSet.js:42 (5) [1, 2, 3, 4, 5]


}

{
    /**
     * WeakSet 和 Set的区别 
     * 1.元素只能是对象，对象也是弱引用
     * 2.无法遍历 没有size 没有clear
     * 
     */ 
    let obj = {name:'coco'}
    let weakset = new WeakSet()
    weakset.add(obj)
    console.log(weakset) //  {name: "coco"} 
}