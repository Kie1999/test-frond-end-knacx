import React from "react";
import Service from "./component/Service";
import Appointment from "./component/Appointment";
function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="grid-item">
          {" "}
          <Appointment />
        </div>
        <div className="grid-item">
          <Service />
        </div>
      </div>
    </div>
  );
}

export default App;
