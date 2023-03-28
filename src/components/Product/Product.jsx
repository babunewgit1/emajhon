import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Product = ({ product, addToCart }) => {
  const { img, name, price, seller, ratings } = product;
  return (
    <div className="product">
      <div className="card w-full bg-base-100 shadow-2xl pb-3">
        <figure>
          <img src={img} alt={name} />
        </figure>
        <div className="card-body h-[240px]">
          <h2 className="card-title">${name}</h2>
          <p className="text-xl font-medium">Price: ${price} </p>
          <div className="cartDetals mt-4">
            <p>Manufacturer : {seller}</p>
            <p>Rating : {ratings} start</p>
          </div>
        </div>
        <div className="button mt-3">
          <button
            onClick={() => addToCart(product)}
            className="btn btn-secondary w-full"
          >
            Add to Cart <ShoppingCartIcon className="h-6 w-6 text-white ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
