// Interfaces podem ter propriedades opcionais

interface User {
    email: string
    role?: string
}

function showUserDetails(user: User) {
    console.log(`O usuário tem o e-mail ${user.email}`)

    if (user.role) {
        console.log(`A função do usuário é ${user.role}`)
    }
}

const u1: User = {email: 'mail@mail.com', role: 'admin'}
const u2: User = {email: 'othermail#mail.com'}

showUserDetails(u1)
showUserDetails(u2)