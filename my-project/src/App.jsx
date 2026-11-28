import React, { useState } from "react";
import {
  LayoutDashboard, Users, Bell, Mail, Settings,
  Monitor, Search, ChevronDown, Plus, Eye, Pencil,
  Folder, CircleHelp, Copy, Menu, X
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from "recharts";

import "./App.css";

const visitors = [
  {
    date: "Oct 13, 2023",
    name: "Albert Flores",
    id: "553154964",
    time: "12.00-12.50pm",
    status: "Expected",
    initials: "AF"
  },
  {
    date: "Oct 20, 2023",
    name: "Brooklyn Simmons",
    id: "978113161",
    time: "12.00-12.50pm",
    status: "Visited",
    initials: "BS"
  },
  {
    date: "Oct 28, 2023",
    name: "Theresa Webb",
    id: "856974521",
    time: "12.00-12.50pm",
    status: "Action Done",
    initials: "TW"
  }
];

const chartData = [
  { month: "Jul 10", visitors: 360 },
  { month: "Aug 14", visitors: 580 },
  { month: "Sep 20", visitors: 556 },
  { month: "Oct 24", visitors: 945 },
  { month: "Nov 30", visitors: 456 }
];

function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const menu = [
    [LayoutDashboard, "Dashboard"],
    [Users, "Visitors"],
    [Bell, "Notifications"],
    [Mail, "Message"],
    [Users, "Manage Visitors"],
    [Monitor, "Devices"],
    [Settings, "Settings"]
  ];

  return (
    <aside className="sidebar">
      <h2 className="logo">Visit<span>X</span></h2>

      <nav>
        {menu.map(([Icon, name]) => (
          <button
            key={name}
            className={`nav-item ${
              active === name ? "active" : ""
            }`}
            onClick={() => setActive(name)}
          >
            <Icon size={18} />
            {name}
            {name === "Visitors" && <ChevronDown size={14} />}
          </button>
        ))}
      </nav>

      <div className="help-card">
        <CircleHelp size={35} />
        <h3>Help Centre</h3>
        <p>
          Getting trouble on VisitX?
          Consult and solve your problem.
        </p>
        <button>Consult Now</button>
      </div>
    </aside>
  );
}

function Header() {
  return (
    <header className="header">
      <div>
        <h2>Good Morning, Rupali 👋</h2>
        <p>Manage your visitors with VisitX</p>
      </div>

      <div className="search-box">
        <Search size={18} />
        <input placeholder="Search Anything ..." />
      </div>

      <div className="header-right">
        <span>English</span>
        <Bell size={20} />
        <div className="profile">
          <div className="profile-img">KR</div>
          <div>
            <b>Karan R</b>
            <small>Admin</small>
          </div>
          <ChevronDown size={15} />
        </div>
      </div>
    </header>
  );
}

function StatCard({ trend, title, value, color }) {
  return (
    <div className="stat-card">
      <span className={`trend ${color}`}>
        {trend}
      </span>

      <p>{title}</p>

      <div className="stat-bottom">
        <h2>{value}</h2>

        <div className={`bars ${color}`}>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </div>
  );
}

function Statistics() {
  return (
    <div className="stats-grid">
      <StatCard
        trend="2% up"
        title="Today Visitors In"
        value="120"
        color="purple"
      />

      <StatCard
        trend="1% down"
        title="Today Visitors Out"
        value="88"
        color="red"
      />

      <StatCard
        trend="3% up"
        title="Today Visitors Current"
        value="120"
        color="green"
      />

      <StatCard
        trend="3% down"
        title="Monthly Visitor Counts"
        value="120"
        color="orange"
      />
    </div>
  );
}

