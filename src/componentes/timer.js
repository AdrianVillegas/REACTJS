import React from "react";
// importo mis iconos de material ui
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';



class Timer extends React.Component {
    constructor (props) {
      super(props)
      this.state = {count: 1}
    }
    componentWillUnmount () {
      clearInterval(this.timer)
    }
    tick () {
      this.setState({count: (this.state.count + 1)})
    }
    startTimer () {
      clearInterval(this.timer)
      this.timer = setInterval(this.tick.bind(this), 1000)
    }
    pauseTimer () {
      clearInterval(this.timer)
    }
    render () {
      return (
        //   regreso mi componente de cronometro
        <div className='timer'>
          <h1>{this.state.count}</h1>
          <div className="controles">
            <PlayArrow className="sizeIcon" onClick={this.startTimer.bind(this)}></PlayArrow>
            <Pause className="sizeIcon" onClick={this.pauseTimer.bind(this)}></Pause>
          </div>
        </div>
      )
    }
  }
  
export default Timer;