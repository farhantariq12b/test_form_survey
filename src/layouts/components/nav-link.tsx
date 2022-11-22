import { Link } from "react-router-dom";

export const AppNavLink = ({ to, title }: { to: string; title: string }) => {
  return (
    <Link to={to} className="text-decoration-none text-dark">
      {title}
    </Link>
  );
};
