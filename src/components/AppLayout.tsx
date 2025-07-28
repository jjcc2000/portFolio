"use client";

import { Outlet } from "react-router-dom";
import Info from "./info";
import Links from "./links";
import ProjectDisplayer from "./projectDisplayer";
function AppLayout() {
  return (
    <>
      <Info />
      <Links />
      <ProjectDisplayer />
      <Outlet />
    </>
  );
}

export default AppLayout;
