// {
//     // es5  通过构造函数来实现类的功能
//     function Parent(name, age){
//         this.name = name,
//         this.age = age,
//         this.sayHello = function(){
//         console.log(`大家好我是${this.name},今年${this.age}`)
//         }
//     }   
//     // Parent.prototype.sayHello = function() {
//     //     console.log(`大家好我是${this.name},今年${this.age}`)
//     // }
//     const child = new Parent('小明', 15)
//     console.log(child)

// }
// {
//     // es6 通过class来实现类的
//     class Parent {
//         constructor(name, age){
//             this.name = name
//             this.age = age
//         }
//         sayHello(){
//             console.log(`我是${this.name}，今年${this.age}`)
//         }
//     }

//     const child = new Parent('小红',15)
//     console.log('class',child)
// }



{
    // es5 使用构造函数来实现类
    function Person(name, age){
        this.name = name,
        this.age =age
        // this.say = function(){
        //     console.log(`我是${this.name},今年${this.age}`)
        // }
    }
    Person.prototype.say = function(){
        console.log(`我是${this.name},今年${this.age}`)

    }

    const p = new Person('coco', 21)
    console.log(p)
}

{
    // es6 使用class 来实现类
    class Person{
        constructor(name, age){
            this.name = name,
            this.age = age
        }
        say(){
            console.log(`我是${this.name},今年${this.age}`)
        }
    }
    const p = new Person('yiyi', 45)
    console.log(p)
}

{
    //class 类的继承
    class Parent{
        constructor(name = 'Coco'){
            this.name = name
        }
    }

    class Child extends Parent{
        constructor(name = 'Ana'){
            // 若想修改父类型定好的属性，则需要使用   super()
            super(name)
            this.name = name
     }
    }
    console.log('类的继承', new Child())
}
{
    // class类的 get set 属性
    class Person{
        constructor(name){
            this.name = name
        }
        get fullNamme(){
            //    \xa0   是表示空格
            return this.name + '\xa0' +'Yee'
        }

        set newNamme(value){
            return this.name = value

        }
    }
    const p = new Person('Jack')
    console.log('get', p.fullNamme)   //get Jack Yee
    p.newNamme = 'Max'
    console.log('set', p.fullNamme)   //get Max Yee
}

{
    // 如何给class类定义一个静态方法，只能在构造函数使用的方法，不能在子类中使用
    class Parent{
        // es7  静态属性
        static prop = 'es7'
        constructor(name = 'Quen'){
            this.name = name
        }
        // 静态方法
        static say(obj){
            console.log(`my name is ${obj.name}`)
        }
    }   
    // ES6 里面静态属性
    // Parent.prop = 'es6'
    const p = new Parent('小花')
    Parent.say(p)  //my name is 小花
    console.log(Parent.prop)  //es6  或者  es7
}