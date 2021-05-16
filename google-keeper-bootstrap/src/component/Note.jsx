import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Note.css";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <br />
      <br />
      <div className="card note_show ">
        <div className="card-body">
          <h4>Titel:{props.titel} </h4>
          <p>Note : {props.note}</p>
          <Button
            variant="contained"
            type="button"
            color="primary"
            onClick={deleteNote}
          >
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </>
  );
};
export default Note;
