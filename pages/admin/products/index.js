// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Admin from "layouts/Admin";
import CardProduct from "components/Cards/CardProduct";
import ModalCreateProduct from "components/Modals/ModalCreateProduct";
import Link from "next/link";
const products = ({ data }) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const setParentCreateModal = (state) => {
    setShowCreateModal(false);
  };
  let view;
  try {
    if (data) {
      view = (
        <>
          <div className="relative bg-transparent pt-20 mx-5">
            <div className="mt-10 h-screen">
              <div className="w-full">
                <div className="flex flex-row-reverse">
                  <button
                    className="bg-blueGray-500 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowCreateModal(true);
                    }}
                  >
                    <div className="flex flex-nowrap justify-between">
                      <div className="mx-auto my-auto">
                        <i className="fa-solid fa-circle-plus"></i>
                        <span> Buat</span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap justify-start mt-5">
                {data.length > 0
                  ? data.map((val) => (
                      <div className="mx-2">
                        <CardProduct data={val} />
                      </div>
                    ))
                  : "a"}
              </div>
            </div>
          </div>
          {showCreateModal ? (
            <ModalCreateProduct setParentCreateModal={setParentCreateModal} />
          ) : null}
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
