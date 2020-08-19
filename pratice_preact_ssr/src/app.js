  
import { h } from "preact";
import Router from "preact-router";
import { Home } from "./Home";
import { Introduce } from "./Introduce";

export const App = ({ url }) => (
  <Router url={url}>
    <Introduce path="/intro" />
    <Home path="/" />
  </Router>
);