import React from 'react';
import PropTypes from "prop-types";

export default class ColorChangeBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      background: props.currentBackground
    };
  }

  onChangeColorClick = () => {
    this.setState({
      background: this.props.colorChanger()
    })
  }

  style = {
    "width": "75%",
    "height": "30em",
    "margin": "auto",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "border": ".5em solid black"
  }

  btnStyle = {
    "padding": ".5em 1em",
    "backgroundColor": "black",
    "color": "white",
    "fontSize": "1.5rem",
    "border": "none",
    "borderRadius": ".5em"
  }

  render() {
    return (
      <div style={{...this.style, ...this.state.background}}>
        <div>
          <h2>Change the color of this box!</h2>
          <button style={this.btnStyle} onClick={this.onChangeColorClick}>change</button>
        </div>
      </div>
    )
  }
}

ColorChangeBox.propTypes = {
  currentBackground: PropTypes.object,
  colorChanger: PropTypes.func
}
