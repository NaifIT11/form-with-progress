"use client";

import { useState } from "react";
import ProgressLimiter from "./ProgressLimiter";

export default function Form() {
  const [feedbackValue, setFeedbackValue] = useState<string>("");
  const [progressValue, setProgressValue] = useState<number>(0);

  const handleFeedbackChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const newFeedbackValue = e.currentTarget.value;
    setFeedbackValue(newFeedbackValue);
    setProgressValue(newFeedbackValue.length);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFontElement>) => {
    e.preventDefault();
    console.log({feedback: feedbackValue})
  }
  return (
    <div className="border p-4 rounded w-full">
      <div className="space-y-2">
        <h1 className="text-xl">Form</h1>
        <p className="text-sm">Send feedback 100 letters required or less</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            value={feedbackValue}
            onChange={handleFeedbackChange}
            placeholder="Enter a value (0-100)"
            rows={4}
            cols={30}
            id="feedback"
            className="w-full border resize-none ring-0 outline-none ring-black ring-0 focus-visible:ring-2 focus-visible:ring-ring rounded-md p-3 text-sm"
          />
        </div>
        <div className="flex gap-2 self-end">
          <ProgressLimiter value={progressValue} />
          <button
            disabled={feedbackValue.length === 0 || feedbackValue.length > 100}
            type="submit"
            className="px-4 py-2 rounded bg-black text-white font-bold disabled:bg-gray-200 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
