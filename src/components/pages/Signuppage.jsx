import React from "react";
import {connect} from "react-redux";
import {Form, Button} from "semantic-ui-react";
import {signup} from "../actions/auth";
import InlineText from "../messages/InlineText";

class Signuppage extends React.Component {

    state = {
        data: {
            username: "",
            password: ""
        },
        errors: {},
        loading: false
    }


    onChange = (event) => {
        this.setState({
            data: {...this.state.data, [event.target.name]: event.target.value}
        })
    }

    onSubmit = () => {
        this.props.signup(this.state.data).then(() => this.props.history.push("/dashboard"))
        .catch(err => this.setState({errors: err.response.data}) )
        
    }

    render () {
        const {errors} = this.state;
        return (
            <div>
                <h1>Sign Up Page</h1>
                <Form onSubmit = {this.onSubmit} >
                    <Form.Field>
                        <label >Username</label>
                        <input type="text"
                        placeholder = "Enter your Name as your username"
                        name = "username"
                        onChange = {this.onChange}
                        />
                        {errors.username && <InlineText text={errors.username} />}
                    </Form.Field>
                    <Form.Field>
                        <label >Password</label>
                        <input type="text"
                        placeholder="Enter your Password here"
                        name = "password"
                        onChange = {this.onChange}
                        />
                    </Form.Field>
                    <Button primary >Submit</Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, {signup})(Signuppage);