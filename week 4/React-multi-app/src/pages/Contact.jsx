export default function Contact() {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow max-w-xl">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-2">Email: abc@xyz.com</p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Phone: +91 89032 32348</p>

      {/* Day 4 Focus Styling on Input from Notes */}
      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">Send a Message</label>
        <input
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-full"
          placeholder="Enter text..."
        />
        <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Submit
        </button>
      </div>
    </div>
  );
}
