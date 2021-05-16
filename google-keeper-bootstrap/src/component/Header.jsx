import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
      <div className="row bg-warning">
        <div className="col-md-4 text-light">
          <h1 className="ml-4 mt-2">SunParsun</h1>
        </div>
        <div className="col-md-6"></div>
        <div className="col-md-2 text-light">
          <h4 className="text-right mr-4 mt-3">Sign-out</h4>
        </div>
      </div>
    </>
  );
};
export default Header;
