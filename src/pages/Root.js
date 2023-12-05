import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import clases from "./Root.module.css";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={clases.content}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
