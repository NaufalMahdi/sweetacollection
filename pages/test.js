// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useState } from "react";
import { useEffect } from "react";
import { DataTable } from "react-data-table-component";
import axios from "axios";

export default function Test() {
  const [name, setName] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await axios.get("/api/admin/getUsers").then((res) => {
          setName(res.data.users);
        });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <>Please Wait</>;
  } else {
    return (
      <>
        {/* <DataTable
          columns={[
            {
              name: "First Name",
              selector: (row) => row.first_name,
            },
            {
              name: "First Name",
              selector: (row) => row.first_name,
            },
          ]}
          data={name}
        /> */}
        {/* {name.map((val) => (
            <h1>val</h1>
          ))} */}

        {name.map((val, key) => {
          return <h1 key={val}>{val.first_name}</h1>;
        })}
      </>
    );
  }
}
