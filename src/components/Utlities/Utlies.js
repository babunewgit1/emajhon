const addToDb = (id) => {
  let shopingCart = {};
  const getCart = localStorage.getItem("shopingCart");

  if (getCart) {
    shopingCart = JSON.parse(getCart);
  }

  if (shopingCart[id]) {
    shopingCart[id] = shopingCart[id] + 1;
  } else {
    shopingCart[id] = 1;
  }
  localStorage.setItem("shopingCart", JSON.stringify(shopingCart));
};

// get the cart form localstorage.
const getCart = () => {
  let shopingCart = {};
  const getItem = localStorage.getItem("shopingCart");

  if (getItem) {
    shopingCart = JSON.parse(getItem);
  }

  return shopingCart;
};

export { addToDb, getCart };
