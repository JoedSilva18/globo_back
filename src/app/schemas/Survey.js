import mongoose from 'mongoose';

const SurveySchema = new mongoose.Schema(
  {
    programId: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Survey', SurveySchema);
