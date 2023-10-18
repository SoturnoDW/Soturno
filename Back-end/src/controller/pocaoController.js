import { Router } from "express";
import { cadastrarPocao, listarPocao, listarPocaoPorNome, removerPocao} from "../repository/pocaoRepository.js"

const pocaoEndpoints = Router();

pocaoEndpoints.post('/pocao', async (req, resp) => {
    try {
        let pocao = req.body;
        let r = await cadastrarPocao(pocao);
        resp.status(200).send(r);
    } catch (error) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

pocaoEndpoints.get('/pocao', async (req, resp) => {
    try {
        let r = await listarPocao()
        resp.send(r)
    } catch (error) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

pocaoEndpoints.get('/pocao/buscar/', async (req, resp) => {
    try {
        let nome = req.query.nome
        let r = await listarPocaoPorNome(nome)
        resp.send(r)
    } catch (error) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

pocaoEndpoints.delete('/delete/:id', async (req, resp) => {
    try {
        let id = req.params.id
        let linhasAfetadas = await removerPocao(id)
        if (linhasAfetadas == 0)
            throw new Error("Poção não encontrada")
        resp.send() 
    } catch (error) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default pocaoEndpoints;