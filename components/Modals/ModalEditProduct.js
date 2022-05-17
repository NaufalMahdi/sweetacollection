import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const ModalEditProduct = ({ setParentEditModal, sendDataToParent, data }) => {
  const [editMode, setEditMode] = useState(false);
  const [categories, setCategories] = useState([]);
  const [productCategory, setProductCategory] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      await axios(
        "http://localhost:3000/api/admin/product/getAllCategories",
        {}
      ).then((res) => {
        setCategories(res.data.categories);
        for (let i = 0; i < res.data.categories.length; i++) {
          if (data.product_category == res.data.categories[i].id) {
            setProductCategory(res.data.categories[i].category_name);
          }
        }
      });
    };
    getCategories();
  }, []);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex flex-cols-2 w-full p-5 border-b border-solid border-blueGray-200 rounded-t items-center">
              <div className="flex items-start justify-between">
                <h3 className="text-3xl font-semibold">#{data.id}</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => {
                    setParentEditModal(false);
                  }}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <div className="flex justify-end w-full">
                {editMode ? null : (
                  <button
                    className="underline"
                    onClick={() => setEditMode(true)}
                  >
                    Edit Produk
                  </button>
                )}
              </div>
            </div>
            {editMode ? (
              <div className="relative p-6 flex-auto max-h-[42rem] overflow-y-scroll">
                <div className="grid grid-cols-1 my-1">
                  <div className="grid grid-cols-1 mb-3">
                    <span className="font-semibold">Nama Produk</span>
                    <input
                      className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150"
                      defaultValue={data.product_name}
                    ></input>
                  </div>
                  <div className="grid grid-cols-1 mb-3">
                    <span className="font-semibold">Kategori Produk</span>
                    <select
                      className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150 focus:ring-0 focus:border-x-transparent focus:border-t-transparent"
                      defaultValue={data.product_category}
                    >
                      <option value={""}>-- Pilih Salah Satu --</option>
                      {categories.map((val) => (
                        <option key={val.id} value={val.id}>
                          {val.category_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-1 mb-3">
                    <span className="font-semibold">Deskripsi</span>
                    <textarea
                      className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150 focus:ring-0 focus:border-x-transparent focus:border-t-transparent"
                      rows="10"
                      defaultValue={data.description}
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-1 mb-3">
                    <span className="font-semibold">Warna</span>
                    <input
                      className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150"
                      defaultValue={data.color}
                    ></input>
                  </div>
                  <div className="grid grid-cols-1 mb-3">
                    <span className="font-semibold">Ukuran</span>
                    <input
                      className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150"
                      defaultValue={data.size}
                    ></input>
                  </div>
                  <div className="grid grid-cols-1 mb-3">
                    <span className="font-semibold">Harga</span>
                    <input
                      className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150"
                      defaultValue={data.price}
                    ></input>
                  </div>
                  <div className="grid grid-cols-1 mb-3">
                    <span className="font-semibold">Total Stok</span>
                    <input
                      className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150"
                      defaultValue={data.total_stock}
                    ></input>
                  </div>
                  <div className="grid grid-cols-1 mb-3 mt-3">
                    <span className="font-semibold">Gambar Produk</span>
                    <input type="file" className="mt-2"></input>
                    {/* <input className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150"></input> */}
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative p-6 flex-auto max-h-[42rem] overflow-y-scroll">
                <div className="grid grid-cols-1 my-1">
                  <div className="flex flex-nowrap">
                    <div className="basis-2/3">
                      <div className="grid grid-cols-1 mb-3">
                        <span className="font-semibold">Nama Produk</span>
                        <div className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150">
                          {data.product_name}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 mb-3">
                        <span className="font-semibold">Kategori Produk</span>
                        <div className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150">
                          {productCategory}
                        </div>
                      </div>
                    </div>
                    <div className="flex basis-1/3 justify-center">
                      <img
                        src={"/img/products/" + data.image}
                        className="max-h-48 rounded-md"
                      ></img>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 mb-3">
                    <span className="font-semibold">Deskripsi</span>
                    <div className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150 focus:ring-0 focus:border-x-transparent focus:border-t-transparent text-justify">
                      {data.description}
                    </div>
                  </div>
                  <div className="flex flex-nowrap gap-4">
                    <div className="basis-1/2">
                      <div className="grid grid-cols-1 mb-3">
                        <span className="font-semibold">Warna</span>
                        <div className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150">
                          {data.color}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 mb-3">
                        <span className="font-semibold">Harga</span>
                        <div className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150">
                          {data.price}
                        </div>
                      </div>
                    </div>
                    <div className="basis-1/2">
                      <div className="grid grid-cols-1 mb-3">
                        <span className="font-semibold">Ukuran</span>
                        <div className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150">
                          {data.size}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 mb-3">
                        <span className="font-semibold">Total Stok</span>
                        <div className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150">
                          {data.total_stock}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b w-full">
              {editMode ? (
                <div className="grid grid-cols-2 gap-1">
                  <button
                    className="text-red-500 active:text-red-600 transtition-all active:delay-150"
                    type="button"
                    onClick={() => {
                      setEditMode(false);
                    }}
                  >
                    Batal
                  </button>
                  <button
                    className="text-white bg-blueGray-500 active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setParentEditModal(false);
                    }}
                  >
                    Simpan
                  </button>
                </div>
              ) : (
                <div className="flex flex-cols-1 flex-nowrap w-full justify-end">
                  <div className="basis-1">
                    <button
                      className="text-blueGray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      onClick={() => {
                        setParentEditModal(false);
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalEditProduct;
