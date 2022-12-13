import React, { Component } from 'react'

export default class Clickcounter extends Component {
  constructor(props) {
    super(props)
  

    this.state = {count:0}
  
  }
  render() {
    return (
      <>
      <div>
        <button onMouseOver={this.inc}>Click{this.state.count}</button>
      </div>
      
      <div>
        <button onMouseOver={this.inc}>priyadharshikka{this.state.count}</button>
      </div>
      </>
    )
  }
  inc=()=>{this.setState({count:this.state.count+1})}
}