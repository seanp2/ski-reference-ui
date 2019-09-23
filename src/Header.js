import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Home from './Home'
import FormControl from 'react-bootstrap/FormControl';

import ResultHome from './ResultHome';

import Results from './Results';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import DropdownButton from 'react-bootstrap/DropdownButton'

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state  = {
        view:props.view
    }
    this.getView = this.getView.bind(this);
  }
  getView(view) {
    if (view.name === "result-home") {
        return (<ResultHome changeView={(newView => {this.setState({view:newView})})}/>)

    } else {
        return (<Home changeView={(newView => {this.setState({view:newView})})}/>);
            
    }

  }
  render() {
    return (
      <div>
          <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">ski-reference.com</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Results</Nav.Link>
                <Nav.Link href="#features">Athlete Comparison</Nav.Link>
                <Nav.Link href="#pricing">Notifications</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
        {this.getView(this.state.view)}
      </div>
    );
  }
}

export default Header;
