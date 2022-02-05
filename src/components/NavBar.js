import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="nav-bar">
        <h1>
          <Link to="/transactions">Budget App</Link>
        </h1>
        <button>
          <Link to="/transactions/new"> New Transaction </Link>
        </button>
      </nav>
    </div>
  );
}
