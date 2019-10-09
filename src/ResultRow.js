import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class ResultRow extends React.Component {
    isNumber(n) { 
        return !isNaN(parseFloat(n)) && !isNaN(n - 0) 
    }
    secondsToMinutes(time) { 
        if(this.isNumber(time)) {
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            let digitPlaceHolder = ""
            if (seconds < 10) {
                digitPlaceHolder = "0";
            }
            return minutes + ":" + digitPlaceHolder +  seconds.toFixed(2);
        } else {
            return time;
        }
    }
  render() {
    if(this.props.speedRace===true)   {
        return (
            <tr>
                <td>{this.props.rank}</td>
                <td>{this.props.result.competitorID}</td>
                <td>{this.props.result.lastfirstName}</td>
                <td>{this.props.result.nation}</td>
                <td>{this.props.result.birthyear}</td>
                <td>{this.secondsToMinutes(this.props.result.result.combined)}</td>
                <td>{this.props.result.previousPoints}</td>
                <td>{this.props.result.result.score}</td>
            </tr>
    

        );
    } else { 
        return(
            <tr>
                <td>{this.props.rank}</td>
                <td>{this.props.result.competitorID}</td>
                <td>{this.props.result.lastfirstName}</td>
                <td>{this.props.result.nation}</td>
                <td>{this.props.result.birthyear}</td>
                <td>{this.secondsToMinutes(this.props.result.result.firstRun)}</td>
                <td>{this.secondsToMinutes(this.props.result.result.secondRun)}</td>
                <td>{this.secondsToMinutes(this.props.result.result.combined)}</td>
                <td>{this.props.result.previousPoints}</td>
                <td>{this.props.result.result.score}</td>
            </tr>
        );
    
    }
  }
}

export default ResultRow;
