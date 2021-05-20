import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <div><Cell value="#00F" /></div>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => 
    <div className="row">{this.genRow(rowVals)}</div>)
    
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}
// Matrix.default = {
//   values: [
//     ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
//     ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
//     ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
//     ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
//     ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
//     ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
//     ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
//     ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
//     ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
//     ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F']
//   ]
  
// }