//  1)Simple Functions with Simple Overloading
function add(a:number, b:number): number{
    return a + b
}
function toUpper(str: string):string {
    return str.trim().toUpperCase()
}


//  2)
interface MyPosition{
    x:number | undefined,
    y: number | undefined
}
const position = (a?:number, b?:number): MyPosition => {
    if(!a && !b)
        return {x:undefined, y:undefined} as MyPosition
    if(a && !b)
        return {x:a, y: undefined} as MyPosition
    if(!a && b)
        return {x:undefined, y:b} as MyPosition
    
    return {x: a, y: b} as MyPosition
}

console.log('Empty: ', position())
console.log('Only X: ', position(3))
console.log('Full: ', position(3, 5))
