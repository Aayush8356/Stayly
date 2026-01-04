import { Outlet, Link } from "react-router-dom";
import "../index.css";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="header sticky top-0  flex justify-between m-2 bg-white  p-4">
        <div
          className="mx-4 text-3xl font-mono font-semibold"
          style={{ color: "indigo" }}
        >
          <Link to="/">Stay.ly</Link>
        </div>
        <nav className="flex justify-end text-xl gap-4">
          <Link to="/hotels">Hotels</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/login" style={{ color: "indigo", font: "caption" }}>
            <Button size="sm">Login</Button>
          </Link>
        </nav>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
