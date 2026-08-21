import { prisma } from "@/lib/prisma";
import Link from "next/link";
import CollegeCard from "@/components/CollegeCard";

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
            />
        ))}
      </div>
    </div>
  );
}