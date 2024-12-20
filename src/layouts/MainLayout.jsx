import { Outlet } from "react-router";
import { Footer, Navbar, ColorContainer } from "../components";

function MainLayout() {
  return (
    <>
      <Navbar />
      <ColorContainer />
      <main className="align-elements">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
