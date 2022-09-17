class User {
    constructor(name, lastname, books, pets){
        this.name = name
        this.lastname = lastname
        this.books = books
        this.pets = pets
    }

    getFullName() {
        return console.log(`${this.name} ${this.lastname}`)
    }

    addPet(name) {
        this.pets.push(name)
    }

    countPets() {
        return console.log(this.pets.length)
    }

    addBook(name, author) {
        this.books.push({name: name, autor:author})
    }

    getBookNames() {
        return this.books.map(book => book.name)
    }
}

let usuario1 = new User("Julian", "Battaglino", [{name:"Un mundo feliz", autor:"Aldous Huxley"}], ["Lenny", "Rabito"]);
usuario1.getFullName()
usuario1.addPet("Tom")
usuario1.addPet("Jerry")
usuario1.countPets()
usuario1.addBook("El Silmarillion", "J. R. R. Tolkien")

console.log(usuario1)
console.log(usuario1.getBookNames())
