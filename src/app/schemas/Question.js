import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema(
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
    points: {
      type: Number,
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

export default mongoose.model('Question', QuestionSchema);
