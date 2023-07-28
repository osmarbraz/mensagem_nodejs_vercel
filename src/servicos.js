/**
 * Especificação das rotas.
 */

// Import das bibliotecas
const express = require('express');

// Import das bibliotecas próprias
const {
    getMensagem,
    setMensagem,
    setMensagemQuery,
    setMensagemPath,
} = require("./mensagemrecurso");

// Inicializa o roteador dos serviços
const router = express.Router();

/**
 * Serviço da rota inicial.
 *
 * curl http://localhost:8000
 */
router.get('/', (request, response)=>{
    response.json({"statusCode": 200,
                   "mensagem": "API Mensagem Rodando"
    })
});

/**
 * Serviço de getMensagem.
 *
 * curl http://localhost:8000/mensagem
 */
router.get('/mensagem', getMensagem);

/**
 * Serviço de setMensagem com parâmetro de corpo do tipo JSON.
 * 
 * curl -v -X POST -H "Content-Type: application/json" -d "{\"mensagem\":\"Nova Mensagem\"}" http://localhost:8000/mensagem
 */
router.post('/mensagem', setMensagem);

/**
 * Serviço de setMensagem com parâmetro de query.
 * 
 *  curl -v -X GET http://localhost:8000/mensagemquery?mensagem=Nova%20Mensagem
 */
router.get('/mensagemquery', setMensagemQuery);

/**
 * Serviço de setMensagem com parâmetro de path.
 * 
 * curl -v -X GET http://localhost:8000/mensagempath/Nova%20Mensagem
 */
router.get('/mensagempath/:mensagem', setMensagemPath);

// Exporta o roteador
module.exports = router;