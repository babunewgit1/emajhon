import React from "react";

const Cart = ({ addedProduct }) => {
  let price = 0;
  let shopingCharge = 0;
  let quantity = 0;

  for (let items of addedProduct) {
    items.quantity = items.quantity || 1;

    price += items.price * items.quantity;

    shopingCharge += items.shipping;
    quantity += items.quantity;
  }

  const tax = price * 0.1;
  const grandTotal = price + shopingCharge + tax;

  return (
    <div className="cartWrapper bg-orange-300 p-4 h-screen sticky top-0 text-white">
      <div className="shopRightheading mb-3">
        <h2 className="text-center font-semibold text-xl ">Order Summary</h2>
      </div>
      <div className="shopitemsDetails">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${price}</p>
        <p>Total Shipping Charge: ${shopingCharge}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h3 className="text-2xl font-semibold mt-10">
          Grand Total: ${grandTotal.toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default Cart;
