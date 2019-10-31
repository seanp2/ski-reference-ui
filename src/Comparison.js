import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'

class Comparison extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sharedResults:[],
            fetching:true,
            athletes:[]
        }
        this.getSharedResults = this.getSharedResults.bind(this)
        this.handleError = this.handleError.bind(this)
        this.getResultComponents = this.getResultComponents.bind(this)
        this.getSingleResultComponent = this.getSingleResultComponent.bind(this)
    }

    async getSharedResults() {
        let fisIdsRequestArray = "";
        for(let i = 0; i < this.props.fisIds.length; i++) {
            fisIdsRequestArray += this.props.fisIds[i] + ","
        }
        let data =[]
        await fetch("http://ski-reference-api.us-east-2.elasticbeanstalk.com/comparison/" + fisIdsRequestArray.substr(0,fisIdsRequestArray.length - 1))
        .then(response => response.json())
        .then(jsonData => data =  jsonData)
        .then(() => this.setState({fetching:false}))
        .catch((error) => {return this.handleError();});
        return data;
    }

    handleError() {
        // TODO: 
    }

    getSingleResultComponent(sharedResult) {
        let individualAthleteRows = []
        let venue;
        let date;
        let raceID;
        let discipline;
        for (let i = 0; i < this.state.sharedResults.athletes.length; i ++ ) {
            venue = sharedResult[i].venue;
            date = sharedResult[i].date;
            raceID = sharedResult[i].raceID;
            discipline = sharedResult[i].discipline
            individualAthleteRows[i] = (<tr>
                                            <td>{this.state.sharedResults.athletes[i].name}</td>
                                            <td>{sharedResult[i].rank}</td>
                                            <td>{sharedResult[i].score}</td>
                                        </tr>)
        }
        return (<div style={{"padding":"20px"}}>
            <div><a style={{"color":"black"}} target="_blank" href={"https://www.fis-ski.com/DB/general/results.html?sectorcode=AL&raceid=" + raceID}><h3>{venue} {discipline}: {date.month + "/" + date.day + "/" + date.year}</h3></a></div>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Name</th>
                <th>Rank</th>
                <th>Score</th>
                </tr>
            </thead>
            <tbody>
            {individualAthleteRows}
            </tbody>
            </Table>
        </div>)

    }
    
    getResultComponents() {
        let resultComponents = []
        if (this.state.sharedResults.hasOwnProperty('sharedResults')) {
            for (let i = 0; i < this.state.sharedResults.sharedResults.length; i ++) {
                resultComponents[i] = this.getSingleResultComponent(this.state.sharedResults.sharedResults[i])
            }
        }
        return(<div>
            {resultComponents}
        </div>)
    }

    async componentDidMount() {
        const results = await this.getSharedResults()
        this.setState({
            sharedResults:results,
        })
    }
    render() {
        if (this.state.fetching) {
            return (
                <div className='vertical_horizontal_centered'>       
                  <Spinner animation="grow"/>
                </div>
            )
        } else {
            return (
                <div>
                    {this.getResultComponents(this.state.sharedResults)}
                </div>
            )
        }
    }
}

export default Comparison;