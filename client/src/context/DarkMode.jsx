import { createContext, useState } from "react";
const DarkModeContext = createContext();
// eslint-disable-next-line react/prop-types
function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <div className={darkMode ? `dark` : `light`}>{children}</div>
      </DarkModeContext.Provider>
    </div>
  );
}
export { DarkModeContext, DarkModeProvider };
