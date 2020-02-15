import { Router } from 'express';
import QuestionController from './app/controllers/QuestionController';
import QuestionAnswerController from './app/controllers/QuestionAnswerController';
import QRCodeGeneratorController from './app/controllers/QRCodeGeneretorController';

const routes = new Router();

// Salvar a pergunta
routes.post('/storeQuestion', QuestionController.store);
// Chamada para o mobile saber se a resposta esta certa
routes.get('/getAnswer/:idQuestion', QuestionAnswerController.show);
// Busca uma questao aleatorio baseada no id do formulario
routes.get('/getQuestion/:id', QuestionController.show);
// Gera um endereco resposnavel por gerar o QRCode
routes.get('/generateQRCode/:id', QRCodeGeneratorController.show);

export default routes;
