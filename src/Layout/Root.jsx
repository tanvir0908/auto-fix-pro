import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

export default function Main() {
  return (
    <div className="xl:px-20 lg:px-10 md:px-8 px-3">
      <Outlet />
      <Footer />
    </div>
  );
}
