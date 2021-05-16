import React from "react";
import axios from "axios";


interface IProps { };
interface IState {
    sdata: string;
};

class PostCall extends React.Component<IProps, IState>{
    private my_ref = React.createRef<HTMLInputElement>();

    constructor(props: IProps) {
        super(props);
        this.state = {
            sdata: "",
        };

    }

    my_function = () => {

        console.log(this.my_ref.current?.value);

        axios.post(`http://test-routes.herokuapp.com/test/uppercase`, { "message": this.my_ref.current?.value })
            .then((dataResponce) => {
                let { data } = dataResponce;
                this.setState(
                    {
                        sdata: data.message
                    });

            }
                , (errorData) => {
                    console.log("ERROR :", errorData);
                    alert("ERROR IS COMMING...!")

                })
    };

    render() {
        return (
            <React.Fragment>
                <input type="text" ref={this.my_ref} placeholder="Enter aly text:  " ></input>
                <button onClick={this.my_function}>SUBMIT</button>
                <h1> {this.state.sdata}</h1>
            </React.Fragment>
        )
    }


}
export default PostCall;

