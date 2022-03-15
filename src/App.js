import React, { Component } from 'react'
import "./App.css"
export default class App extends Component {
  state={
    count:0,
    thisShow:true,
    
  }
  isShow=()=>{
    this.setState({thisShow:!this.state.thisShow})
  }
  increment=()=>{
    this.setState({count:this.state.count+1})
  }
  decrement=()=>{
    this.setState({count:this.state.count-1})
  }
  componentDidMount() {
    setInterval(() => {
     this.setState({count:this.state.count+1})
    }, 1000);
  }
  
  render() {
    return (
      <div className='App'>
        <button onClick={this.isShow}>{this.state.thisShow?"Hide":"Show"}</button>
      
        {
          this.state.thisShow&& <div>
                <h1>{this.state.count}</h1>
                <img src="https://www.sofoot.com/IMG/img_580_380_center_articles-511535.jpg" alt="" />
                <h1>Conor McGregor <br /> né le 14 juillet 1988 <br />Fighting Championship (UFC) </h1>
        <button onClick={this.increment} >+</button>
        <button onClick={this.decrement} >-</button>
          </div>
        }
      </div>
      
    )
  }
}
