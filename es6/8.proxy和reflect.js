{
    // Proxy ,代理的就是对象的一些操作
    /* @params
    ** target: ⽤用Proxy包装的⽬目标对象
    ** handler: ⼀一个对象，对代理理对象进⾏行行拦截操作的函数，如set、get
    */
    let account = {
        id: 995,
        _Private: 'test',
        name: 'admin',
        phone: '13574854584',
    }    
    let proxyAccount = new Proxy(account, {
        // 拦截读取和设置的操作
        get:(target, key) => {
            if(key === 'phone'){
                return target[key].substring(0,3)+'****'+target[key].substring(7)
            }
        },
        set:(target, key, value) => {
            if(key === 'id'){
                return target[key]
            }else{
                return target[key] = value
            }
        },
        // 拦截 key in obj
        has:(target, key) => {
            if(key in target){
                console.log(`${key}:`,target[key])
                return true
            } else {
                console.log('没有此属性')
                return false
            }
        },
        // 拦截delete 若key值是以_开始的话 则不可以删除
        deleteProperty:(target, key) => {
            if( key.indexOf('_') === 0){
                console.log('私有属性，不能删除')
                return false
            } else {
                delete target[key]
                return true
            }
        },
        // 拦截 Object.keys()
        ownKeys(target){
            return Object.keys(target).filter((item)=>{
                return item !== 'id' && item.indexOf('_') !==0
            })
        }

    })
    console.log(proxyAccount.phone)  //135****4584
    proxyAccount.id = 12
    proxyAccount.name = '意义'
    console.log(proxyAccount)
    console.log('拦截in','name' in proxyAccount)
    console.log('拦截删除',delete proxyAccount._Private )
    console.log('拦截Object.keys',Object.keys(proxyAccount)) //拦截Object.keys [ 'name', 'phone' ]
} 

{
    // Reflect 所有的对象的方法都可以在reflect中找到
    // 尽量都使用Reflect来操作对象，会更直观
    let obj = {
        name: 'coco',
        age: 23,
        sex: "男"
    }
    console.log(Reflect.get(obj,'name'))  //coco
    Reflect.set(obj, 'sex','女')
    console.log(obj.sex)  //女

}

{
    /**
     * 使用proxy和reflect实现简单的双向数据绑定
     * 
     */

}