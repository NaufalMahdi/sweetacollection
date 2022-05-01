import React from "react";

const CardProduct = ({ item }) => {
  return (
    <>
      {/* <div className="h-24 w-24 mx-auto my-auto bg-white"></div> */}
      <div className="max-w-lg h-fit max-h-fit shadow-md bg-white rounded-lg overflow-hidden m-4">
        <div className="grid grid-cols-3 xs:grid-cols-1 gap-0">
          <div className="">
            <img
              className="w-full h-full object-cover md:h-full"
              src="/img/products/sample.jpg"
              alt="Man looking at item at a store"
            ></img>
          </div>
          <div className="p-8 h-full overflow-hidden col-span-2">
            <a
              href="#"
              className="mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Finding customers for your new business
            </a>
            <p className="mt-2 w-[100%] h-full text-slate-500 truncate">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers. Getting a
              new business off the ground is a lot of hard work. Here are fiv
              ideas you can use to find your first customers. Getting a new
              business off the ground is a lot of hard work. Here are five ideas
              you can use to find your first customers. Getting a new business
              off the ground is a lot of hard work. Here are five ideas you can
              use to find your first customers. Getting a new business off the
              ground is a lot of hard work. Here are five ideas you can use to
              find your first customers. Getting a new business off the ground
              is a lot of hard work. Here are five ideas you can use to find
              your first customers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
