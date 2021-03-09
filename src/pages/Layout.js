import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Pages from "./Pages";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Header />
        </div>

        <div className="row">
          <div className="col">
            <Sidebar />
          </div>
          <div className="col">
            <Pages />
          </div>
        </div>

        <div className="row">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
