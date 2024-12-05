// // models/Admin.ts
// import mongoose from 'mongoose';

// const AdminSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   clientName: String,
//   clientEmail: String,
//   clientPhone: String,
//   pollingOccasion: String,
//   startDate: Date,
//   endDate: Date,
//   duration: String,
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export  mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

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