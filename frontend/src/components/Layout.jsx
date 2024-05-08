import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="pb-[32px]">{children}</main>
      <footer className="px-[32px] pb-[32px]">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
