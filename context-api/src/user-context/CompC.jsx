import React, { useContext } from "react";
import { FirstName, LastName } from "./MainUseContext"

const CompC = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);



    return (<>
        <h1>{`${fname} ${lname}`} by useContext</h1>
    </>);
};
export default CompC;
