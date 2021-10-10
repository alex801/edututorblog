import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle =() => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Helmet>
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossorigin
        />
        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossorigin
        />

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin
        />

       
      </Helmet>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
