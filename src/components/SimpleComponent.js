// Code SimpleComponent Here
// In the components/SimpleComponent.js file, create a SimpleComponent component.

const { Component } = require("react");

// The component should be declared as a class (instance of Component) so that it can carry state.
import React from 'react'


class SimpleComponent extends Component {
    constructor(props) {
      super(props);
  // The component should have a state property called mood that has a default value of happy.

      // Initial state here...
      //has state
      //has state property mood:
      //default initial state should be 'happy'
      
      this.state = {
          mood: 'happy'
      };
    }



  
    handleClick = () => {
      // Probably do some work to update the state
      //When clicked, the component's mood should toggle between happy and sad states.
      // The component should implement a handleClick function that can serve as a callback to the <div>'s click event. 
      //if the state mood = happy, toggle between sad and happy
      const updatedMood = this.state.mood == 'happy' ? 'sad' : 'happy'
    }
  
    render() {
      // Return JSX that renders into HTML
     // The component should simply render its current mood state to the page in a div.
      <div>
        <button onClick={this.handleClick}></button>
        <div>I am just{this.state.mood}</div>
      </div>
    }
  }



// The component should simply render its current mood state to the page in a div.


