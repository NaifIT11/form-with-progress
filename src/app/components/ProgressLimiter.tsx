import React from 'react';

type ProgressLimiterProps = {
  value: number; 
};

export default function ProgressLimiter({ value }: ProgressLimiterProps) {
  const clampedValue = Math.max(0, Math.min(100, value));
  

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (circumference * (clampedValue / 100));

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clampedValue}
      className="w-5 h-5"
    >
      <svg width="100" height="100" viewBox="0 0 100 100" className="w-11 h-11">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="5"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="black"
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
        />
      </svg>
    </div>
  );
}
