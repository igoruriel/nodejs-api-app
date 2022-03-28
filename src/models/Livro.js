import mongoose from "mongoose";

const livroSchmema = new mongoose.Schema(
    {
        id: {type: String}, 
        titulo: {type: String, required: true},
        autor: {type: String, required: true},
        editora: {type: String, required: true},
        numeroPaginas: {type: String}
    }
);

const livros = mongoose.model('livros', livroSchmema);

export default livros;
