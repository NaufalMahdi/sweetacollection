import React from "react";
import Alert from "components/Alerts/Alert";
import Auth from "layouts/Auth.js";
import { useState, useEffect } from "react";
import axios from "axios";
import md5 from "md5";
import { useSession, signIn, signOut } from "next-auth/react";
import Router from "next/router";
export default function Login() {
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginBtn, setLoginBtn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertContent, setAlertContent] = useState();
  const { data: session } = useSession();

  if (session) {
    Router.push("/admin/dashboard");
  }
  // login
  // const login = async () => {
  //   try {
  //     setLoginBtn(true);
  //     setLoginLoading(true);

  //     // validation
  //     if (email != "" && password != "") {
  //       await axios
  //         .post("/api/auth/login", { email: email, password: md5(password) })
  //         .then((res) => {
  //           console.log(res.data.msg);
  //         });
  //     } else {
  //       setAlertContent(
  //         <Alert
  //           type={"danger"}
  //           msg_capitalize={"Login Gagal"}
  //           msg={"Email dan Password Kosong!"}
  //         />
  //       );
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setLoginBtn(false);
  //     setLoginLoading(false);
  //   }
  // };

  return (
    <>
      <div className="container mx-auto h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-2">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign in with
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />

                {/* Alert */}
                {alertContent}
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-center mt-6">
                  <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      signIn();
                    }}
                  >
                    Sign In with Credentials
                  </button>
                </div>
                {/* <form
                  onSubmit={(e) => {
                    login();
                    e.preventDefault();
                  }}
                >
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      onFocus={() => setAlertContent("")}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      onFocus={() => setAlertContent("")}
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      disabled={loginBtn}
                    >
                      {loginLoading ? "Please Wait" : "Sign In"}
                    </button>
                  </div>
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Login.layout = Auth;
