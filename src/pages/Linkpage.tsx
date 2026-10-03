import { Link } from "react-router-dom";

type LinkpageProps = {
  to: string;
  text: string;
};

function Linkpage({ to, text }: LinkpageProps) {
  return (
    <Link
      to={to}
      className="text-red-500 hover:underline"
    >
      {text}
    </Link>
  );
}

export default Linkpage;