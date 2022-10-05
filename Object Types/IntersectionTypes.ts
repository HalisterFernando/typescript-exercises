// Podemos unir duas interfaces através do &

interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

// Você pode criar um tipo que une duas interfaces
type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name:'Arnold',
    type: 'Shotgun',
    caliber: 12
}

console.log(arnold)