### JS/浏览器 基础概念
>存储一些js常用语法

#### event loop
 ##### 什么是event loop?
 > event loop 浏览器执行模型是html5的规范，是执行多个任务的执行模型，分为普通任务，宏任务，微任务。
 ```
    var a = 3; // 1
    console.log(a); // 1
    var dd = setTimeout(function(){console.log('hello dd')},0); // 2
    var reg = 'cccc'; // 1
    const cc = async () => {
        console.log('hello cc')
    }
    cc(); // 3
    var helloWorld = new Promise((resolve, reject) => {resolve('hello')}) // 3
    helloWorld.then((res) => {console.log(`${res} world`)})
 ```
 1. 第一步先读取代码，再根据类别去push到对应的栈列中
 2. 执行，先执行普通任务1，执行完毕之后去执行微任务3，最后执行宏任务，所以上述打出的结果为， a , hello world, hello dd.
 ##### 什么是宏任务？什么是微任务？他们的区别是什么
    宏任务是指浏览器定义的函数，例如 setTimeout, setInterval
    微任务是指es6定义的函数， 例如promise，async ,mutionobsever
    区别是 微任务会在宏任务提前执行
#### JS 类型
 ##### JS 基础类型，引用类型
 基础类型是指 string, null, undefined, boolean,number， 放在栈中直接使用
 引用类型是指  function，array， object // 栈中的变量名存放的是一个指针，可以指向放在堆中的值，数据间接访问
#### 什么是执行堆栈
    首先了解什么叫做执行上下文，执行上下文分为全局执行，函数执行，eval执行。
#### GC回收机制
    是JavaScript引擎的垃圾回收机制，每创建一个对象就会分配一个内存空间，回收机制会去找到不再使用的对象进行内存释放。
 1. 标记清除
 2. v8垃圾回收 http://newhtml.net/v8-garbage-collection/

 #### 新生代，老生代

#### 深拷贝浅拷贝
 ##### 什么是 深拷贝，浅拷贝？
 > 用浅拷贝的方式去拷贝引用对象，会导致两个对象的值都发生改变，于是出现了深拷贝。其实两个都是去拷贝一个对象，深拷贝用于拷贝引用类型，而浅拷贝是用于拷贝基础类型。深拷贝可以使用递归的方式.
#### 闭包
 > 首先的理解作用域是什么，作用域中的变量只供给当前的作用域使用。外部不能访问。作用域分为全局作用域，函数作用域，块级作用域。
   闭包是桥梁，是一个作用域可以访问其他作用域中的变量，前提是其他作用域暴露给你。
   优点： 存储一个变量可反复使用，可以拿出存储数据
   缺点：很占内存，会导致内存泄露，所以使用完毕的时候记得给他记为null
   这里有一个小小的争议，
#### promise设计原理
    es5回调地域的高级使用。



