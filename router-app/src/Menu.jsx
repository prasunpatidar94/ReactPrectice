import React from "react";
import { Link, NavLink } from "react-router-dom";


const Menu = () => {
    return (
        <>

            <Link to="/" >Home</Link><br />
            <Link to="/indent" >Indent</Link><br />
            <Link to="/contact" >Contat Us</Link><br />


            <NavLink exact to="/" activeClassName="active_class">Home</NavLink><br />
            <NavLink to="/indent" activeClassName="active_class">Indent</NavLink><br />
            <NavLink to="/contact" activeClassName="active_class">Contat Us</NavLink><br />
            <NavLink to="/user/megha/patidar" activeClassName="active_class">User</NavLink><br />



        </>)
};
export default Menu
    ;
