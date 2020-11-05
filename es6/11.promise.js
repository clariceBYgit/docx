

{
    // 回调地狱
    function ajax(cb){
        setTimeout(()=>{
            typeof(cb === 'function') ? cb(()=>console.log('任务2')) : alert('请传入一个函数')
        },1000)
    }
    // ajax((cb2)=>{
    //     console.log('任务1')
    //     setTimeout(()=>{
    //         if(typeof(cb2 === 'function')){
    //             cb2()
    //         }
    //     },1000)
    // })

}

{
    // promise改造回调函数
    function ajax(){
        return new Promise( resolve => {
            setTimeout(() => resolve(),1000)
        })
    }
    ajax().then(() =>{
        console.log('任务1') 
        return new Promise( resolve => {
            setTimeout(() => resolve(),1000)
        })
    }).then(() => console.log('任务2'))
}

{
    // promise错误接收
    function judgeNumber( num ){
        return new Promise( (resolve, reject) => {
            if( typeof( num) === 'number'){
                resolve(num)
            } else {
                const err = new Error('请输入一个数字')
                reject(err)
            }
        } )
    }
    judgeNumber(6).then( num =>
        console.log(num)
    ).catch(err => console.log(err))
}

{
    // promise.all()
    const url1 = 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1604381581&di=5db64fea518630e09b371f7d86015cf5&src=http://pic29.nipic.com/20130604/6333858_104740527155_2.jpg'
    const url2 = 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3869408593,3618891480&fm=26&gp=0.jpg'
    const url3 = 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3451845035,2821622083&fm=26&gp=0.jpg'

    function getImage(url){
        return new Promise( (resolve, reject) =>{
            const img = document.createElement('img')
            img.src = url
            img.onload = () => resolve(img)
            img.onerror = err => reject(err)
        } )
    }
    function showImg(imgs){
        imgs.forEach(item => {
            document.body.appendChild(item)
        });
    }
    function showFirst(img){
        document.body.appendChild(img)
    }
    // Promise.all([getImage(url1), getImage(url2) ,getImage(url3)])
    //     .then(showImg)

    // promise.race用于希望多个promise函数中只要有一个执行成功这场景
    Promise.race([getImage(url1), getImage(url2), getImage(url3)])
    .then(showFirst)
}