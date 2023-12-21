class Libro {
    constructor (titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    get nameBook() {
        return `${this.titulo}, de ${this.autor.toUpperCase()}`;
    }

    mostrarDatosEnConsola() {
        console.log(this.nameBook);
    }

    mostrarDatosEnAlert() {
        alert(this.nameBook);
    }

    getTitulo() {
        return this.titulo;
    }

    mostrarDatos(metodo) {
        if (metodo === "alert") {
            this.mostrarDatosEnAlert();
        }else{
            this.mostrarDatosEnConsola();
        }
    }
}

console.log("------------Segundo Punto------------")
let unLibro = new Libro('Ángeles y Demonios', 'Dan Brown');
console.log(unLibro);

console.log("------------Tercer Punto------------")
unLibro.mostrarDatosEnConsola();

console.log("------------Cuarto Punto------------")
unLibro.mostrarDatosEnAlert();

console.log("------------Quinto Punto------------")
let nuevolibro = new Libro('Fuego y Sangre', 'George R. R. Martin');
let tituloDelNuevoLibro = nuevolibro.getTitulo();
alert(tituloDelNuevoLibro);

console.log("------------Sexto Punto------------")
nuevolibro.mostrarDatos();