import React from 'react';
import p5 from 'p5';

// Taken from https://github.com/NeroCor/react-p5-wrapper with small change
export default class P5Wrapper extends React.Component {

  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.wrapper);
    if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props);
    }
  }

  componentWillReceiveProps(newprops) {
    if(this.props.sketch !== newprops.sketch){
      this.wrapper.removeChild(this.wrapper.childNodes[0]);
      this.canvas = new p5(newprops.sketch, this.wrapper);
    }
    if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false
  }

  componentWillUnmount() {
    this.canvas.remove()
  }

  render() {
    return <div style={{display: 'block'}} ref={wrapper => this.wrapper = wrapper}></div>;
  }
}
