import React from 'react';
import { withResizeDetector } from 'react-resize-detector';
import Button from './Button';
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
        backgroundImage: `url(assets/${this.props.background})`,
        backgroundSize: this.state.width,
        backgroundPosition: `${this.state.x}px ${this.state.y - (this.props.scrollY ? 32 : 0)}px`, 
        minHeight: this.state.width / 3
      }}>
        <div className="splash-content" style={{opacity: 1 - this.props.scrollY / 200}}>
          {this.props.title && <div className="splash-title" style={{marginTop: this.state.width / 3}}>{this.props.title}</div>}
          {this.props.subtitle && <div><span className="splash-subtitle">{this.props.subtitle}</span></div>}
          <div>
            {this.props.buttons && this.props.buttons.map(button => <Button>{button}</Button>)}      
          </div>
        </div>
      </div>
    )
  }
}
export default withResizeDetector(Splash, {handleWidth: true, resizableElementId: 'root'});