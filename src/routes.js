import { Router } from 'express';
import QuestionController from './app/controllers/QuestionController';
import ProgramController from './app/controllers/ProgramController';
import UserController from './app/controllers/UserController';
import QuestionAnswerController from './app/controllers/QuestionAnswerController';
import QRCodeGeneratorController from './app/controllers/QRCodeGeneretorController';
import ScoreController from './app/controllers/ScoreController';
import FormController from './app/controllers/FormController';

const routes = new Router();

// Salvar a pergunta
routes.post('/storeQuestion', QuestionController.store);
// Exibir perguntas
routes.get('/getQuestions', QuestionController.index);
// Chamada para o mobile saber se a resposta esta certa
routes.get('/getAnswer/:idQuestion', QuestionAnswerController.show);
// Busca uma questao aleatorio baseada no id do formulario
routes.get('/getQuestion/:id', QuestionController.show);
// Busca um formulario baseado no nome
routes.get('/getQuestionByForm', FormController.show);
// Gera um endereco responsavel por gerar o QRCode
routes.get('/generateQRCode/:id', QRCodeGeneratorController.show);
// Cria um novo programa
routes.post('/storeProgram', ProgramController.store);
// Lista todos os programas
routes.get('/listPrograms', ProgramController.index);
// Lista todos os programas baseado em id's
routes.get('/listProgramsById', ProgramController.show);
// cria um usuario
routes.post('/storeUser', UserController.store);
// Lista todos os usuarios
routes.get('/getUsers', UserController.index);
// Adiciona pontos na conta do usuario
routes.put('/addPoints/:id', ScoreController.update);

export default routes;
