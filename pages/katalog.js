import React from "react";
import Link from "next/link";
// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Landing() {
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
                  <h1 className="text-white font-semibold text-5xl">
                    Katalog
                  </h1>
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

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              
            <section className="product spad">
    <div className="container">
        <div className="row flex justify-between mb-24">
            <div className="col-lg-4 col-md-4">
                <div className="section-title">
                    <h4>Rekomendasi</h4>
                </div>
            </div>
            <div className="col-lg-8 col-md-8">
                <ul className="filter__controls flex gap-8">
                    <li className="active" data-filter="*">All</li>
                    <li data-filter=".women">Women’s</li>
                    <li data-filter=".men">Men’s</li>
                    <li data-filter=".kid">Kid’s</li>
                    <li data-filter=".accessories">Accessories</li>
                    <li data-filter=".cosmetic">Cosmetics</li>
                </ul>
            </div>
        </div>
        <div className="row property__gallery grid grid-cols-7 gap-10">
            <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                <div className="product__item">
                    <div className="product__item__pic set-bg" style={{backgroundImage:"/img/3.jpg"}} data-setbg="/img/3.jpg">
                        <div className="label new">New</div>
                        <ul className="product__hover">
                            <li><img href="img/3.jpg" className="image-popup"/><span className="arrow_expand"></span></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Baju Tari</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">Rp. 170.000</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                <div className="product__item">
                    <div className="product__item__pic set-bg" style={{backgroundImage:"/img/3.jpg"}} data-setbg="/img/3.jpg">
                        <div className="label new">New</div>
                        <ul className="product__hover">
                            <li><img href="img/3.jpg" className="image-popup"/><span className="arrow_expand"></span></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Baju Tari</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">Rp. 170.000</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                <div className="product__item">
                    <div className="product__item__pic set-bg" style={{backgroundImage:"/img/3.jpg"}} data-setbg="/img/3.jpg">
                        <div className="label new">New</div>
                        <ul className="product__hover">
                            <li><img href="img/3.jpg" className="image-popup"/><span className="arrow_expand"></span></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Baju Tari</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">Rp. 170.000</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                <div className="product__item">
                    <div className="product__item__pic set-bg" style={{backgroundImage:"/img/3.jpg"}} data-setbg="/img/3.jpg">
                        <div className="label new">New</div>
                        <ul className="product__hover">
                            <li><img href="img/3.jpg" className="image-popup"/><span className="arrow_expand"></span></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Baju Tari</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">Rp. 170.000</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                <div className="product__item">
                    <div className="product__item__pic set-bg" style={{backgroundImage:"/img/3.jpg"}} data-setbg="/img/3.jpg">
                        <div className="label new">New</div>
                        <ul className="product__hover">
                            <li><img href="img/3.jpg" className="image-popup"/><span className="arrow_expand"></span></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Baju Tari</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">Rp. 170.000</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                <div className="product__item">
                    <div className="product__item__pic set-bg" style={{backgroundImage:"/img/3.jpg"}} data-setbg="/img/3.jpg">
                        <div className="label new">New</div>
                        <ul className="product__hover">
                            <li><img href="img/3.jpg" className="image-popup"/><span className="arrow_expand"></span></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Baju Tari</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">Rp. 170.000</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                <div className="product__item">
                    <div className="product__item__pic set-bg" style={{backgroundImage:"/img/3.jpg"}} data-setbg="/img/3.jpg">
                        <div className="label new">New</div>
                        <ul className="product__hover">
                            <li><img href="img/3.jpg" className="image-popup"/><span className="arrow_expand"></span></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Baju Tari</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">Rp. 170.000</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                <div className="product__item">
                    <div className="product__item__pic set-bg" style={{backgroundImage:"/img/3.jpg"}} data-setbg="/img/3.jpg">
                        <div className="label new">New</div>
                        <ul className="product__hover">
                            <li><img href="img/3.jpg" className="image-popup"/><span className="arrow_expand"></span></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Baju Tari</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">Rp. 170.000</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                <div className="product__item">
                    <div className="product__item__pic set-bg" style={{backgroundImage:"/img/3.jpg"}} data-setbg="/img/3.jpg">
                        <div className="label new">New</div>
                        <ul className="product__hover">
                            <li><img href="img/3.jpg" className="image-popup"/><span className="arrow_expand"></span></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Baju Tari</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">Rp. 170.000</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                <div className="product__item">
                    <div className="product__item__pic set-bg" style={{backgroundImage:"/img/3.jpg"}} data-setbg="/img/3.jpg">
                        <div className="label new">New</div>
                        <ul className="product__hover">
                            <li><img href="img/3.jpg" className="image-popup"/><span className="arrow_expand"></span></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Baju Tari</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">Rp. 170.000</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                <div className="product__item">
                    <div className="product__item__pic set-bg" style={{backgroundImage:"/img/3.jpg"}} data-setbg="/img/3.jpg">
                        <div className="label new">New</div>
                        <ul className="product__hover">
                            <li><img href="img/3.jpg" className="image-popup"/><span className="arrow_expand"></span></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Baju Tari</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">Rp. 170.000</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix men">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="/img/3.jpg">
                        <ul className="product__hover">
                            <li><a href="img/product/product-2.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Baju Tari</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">Rp. 150.000</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix accessories">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="img/product/product-3.jpg">
                        <div className="label stockout">out of stock</div>
                        <ul className="product__hover">
                            <li><a href="img/product/product-3.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Baju Tari</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">Rp. 80.000</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix cosmetic">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="img/product/product-4.jpg">
                        <ul className="product__hover">
                            <li><a href="img/product/product-4.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Baju Tari</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">Rp. 100.000</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix kid">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="img/product/product-5.jpg">
                        <ul className="product__hover">
                            <li><a href="img/product/product-5.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Baju tari</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">Rp. 150.000</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                <div className="product__item sale">
                    <div className="product__item__pic set-bg" data-setbg="img/product/product-6.jpg">
                        <div className="label sale">Sale</div>
                        <ul className="product__hover">
                            <li><a href="img/product/product-6.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Baju Tari</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">Rp. 120.000<span>Rp. 150.000</span></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg="img/product/product-7.jpg">
                        <ul className="product__hover">
                            <li><a href="img/product/product-7.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Baju Tari</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">Rp. 90.000</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                <div className="product__item sale">
                    <div className="product__item__pic set-bg" data-setbg="img/product/product-8.jpg">
                        <div className="label">Sale</div>
                        <ul className="product__hover">
                            <li><a href="img/product/product-8.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">Baju Tari</a></h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">Rp. 125.000 <span>Rp. 180.000</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
            </div>
          </div>
        </section>

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
                  Build something
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
