import livros from '../models/Livro.js';

class LivroController{
    
    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }   

    static listarLivroPorId = (req, res) => {
        const {id} = req.params;

        livros.findById(id, (err, livros) => {
            if(err){
                res.status(400).send({ message: `${err.message} - id do item não encontrado.` })
            } else { 
                res.status(200).send(livros);
            }
        })
    }

    static cadastrarLivros = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if(err){
                res.status(500).send({ message: `${err.message} - falha ao cadastrar novo item.`})
            } else {
                res.status(201).send(livro.toJSON());
            }
        })
    }

    static atualizarLivros = (req, res) => {
        const {id} = req.params;

        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(!err){
                res.status(200).send({ message: 'Livro atualizado com sucesso' })
            } else {
                res.status(500).send({ message: err.message })
            }
        });
    } 

    static excluirLivro = (req, res) => {
        const {id} = req.params;

        livros.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({ message: `Item excluído com sucesso.` })
            } else { 
                res.status(500).send({ message: `${err.message} - Não foi possível excluir o item.`})
            }
        })
    }
}

export default LivroController;
