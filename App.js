import React, { Component } from 'react';
import Ninjas from './Ninjas';


class App extends Component {
  render(){
  return (
    <div className="App">
      <h1> My First react app!</h1>
      <p>Welcome :)</p>
      <Ninjas name = "Adnan" age ="25" belt= "black" />
      <Ninjas name = "Karim" age ="26" belt= "blue" />
      <Ninjas name = "Babil" age ="27" belt= "White" />
    </div>
  );
}
}

export default App;
