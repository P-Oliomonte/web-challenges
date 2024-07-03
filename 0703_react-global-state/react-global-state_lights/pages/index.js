import Link from "../components/Link";

export default function HomePage({ lights, onToggle }) {
  const numOfLightsOn = lights.filter((light) => light.isOn === true).length;

  return (
    <div>
      <h1>Home</h1>
      <p>{numOfLightsOn} light(s) are on.</p>
      <p>
        <Link href="/rooms" onToggle={onToggle}>
          All Rooms →
        </Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}
