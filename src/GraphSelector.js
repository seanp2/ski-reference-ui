import React from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart } from "react-google-charts";

class GraphSelector extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
          xAxis:"Bib",
          yAxis:"FIS Score",
          graph:"bib_vs_score",
          selectedData:[],
          
      }
      this.setData = this.setData.bind(this); 
      this.getBibVsScoreData = this.getBibVsScoreData.bind(this);
      this.getRankVsCombinedTimeData = this.getRankVsCombinedTimeData.bind(this);
      this.getOptions = this.getOptions.bind(this);
      this.setSelectGraph = this.setSelectGraph.bind(this);
      this.setData();

    }



  setSelectGraph(newGraph) {
      this.setState({
          graph:newGraph
      })
      
      if(newGraph === "bib_vs_score"){
          this.setState({
              xAxis:"Bib",
              yAxis:"FIS Score"
          })
      } else if(newGraph === "rank_vs_score"){
        this.setState({
            xAxis:"Rank",
            yAxis:"FIS Score"
        })
    }
    this.setData();
  }



  setData(graph) {
    let data =[]
    if (graph === "bib_vs_score") {
        data =  this.getBibVsScoreData();
    } else if (graph === "rank_vs_score") {
        data = this.getRankVsCombinedTimeData();
    } 
    return data;
  }

 


  getOptions(xAxis, yAxis) {
    return { 
          title:  xAxis + " vs. "+ yAxis + " comparison", 
          hAxis: {
            title:  xAxis, 
            minValue: 0, 
            maxValue: this.props.data.length,
            gridlines: { 
              count: 10 
            }
          }, 
          vAxis: {
            title: yAxis, 
            minValue: 0, 
            maxValue: this.props.data.length,
            gridlines: { 
              count: 10 
            }
          },
          legend: 'none',
          pointSize: 4}
  }

  getColor(raceAthlete) {
    let color;
    if (raceAthlete.result.combined === "DNF") {
      color = "red";
    } else if (raceAthlete.scored) {
      color = "lightgreen";
    }
    else {
      color = "blue";
    }
    return color
  }
   
  getTooltip(raceAthlete) {
      return raceAthlete.lastfirstName + "\nBib: " + raceAthlete.result.bib + "\nRank: "
       + raceAthlete.result.rank + "\nScore: " + raceAthlete.result.score;

  }

  getBibVsScoreData() {
    let data = []
    data[0] =["Bib", "FIS Score", {type: 'string', role: 'tooltip'},{role : 'style'}]
    for (let i = 0; i< this.props.data.length; i++) {
        const color = this.getColor(this.props.data[i]);
        let dataPoint = [parseInt(this.props.data[i].result.bib), parseFloat(this.props.data[i].result.score), this.getTooltip(this.props.data[i]), color   ]
        data[i + 1] = dataPoint;
    }
    return data;
  }
  getRankVsCombinedTimeData() {
    let data = []
    data[0] = ["Rank", "FIS Score", {type: 'string', role: 'tooltip'},{role : 'style'}];
    for (let i = 0; i< this.props.data.length; i++) {
        const color = this.getColor(this.props.data[i]);
        let dataPoint = [parseInt(this.props.data[i].result.rank), parseFloat(this.props.data[i].result.score), this.getTooltip(this.props.data[i]), color  ]
        data[i + 1] = dataPoint;
    }
    return data;
  }

  getChart(graph) {
    return (
      <Chart
          chartType="ScatterChart"
          data={this.setData(this.state.graph)}
          options={this.getOptions(this.state.xAxis,this.state.yAxis)}
          width="100%"
          height="400px"
          legendToggle
        />
    )
  }

  render() {
    return (
    <div>
        <Nav activeKey={this.state.graph} onSelect={(eventKey) => {this.setSelectGraph(`${eventKey}`)}} variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link eventKey='bib_vs_score'>Bib vs. FIS Score</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='rank_vs_score' >Rank vs. FIS Score</Nav.Link>
            </Nav.Item>
        </Nav>
        {this.getChart(this.state.graph)}
         
    </div> 

    );
  }
}

export default GraphSelector;
