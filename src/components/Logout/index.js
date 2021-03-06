import React from "react";
import API from "../../utils/API";

export default function Logout(props) {
  function handleClick(event) {
    event.preventDefault();
    API.logout()
      .then(res => {
        console.log(res.data);
        // redirect here
        window.location = `/login`;
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      <button
        href="#"
        className={
          (props.transparent ? "bg-red-700 text-gray-800 active:bg-gray-100" : "bg-red-700 text-white active:bg-red-700") +
          " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
        }
        type="submit"
        onClick={handleClick}
        style={{ transition: "all .15s ease" }}
      >
        <i className="fas fa-arrow-alt-circle-down"></i> Logout
      </button>
    </div>
  );
}
