// Modificam e atribuem valores as propriedades
// Também funcionam como métodos

class Coords {
    x!: number
    y!: number

    set fillX(x: number) {
        if (x === 0) {
            return 
        }

        this.x = x
        console.log('x inserido com sucesso')
    }

    set fillY(y: number) {
        if (y === 0) {
            return 
        }

        this.y = y
        console.log('x inserido com sucesso')
    }

    get getCoords() {
        return `${this.x} ${this.y}`
    }
}

const myCoords = new Coords()

myCoords.fillX = 15
myCoords.fillY = 5
console.log(myCoords.getCoords)