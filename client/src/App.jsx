import { DarkModeProvider } from "./context/DarkMode";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Outlet />
        <Footer />
      </DarkModeProvider>
    </>
  );
}

export default App;
