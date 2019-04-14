import React from "react";
import {Form, Button} from "semantic-ui-react";

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
        console.log(this.state.data)
    }

    render () {
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
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type="text"
                        placeholder = "Enter password here"
                        name = "password"
                        onChange = {this.onChange}
                        />
                    </Form.Field>
                    <Button primary >Login</Button>
                </Form>
            </div>
        )
    }
}

export default Loginpage;