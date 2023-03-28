import React from "react";
import logo from "../../assets/Logo.svg";

const Header = () => {
  return (
    <header className="bg-[#1C2B35] py-6">
      <div className="max-w-6xl m-auto">
        <div className="headerWrapper flex items-center justify-between">
          <div className="headerleft">
            <a href="/index.html">
              <img src={logo} />
            </a>
          </div>
          <div className="headerright">
            <ul className="flex text-white gap-7">
              <li>
                <a href="/order">Order</a>
              </li>
              <li>
                <a href="/order Review">Order Review</a>
              </li>
              <li>
                <a href="/manage Inventory">Manage Inventory</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
