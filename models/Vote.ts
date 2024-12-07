// models/Vote.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IVote extends Document {
  candidateId: mongoose.Types.ObjectId;
  votes: number
  timestamp: Date;

}

const VoteSchema: Schema = new Schema({
  candidateId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Candidate',
    required: true 
  },

  votes: {
    type: Number,
    require: true
  },
  
  timestamp: { 
    type: Date, 
    default: Date.now 
  },
  
});

VoteSchema.index({ candidateId: 1 });
VoteSchema.index({ timestamp: 1 });

export default mongoose.models.Vote || mongoose.model<IVote>('Vote', VoteSchema);