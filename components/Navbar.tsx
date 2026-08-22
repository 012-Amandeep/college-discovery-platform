import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export default async function Navbar() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  let isLoggedIn = false;

  if (token) {
    try {
      jwt.verify(
        token,
        process.env.JWT_SECRET!
      );

      isLoggedIn = true;
    } catch {
      isLoggedIn = false;
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-blue-700 font-bold text-xl"
        >
          <GraduationCap size={28} />
          <span>CollegeFinder</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            href="/colleges"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Colleges
          </Link>

          <Link
            href="/compare"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Compare
          </Link>

          <Link
            href="/saved-colleges"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Saved
          </Link>
        </div>

        <div className="flex gap-3">
          {isLoggedIn ? (
            <form action="/api/logout" method="POST">
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
              >
                Logout
              </button>
            </form>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}