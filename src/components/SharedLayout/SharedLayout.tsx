import { Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";
import { Header } from "./Header/Header";
import { SideMenu } from "./SideMenu/SideMenu";
import { Footer } from "../Footer/Footer";

export const SharedLayout = () => {
  return (
    <div className={css.App}>
      <Header />
      <div className={css.container}>
        <SideMenu />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
