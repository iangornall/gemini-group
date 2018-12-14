import React from 'react';
import { withResizeDetector } from 'react-resize-detector';
import './Splash.css';
class Splash extends React.Component{
  constructor(props){
    super(props);
    this.container = React.createRef();
    this.updateContainer = this.updateContainer.bind(this);
    this.state = {
      width: 0,
      x: 0,
      y: 0
    }
  }
  componentDidMount() {
    console.dir(this.container.current);
    this.updateContainer();
  }
  componentDidUpdate(prevProps) {
    if(this.props.width != prevProps.width){
      this.updateContainer();
    }
  }
  updateContainer() {
    this.setState({
      width: this.container.current.offsetWidth,
      x: this.container.current.getBoundingClientRect().left,
      y: this.container.current.getBoundingClientRect().top
    });
  }
  render(){
    return (
      <div ref={this.container} className="splash-container" style={{
        backgroundSize: this.state.width,
        backgroundPosition: `${this.state.x}px ${this.state.y - (this.props.scrollY ? 32 : 0)}px`
      }}>
        <div className="splash-content" style={{opacity: 1 - this.props.scrollY / 200}}>
          <div className="splash-title">Rent to Own</div>
          <div><span className="splash-subtitle">Do these awesome things</span></div>
          <div>
            <a className="splash-button">Do Stuff</a>
            <a className="splash-button">Do Stuff</a>        
          </div>
        </div>
      </div>
    )
  }
}
export default withResizeDetector(Splash, {handleWidth: true, resizableElementId: 'root'});