import React, { useState } from "react";

function MovableCard({ image, moveImage, position, setDraggedPosition }) {
  const [hovered, setHovered] = useState(false);
  let whiteColumn = {
    height: "100%",
    // height: "10px",
    width: "100%",
    // backgroundColor: "blue",
    // backgroundRepeat: "repeat-y",
  };
  if (image.isEmpty) {
    return (
      <div
        // className="card shadow-sm mt-3"
        style={{
          // background: hovered ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)",
          ...whiteColumn,
        }}
        // onDragEnter={() => {
        //   setHovered(true);
        // }}
        // onDragLeave={(e) => {
        //   setHovered(false);
        // }}
        onDrop={(e) => {
          setHovered(false);
          moveImage(position);
        }}
        onDragOver={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <div style={whiteColumn}></div>
      </div>
    );
  }
  return (
    <div
      className={"card shadow-sm mt-3"}
      style={{ background: hovered ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)" }}
      onDragEnter={() => {
        setHovered(true);
      }}
      onDragLeave={(e) => {
        setHovered(false);
      }}
      onDrop={(e) => {
        setHovered(false);
        moveImage(position);
      }}
      onDragOver={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <img
        src={"uploads/" + image.imageFile}
        alt={image.name}
        onDragStart={() => setDraggedPosition(position)}
        width="100%"
      />
      <div className="card-body">
        <p className="card-text">{image.name}</p>
      </div>
    </div>
  );
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
  handleDrag(e) {
    // console.log("e", e);
  }

  handleDragOver(e) {
    // console.log("e", e);
  }

  setDraggedPosition(draggedPosition) {
    this.setState({ ...this.state, draggedPosition });
  }

  moveImage(landingPosition) {
    // console.log("this.state.listeImagesTriee", this.state.listeImagesTriee);
    let draggedColumn = this.state.draggedPosition.column;
    let draggedRow = this.state.draggedPosition.row;
    let landingColumn = landingPosition.column;
    let landingRow = landingPosition.row;

    if (landingPosition === this.state.draggedPosition) return;
    // if (landingPosition >= this.state.draggedPosition) landingPosition--;
    let newList = JSON.parse(JSON.stringify(this.state.listeImagesTriee));
    // let newList = [...this.state.listeImagesTriee];
    // console.log("newList", newList);
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
          // setDraggedPosition={this.setDraggedPosition}
        />
      );
    return this.state.listeImagesTriee[column].map((image, row) => (
      // <div className="col-md-4" key={"col-" + column + "-row-" + row}>
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
                  // setDraggedPosition={this.setDraggedPosition}
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
