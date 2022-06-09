import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "components/Alerts/Alert";

const ModalDetailHistories = ({
  data,
  setParentDetailHistoriesModal,
  sendDataToParent,
}) => {
  const [categoryName, setCategoryName] = useState(data.category_name);
  const [description, setDescription] = useState(data.description);
  const [saveLoading, setSaveLoading] = useState(false);

  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full my-6 mx-auto max-w-5xl max-h-[42rem] overflow-y-scroll">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t ">
              <h3 className="text-3xl font-semibold">Detail Pesanan</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => {
                  setParentDetailHistoriesModal(false);
                }}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div
              className={
                "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded overflow-y-auto"
              }
            >
              <div className="rounded-t mb-0 px-4 py-3 border-0  ">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <table className="items-center w-full bg-transparent border-separate">
                      <tr>
                        <td className="px-6 align-middle text-xs whitespace-nowrap p-4 border">
                          Nama Pemesan
                        </td>
                        <td className="px-6 align-middle text-xs whitespace-nowrap p-4 border font-semibold">
                          {data.nama_pemesan}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 align-middle text-xs whitespace-nowrap p-4 border">
                          Nomor telepon
                        </td>
                        <td className="px-6 align-middle text-xs whitespace-nowrap p-4 border font-semibold">
                          {data.nomer_telepon}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 align-middle text-xs whitespace-nowrap p-4 border">
                          Catatan
                        </td>
                        <td className="px-6 align-middle text-xs whitespace-nowrap p-4 border font-semibold">
                          {data.note}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 align-middle text-xs whitespace-nowrap p-4 border">
                          Total Harga
                        </td>
                        <td className="px-6 align-middle text-xs whitespace-nowrap p-4 border font-semibold">
                          Rp.{data.total_price}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 align-middle text-xs whitespace-nowrap p-4 border">
                          Deadline
                        </td>
                        <td className="px-6 align-middle text-xs whitespace-nowrap p-4 border font-semibold">
                          {data.deadline}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 align-middle text-xs whitespace-nowrap p-4 border">
                          Status Pesanan
                        </td>
                        <td className="px-6 align-middle text-xs whitespace-nowrap p-4 border font-semibold">
                          <i className={`fas fa-circle ${data.warna} mr-2`}></i>{" "}
                          {data.status}
                        </td>
                      </tr>
                    </table>
                    <h3 className={"font-semibold text-lg mt-4"}>
                      Daftar Pesanan
                    </h3>
                  </div>
                </div>
              </div>
              <div className="block w-full">
                {/* Projects table */}
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                        }
                      >
                        No
                      </th>
                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                        }
                      >
                        Nama Barang
                      </th>
                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                        }
                      >
                        Warna
                      </th>
                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                        }
                      >
                        Ukuran
                      </th>
                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                        }
                      >
                        Jumlah
                      </th>

                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                        }
                      >
                        Sub-total harga
                      </th>

                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                        }
                      >
                        Foto Barang
                      </th>

                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                        }
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-wrap p-4">
                        1
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        Baju Renang
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-wrap p-4">
                        Pink
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        S
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        2
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        Rp.500.000
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <img
                          src="https://i.ibb.co/QMdWfzX/component-image-one.png"
                          className="h-20 w-20 bg-white rounded-full border object-none object-scale-down"
                          alt="..."
                        ></img>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-blueGray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={() => {
                  setParentDetailHistoriesModal(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalDetailHistories;
