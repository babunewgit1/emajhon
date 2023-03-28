import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToDb, getCart } from "../Utlities/Utlies";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [addedProduct, setAddedProduct] = useState([]);

  const addToCart = (product) => {
    setAddedProduct([...addedProduct, product]);
    addToDb(product.id);
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((req) => setProducts(req));
  }, []);

  useEffect(() => {
    const loadedCart = getCart();
    console.log(loadedCart);
  }, []);

  return (
    <section id="shop">
      <div className="max-w-6xl m-auto">
        <div className="shopWrapper grid grid-cols-5 gap-4">
          <div className="shopLeft col-span-5 md:col-span-4">
            <div className="shopWrapper grid grid-cols-3 gap-5 mt-12">
              {products.map((product) => (
                <Product
                  addToCart={addToCart}
                  product={product}
                  key={product.id}
                />
              ))}
            </div>
          </div>
          <div className="shopRightgrid col-span-5 md:col-span-1">
            <Cart addedProduct={addedProduct} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
