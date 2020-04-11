import React,{Component} from 'react';
import Timer from './Timer';

class InfiniteTimer extends Component{
  state = {
    time: 1000 * 1000
  }

  onTimeEnd = () => this.setState({ time: 1000 * 1000 })
  
  onTimeChange = (time) => this.setState({ time })

  render(){
    return (
      <Timer
      onTick={(time) => console.log("Осталось времени: " + time)}
      time={this.state.time} 
      onTimeStart={(timeLeft) => console.log("Таймер запущен!")}
      onTimePause={(timeLeft) => console.log("Таймер на паузе!")}
      onTimeChange={this.onTimeChange} 
      onTimeEnd={this.onTimeEnd}
      step={100}
       autostart={false}
       />
    )
  }
}

export default InfiniteTimer;