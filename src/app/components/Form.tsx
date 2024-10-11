"use client";

import { useState } from "react";

export default function Form() {
  const [feedbackValue, setFeedbackValue] = useState("");
  const [progressValue, setProgressValue] = useState();
  const handleFeedbackChange = (e: React.FormEvent<HTMLTextAreaElement>) => {};
  return (
    <div className="border p-4 rounded w-full">
      <div className="space-y-2">
        <h1 className="text-xl">Form</h1>
        <p className="text-sm">Send feedback 100 letter required or less</p>
      </div>
      <form className="mt-2 space-y-4 w-full">
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
            className="w-full resize-none outline-none ring-black rounded-md border ring-0 focus-visible:ring-2 focus-visible:ring-ring p-3 text-sm"
          />
        </div>
      </form>
    </div>
  );
}
