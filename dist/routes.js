"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _QuestionController = require('./app/controllers/QuestionController'); var _QuestionController2 = _interopRequireDefault(_QuestionController);
var _ProgramController = require('./app/controllers/ProgramController'); var _ProgramController2 = _interopRequireDefault(_ProgramController);
var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _QuestionAnswerController = require('./app/controllers/QuestionAnswerController'); var _QuestionAnswerController2 = _interopRequireDefault(_QuestionAnswerController);
var _QRCodeGeneretorController = require('./app/controllers/QRCodeGeneretorController'); var _QRCodeGeneretorController2 = _interopRequireDefault(_QRCodeGeneretorController);
var _ScoreController = require('./app/controllers/ScoreController'); var _ScoreController2 = _interopRequireDefault(_ScoreController);
var _FormController = require('./app/controllers/FormController'); var _FormController2 = _interopRequireDefault(_FormController);
var _SessionController = require('./app/controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);
var _SurveyController = require('./app/controllers/SurveyController'); var _SurveyController2 = _interopRequireDefault(_SurveyController);
var _SurveyAnswerController = require('./app/controllers/SurveyAnswerController'); var _SurveyAnswerController2 = _interopRequireDefault(_SurveyAnswerController);

const routes = new (0, _express.Router)();

// Rotas Web //

// Salvar a pergunta
routes.post('/storeQuestion', _QuestionController2.default.store);
// Exibir perguntas
routes.get('/getQuestions/:id', _QuestionController2.default.index);
// Busca um formulario baseado no nome
routes.get('/getQuestionByForm', _FormController2.default.show);
// Gera um endereco responsavel por gerar o QRCode
routes.get('/generateQRCode/:id', _QRCodeGeneretorController2.default.show);
// Cria um novo programa
routes.post('/storeProgram', _ProgramController2.default.store);
// Lista todos os programas
routes.get('/listPrograms', _ProgramController2.default.index);
// Busca programa por ID
routes.get('/getProgram/:id', _ProgramController2.default.show);
// Lista todos os usuarios
routes.get('/getUsers', _UserController2.default.index);
// Cria enquetes
routes.post('/storeSurvey', _SurveyController2.default.store);
// Adiciona um voto na enquete
routes.post('/vote', _SurveyAnswerController2.default.store);

// Rotas Mobile //

// Criacao Usuario
routes.post('/storeUser', _UserController2.default.store);
// Autenticacao Usuario
routes.post('/createSession', _SessionController2.default.store);
// Busca uma questao aleatorio baseada no id do formulario
routes.get('/getQuestion/:id', _QuestionController2.default.show);
// Chamada para o mobile saber se a resposta esta certa
routes.get('/getAnswer/:idQuestion', _QuestionAnswerController2.default.show);
// Adiciona pontos na conta do usuario
routes.put('/addPoints/:id', _ScoreController2.default.update);
// Lista usuario por ID
routes.get('/getUser/:id', _UserController2.default.show);

exports. default = routes;
