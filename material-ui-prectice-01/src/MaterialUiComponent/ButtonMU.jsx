import React from "react";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/DeleteForeverTwoTone";
const ButtonMU = () => {
  return (
    <React.Fragment>
      <Typography align="center">
        <Button
          color="secondary"
          variant="outlined"
          size="small"
          onClick={() => {
            alert("Prasun icone is clicked");
          }}
          startIcon={<DeleteIcon />}
          endIcon={<DeleteIcon />}
          component="Button"
          //   fullWidth={false}
          //   fullWidth={true}
          disableRipple={true}
        >
          Click me ..!
        </Button>
      </Typography>
    </React.Fragment>
  );
};
export default ButtonMU;
