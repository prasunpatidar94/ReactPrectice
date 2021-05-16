import { Grid } from "@material-ui/core";
import React from "react";
import Input from "./controles/Input"


interface IProps {

};
interface IState { };

class From extends React.Component<IProps, IState> {


    render() {
        return (
            <React.Fragment>
                <Grid container>
                    <Grid item xs={6}>

                        <Input name="firstName" label="firstName" value=""></Input><br></br><br></br>
                        <Input name="secondName" label="secondName" value=""></Input><br></br><br></br>
                        <Input name="email" label="email" value=""></Input><br></br><br></br>
                        <Input name="mobile" label="mobile" value=""></Input>

                    </Grid>
                    <Grid item xs={6}>


                    </Grid>

                </Grid>

            </React.Fragment>
        );

    };
}

export default From;