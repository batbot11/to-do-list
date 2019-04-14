import React from "react";
import {connect} from "react-redux";
import {Form, Button} from "semantic-ui-react";
import {login} from "../actions/auth";
import InlineText from "../messages/InlineText";

class Loginpage extends React.Component {

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
        this.props.login(this.state.data).then(() => this.props.history.push("/dashboard"))
        .catch(err => this.setState({errors: err.response.data}))
    }

    render () {
        const {errors} = this.state;
        return (
            <div>
                <h1>Login Page</h1>
                <Form onSubmit = {this.onSubmit} >
                    <Form.Field>
                        <label >Username</label>
                        <input type="text"
                        placeholder = "Enter you name here"
                        name = "username"
                        onChange = {this.onChange}
                        />
                        {errors.username && <InlineText text={errors.username} />}
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type="text"
                        placeholder = "Enter password here"
                        name = "password"
                        onChange = {this.onChange}
                        />
                    {errors.password && <InlineText text={errors.password} />}
                    </Form.Field>
                    <Button primary >Login</Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, {login})(Loginpage);