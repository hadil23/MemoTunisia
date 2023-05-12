// functionel component
import React from "react";
import { Container } from "@material-ui/core";

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

import PostDetails from "./components/PostDetails/PostDetails";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

import Form from "./components/Form/Form";
import index from "./components/index";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <BrowserRouter>
      <Navbar />
      <Container
        maxwidth="xl"
        style={{
          minHeight: "100vh",
        }}
      >
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/home" exact component={index} />
          <div className="AppContainer">
            <Route path="/" exact component={() => <Redirect to="/posts" />} />
            <Route path="/posts" exact component={Home} />
            <Route path="/posts/search" exact component={Home} />
            <Route path="/posts/:id" exact component={PostDetails} />
            <Route path="/contact" exact component={Contact} />

            {/* <Route path="/auth" exact component={Auth} /> */}
            <Route
              path="/auth"
              exact
              component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
            />
          </div>
        </Switch>
        {/* grow provide simple animation  */}
      </Container>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
