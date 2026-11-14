export default function Card({ title, value }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition">
      <h2 className="text-gray-600 dark:text-gray-300 text-sm">{title}</h2>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