function VisitorChart() {
  return (
    <div className="card chart-card">
      <div className="card-header">
        <h3>Statistics (Total Visitor)</h3>

        <select>
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Yearly</option>
        </select>
      </div>

      <div className="chart-values">
        <div>
          <span>Jul 10</span>
          <h2>360k</h2>
        </div>

        <div className="selected">
          <span>Aug 14</span>
          <h2>580k</h2>
          <small>Details →</small>
        </div>

        <div>
          <span>Sep 20</span>
          <h2>5.56K</h2>
        </div>

        <div>
          <span>Oct 24</span>
          <h2>9.45K</h2>
        </div>

        <div>
          <span>Nov 30</span>
          <h2>456k</h2>
        </div>
      </div>

      <div className="area-chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient
                id="purpleGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#8050dc"
                  stopOpacity={0.5}
                />
                <stop
                  offset="100%"
                  stopColor="#8050dc"
                  stopOpacity={0.05}
                />
              </linearGradient>
            </defs>

            <XAxis dataKey="month" hide />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="visitors"
              stroke="#8050dc"
              fill="url(#purpleGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function ExpectedVisitors() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(visitors);

  const addVisitor = () => {
    const name = prompt("Enter visitor name");

    if (!name) return;

    setData([
      ...data,
      {
        date: new Date().toLocaleDateString(),
        name,
        id: String(Date.now()).slice(-9),
        time: "03.00-03.50pm",
        status: "Expected",
        initials: name.slice(0, 2).toUpperCase()
      }
    ]);
  };

  const filtered = data.filter((visitor) =>
    visitor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card visitor-table">
      <div className="card-header">
        <h3>Expected Visitors</h3>
        <select>
          <option>Monthly</option>
          <option>Weekly</option>
        </select>
      </div>

      <div className="table-controls">
        <div className="table-search">
          <Search size={15} />
          <input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button className="add-btn" onClick={addVisitor}>
          <Plus size={16} />
          Add Visitor
        </button>
      </div>

      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Customer Name</th>
              <th>Appointment ID</th>
              <th>Check In/Out</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((visitor) => (
              <tr key={visitor.id}>
                <td>{visitor.date}</td>

                <td>
                  <div className="customer">
                    <span className="avatar">
                      {visitor.initials}
                    </span>
                    {visitor.name}
                  </div>
                </td>

                <td>{visitor.id}</td>
                <td>{visitor.time}</td>

                <td>
                  <span
                    className={`status ${visitor.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {visitor.status}
                  </span>
                </td>

                <td>
                  <div className="actions">
                    <button title="View">
                      <Eye size={15} />
                    </button>

                    <button title="Edit">
                      <Pencil size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function RightSection() {
  const pieData = [
    { name: "Companies receptionist", value: 1300, color: "#27c78c" },
    { name: "HR", value: 530, color: "#f4ad35" },
    { name: "Admins", value: 2100, color: "#8050dc" }
  ];

  return (
    <div className="right-section">

      <div className="card social-card">
        <div className="subscribe">
          <input placeholder="E-mail" />
          <button>Subscribe</button>
        </div>

        <p className="muted">Follow your statistics.</p>

        <div className="file-box">
          <Folder size={22} />
          <div>
            <b>Social Media stuff</b>
            <small>152 files</small>
          </div>
          <span>15 min ago</span>
        </div>
      </div>

      <div className="card issued-card">
        <div className="card-header">
          <h3>Passed Issued By Time</h3>
          <select>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>

        <div className="pie-container">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                innerRadius="65%"
                outerRadius="90%"
                paddingAngle={2}
              >
                {pieData.map((item, index) => (
                  <Cell
                    key={index}
                    fill={item.color}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="pie-label">
            <h3>+78%</h3>
            <span>increased<br />this month</span>
          </div>
        </div>

        <div className="legend">
          {pieData.map((item) => (
            <div key={item.name}>
              <span style={{ background: item.color }}></span>
              {item.name}
              <b>{item.value}</b>
            </div>
          ))}
        </div>
      </div>

      <div className="card invite-card">
        <h2>Invite a Friend</h2>

        <div className="invite-code">
          <span>HKP1098HU05TH12</span>
          <button
            onClick={() =>
              navigator.clipboard?.writeText("HKP1098HU05TH12")
            }
          >
            <Copy size={13} />
            Copy
          </button>
        </div>

        <div className="social-links">
          <span>f</span>
          <span>in</span>
          <span>◎</span>
        </div>
      </div>

    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main">
        <Header />

        <div className="dashboard-grid">
          <div className="left-section">
            <Statistics />
            <VisitorChart />
            <ExpectedVisitors />
          </div>

          <RightSection />
        </div>
      </main>
    </div>
  );
}