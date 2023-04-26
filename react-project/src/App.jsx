import React,{Component } from "react";
import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      currentScore:0,
      bestScore:0,
    };
    this.handleScore=this.handleScore.bind(this);
  }
  
  handleScore(increment){
    console.log("increment is "+ increment)
    if(increment===true){
      this.setState({
        currentScore:this.state.currentScore+1
      })
    }else{
      console.log("getting an else")
      console.log("current"+this.state.currentScore+"best"+this.state.bestScore)

      if(this.state.currentScore>=this.state.bestScore){
      this.setState({
        bestScore:this.state.currentScore,
      })
      console.log(this.bestScore);
    }

      this.setState({
         currentScore: 0,
      });
    
    }
  }
  render(){
    const{currentScore,bestScore}=this.state;
    return (
    <div className="App">
      <Header currentScore={currentScore} bestScore={bestScore}/>
      <Game handleScore={this.handleScore}/>
    </div>
  )
  }
}

export default App;
