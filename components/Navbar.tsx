import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex gap-6">
        <Link href="/">Home</Link>

        <Link href="/colleges">
          Colleges
        </Link>

        <Link href="/compare">
          Compare
        </Link>

        <Link href="/saved-colleges">
          Saved Colleges
        </Link>

        <Link href="/login">
          Login
        </Link>

        <Link href="/register">
          Register
        </Link>
      </div>
    </nav>
  );
}