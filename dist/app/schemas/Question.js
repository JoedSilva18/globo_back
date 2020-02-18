"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const QuestionSchema = new _mongoose2.default.Schema(
  {
    formName: {
      type: String,
      required: true,
    },
    programId: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    questions: [
      {
        content: {
          type: String,
          required: true,
        },
        alternatives: [
          {
            id: {
              type: Number,
              required: true,
            },
            text: {
              type: String,
              required: true,
            },
          },
        ],
        points: {
          type: Number,
          required: true,
        },
        questionAnswerIndex: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

exports. default = _mongoose2.default.model('Question', QuestionSchema);
