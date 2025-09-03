class Person {
    constructor(firtsname, lastname, age, height, wight){
       this.firtsname = firtsname
       this.lastname = lastname
       this.age = age
       this.height = height
       this.wight = wight
    }
    introduce(){
    return `Hola, me llamo ${this.firtsname} y tengo ${this.age} años.  `;
}
}
let person1 = new Person ("Dominic", "Fernandez", 18, 1.80, 60);
console.log(person1)
console.log(person1.firtsname);
console.log(person1.wight)

//PRACTICA
class Person2 {
    //atributos protegidos(encapsulamiento)
    #cellphone
    constructor(firtsname, lastname, age, height, wight, hobbies, cellphone){
       this.firtsname = firtsname;
       this.lastname = lastname;
       this.age = age;
       this.height = height;
       this.wight = wight;
       this.hobbies = hobbies;
       //Inicializamos el atributo protegido
       this.#cellphone = cellphone;
    }
    sayHello(){
    console.log("Hola a todos, saludo desde el metodo de la clase Person")
}
    introduce(){
    return `Hola, me llamo ${this.firtsname},tengo ${this.age} años y mi pasatiempo favorito es ${this.hobbies}.  `;
}
    //Exponiendo un atributo protegido
    getCellphone(){
        return this.#cellphone;
    }
}

let person2 = new Person2 ("Valeria", "Justo", 15, 1.70, 50, "jugar voley", "993666543");

console.log(person2.hobbies);
console.log(person2.firtsname);
console.log(person2.wight)
person2.sayHello();
console.log(person2.introduce())
console.log(person2.getCellphone())

//undefined
console.log(person2.cellphone)

//Aplico herencia con la palabra reservada "extends".La clase padre le hereda todos sus atributos y metodos a la clase hijo
class Chef extends Person{
    //Agregamos nuevos atributos
    constructor(firtsname, lastname, age, height, wight, restaurant, favoriteFood){
    super(firtsname, lastname, age, height, wight)
    this.restaurant = restaurant
    this.favoriteFood = favoriteFood}
    introduce(){
        return `Hola, me llamo ${this.firtsname},tengo ${this.age} años y soy chef del restaurante ${this.restaurant}.`
    }
    
    
}
let Chef1 = new Chef ("Mario", "Huerta", 18, 1.80, 60, "Italiano", "Lasagna");
console.log(Chef1.favoriteFood);
//POLIMORFISMO
console.log(Chef1.introduce())
console.log(person1.introduce())
