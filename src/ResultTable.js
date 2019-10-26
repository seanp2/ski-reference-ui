import React from 'react';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import ResultRow from './ResultRow';
import 'bootstrap/dist/css/bootstrap.min.css';


class ResultTable extends React.Component {

  constructor(props) {
      super(props)
      
      this.state = {
        table:'all',
        scorers:[]
      }
      this.getRows = this.getRows.bind(this)
      this.setSelectGraph = this.setSelectGraph.bind(this)
    
  }

  async componentDidMount() {
    await fetch("http://ski-reference-api.us-east-2.elasticbeanstalk.com/results/" + this.props.raceID + "/scorers")
    .then(response => response.json())
    .then(jsonData => this.setState({scorers:jsonData}))
  }
  getRows() {
    let rows= []
    let results = []
    if (this.state.table === 'all') {
        results = this.props.result
    } else {
        results = this.state.scorers
    }
    for(let i=0; i < results.length;i++) {
    rows[i] = <ResultRow result={results[i]}/>
    }
    return rows;
  }

  setSelectGraph(eventKey) {
      this.setState({
        table:eventKey
      })
  }

  render() {
    return (
    <div className="ResultTable">        
        <Nav  fill variant="tabs" activeKey={this.state.table} onSelect={(eventKey) => {this.setSelectGraph(`${eventKey}`)}} variant="tabs" defaultActiveKey="all">
            <Nav.Item>
                <Nav.Link eventKey='all' >All</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='scorers'>Scorers</Nav.Link>
            </Nav.Item>
        </Nav>
        <Table striped>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Bib</th>
                    <th>Competitor ID</th>
                    <th>Name</th>
                    <th>Nation</th>
                    <th>Birthyear</th>
                    <th>Run 1 Time</th>
                    <th>Run 2 Time</th>
                    <th>Combined Time</th>
                    <th>Prev. FIS Points</th>

                    <th>FIS Score</th>

                    
                </tr>
            </thead>
            <tbody>
              {this.getRows()}  
            </tbody>    
        </Table>
    </div> 

    );
  }
}

export default ResultTable;
