import React from "react";

class DayMassage extends React.Component {
  massage = "massage comes soon";

  header = {
    color: "palevioletred",
    textAlign: "center",
    border: "2px",
    borderRadius: "5px",
    margingLeft: "0px",
    borderStyle: "solid",
    borderColor: "red",
    fontFamily: `'Times New Roman', Times, serif`,
  };
  massageGen = (timeData) => {
    if (timeData <= 12) {
      this.massage = "GOOD Morming..";
      this.sms.color = "green";
    } else if (timeData > 12) {
      this.massage = "GOOD Evening..";
      this.sms.color = "orange";
    }
    return this.massage;
  };

  render() {
    return (
      <React.Fragment>
        <h1 style={this.header}>
          Dear Sir !{" "}
          <span className={sms}>{this.massageGen(new Date().getHours())}</span>
        </h1>
      </React.Fragment>
    );
  }
}

export default DayMassage;
