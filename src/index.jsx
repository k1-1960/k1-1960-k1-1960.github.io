import ReactDOM from "react-dom/client";
import React from "react";
import Home from "./pages/Home.jsx";
import Links from "./pages/Links.jsx";
import Nav from "./Components/Nav.jsx";
import Events from "./events.js";

const domc = document.querySelector("#root");
const root = ReactDOM.createRoot(domc);

for (let Event of Events) {
  domc.addEventListener(Event.name, (...args) => Event.run(domc, ...args));
}

function App() {
  let path = window.location.pathname.replace("/react/build", "");

  if (path.length < 1) path = "/";
  switch (path) {
    case "/":
      return <Home />;
      break;
    case "/links":
      return <Links />;
      break;
  }
}

root.render(
  <div id="App">
    <Nav />
    <App />
  </div>
);
