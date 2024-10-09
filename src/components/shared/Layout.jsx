import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <main className="bg-dark-one7">
      <Header />
      <div className="h-screen mx-4 lg:mx-24 border-x border-1 border-gray-one7 ">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
