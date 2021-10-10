import React from "react";
import loader from "../../assets/loader.gif";
import "./loader.css";

export default function Loader({ loading, children }) {
  if (loading) {
    return (
      <div className="loader">
        <img className="loader-wrapper" src={loader} alt="loading..." />
        <div className="loader-children">{children}</div>
      </div>
    );
  }
  return <>{children}</>;
}
