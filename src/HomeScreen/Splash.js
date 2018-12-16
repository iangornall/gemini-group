import React from 'react';
import { withResizeDetector } from 'react-resize-detector';
import Button from '../shared/Button';
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
    this.updateContainer();
  }
  componentDidUpdate(prevProps) {
    if(this.props.width != prevProps.width){
      this.updateContainer();
    }
  }
  updateContainer() {
    let containerRect = this.container.current.getBoundingClientRect();
    this.setState({
      width: containerRect.width,
      x: containerRect.left,
      y: containerRect.top
    });
  }
  render(){
    return (
      <div ref={this.container} className="splash-container" style={{
        backgroundSize: this.state.width,
        backgroundPosition: `${this.state.x}px ${this.state.y - (this.props.scrollY ? 32 : 0)}px`
      }}>
        <div className="splash-content" style={{opacity: 1 - this.props.scrollY / 200}}>
          <div className="splash-title" style={{marginTop: this.state.width / 3}}>Rent to Own</div>
          <div><span className="splash-subtitle">Do these awesome things</span></div>
          <div>
            <Button>Do Stuff</Button>
            <Button>Do Stuff</Button>        
          </div>
          <hr class="separator" />
        </div>
      </div>
    )
  }
}
export default withResizeDetector(Splash, {handleWidth: true, resizableElementId: 'root'});