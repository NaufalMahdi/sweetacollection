// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Admin from "layouts/Admin";
import Link from "next/link";
import { useRouter } from "next/router";
import CardCategories from "components/Cards/CardCategories";
const products = ({ categories }) => {
  let view;
  let router = new useRouter();
  try {
    console.log(categories);
    if (categories) {
      view = (
        <>
          <div className="relative bg-transparent pt-20 mx-5">
            <div className="mt-10 h-screen">
              <div className="w-full mb-12 px-4">
                <CardCategories data={categories} />
              </div>
            </div>
          </div>
        </>
      );
    } else {
      view = <>Please Wait</>;
    }
  } catch (err) {
    view = <>Gagal memuat data</>;
  }

  return view;
};

const getStaticProps = async () => {
  let data;
  // Get all categories
  let a;
  await axios
    .get("http://localhost:3000/api/admin/product/getAllCategories", {})
    .then((res) => {
      data = res.data.categories;
    });

  // Get products count each categories
  for (let i = 0; i < data.length; i++) {
    await axios
      .get(
        "http://localhost:3000/api/admin/product/getProductCountByCategory",
        {
          category_id: data[0].id,
        }
      )
      .then((res) => {
        data[i].count = res.data.data;
        // data[i].aaa = res.data.a;
      });
  }
  return {
    props: {
      categories: data,
    },
  };
};

products.layout = Admin;

export { getStaticProps };
export default products;
