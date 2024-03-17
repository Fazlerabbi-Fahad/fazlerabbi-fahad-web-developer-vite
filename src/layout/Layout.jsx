import { Outlet } from "react-router-dom";
import Navbar from "../component/ui/Navbar/Navbar";
import Footer from "../component/ui/Footer/Footer";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
