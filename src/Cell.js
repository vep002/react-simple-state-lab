
import React, { Component } from 'react';

export default class Cell extends Component{

   constructor(props) {
       super()
       this.state = {
           color: this.props.value
       }
   }

   render () {
       return (
           <div className='cell' style={{backbroundColor: this.state.color}}></div>
       )
   }

}
