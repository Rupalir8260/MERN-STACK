import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="sidebar-backdrop"
          onClick={onClose}
        />
      )}
      <div
        className={`w-64 bg-gray-900 text-white p-6 ${
          isOpen ? "sidebar-mobile-open" : "hidden md:block"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
          {onClose && (
            <button onClick={onClose} className="md:hidden text-gray-400 text-lg">
              ✕
            </button>
          )}
        </div>

        <nav className="flex flex-col gap-4">
          <Link to="/" onClick={onClose} className="hover:text-blue-400">
            Dashboard
          </Link>
          <Link to="/users" onClick={onClose} className="hover:text-blue-400">
            Users
          </Link>
          <Link to="/reports" onClick={onClose} className="hover:text-blue-400">
            Reports
          </Link>
          <Link to="/settings" onClick={onClose} className="hover:text-blue-400">
            Settings
          </Link>

          <div className="sidebar-divider">
            <p className="sidebar-subheading">Week 4 Demos</p>
            <div className="flex flex-col gap-3">
              <Link to="/home" onClick={onClose} className="hover:text-blue-400 text-sm">
                Day 1 - Home
              </Link>
              <Link to="/about" onClick={onClose} className="hover:text-blue-400 text-sm">
                Day 1 - About
              </Link>
              <Link to="/contact" onClick={onClose} className="hover:text-blue-400 text-sm">
                Day 1 - Contact
              </Link>
              <Link to="/post/101" onClick={onClose} className="hover:text-blue-400 text-sm">
                Day 1 - Dynamic Post
              </Link>
              <Link to="/day4-card" onClick={onClose} className="hover:text-blue-400 text-sm">
                Day 4 - Interactive Card
              </Link>
              <Link to="/day5-memo" onClick={onClose} className="hover:text-blue-400 text-sm">
                Day 5 - React.memo Timer
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
