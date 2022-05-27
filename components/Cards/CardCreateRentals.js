import React from "react"

function CardCreateRentals() {
  return(
    <div className="relative p-6 flex-auto max-h-[42rem] overflow-y-scroll">
    <div className="grid grid-cols-1 my-1">
      <div className="grid grid-cols-1 mb-3">
        <span>Nama Pemesan</span>
        <input className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150"></input>
      </div>
      <div className="grid grid-cols-1 mb-3">
        <span>Nomer Telepon</span>
        <input className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150"></input>
      </div>
      <div className="grid grid-cols-1 mb-3">
        <span>Catatan</span>
        <textarea
          className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150 focus:ring-0 focus:border-x-transparent focus:border-t-transparent"
          rows="10"
        ></textarea>
      </div>
      <div className="grid grid-cols-1 mb-3">
        <span>Total Harga</span>
        <input className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150"></input>
      </div>
      <div className="grid grid-cols-1 mb-3">
        <span>Deadline</span>
        <input className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150"></input>
      </div>
      <div className="grid grid-cols-1 mb-3">
        <span>Status Pesanan</span>
        <select className="w-full mt-1 p-2 outline-none border-b-2 border-blueGray-100 transition focus:border-blueGray-500 focus:delay-150 focus:ring-0 focus:border-x-transparent focus:border-t-transparent">
              <option value={""}>-- Pilih Salah Satu --</option>
              <option value={""}>Selesai</option>
              <option value={""}>Sedang Diproses</option>
              <option value={""}>Dibatalkan</option>
         </select>
      </div>
      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-white bg-blueGray-500 active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                }}
              >
                Save Changes
              </button>
            </div>
    </div>
  </div>
  )
}

export default CardCreateRentals