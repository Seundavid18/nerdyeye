// Asynchronous node

// console.log('first statement')
// setTimeout(()=>{
//     console.log('second statement')
// }, 5000)
// console.log('third statement')


// Object
const obj = {
    name: 'Prosper',
    profession: "web dey"
}

// Class
class People {
    constructor(name, profession, age){
        this.name = name
        this.profession = profession
        this.age = age
    } 
}

const person = new People('John Doe', 'Developer', 50)
const person1 = new People('Seun', 'Backend Dev', 30)

console.log(person)
console.log(person1)

// Arrays

const animals = ['Dog', 'Cat', 'Bird']
// convert to a string
const ani = animals.join(',')

console.log(ani)

// // convert a string to an array
// const animal = ['Dog', 'Cat', 'Bird']

// const newarray = animal.split('/')

// console.log(newarray)

// Function Declearation
sayHi('Benson')
function sayHi(name){
    console.log(`Hi ${name}`)
}

// sayHi('Johnson')


// Function Expression
// Anonymous Function

(()=> {
    console.log('Hello Node')
})() //Immediately invoked function expression

! function() {
    console.log('Hello Node.js')
}();

// NODE GLOBAL VARIABLES

const direct = __dirname

console.log(direct)

const filename = __filename

console.log(filename)

