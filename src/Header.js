import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Home from './Home'
import ComingSoon from './ComingSoon';
import ResultHome from './ResultHome';
import ComparisonHome from './ComparisonHome';
import Comparison from './Comparison';
import Contact from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { isNewExpression } from '@babel/types';
import Results from './Results';
import Footer from './Footer';


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
        return (<ResultHome error={false} showSearch={true} changeView={(newView => {this.setState({view:newView})})}/>)
    } else if (view.name === "coming-soon") {
        return (<ComingSoon/>);
    } else if (view.name === "result-error") {
      return(<ResultHome showSearch={true} error={true} changeView={(newView => {this.setState({view:newView})})}/>)
    }
    else if (view.name === "result-view") {
      return (<Results changeView={(newView => {this.setState({view:newView})})} raceID={view.raceID}/>)
    }
    else if (view.name === "comparison-home") {
      return (<ComparisonHome athleteIds={[]} changeView={(newView => {this.setState({view:newView})})}/>)
    } else if (view.name === "comparison-view") {
      return (<Comparison changeView={(newView => {this.setState({view:newView})})} fisIds={view.fisIds}/>)
    } else if (view.name === "comparison-error") {
      return (<ComparisonHome athleteIds={view.athleteIds}  error={true} changeView={(newView => {this.setState({view:newView})})}/>)
    }
    else if (view.name === "home"){
        return (<Home changeView={(newView => {this.setState({view:newView})})}/>);      
    } 
  
  }
  render() {
    return (
      <div > 
        <Navbar  expand="lg" bg="dark" variant="dark" >
          <Navbar.Brand onClick={() => this.setState({view:{name: 'home'}})}><img alt="" height='50px' src={require("./S-RLogoAlt.png")}/></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link onClick={() => {this.setState({view:{name: 'result-home'}})}}>Results</Nav.Link>
              <Nav.Link onClick={() => {this.setState({view:{name: 'comparison-home'}})}}>Athlete Comparison</Nav.Link>
              <Nav.Link onClick={() => {this.setState({view:{name: 'coming-soon'}})}}>Athlete Tracking</Nav.Link>
            </Nav>
        </Navbar>
        {this.getView(this.state.view)}
        <Footer/>
      </div>
    );
  }
}

export default Header;
