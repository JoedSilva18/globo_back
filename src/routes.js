import { Router } from 'express';
import QuestionController from './app/controllers/QuestionController';
import ProgramController from './app/controllers/ProgramController';
import QuestionAnswerController from './app/controllers/QuestionAnswerController';
import QRCodeGeneratorController from './app/controllers/QRCodeGeneretorController';

const routes = new Router();

// Salvar a pergunta
routes.post('/storeQuestion', QuestionController.store);
// Exibir perguntas
routes.get('/getQuestions', QuestionController.index);
// Chamada para o mobile saber se a resposta esta certa
routes.get('/getAnswer/:idQuestion', QuestionAnswerController.show);
// Busca uma questao aleatorio baseada no id do formulario
routes.get('/getQuestion/:id', QuestionController.show);
// Gera um endereco resposnavel por gerar o QRCode
routes.get('/generateQRCode/:id', QRCodeGeneratorController.show);
// Cria um novo programa
routes.post('/storeProgram', ProgramController.store);
// Lista todos os programas
routes.get('/listPrograms', ProgramController.index);
// Lista todos os programas baseado em id's
routes.get('/listProgramsById', ProgramController.show);

export default routes;
