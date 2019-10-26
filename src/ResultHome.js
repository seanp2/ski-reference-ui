import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Results from './Results';
import 'bootstrap/dist/css/bootstrap.min.css';


class ResultHome extends React.Component {

  constructor(props) {
    super(props);
    this.state  = {
        view:props.view,
        showSearch:props.showSearch,
        raceID:-1,
        error:props.error
    }
    this.handleChange = this.handleChange.bind(this);
    this.searchRace = this.searchRace.bind(this);
  }
  searchRace(e) {
    e.preventDefault();
      if(this.state.raceID > 0) {
        this.setState({
          showSearch:false
        })
      }
    else {
      this.setState({
        error:true
      })
    }
    
  }


  handleChange(e) {
    e.preventDefault();
    this.setState({
      raceID: this.getParameterByName("raceid", e.target.value),
    })
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

  handleError() {
    this.setState({
      error:true,
      showSearch:true
    })
  }
  
  getParameterByName(name, url) {
    name = name.replace(/[\[\]]/g, '\\$&'); 
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }  

  render() {
    if(this.state.showSearch) {
      return (
        <div style = {{"background-image": "url('https://data.fis-ski.com/static/apps/fis_templates/css/images/content-background.jpg')", 
          display: 'flex',
          justifyContent: 'center',
          padding:'20px',
        backgroundSize: 'cover', height:"100vh"}}  >
          {/* <CenterView> */}
            <Card onClick={() => {this.props.changeView({name: 'result-home'})}} style={{  height: '25rem', width: '30rem' }}>
                <Card.Body>
                  <Card.Title>Result Analysis</Card.Title>
                  <div>
                  Enter in URL's of FIS alpine results for which you would like to which athletes scored, graph visulizations, and which athletes lowered their world rank.
                  </div>
                  <div>
                    <ol align="left">
                    <li>Go to the <a  target="_blank" href = "https://www.fis-ski.com/DB/alpine-skiing/calendar-results.html?noselection=true">FIS Website </a>
                        and go to the race result page you would like to see analysis for.
                    </li>
                    <li>Copy the URL from the race result page on the FIS website.</li>
                    <li>Paste the URL into the search bar below, then press search.</li>
                    </ol>
                  </div>
                  <Form inline onSubmit={this.searchRace} className="result_search">
                  <Form.Group inline controlId="searchRace">
                    <Form.Label inline>Race URL:</Form.Label>
                    &nbsp;
                    <Form.Control inline onChange={this.handleChange} placeholder="Enter Race URL" />
                    &nbsp;

                    <Button  inline type='submit' >Submit</Button>
                  </Form.Group>
              </Form>
              {this.getErrorMessage(this.state.error)}

              
                </Card.Body>
              </Card>              
              
          {/* </CenterView> */}
        </div>
      );
    } else {
      return (
        <div>
          <Results handleError={() => this.handleError()} changeView={()  => this.props.changeView({name:'result-error'})} raceID = {this.state.raceID} />
        </div>
      );
    }
  }
}

export default ResultHome;
