import React from "react";

//props
interface IProps {}
//state
interface IMystate {
  ename: string;
  age: number;
  technologies: string[];
  softwareInfo: any[];
  status: boolean;
}

//componenent
class State extends React.Component<IProps, IMystate> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      ename: "Prasun",
      age: 25,
      technologies: ["music", "playing", "sayari"],
      softwareInfo: [
        { id: 111, softName: "SRL", price: 1000000 },
        { id: 222, softName: "Digital signature", price: 2000000 },
        { id: 333, softName: "ChatBoot", price: 3000000 },
        { id: 444, softName: "NPIM", price: 4000000 },
        { id: 555, softName: "SunSoft", price: 5000000 },
      ],
      status: true,
    };
  }

  render() {
    return (
      <React.Fragment>
        Emp-Name: <p>{this.state.ename}</p>
        <br></br>
        <br></br>
        Age: <p>{this.state.age}</p>
        <br></br>
        <br></br>
        Technologies:
        {this.state.technologies.map((element: any, index: number) => (
          <span key={index}> {element}</span>
        ))}
        <br></br>
        <br></br>
        Software Info:
        <table>
          <tr>
            <th>id</th>
            <th>softName</th>
            <th>price</th>
          </tr>
          {this.state.softwareInfo.map((element: any, index: number) => (
            <tr key={index}>
              <td>{element.id}</td>
              <td>{element.softName}</td>
              <td>{element.price}</td>
            </tr>
          ))}
        </table>
        <br></br>
        <br></br>
        Emp-Name: <p>{this.state.ename}</p>
        <br></br>
        <br></br>
      </React.Fragment>
    );
  }
}

export default State;
