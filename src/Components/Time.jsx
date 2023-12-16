import React, { Component } from 'react'

export default class  extends Component {
constructor(props){
    super(props)
    this.state={
        time:new Date().toLocaleTimeString()
    }
}


componentDidMount(){
   this.setTime= setInterval(()=>{
    this.setState({
        time:new Date().toLocaleTimeString()
    })
  console.log(new Date().toLocaleTimeString())
   },1000);

}
componentWillUnmount(){
    clearInterval(this.setTime)
}
  render() {
    return (
      <>
<h2>{this.state.time}</h2>

      </>
    )
  }
}
