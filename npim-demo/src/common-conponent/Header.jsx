import React from "react";
import logo from "../images/Tanishq_Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <React.Fragment>
      <div className="header_show">
        <div className="img_show">
          <img src={logo} width="100" height="100" />
        </div>
        <div className="project_name_show">
          <h3>NPIM</h3>
        </div>
        <div className="logout_show">
          <h3>Logout</h3>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Header;
