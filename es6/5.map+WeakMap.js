{
    //普通的对象，其属性名只能是字符串最为键名，解决使用 new Map()
    let map = new Map()
    // 1.添加元素 方式一
    map.set( [1,2,3], 'number')
    console.log(map)  //key: (3) [1, 2, 3] value: "number"
    // 方式二 声明直接添加，是一个数组
     let map2 = new Map([['name','Nick'],['age',15]] )
     console.log(map2)  //{"name" => "Nick"}  {"age" => 15}
    // set还可以用于修改，set给同一个属性赋值时，后面的会覆盖前面的；并且set方法返回当前的map对象，所以可以使用链式调用
    map2.set('name','Coco').set('sex','女')
    console.log(map2) //[[Entries]] 0: {"name" => "Coco"} 1: {"age" => 15} 2: {"sex" => "女"}

    // 2.读取元素 get 
    console.log( map2.get('name'))
    console.log( map2.get('apple'))  //读取没有的属性 返回undefined
    // 3.是否存在某元素   has() 返回布尔值
    // 4.删除  delete()
    // 5.清空所有键值对 clear()

}
{
    // keys()   values()   entries()  遍历生成器函数  遍历方法 for of
    const map = new Map(
        [
            ['name','西想'],
            ['age',20]
        ]
    )
        //  for of 循环 默认遍历entries
    for( let key of map){ 
        console.log(key) //默认键值对 ["name", "西想"] ["age", 20]
    }
}


{   
    /**
    * WeakMap
    * 
    * 1.只接受对象作为一个键名，不接受其他的类型的数据作为键名
    * 2. WeakMap的主要用途是绑定Dom元素，键名所指的对象，当键名没引用时，会自动被垃圾回收（普通的键名所指的对象不触发垃圾回收机制）
    * 3.由于引用随时会被删除，所以无法遍历，没有clear，没有size
    */
    let weakMap = new WeakMap([
        [{name:'哔哔'},'jack']
    ])
    console.log(weakMap)  //key: {name: "哔哔"} value: "jack"
 
}
