import { Link } from "react-router";

export default function Logo() {
  return (
    <Link to="/">
      <span className="text-xl font-bold text-nowrap">My App</span>
    </Link>
  );
}
