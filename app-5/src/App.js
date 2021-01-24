import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Components/Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://lh3.googleusercontent.com/proxy/PvhcyDMicWvcfWHYcQmK5MusbHrM4lcbCBT0Y4Jpw2GY_Zz_p8OoKRMAarFVffjOkZXOUZqnDHfaYuKV-XZfc-0Q-mGCpASNId1RCmxJ"} />
      </div>
    );
  }
}

export default App;
