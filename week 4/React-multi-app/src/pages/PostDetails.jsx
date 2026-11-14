import { useParams, Link } from "react-router-dom";

export default function PostDetails() {
  const { postId } = useParams();

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow max-w-xl">
      <h2 className="text-2xl font-bold mb-2">Post Details</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        Post ID: <span className="font-semibold text-blue-600">{postId}</span>
      </p>

      <div className="flex gap-2">
        <Link to="/post/10" className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">
          Post 10
        </Link>
        <Link to="/post/55" className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">
          Post 55
        </Link>
        <Link to="/post/101" className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">
          Post 101
        </Link>
      </div>
    </div>
  );
}
