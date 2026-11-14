import Card from "../components/Card";

export default function Dashboard() {
  const stats = [
    { title: "Total Users", value: "1,250" },
    { title: "Orders Today", value: "78" },
    { title: "Revenue", value: "$8,900" },
    { title: "Pending Reports", value: "14" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Analytics Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <Card key={i} title={s.title} value={s.value} />
        ))}
      </div>

      <div className="mt-10 h-48 bg-blue-300 dark:bg-blue-800 rounded-lg flex items-center justify-center">
        <p className="font-bold text-gray-800 dark:text-gray-100">Chart Placeholder</p>
      </div>
    </div>
  );
}
