'use client';

import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import { LoaderPinwheel } from 'lucide-react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

interface Vote {
  timestamp: string;
}

export default function Income() {
  const [votes, setVotes] = useState<Vote[] | null>(null);
  const [timeframe, setTimeframe] = useState('daily'); // daily, weekly, monthly

  // Dummy data
  useEffect(() => {
    setVotes([
      { timestamp: '2024-12-01T10:00:00Z' },
      { timestamp: '2024-12-01T12:00:00Z' },
      { timestamp: '2024-12-02T14:00:00Z' },
      { timestamp: '2024-12-03T16:00:00Z' },
      { timestamp: '2024-12-03T18:00:00Z' },
      { timestamp: '2024-12-03T20:00:00Z' },
      { timestamp: '2024-12-04T10:00:00Z' },
    ]);
  }, []);

  const calculateIncome = () => {
    if (!votes) return { total: 0, labels: [], datasets: [] };

    const votesByDate = votes.reduce((acc: { [key: string]: number }, vote: Vote) => {
      const date = new Date(vote.timestamp);
      const key =
        timeframe === 'daily'
          ? date.toISOString().split('T')[0]
          : timeframe === 'weekly'
          ? `Week ${Math.ceil(date.getDate() / 7)} - ${date.toLocaleString('default', { month: 'short' })}`
          : date.toLocaleString('default', { month: 'long' });

      acc[key] = (acc[key] || 0) + 5; // $5 per vote
      return acc;
    }, {});

    const labels = Object.keys(votesByDate);
    const data = Object.values(votesByDate);

    const total = data.reduce((sum, income) => sum + income, 0);

    return {
      total,
      chartData: {
        labels,
        datasets: [
          {
            label: 'Income ($)',
            data,
            backgroundColor: 'rgba(29, 78, 216, 0.2)', // Blue background
            borderColor: 'rgba(29, 78, 216, 1)', // Blue line
            borderWidth: 2,
            tension: 0.4, // Smooth curves
            fill: true,
          },
        ],
      },
    };
  };

  const { total, chartData } = calculateIncome();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Income Dashboard</h1>
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="border rounded-md p-2"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Total Income</h2>
        <p className="text-3xl font-bold text-blue-900">${total}</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Income Chart</h2>
        {chartData?.labels?.length ? (
          <Line
            data={chartData}
            options={{
              responsive: true,
              animation: {
                duration: 1000,
                easing: 'easeInOutQuad',
              },
              plugins: {
                tooltip: {
                  enabled: true,
                },
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Date',
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'Income ($)',
                  },
                },
              },
            }}
          />
        ) : (
          <div className="flex justify-center items-center h-64">
            <LoaderPinwheel className="animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
}
