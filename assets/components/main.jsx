import React, { useState } from "react";

const cuteRender = (
  <lottie-player
    src="assets/lottie/dog-walking.json"
    background="transparent"
    speed="1"
    style={{ width: "160px", height: "160px", margin: "0 auto" }}
    loop
    autoplay
  ></lottie-player>
);

class MovableCard extends React.Component {
  // const [hovered, setHovered] = useState(false);
  constructor(props) {
    super(props);
    this.state = {
      whiteColumn: {
        height: "100%",
        width: "100%",
      },
      hovered: false,
      infoDeplacement: {
        textAlign: "center",
        fontSize: "15px",
      },
      displayCutness: true,
    };
    this.styleFromHover = this.styleFromHover.bind(this);
    this.setHovered = this.setHovered.bind(this);
  }

  styleFromHover() {
    return this.state.hovered
      ? {
          // background: "rgba(0,0,0,0.2)",
          transition: "top 0.2s",
          position: "relative",
          top: "100px",
          zIndex: 0,
        }
      : {
          // background: "rgba(0,0,0,0.0)",
          transition: "top 0.2s",
          position: "relative",
          top: "0",
          zIndex: 0,
        };
  }

  styleFromWhiteColumnHover() {
    return this.state.hovered
      ? {
          background: "rgba(0,0,0,0.2)",
          height: "100%",
          width: "100%",
        }
      : {
          background: "rgba(0,0,0,0.0)",
          height: "100%",
          width: "100%",
        };
  }

  setHovered(status) {
    this.setState({ hovered: status });
  }

  render() {
    if (this.props.image.isEmpty) {
      return (
        <div
          style={{
            // ...this.styleFromHover(),
            ...this.styleFromWhiteColumnHover(),
          }}
          onDragEnter={(e) => {
            this.setHovered(true);
            e.stopPropagation();
            e.preventDefault();
          }}
          onDragLeave={(e) => {
            this.setHovered(false);
            e.stopPropagation();
            e.preventDefault();
          }}
          onDrop={(e) => {
            this.setHovered(false);
            this.props.moveImage(this.props.position);
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
      <div className={"card shadow-sm mt-3"}>
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
        <div style={this.styleFromHover()}>
          <img
            src={"uploads/" + this.props.image.imageFile}
            alt={this.props.image.name}
            width="100%"
          />
          <div className="card-body">
            <p className="card-text">{this.props.image.name}</p>
          </div>
        </div>
        <div
          draggable
          style={{
            position: "absolute",
            zIndex: 10,
            background: "rgba(0,0,0,0.0)",

            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
          }}
          onDragEnter={(e) => {
            this.setHovered(true);
            this.setState({ displayCutness: false }, () =>
              setTimeout(() => {
                this.setState({ displayCutness: true });
              }, 200)
            );
            e.stopPropagation();
            e.preventDefault();
          }}
          onDragLeave={(e) => {
            this.setHovered(false);
            e.stopPropagation();
            e.preventDefault();
          }}
          onDragOver={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          onDrop={(e) => {
            this.setHovered(false);
            this.props.moveImage(this.props.position);
          }}
          onDragStart={() => this.props.setDraggedPosition(this.props.position)}
        ></div>
      </div>
    );
  }
}

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      draggedPosition: undefined,
      listeImagesTriee: props.listeImages,
    };
    this.setDraggedPosition = this.setDraggedPosition.bind(this);
    this.moveImage = this.moveImage.bind(this);
    this.listOrEmptyCard = this.listOrEmptyCard.bind(this);
  }

  setDraggedPosition(draggedPosition) {
    this.setState({ ...this.state, draggedPosition });
  }

  moveImage(landingPosition) {
    let draggedColumn = this.state.draggedPosition.column;
    let draggedRow = this.state.draggedPosition.row;
    let landingColumn = landingPosition.column;
    let landingRow = landingPosition.row;

    if (landingPosition === this.state.draggedPosition) return;
    let newList = JSON.parse(JSON.stringify(this.state.listeImagesTriee));
    newList[draggedColumn].splice(draggedRow, 1);
    newList[landingColumn].splice(
      landingRow,
      0,
      this.state.listeImagesTriee[draggedColumn][draggedRow]
    );
    this.setState({ ...this.state, listeImagesTriee: newList });
  }

  listOrEmptyCard(column) {
    if (this.state.listeImagesTriee[column].length === 0)
      return (
        <MovableCard
          key={"empty-column-" + column}
          image={{ isEmpty: true }}
          moveImage={this.moveImage}
          position={{ row: 0, column }}
        />
      );
    return this.state.listeImagesTriee[column].map((image, row) => (
      <MovableCard
        key={image.id}
        image={image}
        moveImage={this.moveImage}
        position={{ row, column }}
        setDraggedPosition={this.setDraggedPosition}
      />
      // </div>
    ));
  }

  render() {
    return (
      <>
        <div className="row">
          {this.state.listeImagesTriee.map((col, column) => (
            <div
              className="col-sm"
              style={{ display: "flex", flexDirection: "column" }}
              key={"column-" + column}
            >
              {this.listOrEmptyCard(column)}
              {col.length > 0 ? (
                <MovableCard
                  key={"empty-column-" + column}
                  image={{ isEmpty: true }}
                  moveImage={this.moveImage}
                  position={{ row: col.length, column }}
                />
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </>
    );
  }
}

const SymfonyData = window.symfonyDataBinding;
const currentRoute = SymfonyData.reactRoute;

const App = () => {
  return (
    <>
      {currentRoute == "book" ? <Images {...SymfonyData.data} /> : ""}
      {currentRoute == "contact" ? <h3>Contact</h3> : ""}
    </>
  );
};

export default App;
