"use client";

import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Candidate, Vote } from "@/types";

Chart.register(...registerables, ChartDataLabels);

interface BarChartProps {
  votes: Vote[];
  candidates: Candidate[];
}

export function BarChart({ votes, candidates }: BarChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const voteCounts = candidates.map(candidate => {
      const candidateVotes = votes
        .filter(vote => vote.candidateId === candidate._id)
        .reduce((sum, vote) => sum + vote.votes, 0);

      return { name: candidate.name, votes: candidateVotes };
    });

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: voteCounts.map(v => v.name),
        datasets: [
          {
            label: "Votes",
            data: voteCounts.map(v => v.votes),
            backgroundColor: "rgba(29, 78, 216, 1)", // Deepened Tailwind bg-blue-900
            borderColor: "rgba(29, 78, 216, 1)", 
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        indexAxis: "y", // Orient bars horizontally
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
          },
          datalabels: {
            color: "white", // Set label color to white
            anchor: "end",
            align: "right",
            formatter: value => `${value}`, // Format vote count
          },
        },
        scales: {
          x: {
            beginAtZero: true,
          },
        },
        animation: {
          duration: 1000,
          easing: "easeOutBounce",
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [votes, candidates]);

  return <canvas ref={chartRef} />;
}
