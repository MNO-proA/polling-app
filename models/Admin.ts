import mongoose, { Document } from 'mongoose';

export interface IAdmin extends Document {
  username: string;
  password: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  pollingOccasion: string;
  startDate: Date;
  endDate: Date;
  duration: string;
  createdAt: Date;
  admins: { username: string; password: string }[]; 
}

const AdminSchema = new mongoose.Schema<IAdmin>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  clientEmail: {
    type: String,
    required: true,
  },
  clientPhone: {
    type: String,
    required: true,
  },
  pollingOccasion: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  admins: [{
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Admin || mongoose.model<IAdmin>('Candidate', AdminSchema);

// // models/Candidate.ts
// const CandidateSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   position: String,
//   votes: {
//     type: Number,
//     default: 0,
//   },
//   image: String,
//   bio: String,
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export  mongoose.models.Candidate || mongoose.model('Candidate', CandidateSchema);

// // models/Vote.ts
// const VoteSchema = new mongoose.Schema({
//   candidateId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Candidate',
//     required: true,
//   },
//   voterGender: String,
//   voterAge: Number,
//   amount: Number,
//   timestamp: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export  mongoose.models.Vote || mongoose.model('Vote', VoteSchema);