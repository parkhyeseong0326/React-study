import logo from './logo.svg';
import './App.css';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import { Component } from 'react';

class App extends Component{
  render() {
    return (
      // <ValidationSample/>
      <div>
        <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
          <button onClick={() => this.ScrollBox.scrollToBottom()}>
            맨 밑으로 
          </button>
      </div>
    );
  }
}

export default App;
