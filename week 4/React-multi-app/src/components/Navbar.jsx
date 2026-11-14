import { useTheme } from "../context/ThemeContext";

export default function Navbar({ onToggleSidebar }) {
  const { dark, toggleTheme } = useTheme();

  return (
    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="flex items-center gap-3">
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="md:hidden px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            aria-label="Toggle Sidebar"
          >
            ☰
          </button>
        )}
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
