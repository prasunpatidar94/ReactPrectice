
import { Button, TextField } from "@material-ui/core";
import React from "react";
import { History, LocationState } from "history";

interface IState {
    username: string;
    password: string;

};
interface IProps {
    history: History<LocationState>;
};

class Login extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    };

    handChange = (event: any) => {

        let { name, value } = event.target;

        switch (name) {
            case "uname":

                this.setState({
                    username: value
                })
                break;

            case "upwd":

                this.setState({
                    password: value
                })
                break;
        };

    };

    login = () => {
        if (this.state.username === "prasun" && this.state.password === "123") {

            this.props.history.push("/landing");
        } else {
            alert("Login Is Fail Please Try Again");
        }

    };

    render() {
        return (
            <React.Fragment>
                <TextField variant="outlined" label="User Name " value={this.state.username} name="uname" onChange={this.handChange}></TextField>
                <TextField variant="outlined" label="User Name " value={this.state.password} name="upwd" onChange={this.handChange}></TextField>
                <Button variant="contained" onClick={this.login}>Log-In</Button>
            </React.Fragment>
        )
    }
};
export default Login;