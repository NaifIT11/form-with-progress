"use client";

import { useState } from "react";
import ProgressLimiter from "./ProgressLimiter";

export default function Form() {
  const [feedbackValue, setFeedbackValue] = useState<string>("");
  const [progressValue, setProgressValue] = useState<number>(0);
  const handleFeedbackChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const feedbackValue = e.currentTarget.value;
    setFeedbackValue(feedbackValue)
    setProgressValue(feedbackValue.length);
  };
  return (
    <div className="border p-4 rounded w-full">
      <div className="space-y-2">
        <h1 className="text-xl">Form</h1>
        <p className="text-sm">Send feedback 100 letter required or less</p>
      </div>
      <form className="mt-2 flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2">
         <label htmlFor="feedback">Feedback:</label>
          <textarea
            value={feedbackValue}
            onChange={handleFeedbackChange}
            maxLength={100}
            placeholder="Enter a value (0-100)"
            rows={4}
            cols={30}
            id="feedback"
            disabled={feedbackValue.length > 100}
            className="w-full disabled:outline-red-300 disabled:cursor-not-allowed resize-none outline-none ring-black rounded-md border ring-0 focus-visible:ring-2 focus-visible:ring-ring p-3 text-sm"
          />
        </div>
        <div className="flex gap-2 self-end">
            <ProgressLimiter value={progressValue} />
            <button disabled={feedbackValue.length > 100} type="submit" className="px-4 py-2 disabled:bg-gray-200 disabled:cursor-not-allowed  disabled:cursor-not-allowed rounded bg-black text-white font-bold">submit</button>
        </div>
      </form>
    </div>
  );
}
