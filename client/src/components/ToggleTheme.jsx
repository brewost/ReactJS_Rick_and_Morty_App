import "../styles/toggle-theme.css";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";

function ToggleTheme() {
  const { toggleDarkMode } = useContext(DarkModeContext);
  return (
    <label className="toggle">
      <input
        className="toggle-checkbox"
        type="checkbox"
        onClick={toggleDarkMode}
      />
      <div className="toggle-switch" />
    </label>
  );
}

export default ToggleTheme;
