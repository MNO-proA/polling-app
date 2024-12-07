'use client';

import { useState, useEffect } from 'react';
// import { useApi } from '@/hooks/useApi';
import { ICandidate } from '@/models/Candidate';
import CandidateModal from '@/components/CandidateModal';
import { LoaderPinwheel } from 'lucide-react';
import Image from 'next/image';

const dummyCandidates: Partial<ICandidate>[] = [
  {
    id: '1',
    name: 'John Doe',
    party: 'Party A',
    biography: 'A passionate leader with extensive experience in public service.',
    institution: 'University of Excellence',
    image: 'https://via.placeholder.com/150',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'Jane Smith',
    party: null,
    biography: 'An innovative thinker striving to make a difference.',
    institution: 'Institute of Innovation',
    image: 'https://via.placeholder.com/150',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    name: 'Michael Johnson',
    party: 'Party C',
    biography: 'Dedicated to fostering growth and development in our communities.',
    institution: null,
    image: 'https://via.placeholder.com/150',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];


export default function Candidates() {
  const [candidates, setCandidates] = useState<ICandidate[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCandidate, setEditingCandidate] = useState<ICandidate | null>(null);

  // Simulate API fetching with dummy data
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      // Simulate API fetching and map to ICandidate
      setCandidates(dummyCandidates.map(candidate => Object.assign({}, candidate) as ICandidate));
      setLoading(false);
    }, 1000);
  }, []);

  const handleEdit = (candidate: ICandidate) => {
    setEditingCandidate(candidate);
    setIsModalOpen(true);
  };
  

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this candidate?')) return;

    try {
      setCandidates((prevCandidates) =>
        prevCandidates?.filter((candidate) => candidate._id !== id) || null
      );
      alert('Candidate deleted successfully');
    } catch (error) {
      alert('Failed to delete candidate');
      console.error(error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Candidates</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add New Candidate
        </button>
      </div>

      {loading && (
        <div className="flex justify-center items-center h-screen">
          <LoaderPinwheel className="animate-spin w-7 h-7" />
        </div>
      )}
      {error && <div className="text-red-500">{error}</div>}

      {!loading && !candidates?.length && (
        <div className="text-gray-500 text-center mt-8">
          No candidates available. Click &quot; Add New Candidate &quot; to get started!
        </div>
      )}

      {candidates && candidates.length > 0 && (
        <div className="grid grid-cols-1 gap-4">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="border rounded-lg p-4 flex flex-col sm:flex-row justify-between items-center"
            >
              <div className="flex items-center space-x-4">
              <div className="w-16 h-16 relative rounded-full overflow-hidden">
                  <Image
                    src={candidate.image!}
                    alt={candidate.name}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{candidate.name}</h3>
                  <p className="text-gray-600">{candidate.party || 'Independent'}</p>
                  <p className="text-sm text-gray-500">{candidate.institution || 'No Institution Provided'}</p>
                  <p className="text-gray-700 mt-1">{candidate.biography}</p>
                </div>
              </div>
              <div className="space-x-2 mt-4 sm:mt-0">
                <button
                  onClick={() => handleEdit(candidate)}
                  className="bg-gray-100 px-3 py-1 rounded-md hover:bg-gray-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(candidate.id)}
                  className="bg-red-100 px-3 py-1 rounded-md text-red-600 hover:bg-red-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <CandidateModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingCandidate(null);
        }}
        candidate={editingCandidate}
      />
    </div>
  );
}
