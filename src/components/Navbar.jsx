import { useLocation, Link } from "react-router-dom";
import minirick from "../assets/minirick.jpg";

const Navbar = () => {
  const location = useLocation();
  return (
    location.pathname !=="/" &&
    (
      <nav>
        <div>
          <Link to="/home">
            <img src={minirick} alt="Rick" />
          </Link>
        </div>
        <div>searchBar</div>
        <div>
          <Link to="/about">About</Link>
        </div>
      </nav>
    )
  );
};

export default Navbar;
