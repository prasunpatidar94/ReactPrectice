import React from "react";
import "./Movies.css";

function Card(props) {
  return (
    <React.Fragment>
      <div className="main">
        <div className="cards">
          <div className="card">
            <img
              src={props.slink}
              alt="dat is not load"
              className="img__card"
            ></img>
          </div>
          <div className="card__info">
            <span>{props.oname}</span>
            <h3>{props.sname}</h3>
            <div className="card__btn">
              <button>Watch Now</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Card;
