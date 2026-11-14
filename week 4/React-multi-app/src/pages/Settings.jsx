import { useTheme } from "../context/ThemeContext";

export default function Settings() {
  const { dark, toggleTheme } = useTheme();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Application Settings</h2>

      <div className="max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow space-y-4">
        <div>
          <h3 className="font-medium text-lg mb-2">Theme Preferences</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            Toggle between light and dark themes using Context API.
          </p>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Switch to {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </div>
  );
}
