import React from "react";
import {Container} from "semantic-ui-react";
import {Route} from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import Signuppage from "./components/pages/Signuppage";
import Loginpage from "./components/pages/Loginpage";
import Dashboardpage from "./components/pages/Dashboardpage";

const App = () => (
  <Container>
    <Route path="/" exact component = {Homepage} />
    <Route path="/signup" component = {Signuppage} />
    <Route path="/login" component = {Loginpage} />
    <Route path="/dashboard" component = {Dashboardpage} />
  </Container>
)

export default App;