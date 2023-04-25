import React from "react";
import Head from "next/head";

import { Navbar, Footer } from "./";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>AB E-Store</title>
        <meta
          name="description"
          content="Modern Full Stack ECommerce Application with Stripe."
          key="desc"
        />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
