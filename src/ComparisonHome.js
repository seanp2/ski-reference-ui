import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Results from './Results';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import 'bootstrap/dist/css/bootstrap.min.css';


class ComparisonHome extends React.Component {

  constructor(props) {
    super(props);
    this.state  = {
        error:props.error,
        forms: ([(
            <Form>
                <Form.Group as={Row} >
                <Form.Label column sm="2">Athlete #1</Form.Label>
                <Col sm="10">
                    <Form.Control onChange={(e) => this.handleChange(0, e)} placeholder="FIS ID" />
                </Col>
                </Form.Group>
            </Form>)]),
        athleteIds:[]
    }
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.addForm = this.addForm.bind(this);
  }

  handleChange(index, event) {
      event.preventDefault();
      let athleteIdArrayTemp = this.state.athleteIds;
      athleteIdArrayTemp[index] = event.target.value
      this.setState({
        athleteIds:athleteIdArrayTemp
      })
  }

  handleSubmit(e) {
      e.preventDefault();
      this.props.changeView({name:"comparison-view", fisIds:this.state.athleteIds})
  }

  getErrorMessage()  { 
    if (this.state.error) {
      return (
        <div style={{color:'red'}}>
          * You have entered an invalid URL *
        </div>
      )
    }
  }

  addForm() {
      const curNumForms = this.state.forms.length
      
      let newForms = this.state.forms
      console.log("HELLO")
      newForms[curNumForms] = (
        <div>
        <Form>
            <Form.Group >
            <Form.Row>
            <Form.Label column sm="2">
                Athlete #{curNumForms + 1} 
            </Form.Label>
            <Col sm="10">
                <Form.Control onChange={(e) => this.handleChange(curNumForms, e)}  placeholder="FIS ID" />
            </Col>
            </Form.Row>
            </Form.Group>
        </Form>
        </div>)
        
      this.setState({
          forms:newForms
      })
      console.log(this.state.forms)
  }

  handleError() {
    this.setState({
      error:true,
    })
  }


   

  render() {
      return (
        <div style = {{"background-image": "url('https://data.fis-ski.com/static/apps/fis_templates/css/images/content-background.jpg')", 
          display: 'flex',
          justifyContent: 'center',
          padding:'20px',
        backgroundSize: 'cover', height:"100vh"}}  >
            <Card style={{ width: '40rem', height:'80vh' }}>
                <Card.Body>
                  <Card.Title>Athlete Comparison</Card.Title>
                  <ol align="left">
                    <li>Go to the <a target = '_blank' href = "https://www.fis-ski.com/DB/general/biographies.html">FIS Website</a>,
                          and find the FIS codes of athletes you would like to compare.
                    </li>
                    <li>Paste the FIS code of each athlete, and then press submit.</li>
                  
                  </ol>
                      
                  <div>{this.state.forms}</div>
                  
                  <ButtonToolbar>
                    <ButtonGroup className="mr-2" aria-label="First group">
                        <Button variant='secondary' onClick={() => this.addForm()}> Add Athlete</Button>
                    </ButtonGroup>
                    <ButtonGroup className="mr-2" >
                        <Button onClick={this.handleSubmit}>Submit</Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                  
                {this.getErrorMessage(this.state.error)}

              
                </Card.Body>
              </Card>                            
        </div>
      );
    
  }
}

export default ComparisonHome;
