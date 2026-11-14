// Day 4 Notes Page 6 - Task 1: Build an Interactive Card + Button + Input
export default function Day4InteractiveCard() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Day 4: Interactive Card & Tailwind UI</h2>

      <div className="max-w-sm p-4 rounded-xl shadow-md bg-white dark:bg-gray-800 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-xl font-semibold">React Training</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Learn React with hands-on examples and real projects.
        </p>
        <input
          placeholder="Enter your email"
          className="mt-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-full"
        />
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Read More
        </button>
      </div>
    </div>
  );
}
