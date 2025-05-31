import React from "react";
import Navbar from "./Navbar";
import DepartmentPage from "./DepartmentComp";
import Footer from "./Footer";

const DepartmentMain = () => {
  return (
    <>
      <Navbar />
      <div style={{ overflowX: "hidden", backgroundColor: "#f2ffff" }} className="content">
        <DepartmentPage />

        <Footer />
      </div>
    </>
  );
};

export default DepartmentMain;
