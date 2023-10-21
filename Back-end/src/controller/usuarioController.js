import { Router } from "express";
import { atualizarUsuario, cadastrarUsuario, listarUsuario, listarUsuarioPorNome, removerUsuario} from "../repository/usuarioRepository.js"

const usuarioEndpoints = Router();

usuarioEndpoints.post('/usuario', async (req, resp) => {
    try {
        let usuario = req.body;
        let r = await cadastrarUsuario(usuario);
        resp.status(200).send(r);
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

usuarioEndpoints.put('/usuario', async (req, resp) => {
    try {
        let usuario = req.body;
        let r = await atualizarUsuario(usuario)
        resp.status(200).send(r)
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

usuarioEndpoints.get('/usuario', async (req, resp) => {
    try {
        let r = await listarUsuario()
        resp.send(r)
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

usuarioEndpoints.get('/usuario/buscar/', async (req, resp) => {
    try {
        let nome = req.query.nome
        let r = await listarUsuarioPorNome(nome)
        resp.send(r)
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

usuarioEndpoints.delete('/usuario/:id', async (req, resp) => {
    try {
        let id = req.params.id
        let linhasAfetadas = await removerUsuario(id)
        if (linhasAfetadas == 0)
            throw new Error("Poção não encontrada")
        resp.send() 
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

export default usuarioEndpoints;