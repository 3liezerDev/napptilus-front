import { Navbar } from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar /> {/* 🔹 Navbar visible en todas las páginas */}
      <main>
        <Outlet /> {/* 🔹 Aquí se renderizarán las páginas */}
      </main>
    </>
  );
};

export default MainLayout;
