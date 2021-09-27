import React from "react";
import "./thumbnail.scss";

function defIfUndef(value, defaultValue) {
  return value === undefined ? defaultValue : value;
}

export default class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    let defaultParams = {
      content: "Contenu",
      // visible: false, // visibility
      autoHide: true, // to use auto hide, v-model with a boolean for visibility must exist in parent component
      autoHideTime: 3000, // // sets timeout before close in ms
      closeCross: false, //displays cross on the right to close thumbnail
      position: "center", // right, left, centered available, thumbnail will always be on the bottom of th screen
      thumbnailType: "neutral", // neutral, success, error - changes the background color
      detailsButton: false,
      width: "auto",
      computedStyle: { bottom: "-100px" },
      showDetails: () => {
        console.warn(
          "No function was provided to Thumbnail 'showDetails' prop"
        );
      },
    };
    this.state = {
      setParams: defaultParams,
      ...defaultParams,
    };
    this.hideThumbnail = this.hideThumbnail.bind(this);
    this.computedClass = this.computedClass.bind(this);
  }

  componentDidMount() {
    Thumbnail.showThumbnail = Thumbnail.showThumbnail.bind(this);
    Thumbnail.message = Thumbnail.message.bind(this);
    Thumbnail.set = Thumbnail.set.bind(this);
  }

  static set(params) {
    let newSetParams = { ...this.state.setParams, ...params };
    this.setState({ setParams: newSetParams });
  }

  static message(params) {
    params = defIfUndef(params, {});
    setTimeout(() => {
      // used to let the Thumbnail.set to be effective
      for (let param in this.state.setParams) {
        params[param] = defIfUndef(params[param], this.state.setParams[param]); // if params[param] === undefined, sets it with this.state.setParams[param]
      }
      this.setState({ ...params }, () => {
        Thumbnail.showThumbnail();
      });
    }, 100);
  }

  static showThumbnail() {
    this.setState({ computedStyle: { bottom: "3vh", opacity: "100" } }, () => {
      if (this.state.autoHide)
        setTimeout(() => {
          this.hideThumbnail();
        }, this.state.autoHideTime);
    });
  }

  hideThumbnail() {
    this.setState({ computedStyle: { bottom: "-100px", opacity: "0" } });
  }

  computedClass() {
    return (
      "composant-Thumbnail " +
      this.state.position +
      " " +
      this.state.thumbnailType.toLowerCase()
    );
  }

  render() {
    return (
      <div>
        <div
          // v-if="visible"
          className={this.computedClass()}
          // :style="`width: ${width};`"
          // onClick={this.hideThumbnail}
          style={this.state.computedStyle}
        >
          <div className="texte-Thumbnail">{this.state.content}</div>
          {this.state.closeCross || !this.state.autoHide ? (
            <div
              v-if="closeCross"
              className="frame-croix clickable"
              title="fermer"
              onClick={this.hideThumbnail}
            >
              ✖️
            </div>
          ) : (
            ""
          )}
          {this.state.detailsButton ? (
            <div
              className="get-details clickable"
              title="détails"
              onClick={this.state.showDetails}
            >
              ℹ️
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

Thumbnail.defaultProps = {
  content: "Contenu",
  autoHide: true, // to use auto hide, v-model with a boolean for visibility must exist in parent component
  autoHideTime: 3000, // // sets timeout before close in ms
  closeCross: true, //displays cross on the right to close thumbnail
  position: "center", // right, left, centered available, thumbnail will always be on the bottom of th screen
  thumbnailType: "neutral", // neutral, success, error - changes the background color
  detailsButton: false,
  width: "auto",
};
