"use client";

import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { calculateVotePercentages } from "@/lib/analytics";
import { Vote, Candidate } from "@/types";
import ChartDataLabels from "chartjs-plugin-datalabels";


Chart.register(...registerables, ChartDataLabels);

interface VoteChartProps {
  votes: Vote[];
  candidates: Candidate[];
}

export function VoteChart({ votes, candidates }: VoteChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const voteData = calculateVotePercentages(votes, candidates);

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: voteData.map((d) => d.name),
        datasets: [
          {
            data: voteData.map((d) => d.percentage),
            backgroundColor: [
              "rgba(30, 64, 175, 0.8)", // Tailwind bg-blue-900
              "rgba(59, 130, 246, 0.8)", // Tailwind bg-blue-700
              "rgba(99, 102, 241, 0.8)", // Tailwind bg-indigo-500
              "rgba(45, 212, 191, 0.8)", // Tailwind bg-teal-400
              "rgba(156, 163, 175, 0.8)", // Tailwind bg-gray-500
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
          datalabels: {
            color: "#fff", // Text color
            font: {
              weight: "bold",
              size: 12,
            },
            formatter: (value: number) => `${value.toFixed(1)}%`, // Show percentage
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [votes, candidates]);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Adjust the container size */}
      <canvas ref={chartRef} className="w-full h-auto" />
    </div>
  );
}
