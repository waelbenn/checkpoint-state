import React, { Component } from 'react'
import wael from './wael.jpg'
 class App extends Component {
   constructor(props){
     super(props);
     this.state={
       fullName:"wael ben abdallah",
       bio:"studying web dev at GoMyCode",
       imgSrc:wael,
       profession:"student",
       isWorking:false,
       show:false,
       counter:0
     }
   }
  btnShow=()=>this.setState({show:!this.state.show})
  componentDidMount(){
    console.log("Component was mounted");
    this.setState({interval: setInterval(()=>{this.setState({counter: this.state.counter + 1})},1000)});
  }
  render() {
   
    return (
      <div className='app-header'>
        
          <button onClick={this.btnShow}>show state</button>
{(this.state.show)&&
<div><h1>
hello my name is {this.state.fullName},
i am a {this.state.profession},
i am currently {this.state.bio}.
{this.state.show}
<img src={this.state.imgSrc}/></h1>
<h1>{this.state.counter}</h1>
</div>}
</div>
    )

  }
  
}

export default App