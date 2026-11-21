import { Link } from "react-router";

export function meta() {
  return [{ title: "Page Not Found | Lush Sleutsky" }, { name: "robots", content: "noindex" }];
}

export default function NotFoundPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 border-b border-indigo-500/20 pb-4 text-sm">
          <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
            <span>
              STATUS: <span className="text-red-400">404</span>
            </span>
          </div>
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mb-8 text-lg text-gray-400">
          There is nothing at this address. Head back to the home page to find what you need.
        </p>
        <Link
          className="inline-block rounded-lg bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/25"
          to="/"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
