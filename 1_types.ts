//  1)Boolean Type
const isFetching: boolean = true
const isLoading: boolean = false

//  2)Number
const int: number = 3
const float: number = 3.3
const num: number = 3e10

//  3)String
const message: string = "Hello TS"

// 4)Arrays
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13] // JENERIC TYPE
const words: Array<string> = ["Hello", "TS"]

// 5)Tuple
const contact: [string, number] = ['Kiryl', 463628]

//  6)Any
let variable: any = "String"
variable = 23
variable = true

//  7)Void
function sayMyName (name: string): void{
    console.log("Hello, ", name)
}
sayMyName('Kiryl')

//  8)Never
// a)Infinite LOOP
// b)Function always returns ERROR
function throwError (message: string):never{
    throw new Error(message)
}
function infinateLoop():never{
    while(true){}
}



//  9)Type
// creating your own types
type Login = string
const login: Login = "admin@gmail.com"

type ID = string | number
const id1: ID = 1245
const id2: ID = "3542"

interface User {
    _id: number,
    name: string,
    email: string,
    createdAt: Date
}
type UserKey = keyof User
let key: UserKey = "name"

// 10)Null & Undefined
type SomeType = string | null | undefined