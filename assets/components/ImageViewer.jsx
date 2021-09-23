import React from "react";

export default class ImageViewer extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    if (this.props.visible)
      return (
        <div>
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
      );
    else return <div></div>;
  }
}

ImageViewer.defaultProps = {
  image: {
    src: "",
    name: "",
  },
};
