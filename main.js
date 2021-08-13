const hello='hey there'
console.log(hello)
const arr= 'hi there I am 19 years old born in 2002'

//split string 
const a=arr.split(' ')
console.log(a)


//upper case lower case
console.log(arr.toUpperCase())
console.log(arr.toLowerCase())

//substr, prints the value starting from the index to the end 
console.log(arr.substr(7))

//substring , print the value in a range first value in included and last is excluded

console.log(arr.substring(5,15))

//to find index of any alphabet : indexof()
//finds only the first repetition of that alphabet

console.log(arr.indexOf('y'))

//to write a number using back tick `

const year=2021
console.log(`this has been ${year}, really successful year `)

//to find the length of string 

console.log(arr.length)

//arrays
//method 1 to declare an array

const names= new Array('aryan' , 'arush' , 'dev', 'akarshit' , 'kunal')

//method 2 to declare an array using [] brackets

const roll=['10','12','13','15','18']
console.log(names,roll)
console.log(names[2])

//objects in javascript declared by this  { }

const user = {
    name: 'aryan' ,
    lastname: 'gupta' ,
    age: 19,
    hobbies : ['sleep', 'sleep', 'sleep']


}

console.log (user )

//access array inside an object 
console.log(user.hobbies[2])

//array of objects 

const emp = [
     {
    name: 'aryan' ,
    lastname: 'gupta' ,
    age: 19,
    hobbies : ['sleep', 'sleep', 'sleep'],


},
{
    name: 'aryan' ,
    lastname: 'gupta' ,
    age: 19,
    hobbies : ['sleep', 'sleep', 'sleep'],


},
{
    name: 'aryan' ,
    lastname: 'gupta' ,
    age: 19,
    hobbies : ['sleep', 'sleep', 'sleep'],


}
]
console.log(emp)
//accessing value in array of objects 
console.log (emp[2].name)

//accessing array element in array of objects 
console.log (emp[1].hobbies[2])

