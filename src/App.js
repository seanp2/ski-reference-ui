import React from 'react';
import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header view={{name:'home'}}/>
      </div>
    );
  }
}

export default App;
