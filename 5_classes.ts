//  1)Default Classes witn Default Field
class TS{
    verison: string
    constructor(version: string){
        this.verison = version
    }

    info(name: string):string{
        return `${name}: TS version is ${this.verison}`
    }
}

//  2)Fields with Modificators (protected, private, public)
class Car{
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(model: string, wheels: number){
        this.model = model,
        this.numberOfWheels = wheels
    }
}

class Animal{
    public color: string = 'black'
    protected voice: string = ''
    private go():void{
        console.log("Animal is walking!")
    }
}
class Cat extends Animal{
    public setVoice(voice: string):void{
        this.voice = voice
    }
}

const myCat = new Cat()
myCat.color = 'Grey'
myCat.setVoice("Meow Meow!!!")
console.log("My cat: ", myCat)


//  3)Abstract Classes
abstract class Component{
    abstract id: number
    abstract render(): void
    abstract info(): string
}
class AppComponent extends Component{
    id: number = 1
    render(): void {
        console.log("Rendering AppComponent")
    }
    info(): string {
        return `Component with id: ${this.id}`
    }
}