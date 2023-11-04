const arrayOfNumbers: Array<number> = [1,1,2,3,5,8,13]
const arrayOfStrings: Array<string> = ["Hello", "Kiryl"]

// This letter T means that function will adjust depending on data type
function reverse<T>(array: T[]): T[]{
    return array.reverse()
}

console.log(reverse(arrayOfNumbers))
console.log(reverse(arrayOfStrings))
