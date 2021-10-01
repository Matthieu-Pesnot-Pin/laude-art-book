import React from "react";

export default class MovableCard extends React.Component {
  // const [dragHovered, setDragHovered] = useState(false);
  constructor(props) {
    super(props);
    this.state = {
      dragHovered: false, // La carte est-elle survolée par une carte draggée ?

      // Styles
      whiteColumn: {
        height: "100%",
        width: "100%",
      },
      infoDeplacement: {
        textAlign: "center",
        fontSize: "15px",
      },
      displayCutness: true,
      displayGrayMask: false,
    };

    this.styleFromDragHover = this.styleFromDragHover.bind(this);
    this.setDragHovered = this.setDragHovered.bind(this);
  }

  styleFromDragHover() {
    return this.state.dragHovered
      ? {
          transition: "top 0.2s",
          position: "relative",
          top: "100px",
          zIndex: 0,
        }
      : {
          transition: "top 0.2s",
          position: "relative",
          top: "0",
          zIndex: 0,
        };
  }

  styleFromDragHoverWhiteColumn() {
    return {
      ...(this.state.dragHovered
        ? {
            background: "rgba(0,0,0,0.2)",
            height: "100%",
            width: "100%",
          }
        : {
            background: "rgba(0,0,0,0.0)",
            height: "100%",
            width: "100%",
          }),
      display: "flex",
      minHeight: 100,
      width: "100%",
      zIndex: 10,
    };
  }

  setDragHovered(status) {
    this.setState({ dragHovered: status });
  }
  mainCardStyle() {
    return {
      userSelect: "none",
      // overflow: "hidden",
    };
  }

  styleFromHover() {
    return {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "left",
      fontSize: "1.5rem",
      position: "absolute",
      padding: "100px 40px",
      cursor: "pointer",
      zIndex: 10,
      color: this.state.displayGrayMask
        ? "rgba(50,50,50,1)"
        : "rgba(10,10,10,0)",
      background: this.state.displayGrayMask
        ? "rgba(255,255,255,0.8)"
        : "rgba(255,255,255,0)",
      transition: "background 500ms, color 500ms",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
    };
  }

  render() {
    if (this.props.image.isEmpty) {
      return (
        <div
          // className={"card shadow-sm mt-3"}
          style={{
            // ...this.styleFromDragHover(),
            ...this.styleFromDragHoverWhiteColumn(),
          }}
          onDragEnter={(e) => {
            this.setDragHovered(true);
            e.stopPropagation();
            e.preventDefault();
          }}
          onDragLeave={(e) => {
            this.setDragHovered(false);
            e.stopPropagation();
            e.preventDefault();
          }}
          onDrop={(e) => {
            this.setDragHovered(false);
            this.props.moveImage(this.props.image);
          }}
          onDragOver={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <div style={this.state.whiteColumn}></div>
        </div>
      );
    }

    return (
      <div
        className={"card shadow-sm mt-3"}
        style={this.mainCardStyle()}
        onMouseEnter={() => this.setState({ displayGrayMask: true })}
        onMouseLeave={() => this.setState({ displayGrayMask: false })}
        onClick={() => {
          this.props.displayImage.bind(this, this.props.image)();
          this.setState({ displayGrayMask: false });
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: 0,
            zIndex: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src="assets/images/pitichat.png" alt="pitichat" />
        </div>
        <div style={this.styleFromDragHover()}>
          <img
            src={"uploads/" + this.props.image.imageFile}
            alt={this.props.image.name}
            width="100%"
          />
          {/* <div className="card-body">
            <p className="card-text">{this.props.image.name}</p>
          </div> */}
        </div>
        <div
          draggable={this.props.modeEdition}
          style={this.styleFromHover()}
          onDragEnter={(e) => {
            this.setDragHovered(true);
            this.setState({ displayCutness: false }, () =>
              setTimeout(() => {
                this.setState({ displayCutness: true });
              }, 200)
            );
            e.stopPropagation();
            e.preventDefault();
          }}
          onDragLeave={(e) => {
            this.setDragHovered(false);
            e.stopPropagation();
            e.preventDefault();
          }}
          onDragOver={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          onDrop={(e) => {
            this.setDragHovered(false);
            this.props.moveImage(this.props.image);
          }}
          onDragStart={() => this.props.setDraggedPosition(this.props.image)}
        >
          {this.props.image.name}
        </div>
      </div>
    );
  }
}

MovableCard.defaultProps = {
  displayImage: () => {},
};
