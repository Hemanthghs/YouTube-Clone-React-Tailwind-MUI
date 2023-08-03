import React, { Component } from "react";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="bg-[#0f0f0f]">
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
