import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { sizing } from "@material-ui/system";
import Typography from "@material-ui/core/Typography";
const IncrDecr = () => {
  return (
    <>
      <Box m="25%" height="100%" width="25%">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper>
              <Typography align="center">Prasun patidar</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default IncrDecr;
