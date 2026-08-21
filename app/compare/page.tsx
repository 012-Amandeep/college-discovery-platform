import { prisma } from "@/lib/prisma";
import CompareForm from "@/components/CompareForm";

const allColleges = await prisma.college.findMany({
  select: {
    id: true,
    name: true,
  },
  orderBy: {
    name: "asc",
  },
});

type Props = {
  searchParams: Promise<{
    college1?: string;
    college2?: string;
  }>;
};

export default async function ComparePage({
  searchParams,
}: Props) {
  const params = await searchParams;

if (!params.college1 || !params.college2) {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Compare Colleges
      </h1>

      <CompareForm colleges={allColleges} />
    </div>
  );
}

  const college1 = await prisma.college.findUnique({
    where: {
      id: params.college1,
    },
  });

  const college2 = await prisma.college.findUnique({
    where: {
      id: params.college2,
    },
  });

  if (!college1 || !college2) {
    return <div>College not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        College Comparison
      </h1>

      <table className="w-full border">
        <tbody>
          <tr>
            <td className="border p-3 font-bold">
              Name
            </td>

            <td className="border p-3">
              {college1.name}
            </td>

            <td className="border p-3">
              {college2.name}
            </td>
          </tr>

          <tr>
            <td className="border p-3 font-bold">
              Location
            </td>

            <td className="border p-3">
              {college1.location}
            </td>

            <td className="border p-3">
              {college2.location}
            </td>
          </tr>

          <tr>
            <td className="border p-3 font-bold">
              Fees
            </td>

            <td className="border p-3">
              ₹{college1.fees}
            </td>

            <td className="border p-3">
              ₹{college2.fees}
            </td>
          </tr>

          <tr>
            <td className="border p-3 font-bold">
              Rating
            </td>

            <td className="border p-3">
              {college1.rating}
            </td>

            <td className="border p-3">
              {college2.rating}
            </td>
          </tr>

          <tr>
            <td className="border p-3 font-bold">
              Placements
            </td>

            <td className="border p-3">
              {college1.placements}
            </td>

            <td className="border p-3">
              {college2.placements}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}