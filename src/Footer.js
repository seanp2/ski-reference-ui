import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import CenterView from './CenterView';

export default class Footer extends React.Component {
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                Contact: pomerantz.s@husky.neu.edu
            </div>
        )
    }
}