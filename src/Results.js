import React from 'react';
import ResultTable from './ResultTable';
import GraphSelector from './GraphSelector';
import Spinner from 'react-bootstrap/Spinner';
import ResultHeader from './ResultHeader';
import 'bootstrap/dist/css/bootstrap.min.css';

class Results extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result:[],
      scorers:[],
      date:{},
      venue:"",
      event:"",
      finishRate:0,
      loading:true,
      numScorers:0
    }
  }


  handleError() {
    this.props.handleError();
  }

  async componentDidMount() {
    let race = null;
    
    try {
      race = await this.getResults();
    } catch(error) {
      return;
    }
  
    this.setState({
      result:race.results,
      venue:race.venue,
      date:race.date,
      event:race.event,
      finishRate:race.finishRate,
      penalty:race.penalty,
      dnfs:race.dnfs,
    })
    
    if (  race.scoringIndices != null ) {
      this.setState({numScorers:race.scoringIndices.length })
    }
  }

  async getResults() {
    let data = [];
    await fetch("http://ski-reference-api.us-east-2.elasticbeanstalk.com/results/" + this.props.raceID)
    .then(response => response.json())
    .then(jsonData => data =  jsonData)
    .then(() => this.setState({loading:false}))
    .catch((error) => {return this.handleError();});
    return data;
  }
  render() {
    if (!this.state.loading) { 
      return (
        <div className="Results">
          <ResultHeader numScorers= {this.state.numScorers} penalty = {this.state.penalty} finishRate = {this.state.finishRate.toFixed(2)} venue = {this.state.venue} month = {this.state.date.month} day={this.state.date.day} year={this.state.date.year} event={this.state.event}/>
          <GraphSelector scorers = {this.state.scorers} data ={this.state.result}/>
          <ResultTable scorers = {this.state.scorers} result={this.state.result} raceID={this.props.raceID}/>
        </div>
      );
    }
    else {
      return (
        <div className='vertical_horizontal_centered'>       
          <Spinner animation="grow"/>
        </div>
      )
    }
  }
}

export default Results;
