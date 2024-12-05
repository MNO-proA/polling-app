// types/index.ts
export interface Admin {
    _id: string;
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
  }
  
  export interface Candidate {
    _id: string;
    name: string;
    position: string;
    votes: number;
    image: string;
    bio: string;
    createdAt: Date;
  }
  
  export interface Vote {
    _id: string;
    candidateId: string;
    voterGender: string;
    voterAge: number;
    amount: number;
    timestamp: Date;
  }
  
  export interface AdminFormData {
    clientName: string;
    clientEmail: string;
    clientPhone: string;
    pollingOccasion: string;
    startDate: Date;
    endDate: Date;
    admins: Array<{
      username: string;
      password: string;
    }>;
  }