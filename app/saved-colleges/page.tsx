import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import Link from "next/link";

export default async function SavedCollegesPage() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) {
    return (
      <div className="p-6">
        Please login first.
      </div>
    );
  }

  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET!
  ) as {
    userId: string;
    email: string;
  };

  const savedColleges = await prisma.savedCollege.findMany({
    where: {
      userId: decoded.userId,
    },
    include: {
      college: true,
    },
  });

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Saved Colleges
      </h1>

      {savedColleges.length === 0 ? (
        <p>No saved colleges yet.</p>
      ) : (
        <div className="grid gap-4">
          {savedColleges.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow"
            >
              <Link
                href={`/colleges/${item.college.id}`}
              >
                <h2 className="text-xl font-semibold text-blue-600 hover:underline">
                  {item.college.name}
                </h2>
              </Link>

              <p>{item.college.location}</p>

              <p>
                Fees: ₹{item.college.fees}
              </p>

              <p>
                Rating: {item.college.rating}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}