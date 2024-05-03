import { NavLink } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
function Header() {
  const urlbase = "http://localhost:5173";

  return (
    <>
      <img
        className="logo"
        src="src/assets/rick_logo.png"
        alt="shadow of rick"
      />
      <ul>
        <NavLink to={urlbase}>HomePage</NavLink>
        <NavLink to={urlbase + "/login"}>Login</NavLink>
      </ul>

      <ToggleTheme />
    </>
  );
}
export default Header;
