import React from 'react';
import Table from 'react-bootstrap/Table';
import ResultRow from './ResultRow';
import 'bootstrap/dist/css/bootstrap.min.css';


class ResultTable extends React.Component {

  constructor(props) {
      super(props)
      this.getRows = this.getRows.bind(this)
    
  }
  getRows() {
      let rows= []
      for(let i=0; i < this.props.result.length;i++) {
          rows[i] = <ResultRow rank={i + 1} result={this.props.result[i]}/>
      }
      return rows;
  }
  render() {
    return (
    <div className="ResultTable">
        <Table>
            <thead>
                <tr>
                    <th>Rank</th>
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
