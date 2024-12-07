"use client";

import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { calculateHourlyVotes } from "@/lib/analytics";
import { Vote } from "@/types";

Chart.register(...registerables);

interface HourlyVotesProps {
  votes: Vote[];
}

export function HourlyVotes({ votes }: HourlyVotesProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const hourlyData = calculateHourlyVotes(votes);

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: hourlyData.map((d) => `${d.hour}:00`),
        datasets: [
          {
            label: "Votes",
            data: hourlyData.map((d) => d.votes),
            borderColor: "rgba(30, 64, 175, 1)", // Dark blue line (Tailwind bg-blue-900)
            tension: 0.4,
            fill: true,
            backgroundColor: "rgba(30, 64, 175, 0.2)", // Lighter blue for filled area
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [votes]);

  return <canvas ref={chartRef} />;
}
