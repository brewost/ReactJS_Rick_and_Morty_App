import { NavLink } from "react-router-dom";

function Header() {
  const urlbase = "http://localhost:5173";
  return (
    <>
      <h1> I am a header</h1>;
      <ul>
        <NavLink to={urlbase}>HomePage</NavLink>
        <NavLink to={urlbase + "/login"}>Login</NavLink>
      </ul>
    </>
  );
}
export default Header;
