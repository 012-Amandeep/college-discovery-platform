import Link from "next/link";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  overview: string;
};

export default function CollegeCard({
  college,
}: {
  college: College;
}) {
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
    </div>
  );
}