import { prisma } from "@/lib/prisma";
import Link from "next/link";
import CollegeCard from "@/components/CollegeCard";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

type Props = {
  searchParams: Promise<{
    search?: string;
  }>;
};

export default async function CollegesPage({
  searchParams,
}: Props) {
  const params = await searchParams;
  const search = params.search || "";

  const colleges = await prisma.college.findMany({
    select: {
      id: true,
      name: true,
      location: true,
      fees: true,
      rating: true,
      overview: true,
      imageUrl: true,
    },
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },
    },
    orderBy: {
      rating: "desc",
    },
  });

  let savedCollegeIds: string[] = [];

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (token) {
    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET!
      ) as {
        userId: string;
      };

      const saved = await prisma.savedCollege.findMany({
        where: {
          userId: decoded.userId,
        },
        select: {
          collegeId: true,
        },
      });

      savedCollegeIds = saved.map(
        (item) => item.collegeId
      );
    } catch {
      // invalid token -> ignore
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mb-4">
        <a
          href="/compare"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Compare Colleges
        </a>
      </div>

      <form>
        <input
          type="text"
          name="search"
          defaultValue={search}
          placeholder="Search colleges..."
          className="border p-2 rounded w-full mb-4"
        />
      </form>

      <div className="grid gap-4">
        {colleges.map((college) => (
          <CollegeCard
            key={college.id}
            college={college}
            isSaved={savedCollegeIds.includes(college.id)}
          />
        ))}
      </div>
    </div>
  );
}