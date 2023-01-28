import React from "react";
import Link from "next/link";
import { Cart } from "./";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">AB E-STORE</Link>
      </p>

      <Cart />
    </div>
  );
};

export default Navbar;
