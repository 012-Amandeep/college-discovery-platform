"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  MapPin,
  Star,
  IndianRupee,
} from "lucide-react";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  overview: string;
  imageUrl: string | null;
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
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      
      {/* College Image */}
      <div className="relative h-56 w-full">
        <Image
          src={
            college.imageUrl ||
            "https://images.unsplash.com/photo-1562774053-701939374585?w=1200"
          }
          alt={college.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start">
          <Link href={`/colleges/${college.id}`}>
            <h2 className="text-2xl font-bold text-blue-700 hover:underline">
              {college.name}
            </h2>
          </Link>

          <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full flex items-center gap-1">
            <Star size={16} />
            {college.rating}
          </div>
        </div>

        <div className="flex items-center gap-2 mt-3 text-gray-600">
          <MapPin size={18} />
          <span>{college.location}</span>
        </div>

        <div className="flex items-center gap-2 mt-2 text-green-700 font-semibold">
          <IndianRupee size={18} />
          <span>{college.fees.toLocaleString()}</span>
        </div>

        <p className="mt-4 text-gray-600">
          {college.overview}
        </p>

        <button
          onClick={handleToggleSave}
          disabled={loading}
          className={`mt-5 w-full py-3 rounded-lg text-white font-medium transition ${
            saved
              ? "bg-red-600 hover:bg-red-700"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading
            ? "Please wait..."
            : saved
            ? "❤️ Saved (Click to Unsave)"
            : "🤍 Save College"}
        </button>
      </div>
    </div>
  );
}