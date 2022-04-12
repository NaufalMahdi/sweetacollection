// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Test() {
  const [name, setName] = useState();
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      await axios.get("/api/admin/getUsers").then((res) => {
        setName(res.data.users);
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    try {
      setLoading(true);
      fetchData();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [fetchData]);
  if (loading) {
    return <>Please Wait</>;
  } else {
    return (
      <>
        {name.map((val, key) => {
          return (
            <div>
              <h1 key={key + "1"}>{val.first_name}</h1>
              <h1 key={key + "2"}>{val.last_name}</h1>
            </div>
          );
        })}
      </>
    );
  }
}
