import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto text-center py-20 px-6">
      <h1 className="text-5xl font-bold mb-6">
        College Discovery Platform
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Discover, compare and save colleges in one place.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          href="/colleges"
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Browse Colleges
        </Link>

        <Link
          href="/compare"
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          Compare Colleges
        </Link>
      </div>
    </div>
  );
}