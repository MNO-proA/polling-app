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
    image: string;
    biography: string;
  }
  
  export interface Vote {
    candidateId: string;
    votes: number;
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