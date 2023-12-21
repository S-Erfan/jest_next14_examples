import Link from "next/link";

export default async function JestPage() {
  return (
    <div className="grid place-items-center content-center  h-screen">
      <h1>Home</h1>
      <Link
        href="/about"
        className="hover:text-red-700 hover:translate-x-5 transition-all "
      >
        About
      </Link>
    </div>
  );
}
