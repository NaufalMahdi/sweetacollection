import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import CardKatalog from "components/Cards/CardKatalog";
// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
// import detailKatalog from "pages/detail/[...id]";

export default function Landing() {
  const [data, setData] = useState([]);
  // const [activeDataId, setActiveData] = useState([]);
  const router = useRouter();

  const setActiveData = (activeDataId) => {
    router.push(`/detail/${activeDataId}`);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      await axios.get("/api/admin/product/getAllProducts", {}).then((res) => {
        setData(res.data.data);
      });
    } catch (err) {
      console.log(err);
      setData([]);
    }
  };

  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://news.unair.ac.id/wp-content/uploads/2020/05/Ilustrasi-oleh-pesona-travel.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">Katalog</h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Persewaan Baju Tari
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section class="bg-white py-8">
          <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
            <nav id="store" class="w-full z-30 top-0 px-6 py-1">
              <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                <a
                  class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                  href="#"
                >
                  Daftar Baju yang tersedia
                </a>

                <div class="flex items-center" id="store-nav-content">
                  <a
                    class="pl-3 inline-block no-underline hover:text-black"
                    href="#"
                  >
                    <svg
                      class="fill-current hover:text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                    </svg>
                  </a>

                  <a
                    class="pl-3 inline-block no-underline hover:text-black"
                    href="#"
                  >
                    <svg
                      class="fill-current hover:text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                    </svg>
                  </a>
                </div>
              </div>
            </nav>
            {data.length > 0 ? (
              data.map((val) => (
                <div
                  class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col "
                  key={val.id}
                >
                  <a href="#">
                    <img
                      class="hover:grow hover:shadow-lg object-cover h-96 w-96"
                      src={"/img/products/" + val.image}
                      onClick={() => {
                        setActiveData(val.id);
                      }}
                    />
                    <div class="pt-3 flex items-center justify-between">
                      <p class="">{val.product_name}</p>
                      <svg
                        class="h-6 w-6 fill-current text-gray-500 hover:text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                      </svg>
                    </div>
                    <p class="pt-1 text-gray-900">Rp.{val.price}</p>
                  </a>
                </div>
              ))
            ) : (
              <div className="mt-4 w-full text-center justify-center items-center">
                Loading..
              </div>
            )}
          </div>
        </section>

        {/* <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"></div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"></div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"></div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <section className="product spad">
                <div className="container">
                  <div className="row flex justify-between mb-24">
                    <div className="col-lg-4 col-md-4">
                      <div className="section-title">
                        <h4>List Baju Tari</h4>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-8">
                      <ul className="filter__controls flex gap-8">
                        <li className="active" data-filter="*">
                          All
                        </li>
                        <li data-filter=".women">Women’s</li>
                        <li data-filter=".men">Men’s</li>
                        <li data-filter=".kid">Kid’s</li>
                        <li data-filter=".accessories">Accessories</li>
                        <li data-filter=".cosmetic">Cosmetics</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-start mt-5">
                    {data.length > 0 ? (
                      data.map((val) => (
                        <div className="mx-2" key={val.id}>
                          <CardKatalog
                            data={val}
                            sendEditModalData={sendEditModalData}
                            sendDeleteModalData={sendDeleteModalData}
                          />
                        </div>
                      ))
                    ) : (
                      <div className="mt-4 w-full text-center justify-center items-center">
                        Data tidak ditemukan
                      </div>
                    )}
                  </div>

                  <div className="row property__gallery grid grid-cols-7 gap-10">
                    <div className="col-lg-3 col-md-4 col-sm-6 mix women"></div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section> */}

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Terima Kasih Sudah Menjadi Pelanggan Setia Kami
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Kami Senantiasa Menunggu Kehadiran Anda Kembali
                </p>
              </div>
            </div>
            {/* <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div> */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
