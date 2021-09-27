import React from "react";
import { Transition } from "react-transition-group";

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export default class ImageViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.updateShow = this.updateShow.bind(this);
  }

  grayMaskStyle() {
    return {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: "rgba(0,0,0,0.5)",
      zIndex: 20,
    };
  }

  imageStyle() {
    return {
      position: "fixed",
      top: "10%",
      height: "80%",
      left: "50%",
      transform: `translateX(-50%)`,
      background: "rgba(0,0,0,0.5)",

      zIndex: 30,
    };
  }

  updateShow() {
    if (this.props.visible)
      setTimeout(() => this.setState({ show: true }), 100);
    else this.setState({ show: false });
  }

  render() {
    // this.updateShow();
    return (
      <Transition in={this.props.visible} timeout={500}>
        {(state) => (
          <div
            style={{
              opacity: 0,
              transition: "opacity 500ms",
              ...transitionStyles[state],
            }}
          >
            <img
              src={"uploads/" + this.props.image.imageFile}
              alt={this.props.image.name}
              style={this.imageStyle()}
            />
            <div
              className="gray-mask"
              style={this.grayMaskStyle()}
              onClick={() => this.props.setVisibility(false)}
            ></div>
          </div>
        )}
      </Transition>
    );
  }
}

ImageViewer.defaultProps = {
  image: {
    src: "",
    name: "",
  },
};
