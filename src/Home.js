import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import CenterView from './CenterView';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class Home extends React.Component {

  constructor() {
    super();
    fetch( "http://api.ski-reference.com/visitor/increment/homePage",{method: "POST"})
  }
  render() {
    return (
      
      <div style = {{"background-image": "url('https://data.fis-ski.com/static/apps/fis_templates/css/images/content-background.jpg')", 
        backgroundAttachment: "fixed",
          padding:'20px',
        backgroundSize: 'cover', minHeight:"100vh"}} className="background-image" >
        <div style={{padding:"3vh"}}/>
        <div className="centered" >  
          <h1>FIS Alpine stats, graphs, and more.</h1>
        </div>
        <div className="centered">
          <img alt="" height="100vh" src={require('./S-RLogoAlt.png')}/>
        </div>
        <div style={{padding:"3vh"}}/>
    
  <Row className="justify-content-md-center">   
  <Carousel variant="dark" className="carousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/WC_result.png"
      width="75%"
    />
    <Carousel.Caption style={{"color":"black"}}  >
      <h3  >Result Analysis</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/WC_comparison.png"
      width="75%"
    />
    <Carousel.Caption style={{"color":"black"}} >
      <h3>Athlete Comparison</h3>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
</Row>
      </div>
    );
  }
}

export default Home;
