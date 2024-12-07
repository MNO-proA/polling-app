// lib/analytics.ts
import { Vote, Candidate } from "@/types";

export const calculateVotePercentages = (votes: Vote[], candidates: Candidate[]) => {
  const totalVotes = votes.length;
  const votesPerCandidate = candidates.map(candidate => ({
    name: candidate.name,
    votes: votes.filter(vote => vote.candidateId === candidate._id).length,
    percentage: (votes.filter(vote => vote.candidateId === candidate._id).length / totalVotes) * 100 || 0
  }));
  return votesPerCandidate;
};

export const calculateHourlyVotes = (votes: Vote[]) => {
  const hourlyData: { [key: string]: number } = {};
  votes.forEach(vote => {
    const hour = new Date(vote.timestamp).getHours();
    hourlyData[hour] = (hourlyData[hour] || 0) + 1;
  });
  return Array.from({ length: 24 }, (_, i) => ({
    hour: i,
    votes: hourlyData[i] || 0
  }));
};

export const calculateAgeDistribution = (votes: Vote[]) => {
  const ageRanges = {
    '18-25': 0,
    '26-35': 0,
    '36-45': 0,
    '46-55': 0,
    '56+': 0
  };
  
  votes.forEach(vote => {
    const age = vote.voterAge;
    if (age >= 18 && age <= 25) ageRanges['18-25']++;
    else if (age <= 35) ageRanges['26-35']++;
    else if (age <= 45) ageRanges['36-45']++;
    else if (age <= 55) ageRanges['46-55']++;
    else ageRanges['56+']++;
  });

  return Object.entries(ageRanges).map(([range, count]) => ({
    range,
    count
  }));
};