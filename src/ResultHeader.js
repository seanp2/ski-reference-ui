import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


class ResultHeader extends React.Component {

    render() {
        return(
            <div style = {{"padding":"4vh","background-image": "url('https://data.fis-ski.com/static/apps/fis_templates/css/images/content-background.jpg')", backgroundSize: 'cover'}} >
                <div>
                    <Container>
                        <Col>
                        <h1>{this.props.venue + ", " +  this.props.event}</h1>
                        <p>
                        {this.props.month +"/" + this.props.day + "/" + this.props.year}
                        </p>
                        </Col>
                        <Col>
                        <ul>
                            <li>
                                Penalty: {this.props.penalty}
                            </li>
                            <li>
                                Finish Rate: {this.props.finishRate}
                            </li>
                            <li>
                                Number of Scorers: {this.props.numScorers}
                            </li>
                        </ul>
                        </Col>
                    </Container>
                </div>
            </div>
        )
    }
}

export default ResultHeader;
