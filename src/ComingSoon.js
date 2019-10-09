import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


class ComingSoon extends React.Component {

 

  render() {
    return (
        <div style = {{"background-image": "url('https://data.fis-ski.com/static/apps/fis_templates/css/images/content-background.jpg')", backgroundSize: 'cover', height:"100vh"}} className="background-image" >
            <div style={{ 'padding': '50px'}}>
                <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coming soon...</h1>
            </div>
        </div>
    );
  }
}

export default ComingSoon;
