import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {


  render() {
    return (
      
      <div style = {{"background-image": "url('https://data.fis-ski.com/static/apps/fis_templates/css/images/content-background.jpg')", backgroundSize: 'cover', height:"100vh"}} className="background-image" >
        <div style={{padding:"3vh"}}/>
        <div className="centered" >  
          <h1>FIS Alpine stats, graphs, and more.</h1>
        </div>
        <div className="centered">
          <img alt="" height="150vh" src={require('./S-RLogoAlt.png')}/>
        </div>
        <div style={{padding:"3vh"}}/>
        <Row>
          <Col className="centered">
            <Card className = "select_card" onClick={() => {this.props.changeView({name: 'result-home'})}} style={{  height: '15rem',width: '20rem' }}>
                <Card.Header><Card.Title>Result Analysis</Card.Title></Card.Header>
                <Card.Body>
                  <Card.Text>
                  Search for any FIS-sanctioned alpine ski race to see which athletes 
                  lowered their world rank, graph visualizations, and other statistics.
                  </Card.Text>
                </Card.Body>
              </Card>
          </Col>
          <Col className="centered">
            <Card  className = "select_card"  onClick={() => {this.props.changeView({name: 'coming-soon'})}} style={{  height: '15rem',width: '20rem' }}>
                <Card.Header><Card.Title>Athlete Comparison</Card.Title></Card.Header>
                <Card.Body>
                  
                  <Card.Text>
                  Select athletes and see head to head results over their FIS career.
                  </Card.Text>
                </Card.Body>
              </Card>
          </Col>
          <Col className="centered">
            <Card className = "select_card"  onClick={() => {this.props.changeView({name: 'coming-soon'})}} style={{ height: '15rem',width: '20rem' }}>
                <Card.Header><Card.Title>Athlete Tracking</Card.Title></Card.Header>
                <Card.Body>
                  
                  <Card.Text>
                  Select athletes and receive email notifications every day they race.
                  </Card.Text>
                </Card.Body>
              </Card>
          </Col>
          
        </Row>

      </div>
    );
  }
}

export default Home;
