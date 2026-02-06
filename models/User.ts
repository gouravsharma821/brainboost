import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  age?: number;
  questionnaire?: {
    goal: string;
    concerns: string[];
    playTime: string;
  };
  gameProgress: {
    memoryMatch: { score: number; played: number };
    mathChallenge: { score: number; played: number };
    colorMatch: { score: number; played: number };
    speedClick: { score: number; played: number };
  };
  createdAt: Date;
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
  },
  age: {
    type: Number,
  },
  questionnaire: {
    goal: { type: String },
    concerns: [{ type: String }],
    playTime: { type: String },
  },
  gameProgress: {
    memoryMatch: {
      score: { type: Number, default: 0 },
      played: { type: Number, default: 0 },
    },
    mathChallenge: {
      score: { type: Number, default: 0 },
      played: { type: Number, default: 0 },
    },
    colorMatch: {
      score: { type: Number, default: 0 },
      played: { type: Number, default: 0 },
    },
    speedClick: {
      score: { type: Number, default: 0 },
      played: { type: Number, default: 0 },
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
