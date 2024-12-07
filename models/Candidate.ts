// models/Candidate.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ICandidate extends Document {
  name: string;
  party: string | null;
  biography: string;
  institution: string | null;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const CandidateSchema: Schema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  party: { 
    type: String, 
  },
  institution: { 
    type: String, 
  },

  image:{
    type: String, 
  },
  
  biography: { 
    type: String, 
    required: true 
  }
}, {
  timestamps: true
});

export default mongoose.models.Candidate || mongoose.model<ICandidate>('Candidate', CandidateSchema);