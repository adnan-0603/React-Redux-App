import React, { Component } from 'react';
import Ninjas from './Ninjas';


class App extends Component {
  state = {
    ninjas : [
      {name : "Adnan" , age:25 ,belt: 'black' , id:1 },
      {name : "Karim" , age:26 ,belt: "blue" ,  id:2 },
      {name : "Crystal", age:27,belt: "pink" ,  id:3 }
    ]
  }
  render(){
  return (
    <div className="App">
      <h1> My First react app!</h1>
      <p>Welcome :)</p>
      <Ninjas ninjas = {this.state.ninjas}/>
      
    </div>
  );
}
}

export default App;
