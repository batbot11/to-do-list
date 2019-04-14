import React from "react";
import {Button} from "semantic-ui-react";
import {Link}  from "react-router-dom";

const Homepage = () => (
    <div>
        <h1>Homepage</h1>
        <Button primary as={Link} to="/signup"  >Signup</Button> or  
        <Button primary as={Link} to="/login" > Login</Button>
    </div>
)

export default Homepage;