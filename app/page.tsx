import Link from "next/link";
import {
  GraduationCap,
  Search,
  Heart,
  BarChart3,
} from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <GraduationCap size={18} />
              <span>College Discovery Platform</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Find Your
              <span className="block text-yellow-300">
                Dream College
              </span>
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              Discover colleges, compare fees and placements,
              and save your favourites — all in one place.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/colleges"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
              >
                Explore Colleges
              </Link>

              <Link
                href="/compare"
                className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
              >
                Compare Colleges
              </Link>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl hover:scale-105 transition duration-300">
              <GraduationCap size={180} />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Use CollegeFinder?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <Search
              size={48}
              className="mx-auto text-blue-600 mb-4"
            />

            <h3 className="text-xl font-semibold mb-2">
              Discover Colleges
            </h3>

            <p className="text-gray-600">
              Browse colleges with detailed information,
              ratings and fee structure.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <BarChart3
              size={48}
              className="mx-auto text-green-600 mb-4"
            />

            <h3 className="text-xl font-semibold mb-2">
              Compare Colleges
            </h3>

            <p className="text-gray-600">
              Compare multiple colleges side-by-side
              and make informed decisions.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <Heart
              size={48}
              className="mx-auto text-red-500 mb-4"
            />

            <h3 className="text-xl font-semibold mb-2">
              Save Favourites
            </h3>

            <p className="text-gray-600">
              Save colleges you're interested in and
              access them anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-600">
              500+
            </h3>
            <p className="text-gray-600 mt-2">
              Colleges
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-600">
              10K+
            </h3>
            <p className="text-gray-600 mt-2">
              Students
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-indigo-600">
              95%
            </h3>
            <p className="text-gray-600 mt-2">
              Placement Insights
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold">
                CollegeFinder
              </h3>

              <p className="text-gray-400 mt-3">
                Discover, compare and save colleges
                across India.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">
                Quick Links
              </h4>

              <div className="flex flex-col gap-2 text-gray-400">
                <Link
                  href="/"
                  className="hover:text-white transition"
                >
                  Home
                </Link>

                <Link
                  href="/colleges"
                  className="hover:text-white transition"
                >
                  Colleges
                </Link>

                <Link
                  href="/compare"
                  className="hover:text-white transition"
                >
                  Compare
                </Link>

                <Link
                  href="/saved-colleges"
                  className="hover:text-white transition"
                >
                  Saved Colleges
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">
                Features
              </h4>

              <div className="flex flex-col gap-2 text-gray-400">
                <span>College Search</span>
                <span>College Comparison</span>
                <span>Save Favourites</span>
                <span>Placement Insights</span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-400">
            © 2026 CollegeFinder | Built with ❤️ by Amandeep
          </div>
        </div>
      </footer>
    </div>
  );
}