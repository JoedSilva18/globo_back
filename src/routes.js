import { Router } from 'express';
import QuestionController from './app/controllers/QuestionController';
import ProgramController from './app/controllers/ProgramController';
import UserController from './app/controllers/UserController';
import QuestionAnswerController from './app/controllers/QuestionAnswerController';
import QRCodeGeneratorController from './app/controllers/QRCodeGeneretorController';
import ScoreController from './app/controllers/ScoreController';
import FormController from './app/controllers/FormController';
import SessionController from './app/controllers/SessionController';
import SurveyController from './app/controllers/SurveyController';
import SurveyAnswerController from './app/controllers/SurveyAnswerController';

const routes = new Router();

// Rotas Web //

// Salvar a pergunta
routes.post('/storeQuestion', QuestionController.store);
// Exibir perguntas
routes.get('/getQuestions/:id', QuestionController.index);
// Busca um formulario baseado no nome
routes.get('/getQuestionByForm', FormController.show);
// Gera um endereco responsavel por gerar o QRCode
routes.get('/generateQRCode/:type/:id', QRCodeGeneratorController.show);
// Cria um novo programa
routes.post('/storeProgram', ProgramController.store);
// Lista todos os programas
routes.get('/listPrograms', ProgramController.index);
// Busca programa por ID
routes.get('/getProgram/:id', ProgramController.show);
// Lista todos os usuarios
routes.get('/getUsers', UserController.index);
// Cria enquetes
routes.post('/storeSurvey', SurveyController.store);
// Busca enquetes pelo id do programa
routes.get('/getSurveys/:programId', SurveyController.index);

// Rotas Mobile //

// Criacao Usuario
routes.post('/storeUser', UserController.store);
// Autenticacao Usuario
routes.post('/createSession', SessionController.store);
// Busca uma questao aleatorio baseada no id do formulario
routes.get('/getQuestion/:id', QuestionController.show);
// Chamada para o mobile saber se a resposta esta certa
routes.get('/getAnswer/:idQuestion', QuestionAnswerController.show);
// Adiciona pontos na conta do usuario
routes.put('/addPoints/:id', ScoreController.update);
// Lista usuario por ID
routes.get('/getUser/:id', UserController.show);
// Adiciona um voto na enquete
routes.post('/vote', SurveyAnswerController.store);
// Busca enquete pelo id da enquete
routes.get('/getSurvey/:surveyId', SurveyController.show);

export default routes;
