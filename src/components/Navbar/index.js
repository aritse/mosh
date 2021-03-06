import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "relative shadow-lg bg-white shadow-lg") +
          " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"}>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
              }
              to="/">
              Mosh
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <FontAwesomeIcon icon="bars" className={props.transparent ? "text-white" : "text-gray-800"}></FontAwesomeIcon>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block p-4 rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning">

            <ul className="flex flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link
                  to="/login"
                  className={
                    (props.transparent
                      ? "bg-red-700 text-white active:bg-gray-100"
                      : "bg-pink-500 text-white active:bg-pink-600") +
                    " font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                  }
                  style={{ transition: "all .15s ease" }}>
                  <FontAwesomeIcon icon="arrow-alt-circle-down"></FontAwesomeIcon> LOGIN
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}