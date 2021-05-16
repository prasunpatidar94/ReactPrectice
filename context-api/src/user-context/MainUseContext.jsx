import React, { createContext } from "react"
import CompC from "./CompC";

const FirstName = createContext();
const LastName = createContext();


const MainUseContext = () => {
    return (<>
        <FirstName.Provider value={"Prasun"}>
            <LastName.Provider value={"Patidar"}>
                <CompC />
            </LastName.Provider>
        </FirstName.Provider>
    </>);
};
export default MainUseContext;
export { FirstName, LastName };