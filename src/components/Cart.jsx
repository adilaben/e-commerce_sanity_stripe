import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

const Cart = () => {
  return (
    <button type="button" className="cart-icon">
      <AiOutlineShopping />
      <span className="cart-item-qty">1</span>
    </button>
  );
};

export default Cart;
