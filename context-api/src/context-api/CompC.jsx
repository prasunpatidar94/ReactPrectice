import React from "react";
import { FirstName, LastName } from "./MainContextApi"

const CompC = () => {
    return (<>
        <FirstName.Consumer>
            {
                (fname) => {
                    return (
                        <LastName.Consumer>
                            {
                                (lname) => {
                                    return (<h1>
                                        {`${fname} ${lname} by Context Api`}
                                    </h1>);
                                }
                            }
                        </LastName.Consumer>
                    );
                }
            }
        </FirstName.Consumer>
    </>);
};
export default CompC;
