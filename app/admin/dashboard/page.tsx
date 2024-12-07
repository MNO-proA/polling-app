// // app/admin/dashboard/page.tsx
// "use client";

// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { VoteChart } from "@/components/VoteChart";
// // import { AgeDistribution } from "@/components/AgeDistribution";
// import { HourlyVotes } from "@/components/HourlyVotes";
// import { VoteSummary } from "@/components/VoteSummary";
// import { Vote, Candidate } from "@/types";
// import { LoaderPinwheel } from 'lucide-react';
// import Countdown from "@/components/Countdown";


// export default function Dashboard() {
//   const [votes, setVotes] = useState<Vote[]>([]);
//   const [candidates, setCandidates] = useState<Candidate[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [votesRes, candidatesRes] = await Promise.all([
//           fetch('/api/votes'),
//           fetch('/api/candidates')
//         ]);
//         const [votesData, candidatesData] = await Promise.all([
//           votesRes.json(),
//           candidatesRes.json()
//         ]);
//         setVotes(votesData);
//         setCandidates(candidatesData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//     const interval = setInterval(fetchData, 30000); // Refresh every 30 seconds
//     return () => clearInterval(interval);
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen animate-spin">
//         <LoaderPinwheel />
//       </div>
//     );
//   }
  
//   return (
//     <div className="p-6 space-y-6">
//       <Countdown />
//       <VoteSummary votes={votes} candidates={candidates} />
      
//       <div className="grid grid-cols-1">
//         <Card>
//           <CardHeader>
//             <CardTitle>Vote Distribution</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <VoteChart votes={votes} candidates={candidates} />
//           </CardContent>
//         </Card>

//         {/* <Card>
//           <CardHeader>
//             <CardTitle>Age Distribution</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <AgeDistribution votes={votes} />
//           </CardContent>
//         </Card> */}

//         <Card className="md:col-span-2 mt-6">
//           <CardHeader>
//             <CardTitle>Hourly Vote Activity</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <HourlyVotes votes={votes} />
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VoteChart } from "@/components/VoteChart";
import { HourlyVotes } from "@/components/HourlyVotes";
import { LoaderPinwheel } from "lucide-react";
import Countdown from "@/components/Countdown";
import { BarChart } from "@/components/BarChart";

// Dummy candidates
const candidates = [
  {
    _id: "1",
    name: "John Doe",
    party: "Party A",
    biography: "Experienced politician.",
    institution: "University of Ghana",
    image: "https://example.com/images/john_doe.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "2",
    name: "Jane Smith",
    party: "Party B",
    biography: "Advocate for women's rights.",
    institution: "Kwame Nkrumah University",
    image: "https://example.com/images/jane_smith.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "3",
    name: "Mike Johnson",
    party: "Party C",
    biography: "Tech and innovation expert.",
    institution: "University of Cape Coast",
    image: "https://example.com/images/mike_johnson.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Dummy votes
const votes = [
  { candidateId: "1", votes: 500, timestamp: new Date("2024-12-01T10:00:00Z") },
  { candidateId: "1", votes: 300, timestamp: new Date("2024-12-01T11:00:00Z") },
  { candidateId: "2", votes: 400, timestamp: new Date("2024-12-01T10:30:00Z") },
  { candidateId: "2", votes: 200, timestamp: new Date("2024-12-01T12:00:00Z") },
  { candidateId: "3", votes: 100, timestamp: new Date("2024-12-01T10:45:00Z") },
  { candidateId: "3", votes: 150, timestamp: new Date("2024-12-01T11:30:00Z") },
];

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetch
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a delay to mimic a real API fetch
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen animate-spin">
        <LoaderPinwheel />
      </div>
    );
  }

  return (
    <div className="p-2 space-y-6">
      <Countdown />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Doughnut Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Vote Distribution (Doughnut)</CardTitle>
          </CardHeader>
          <CardContent>
            <VoteChart votes={votes} candidates={candidates} />
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Vote Distribution (Bar)</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart votes={votes} candidates={candidates} />
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        {/* Hourly Votes */}
        <Card>
          <CardHeader>
            <CardTitle>Hourly Vote Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <HourlyVotes votes={votes} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
