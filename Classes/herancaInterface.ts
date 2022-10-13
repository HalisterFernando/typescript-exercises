// Podemos herdar interfaces com a instrução implements
// Definir metodos em comum com várias classes

interface ShowTitle {
    itemTitle(): string
}

class BlogPost implements ShowTitle {
    title: string
    constructor(title: string) {
        this.title = title
    }

    itemTitle(): string {
        return `o título do post é ${this.title}`
    }

}

const myPost = new BlogPost('Hello World');

console.log(myPost.itemTitle());

class TestingInterface implements ShowTitle {
    title: string
    constructor(title: string) {
        this.title = title;
    }

    itemTitle(): string {
        return `o título é ${this.title}`
    }
}