import React, { createContext } from "react"
import CompC from "./CompC";

const FirstName = createContext();
const LastName = createContext();


const MainContextApi = () => {
    return (<>
        <FirstName.Provider value={"Prasun"}>
            <LastName.Provider value={"Patidar"}>
                <CompC />
            </LastName.Provider>
        </FirstName.Provider>
    </>);
};
export default MainContextApi;
export { FirstName, LastName };