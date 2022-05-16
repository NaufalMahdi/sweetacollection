import React from "react";

const ModalCreateProduct = ({ setParentCreateModal, sendDataToParent }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Buat Baru</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => {
                  setParentCreateModal(false);
                }}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto max-h-[42rem] overflow-y-scroll">
              <div className="grid grid-cols-1 my-1">
                <div className="grid grid-cols-1 mb-3">
                  <span>Nama Produk</span>
                  <input className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150"></input>
                </div>
                <div className="grid grid-cols-1 mb-3">
                  <span>Kategori Produk</span>
                  <select className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150 focus:ring-0 focus:border-x-transparent focus:border-t-transparent">
                    <option value={""}>-- Pilih Salah Satu --</option>
                    <option value={""}>a</option>
                    <option value={""}>b</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 mb-3">
                  <span>Deskripsi</span>
                  <textarea
                    className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150 focus:ring-0 focus:border-x-transparent focus:border-t-transparent"
                    rows="10"
                  ></textarea>
                </div>
                <div className="grid grid-cols-1 mb-3">
                  <span>Warna</span>
                  <input className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150"></input>
                </div>
                <div className="grid grid-cols-1 mb-3">
                  <span>Ukuran</span>
                  <input className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150"></input>
                </div>
                <div className="grid grid-cols-1 mb-3">
                  <span>Harga</span>
                  <input className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150"></input>
                </div>
                <div className="grid grid-cols-1 mb-3">
                  <span>Total Stok</span>
                  <input className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150"></input>
                </div>
                <div className="grid grid-cols-1 mb-3 mt-3">
                  <span>Gambar Produk</span>
                  <input type="file" className="mt-2"></input>
                  {/* <input className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150"></input> */}
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-blueGray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={() => {
                  setParentCreateModal(false);
                }}
              >
                Close
              </button>
              <button
                className="text-white bg-blueGray-500 active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  setParentCreateModal(false);
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalCreateProduct;
