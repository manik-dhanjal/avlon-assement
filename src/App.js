import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout from "./Components/layout/layout"
import ChatTemplate from "./Components/template/chat.template"
const  App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact> This is home page please click <Link to="/chat"> To Chat Page </Link> </Route>
          <Route path="/chat" exact> <ChatTemplate/> </Route>
        </Switch>
      </Layout>
     </Router> 
  );
}

export default App;
