"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type College = {
  id: string;
  name: string;
};

export default function CompareForm({
  colleges,
}: {
  colleges: College[];
}) {
  const router = useRouter();

  const [college1, setCollege1] = useState("");
  const [college2, setCollege2] = useState("");

  const handleCompare = () => {
    if (!college1 || !college2) return;

    router.push(
      `/compare?college1=${college1}&college2=${college2}`
    );
  };

  return (
    <div className="space-y-4">
      <select
        className="border p-2 rounded w-full"
        value={college1}
        onChange={(e) => setCollege1(e.target.value)}
      >
        <option value="">Select College 1</option>

        {colleges.map((college) => (
          <option
            key={college.id}
            value={college.id}
          >
            {college.name}
          </option>
        ))}
      </select>

      <select
        className="border p-2 rounded w-full"
        value={college2}
        onChange={(e) => setCollege2(e.target.value)}
      >
        <option value="">Select College 2</option>

        {colleges.map((college) => (
          <option
            key={college.id}
            value={college.id}
          >
            {college.name}
          </option>
        ))}
      </select>

      <button
        onClick={handleCompare}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Compare
      </button>
    </div>
  );
}