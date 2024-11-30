import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <div className="relative min-h-screen bg-black">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
