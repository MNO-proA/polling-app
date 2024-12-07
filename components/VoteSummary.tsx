// components/VoteSummary.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { calculateVotePercentages } from "@/lib/analytics";
import { Vote, Candidate } from "@/types";

interface VoteSummaryProps {
  votes: Vote[];
  candidates: Candidate[];
}

export function VoteSummary({ votes, candidates }: VoteSummaryProps) {
  const voteData = calculateVotePercentages(votes, candidates);
  const totalVotes = votes.length;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Votes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalVotes}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Leading Candidate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {voteData.sort((a, b) => b.votes - a.votes)[0]?.name || "N/A"}
          </div>
          <p className="text-xs text-muted-foreground">
            {voteData.sort((a, b) => b.votes - a.votes)[0]?.percentage.toFixed(1)}% of votes
          </p>
        </CardContent>
      </Card>

      {/* <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Age</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {votes.length > 0
              ? Math.round(
                  votes.reduce((acc, vote) => acc + vote.voterAge, 0) / votes.length
                )
              : "N/A"}
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
}