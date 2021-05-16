import React from "react";
import { useHistory, useLocation, useParams } from "react-router";

// const User = ({ match }) => {
//     console.log(match);
//     return (
//         <>
//             <h1>THis is User page in </h1>
//             <h5>  This is from match :  {match.params.fname}</h5>

//         </>)
// };

const User = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(history);
    return (
        <>
            <h1>THis is User page in </h1>
            <h5>  This is from user params hook  {fname} : {lname}</h5>

            <h3>this is you location : {location.pathname}</h3>

            {location.pathname === "/user/prasun/patidar" ? <button onClick={() => { alert("Hi you are boy") }}>click me !</button> : null}

            <button onClick={() => { history.goBack() }}> GO Back</button>
            <button onClick={() => { history.push("/") }}> GO Home</button>
            <button onClick={() => { history.goForward() }}> GO Forword</button>


        </>)
};
export default User;
