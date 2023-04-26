import React,{Component } from "react";
import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";

class App extends Component() {
  constructor(props){
    super(props);
    this.state={
      currentScore:0,
      bestScore:0,
      
    };
    this.handleAnswer=this.handleAnswer.bind(this);
    this.handleScore=this.handleScore.bind(this);
  }
  handleScore(increment){
    if(increment===true){
      this.setState({
        currentScore:this.state.currentScore+1
      })
    }else{
      this.setState({
         currentScore: 0,
      })
     
    }
  }
  render(){
    const{currentScore,bestScore}=this.state;
    return (
    <div className="App">
      <Header currentScore={currentScore} bestScore={bestScore}/>
      <Game handleScore={handleScore}/>
    </div>
  )
  }
}

export default App;
