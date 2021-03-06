import React from "react";
import axios from "axios";
import { useState } from "react";
import Admin from "layouts/Admin";
import CardHistories from "components/Cards/CardHistories";
import { useEffect } from "react";

const histories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      await axios
        .get("/api/admin/histories/getAllHistories", {})
        .then((res) => {
          setData(res.data.data);
          console.log(res.data.data);
        });
    } catch (err) {
      console.log(err);
      setData([]);
    }

    const setParentDetailHistoriesModal = (state) => {
      setShowDetailHistoriesModal(state);
    };

    const sendDetailHistoriesModalData = (data) => {
      setShowDetailHistoriesModal(data);
      setParentDetailHistoriesModal(true);
    };
  };

  return (
    <>
      <div className="relative bg-transparent pt-20 mx-5">
        <div className="mt-10 h-screen">
          {data.length > 0 ? (
            <div className="w-full mb-12 px-4">
              <CardHistories data={data} />
            </div>
          ) : (
            <div className="mt-4 w-full text-center justify-center items-center">
              Loading..
            </div>
          )}
        </div>
      </div>
    </>
  );
};

histories.layout = Admin;
export default histories;
