import React from "react";
import Link from "next/link";
const CardProduct = ({ data, sendEditModalData, sendDeleteModalData }) => {
  return (
    <>
      {/* <div className="h-24 w-24 mx-auto my-auto bg-white"></div> */}
      <div class=" lg:max-w-sm">
      <img class="w-full" src={"/img/products/" + data.image}
              alt={data.product_name} />
      <p className="mt-4 text-sm text-gray-700"><Link href="/detail">
            <a
              href="#pablo"
              className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            >
              {data.product_name}

            </a>
          </Link></p>
      <p className="mt-1 text-lg font-medium text-gray-900">{data.price}</p>
    </div>
    </>
  );
};

export default CardProduct;
