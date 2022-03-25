import express from 'express';

const app = express();

app.use(express.json());

const livros = [
    {id: 1, 'titulo': 'Senhor dos Aneis'}, 
    {id: 2, 'título': 'Hobiit'}
]

app.get('/', (req, res)=>{
    res.status(200).send('Curso de nje ds etc');
})

app.get('/livros', (req, res)=>{
    res.status(200).json(livros);
})

app.get('/livros/:id', (req, res)=>{
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})

app.post('/livros', (req, res)=>{
    livros.push(req.body);
    res.status(201).send("livro foi cadastrado com sucesso");
})

app.put('/livros/:id', (req, res)=>{
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id === id)
}

export default app;