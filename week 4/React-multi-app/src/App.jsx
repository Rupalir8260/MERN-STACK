import { useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

// Lazy loading per Day 5 Notes
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Users = lazy(() => import("./pages/Users"));
const Reports = lazy(() => import("./pages/Reports"));
const Settings = lazy(() => import("./pages/Settings"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PostDetails = lazy(() => import("./pages/PostDetails"));
const Day4InteractiveCard = lazy(() => import("./pages/Day4InteractiveCard"));
const Day5Memo = lazy(() => import("./pages/Day5Memo"));

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex min-h-screen">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

          <div className="flex-1 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col">
            <Navbar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />

            <div className="p-6 flex-1">
              <Suspense fallback={<h2 className="p-4 text-center">Loading...</h2>}>
                <Routes>
                  {/* Day 6 & 7 Mini Project Admin Dashboard */}
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/settings" element={<Settings />} />

                  {/* Day 1 Multi-Page Routing */}
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/post/:postId" element={<PostDetails />} />

                  {/* Day 4 & Day 5 Tasks */}
                  <Route path="/day4-card" element={<Day4InteractiveCard />} />
                  <Route path="/day5-memo" element={<Day5Memo />} />

                  {/* Day 1 Catch-All Route */}
                  <Route
                    path="*"
                    element={
                      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow max-w-md">
                        <h2 className="text-2xl font-bold text-red-500 mb-2">404 Page Not Found</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                          The requested route does not exist.
                        </p>
                      </div>
                    }
                  />
                </Routes>
              </Suspense>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
