import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Middle.css";
import AddIcon from "@material-ui/icons/Add";
import Note from "../component/Note";
import { useState } from "react";

const Middle = () => {
  const [state, setState] = useState({
    titel: "",
    note: "",
  });
  const [notes, setNotes] = useState([]);

  const inputChange = (event) => {
    const { name, value } = event.target;
    setState((oldVlaue) => {
      return {
        ...oldVlaue,
        [name]: value,
      };
    });
  };
  const submitData = (event) => {
    event.preventDefault();

    setNotes((oldnotes) => {
      return [...oldnotes, state];
    });
    setState({
      titel: "",
      note: "",
    });
  };
  const removeNote = (id) => {
    setNotes((old) => {
      old.filter((cur, inde) => {
        return id !== inde;
      });
    });
  };

  return (
    <>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="create_notes">
            <br />

            <input
              type="text"
              placeholder="Title"
              name="titel"
              value={state.titel}
              className="form-control"
              onChange={inputChange}
            />
            <br />
            <textarea
              cols=""
              rows=""
              name="note"
              value={state.note}
              placeholder="Take a Note.."
              className="form-control"
              onChange={inputChange}
            />
            <br />
            <button
              type="submit"
              className="btn btn-warning"
              onClick={submitData}
            >
              <AddIcon />
            </button>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>

      <div className="notes_show">
        {notes.map((value, index) => {
          return (
            <Note
              key={index}
              id={index}
              titel={value.titel}
              note={value.note}
              deleteItem={removeNote}
            />
          );
        })}
      </div>
    </>
  );
};
export default Middle;
