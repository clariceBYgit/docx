{
    function * fn() {
        yield '1'
        yield '2'
    }
    console.log(fn().next())
   
}

{
    const obj = {
        a:1,
        b:2,
        c:3
    }
    obj[Symbol.iterator] = function *() {
        // const vals = Object.values(obj)
        // console.log(vals)
        // for(let i=0;i < vals.length;i++){
        //     yield vals[i]
        // }
        for (const val of Object.keys(obj)) {
            // console.log(obj[val])
            yield obj[val]
        }
    }

    for( const val of obj){
        console.log(val)
    }

}
{
    // 应用场景 任何时候都只有一定数量状态
    const state = function *() {
        while(1){
            yield 'success'
            yield 'fail'
            yield 'pendding'
        }
        
    }
    const stateData = state()
    console.log(stateData.next())
    console.log(stateData.next())
    console.log(stateData.next())
    console.log(stateData.next())
}
{
    // 场景 用户支付订单（长轮询）
    // 轮询是指客户端定时向服务器发送ajax请求，服务器接到请求后马上返回响应信息并关闭连接
    function fn1(){
        return new Promise( resolve => {
            setTimeout(() => {
                console.log('查询中')
                resolve({code: 0})
            },1000)
        })
    }
    // 定义查询操作
    const getStatus = function *(){
        yield fn1()
    }
    // 定义一个自动查询
    function aotoGetstatus (){
        const gen = getStatus()
        const staus = gen.next()
        staus.value.then(res => {
            if(res.code === 0){
                console.log('用户付款成功')
            } else{
                console.log('暂未付款')
                setTimeout( () => aotoGetstatus(),1000)
            }
        })
    }
    aotoGetstatus()
}
{
    const ajax = function *() {
        console.log('start')
        yield (cb) => {
            setTimeout(() => {
                console.log('任务执行中')
                cb & cb()
            },2000)
        }
        console.log('end')
    }
    const run = ajax()
    const first = run.next()
    first.value(() => run.next())
}