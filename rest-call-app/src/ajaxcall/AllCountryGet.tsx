import React from "react";
import Axios from "axios";
import { Country } from "../model/Countries";
import axios from "axios";

interface IState { countries: Country[] };//self component data 
interface IProps { };

class AllCountryGet extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
        this.state = {
            countries: []
        }
    };
    componentDidMount() {
        axios.get(`https://restcountries.eu/rest/v2/all`).then((responceData) => {
            console.log(responceData);
            let { data } = responceData;
            this.setState({
                countries: data
            });

        }, (error) => {
            console.log("ERROR RESPONCE : ", error)
            alert("ERROR IS COMMING..!");
        });
    };
    render() {
        return (
            <React.Fragment>
                <table>
                    <tr>
                        <td>srn</td>
                        <td>name</td>
                        <td>capital</td>
                        <td>region</td>
                        <td>subregion</td>
                        <td>area</td>
                        <td>population</td>
                        <td>flag</td>
                        <td>currencies</td>

                    </tr>
                    {this.state.countries.map((element: Country, index: number) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{element.name}</td>
                            <td>{element.capital}</td>
                            <td>{element.region}</td>
                            <td>{element.subregion}</td>
                            <td>{element.area}</td>
                            <td>{element.population}</td>
                            <td><img src={element.flag} width="100" height="50"></img></td>

                            <td>{
                                <div>
                                    <p> symbole: {element.currencies[0].symbol}</p>
                                    <p> name: {element.currencies[0].name}</p>
                                    <p>code: {element.currencies[0].code}</p>
                                </div>
                            }</td>
                        </tr>
                    ))}
                </table>

            </React.Fragment>
        )
    }

};
export default AllCountryGet;