import React from "react";
import SideMenu from "./SideMenu";

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
