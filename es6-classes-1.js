class Person{
    constructor(name='anonymous', age=0){
this.name=name;
this.age=age;
    }
    getGreeting(){
       // return 'Hi I am ' + this.name ;
       return `hi i am ${this.name}`;
    }
    getAge(){
        return `${this.name} is ${this.age} years old`;
    }
}
class Student extends Person{
    constructor(name, age, major){
      super(name,age);  
        this.major=major;
    }
hasMajor(){
    return this.major;

}}

const me = new Student('Thrinath Shaga', 24, 'compter science');
console.log(me);
console.log(me);

const other =new Student();
console.log(other);
console.log(other);