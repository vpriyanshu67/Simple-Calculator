import React, { Component } from 'react';
import "./display.css";

class Display extends Component {
    state = {  }
    render() { 
       return(
        <div className = "Display">
            {this.props.data}
        </div>
       );
    }
}
 
export default Display;