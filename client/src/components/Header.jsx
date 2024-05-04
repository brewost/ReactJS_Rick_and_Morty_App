import { NavLink } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
function Header() {
  const urlbase = "http://localhost:5173";

  return (
    <>
      <div className="head">
        <div>
          <img
            className="head-logo"
            src="src/assets/rick_logo.png"
            alt="shadow of rick"
          />
        </div>
        <div className="link-box">
          <div className="links">
            <NavLink to={urlbase}>HomePage</NavLink>
            <NavLink to={urlbase + "/login"}>Login</NavLink>
          </div>

          <ToggleTheme />
        </div>
      </div>
    </>
  );
}
export default Header;
