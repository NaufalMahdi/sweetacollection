// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Admin from "layouts/Admin";
import CardProduct from "components/Cards/CardProduct";

const products = ({ data }) => {
  const [name, setName] = useState([]);
  const [loading, setLoading] = useState(false);
  let view;
  let title = "aaaa";
  if (loading) {
    view = <>Please Wait</>;
  } else {
    view = (
      <>
        <div className="relative bg-transparent pt-20">
          <div className="px-6 mt-10 h-screen">
            <div className="flex">
              <CardProduct item={title} />
              <CardProduct item={title} />
              <CardProduct item={title} />
            </div>
          </div>
        </div>
      </>
    );
  }

  return view;
};

products.layout = Admin;

export default products;
