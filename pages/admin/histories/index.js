import React from "react";
import Admin from "layouts/Admin";
import CardHistories from "components/Cards/CardHistories";
const histories = () => {
  return (
    <>
      <div className="relative bg-transparent pt-20 mx-5">
        <div className="mt-10 h-screen">
          <div className="w-full mb-12 px-4">
            <CardHistories />
          </div>
        </div>
      </div>
    </>
  );
};

histories.layout = Admin;
export default histories;
