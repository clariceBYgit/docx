{
    // iterator 接口
    // 取出数据集合里的数据，通过遍历，iterator提供了一个接口，通过for of调用这个接口，输出数据集合里面的数据
    const arr = [1, 2, 3]
    const fn = arr[Symbol.iterator]()
    console.log(fn.next())  // {value: 1, done: false}
    console.log(fn.next())  // {value: 1, done: false}
    console.log(fn.next())  // {value: 1, done: false}
    console.log(fn.next()) // {value: undefined, done: true}
}

{
    // iterator 接口 应用场景 
    const obj = {
        name: '鬼怪',
        age : 45,
        // 由于object没有Symbol.iterator(),所以需要自己定义
        [Symbol.iterator](){
            let index = 0
            const keys =  Object.keys(this)
            const values =  Object.values(this)
            console.log(keys , values)
            return{
                // next方法也需要自定义
                next(){     
                    if( index < values.length){
                        return{
                            value: values[index++],
                            done: false
                        }
                    } else {
                        return{
                            done : true
                        }
                    }
                }
            }
        }
    }
    // 在使用for of 方法进行输出
    for (const value of obj){
        console.log(value)
    }
}
{
    const obj = {
        brand:'apple',
        price:15000,
        [Symbol.iterator](){
            let i = 0
            const values = Object.values(this)
            return{
                next(){
                    if( i < values.length){
                        return{
                            value: values[i++],
                            done: false
                        }
                    } else {
                        return {
                            done: true
                        }
                    }
                }
            }
        }
    }
    for( const value of obj ){
        console.log(value)
    }
}