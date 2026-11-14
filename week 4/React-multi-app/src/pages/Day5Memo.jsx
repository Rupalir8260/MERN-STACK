import React, { useState, useEffect } from "react";

// Child component using React.memo (Day 5 Notes Page 2-3)
const Score = React.memo(function Score({ value }) {
  console.log("Score component rendered!");
  return (
    <div className="mt-4 p-4 border border-green-500 rounded-lg bg-green-50 dark:bg-green-950/30">
      <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">
        Score: {value}
      </h3>
      <p className="text-xs text-gray-500 mt-1">
        Wrapped in <code>React.memo</code> — does NOT re-render when Time updates!
      </p>
    </div>
  );
});

export default function Day5Memo() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((prev) => prev + 1);
      console.log("Time updated!");
    }, 2000);

    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Day 5: React.memo & Performance</h2>

      <div className="max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow space-y-4">
        <h2 className="text-xl font-bold">Time: {time}</h2>
        <Score value={100} />
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Open browser console (F12) to observe: &quot;Time updated!&quot; logs every 2 seconds, but &quot;Score component rendered!&quot; logs only once.
        </p>
      </div>
    </div>
  );
}
