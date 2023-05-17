import { Outlet } from "react-router-dom";
import Footer from "./Shared/Footer";
import Navigationbar from "./Shared/Navigationbar";

const MainLayout = () => {
  return (
    <>
      <Navigationbar></Navigationbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
