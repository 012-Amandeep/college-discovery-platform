"use client";

import Link from "next/link";
import { useState } from "react";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  overview: string;
};

type Props = {
  college: College;
  isSaved: boolean;
};

export default function CollegeCard({
  college,
  isSaved,
}: Props) {
  const [saved, setSaved] = useState(isSaved);
  const [loading, setLoading] = useState(false);

  async function handleToggleSave() {
    try {
      setLoading(true);

      const endpoint = saved
        ? "/api/unsave-college"
        : "/api/save-college";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          collegeId: college.id,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSaved(!saved);
      }

      alert(data.message);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="border rounded-lg p-4 shadow">
      <Link href={`/colleges/${college.id}`}>
        <h2 className="text-xl font-semibold text-blue-600 hover:underline">
          {college.name}
        </h2>
      </Link>

      <p>{college.location}</p>

      <p>Fees: ₹{college.fees}</p>

      <p>Rating: {college.rating}</p>

      <p>{college.overview}</p>

      <button
        onClick={handleToggleSave}
        disabled={loading}
        className={`mt-3 px-4 py-2 rounded text-white ${
          saved
            ? "bg-red-600 hover:bg-red-700"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading
          ? "Please wait..."
          : saved
          ? "Unsave College"
          : "Save College"}
      </button>
    </div>
  );
}