import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-20 flex flex-col items-center gap-y-6">
      <h2>page under construction...</h2>
      <Link
        href="/"
        className="h-12 w-48 bg-black hover:bg-neutral-800 text-white rounded-xl py-4 px-10 duration-300 ease-in-out flex items-center justify-center"
      >
        Return Home
      </Link>
    </div>
  );
}
