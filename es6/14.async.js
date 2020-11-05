{
    function fn1(){
        return new Promise( resolve => {
            setTimeout(() => {
                console.log('任务一')
                resolve()
            },1000)
        })
    }
    function fn2(){
        return new Promise( resolve => {
            setTimeout(() => {
                console.log('任务二')
                resolve()
            },1000)
        })
    }

    async function fn () {
        await fn1()
        await fn2()
    }
    fn()
}