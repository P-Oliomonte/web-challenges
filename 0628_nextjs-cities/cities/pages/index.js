import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to this Cities App</h1>
      <Link href="/cities">Go to Cities Overview</Link>
    </div>
  );
}
