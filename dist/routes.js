"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _QuestionController = require('./app/controllers/QuestionController'); var _QuestionController2 = _interopRequireDefault(_QuestionController);
var _ProgramController = require('./app/controllers/ProgramController'); var _ProgramController2 = _interopRequireDefault(_ProgramController);
var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _QuestionAnswerController = require('./app/controllers/QuestionAnswerController'); var _QuestionAnswerController2 = _interopRequireDefault(_QuestionAnswerController);
var _QRCodeGeneretorController = require('./app/controllers/QRCodeGeneretorController'); var _QRCodeGeneretorController2 = _interopRequireDefault(_QRCodeGeneretorController);
var _ScoreController = require('./app/controllers/ScoreController'); var _ScoreController2 = _interopRequireDefault(_ScoreController);
var _FormController = require('./app/controllers/FormController'); var _FormController2 = _interopRequireDefault(_FormController);

const routes = new (0, _express.Router)();

// Salvar a pergunta
routes.post('/storeQuestion', _QuestionController2.default.store);
// Exibir perguntas
routes.get('/getQuestions', _QuestionController2.default.index);
// Chamada para o mobile saber se a resposta esta certa
routes.get('/getAnswer/:idQuestion', _QuestionAnswerController2.default.show);
// Busca uma questao aleatorio baseada no id do formulario
routes.get('/getQuestion/:id', _QuestionController2.default.show);
// Busca um formulario baseado no nome
routes.get('/getQuestionByForm', _FormController2.default.show);
// Gera um endereco responsavel por gerar o QRCode
routes.get('/generateQRCode/:id', _QRCodeGeneretorController2.default.show);
// Cria um novo programa
routes.post('/storeProgram', _ProgramController2.default.store);
// Lista todos os programas
routes.get('/listPrograms', _ProgramController2.default.index);
// Lista todos os programas baseado em id's
routes.get('/listProgramsById', _ProgramController2.default.show);
// cria um usuario
routes.post('/storeUser', _UserController2.default.store);
// Lista todos os usuarios
routes.get('/getUsers', _UserController2.default.index);
// Adiciona pontos na conta do usuario
routes.put('/addPoints/:id', _ScoreController2.default.update);

exports. default = routes;
