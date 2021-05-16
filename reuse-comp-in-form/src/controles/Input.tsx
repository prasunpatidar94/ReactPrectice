import { TextField } from "@material-ui/core";
import React from "react";


interface IProps {
    value: string;
    label: string;
    name: string;
};
interface IState { };

class Input extends React.Component<IProps, IState> {

    // constructor(props: IProps) {
    //     super(props);

    // }

    render() {
        return (
            <React.Fragment>
                <TextField
                    name={this.props.label}
                    label={this.props.label}
                    value={this.props.value}
                    variant="outlined"></TextField>
            </React.Fragment>
        );

    };
}

export default Input;