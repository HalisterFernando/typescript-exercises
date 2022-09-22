// Crie uma função que receve review dos usuários, utilize o narrowing para receber os dados
// As possibilidades são boolean e number
// Serão enviados números de 1 a 5 (estrelas), para ter uma mensagem para cada nota
// Ou false quando o usuário não deixa uma review e prever um retorno para esse caso

type Review = number | boolean | undefined

class UserReview {
    name: string
    review: Review
    constructor(name: string, review?: Review) {
        this.name = name;
        this.review = review
    }    
}

const john = new UserReview('John', 4);
const mark = new UserReview('Mark', true);
const carl = new UserReview('Carl', false)
const bob = new UserReview('Bob');

function showUserReview(user: UserReview) {
    if ('review' in user) {
        if (typeof user.review === 'number') {
            return console.log(`${user.name} deu nota ${user.review}`)
        }
        if (typeof user.review === 'boolean') {
            if (user.review) {
                return console.log(`${user.name} gostou do filme`)
            }
            return console.log(`${user.name} não gostou do filme`)
        }
    }

    return console.log(`${user.name} não avaliou o filme`)
}

showUserReview(john);
showUserReview(mark);
showUserReview(carl);
showUserReview(bob);