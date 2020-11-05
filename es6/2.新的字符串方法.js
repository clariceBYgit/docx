{

//  1. ES6 处理超出码点\u0000 ~ \uFFFF之间的字符
let  str = '\u{200bf}'
console.log(str)  // 𠂿 
}


{
    //2.扩展API
let str = '123Coce456'
console.log({'includes': str.includes('C')})     // 包含{ includes: true }
console.log({'startsWith': str.startsWith('c', 5)})     //以什么开始
console.log({'endsWith': str.endsWith('o',5 )})  // ==> position是指第几个，不在以下标来算
console.log({'repet': str.repeat(3)})  //重复字符串 3次 { repet: '123Coce456123Coce456123Coce456' }
}



{
    // 字符串补全
    let str = 'Apple'
    console.log({'padStart': str.padStart(8,'678666')})  //{ padStart: '678Apple' }
    console.log({'padEnd': str.padStart(7,'978666')})  //{ padEnd: '97Apple' }
}
