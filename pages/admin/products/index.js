// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Admin from "layouts/Admin";
import HeaderStats from "components/Headers/HeaderStats";

export default function index() {
  const [name, setName] = useState([]);
  const [loading, setLoading] = useState(false);
  let view;

  if (loading) {
    view = <>Please Wait</>;
  } else {
    view = (
      <>
        {/* {name.map((val, key) => {
          return (
            <div>
              <h1 key={key + "1"}>{val.first_name}</h1>
              <h1 key={key + "2"}>{val.last_name}</h1>
            </div>
          );
        })} */}
        <HeaderStats />

        <p className="text-white">Test 123</p>
      </>
    );
  }

  return view;
}

index.layout = Admin;
