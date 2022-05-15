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
const products = ({ data }) => {
  let view;
  let router = new useRouter();
  try {
    if (data) {
      view = (
        <>
          <div className="relative bg-transparent pt-20 mx-5">
            <div className="mt-10 h-screen">
              <div className="w-full mb-12 px-4">
                <CardCategories />
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
  // useEffect(() => {
  //   try {
  //     if (loading) {
  //       view = <>Please Wait</>;
  //     } else {
  //       view = (
  //         <>
  //           <div className="relative bg-transparent pt-20">
  //             <div className="px-6 mt-10 h-screen">
  //               <div className="flex">{data}</div>
  //             </div>
  //           </div>
  //         </>
  //       );
  //     }
  //   } catch (err) {
  //     view = <>ERROR {err}</>;
  //   } finally {
  //     loading = false;
  //   }
  // });

  return view;
};

const getStaticProps = async () => {
  let data;
  await axios
    .get("http://localhost:3000/api/admin/product/getAllProducts", {})
    .then((res) => {
      data = res.data.data;
    });
  return {
    props: {
      data: data,
    },
  };
};

products.layout = Admin;

export { getStaticProps };
export default products;
