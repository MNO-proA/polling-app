// components/AgeDistribution.tsx
"use client";

import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { calculateAgeDistribution } from '@/lib/analytics';
import { Vote } from '@/types';

Chart.register(...registerables);

interface AgeDistributionProps {
  votes: Vote[];
}

export function AgeDistribution({ votes }: AgeDistributionProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ageData = calculateAgeDistribution(votes);

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ageData.map(d => d.range),
        datasets: [{
          label: 'Voters',
          data: ageData.map(d => d.count),
          backgroundColor: 'rgba(54, 162, 235, 0.8)',
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1
            }
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [votes]);

  return <canvas ref={chartRef} />;
}