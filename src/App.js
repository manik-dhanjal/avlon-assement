import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout from "./Components/layout/layout"
const  App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact> this is child </Route>
          <Route path="/chat" exact> this id chat</Route>
        </Switch>
      </Layout>
     </Router> 
  );
}

export default App;
