import { useLocation, Link } from "react-router-dom";
import minirick from "../assets/minirick.jpg";
import SearchBar from "./SearchBar";

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
        <div><SearchBar/></div>
        <div>
          <Link to="/about">About</Link>
        </div>
      </nav>
    )
  );
};

export default Navbar;
