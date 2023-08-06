/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import SideMenu from "./SideMenu";
import Head from "next/head";

const SellerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <SideMenu />
          {children}
        </div>
      </div>
    </>
  );
};

export default SellerLayout;
