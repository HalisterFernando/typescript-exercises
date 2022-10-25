// Podemos criar propriedades e métodos estáticos em classes
// Isso faz com que o acesso ou a utilização não dependam de objetos
// Podemos utiliza-los a partir da propria classe

class StaticMambers {
   static prop = "teste static"
   static staticMehod() {
    console.log('Este é um método estático')
   }
}

console.log(StaticMambers.prop)
StaticMambers.staticMehod()