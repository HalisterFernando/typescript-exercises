// public - implicito, pode ser lido por qualquer subclasse

// protected - acessível apenas as subclasses da classe do método,
// para acessar uma propriedade precisamos de um método

// private - apenas a classe que declarou o método pode utilizar

class C {
   public x = 10
}

class D extends C {

}

const cInstance = new C();
const dInstance = new D();

console.log(cInstance.x)
console.log(dInstance.x)


class E {
    protected x = 10
}

class F extends E {
    showX() {
        console.log(this.x)
    }
}

const fInstance = new F()
fInstance.showX()


class PrivateClass {
    private name = 'Private'
    
    showName() {
        console.log(this.name)
    }
    private privateMethod() {
        console.log('Private')
    }

}

class TestPrivate extends PrivateClass {
    myMethod() {
        this.showName()
    }

    showPrivateMethod() {
        this.privateMethod() // não é possível acessar método privado fora da classe principal
    }
}

const pObject = new PrivateClass()
pObject.showName()


