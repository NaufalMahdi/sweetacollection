import React from "react";

const Alert = ({ type, msg_capitalize, msg }) => {
  const [showAlert, setShowAlert] = React.useState(true);
  let color;
  if (type == "danger") {
    color = "red";
  } else if (type == "success") {
    color = "emerald";
  } else {
    color = "yellow";
  }
  return (
    <>
      {showAlert ? (
        <div
          className={`flex flex-row text-white px-6 py-4 border-0 rounded relative mb-4 bg-${color}-500`}
        >
          <div className="basis-3/4">
            {" "}
            {/* <span className="text-xl inline-block mr-5 align-middle">
              <i className="fas fa-bell" />
            </span> */}
            <span className="inline-block align-middle mr-8">
              <b className="capitalize">{msg_capitalize}!</b> {msg}
            </span>
          </div>
          {/* <div className="basis-1/4">
            <button
              className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
              onClick={() => {
                setShowAlert(false);
                setShowAlert(true);
              }}
            >
              <span>×</span>
            </button>
          </div> */}
        </div>
      ) : null}
    </>
  );
};

export default Alert;
