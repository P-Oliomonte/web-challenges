export default function Logo({ src, alt }) {
  return (
    <a href="#">
      <img className="round-image" src={src} alt={alt} />
    </a>
  );
}
