import React from "react";
import {Container} from "semantic-ui-react";
import {Route} from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import Signuppage from "./components/pages/Signuppage";
import Loginpage from "./components/pages/Loginpage";
import Dashboardpage from "./components/pages/Dashboardpage";

const App = ({location}) => (
  <Container>
    <Route path="/" exact location = {location} component = {Homepage} />
    <Route path="/signup" location = {location} component = {Signuppage} />
    <Route path="/login" location = {location} component = {Loginpage} />
    <Route path="/dashboard" location = {location} component = {Dashboardpage} />
  </Container>
)

export default App;