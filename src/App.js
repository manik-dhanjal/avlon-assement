import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Layout from "./Components/layout/layout"
import ChatTemplate from "./Components/template/chat.template"
const  App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact><ChatTemplate/> </Route>
          <Route path="/chat" exact> <ChatTemplate/> </Route>
        </Switch>
      </Layout>
     </Router> 
  );
}

export default App;
