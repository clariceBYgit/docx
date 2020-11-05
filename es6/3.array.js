{
    //扩展运算符   ...

    // 1. 复制数组操作

    let list = [1,2,3,4]
    let list2 = [...list]
    list.push(5)
    console.log({'list':list, 'list2': list2})  //{ list: [ 1, 2, 3, 4, 5 ], list2: [ 1, 2, 3, 4 ] }


    // 2. 分割数组
    let totalList = [2,'a','b','c']
    let [,...strList] = totalList
    console.log(strList)   //[ 'a', 'b', 'c' ]

    // 3.给函数传递参数
    function add(x,y){
        return x*y
    }
    let addList = [2,7]
    console.log(add(...addList))   //14

}

{
    //数组API
    // fill填充
    const list = [1, 2, 3, 4, 5]
    let list1 = [...list].fill('a')  //注意要避免直接在原数组进行修改 
    let list2 = [...list].fill('c', 1 , 3) // 参数1：value，参数2：开始下标，参数3：填充的位置，非下标
    console.log({'list1': list1, 'list2': list2})  
    //{list1: [ 'a', 'a', 'a', 'a', 'a' ],list2: [ 1, 'c', 'c', 4, 5 ]}

}

{
    // find  findIndex
   const  list = [{ title:'es6'},{title:'vue',id:1},{title:'webpack'},{title:'vue',id:2}]

   let result = [...list].find((item)=>{
       return item.title === 'vue'
   })
   let resultIindex = [...list].findIndex((item)=>{
    return item.title === 'vue'
   })
   console.log(result)  // { title: 'vue', id: 1 } 不完全查找
   console.log('findIndex:' + resultIindex)  // 3 返回下标
    
}

{
    // includes （返回布尔值,比indexOf使用更方便只能进行简单的数值在与否的判断）和 indexOf（indexOf差到返回下标，没查到返回-1）
    const list = ['a', 'c', 'e']
    let list1 = list.indexOf('a')
    let list2 = list.includes('a')
    console.log(list1,list2)    //0 true
}  

{
    // flat 展开数组的操作
    const list = [1, 2, 3, ['2nd', 4, 5, 6, ['3nd',7,8,['4nd',9,10]]]]
    let flatList = [].concat(...list)
    console.log(flatList)   //  [ 1, 2, 3,'2nd', 4, 5, 6]
    // 当有多层数组时
    let flatList1 = list.flat(2)   //传入需要展开几层数组。默认只展开第一层
    console.log(flatList1)   //[ 1, 2, 3, '2nd', 4, 5, 6, '3nd', 7, 8, [ '4nd', 9, 10 ] ]
 
}

{
    // map
    const json = [{ title:'es6', status:1},{title:'vue', status:0},{title:'webpack', status:1},{title:'vue', status:1}]
    let data = json.map(item => {
        /* 写法1：
            return {
            name: item.title,
            statusTxt: item.status ? '登录': '未登录'
        }
         */
    
        //  写法2：
        let obj = {}
        Object.assign(obj, item)
        obj.status = item.status ? '登录': '未登录'
        return obj
    })
    console.log('json',json)
    console.log('data',data)
}

{

    /**
     * reduce  对数组的每个元素进行一次回调，升序执行然后将回调值汇总一个返回值
     * @params   cb(acc, currentValue, currentIndex, Array), initalvalue
     *            回调函数(返回值[若有initalValue的话,则返回值自动为initalVaue], 当前数组进行回调的值， 当前值的下标，回调的数组 ), 初始值
     * 
     */
    // 统计字符个数
    const str = 'adfesaasf'
    let strList = str.split('').reduce((acc,cur)=>{
        acc[cur] ? acc[cur] ++ : acc[cur] = 1
        return acc
    }, {})

    console.log(strList)

    //展开多层数组
    const list = [1, 2, 3, ['2nd', 4, 5, 6, ['3nd',7,8,['4nd',9,10]]]]
    const deepFlat = function(list){
        return list.reduce((acc, cur)=>{
            return acc.concat(Array.isArray(cur)? deepFlat(cur) : cur)
        },[])
    }
    let flatList = deepFlat(list)
    console.log('reduce-flat',flatList)

}
{
    // Array.from  将类数组对象转化为数组 有length
    const str = 'hello'
    const strList = Array.from( str )
    console.log(strList) // ["h", "e", "l", "l", "o"]

}