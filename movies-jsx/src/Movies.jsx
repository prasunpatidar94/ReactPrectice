import React from "react";
import MyData from "./MyData";
import Card from "./Card";

function Movies() {
  return (
    <React.Fragment>
      {MyData.map((data, index) => {
        return (
          <Card
            key={index}
            sname={data.sname}
            oname={data.oname}
            slink={data.slink}
          />
        );
      })}
    </React.Fragment>
  );
}

export default Movies;
