// Usado para checar se uma propriedade existe no objeto
// Propriedades podem ser opcionais
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var turca = new Dog('Turca');
var bob = new Dog('Bob', 'Pastor Alemão');
function showDogDetails(dog) {
    if ('breed' in dog) {
        return console.log("O cachorro \u00E9 da ra\u00E7a ".concat(dog.breed));
    }
    return console.log("O cachorro \u00E9 um SRD");
}
showDogDetails(turca);
showDogDetails(bob);
