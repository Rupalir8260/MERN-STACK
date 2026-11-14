export default function Reports() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Reports Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-2">Monthly Sales Report</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Summary of transactions and revenue generated.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-2">User Growth Analytics</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Monthly acquisition and retention statistics.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-2">System Performance</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Uptime, API latency, and server utilization logs.</p>
        </div>
      </div>
    </div>
  );
}
