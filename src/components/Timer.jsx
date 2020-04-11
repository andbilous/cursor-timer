import React,{Component} from 'react';

class Timer extends  Component{
  constructor(){
    super()
    this.state={
      remainingTime:0,
      isStopped: true,
  }
}
  componentDidMount(){
    this.setState({
      remainingTime: this.props.time
    },()=>{
      if(this.props.autostart){
        this.setState({
          isStopped: false
        },()=> this.onStart())
      }
    })
  }

   delay(ms) {
    return new Promise(res => setTimeout(res, ms));
   }

   onStart = async ()=>{
     this.props.onTimeStart(this.state.remainingTime)
     while(this.state.remainingTime>0){
      if(this.state.isStopped){
        break
      }
      this.setState({
        remainingTime:this.state.remainingTime-this.props.step
      },()=>{
        this.props.onTick(this.state.remainingTime)
      })
      await this.delay(this.props.step)
     }
     if(this.state.remainingTime===0){
      alert('The End')
      this.props.onTimeEnd()
      this.setState({
        remainingTime: this.props.time,
        isStopped:true
      })
   }
  }


  pause = () => {
    this.setState({
      isStopped: true
    },()=>{
      this.props.onTimePause();
    })

  }

  render(){
    let width= (this.state.remainingTime *100)/this.props.time;
      return (
        <div>
          <button
           onClick={()=>{
              if(this.state.isStopped){
                this.setState({
                  isStopped: false
                },()=>this.onStart())
                
              } else{
                  this.pause()
              }
              
           }
            } 
           style={{marginBottom:'10px'}}>
          {this.state.isStopped ? 'Start':'Pause'}
            </button><br/>
          <div style={{
            width:'1000px',
            margin:'0 auto',
            backgroundColor:'red',
            }}> 
            <div style={{
              width:`${width}%`,
              backgroundColor:'aqua',
              height:'25px'
        
              }}></div>
          </div>
        </div>
      )
  }
}

export default Timer;