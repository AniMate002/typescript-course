// Interfaces define what keys, fields and functions Objects or Classes should have

//  1)Creating Interfaces
interface Rectangle{
    readonly id: number | string, //field only for reading
    color?: string,               //unneccesary field  
    size: {
        width: number,
        height: number
    }
}
const rect1: Rectangle = {
    id: 1,
    color: "red",
    size: {
        width: 3,
        height: 2
    }
}
// We can alse assign objecr to a certain Type after creating this object
const rect3 = {} as Rectangle
const rect4 = <Rectangle>{}

//  2)Inheritance
interface RectangleWithArea extends Rectangle{
    getArea: () => number
}

const rect5: RectangleWithArea = {
    id: 2,
    color: 'blue',
    size:{
        width: 3,
        height: 5
    },
    getArea():number {
        return this.size.width * this.size.height
    }
}

//  3)Intefaces with Classes
interface IClock{
    time: Date,
    setTime(date: Date): void
}
class Clock implements IClock{
    time: Date = new Date
    setTime(date: Date): void {
        this.time = date
    }

}


//  4)Interfaces with Unassigned number of Fields
interface Styles{
    [key: string]: string

}
const css: Styles = {
    boder: "1px solid red",
    marginTop: '2px',
    borderRaduis: '5rem'
}