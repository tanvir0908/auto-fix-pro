import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

export default function Main() {
  return (
    <div className="font-primary">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
