import React, { useState } from "react";

function MovableCard({ image, moveImage, index, setDraggedIndex }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={"card shadow-sm"}
      style={{ background: hovered ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)" }}
      onDragEnter={() => {
        setHovered(true);
      }}
      onDragLeave={(e) => {
        setHovered(false);
      }}
      onDrop={(e) => {
        setHovered(false);

        moveImage(index);
      }}
      onDragOver={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <img
        src={"uploads/" + image.imageFile}
        alt={image.name}
        onDragStart={() => setDraggedIndex(index)}
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
    // for (let key in this) {
    this.state = {
      draggedIndex: undefined,
      listeImagesTriee: props.listeImages,
    };
    this.setDraggedIndex = this.setDraggedIndex.bind(this);
    this.moveImage = this.moveImage.bind(this);
    // }
  }
  handleDrag(e) {
    // console.log("e", e);
  }

  handleDragOver(e) {
    // console.log("e", e);
  }

  setDraggedIndex(index) {
    this.setState({ ...this.state, draggedIndex: index });
  }

  moveImage(landingIndex) {
    if (landingIndex === this.state.draggedIndex) return;
    // if (landingIndex >= this.state.draggedIndex) landingIndex--;
    let newList = [...this.state.listeImagesTriee];
    newList.splice(this.state.draggedIndex, 1);
    newList.splice(
      landingIndex,
      0,
      this.state.listeImagesTriee[this.state.draggedIndex]
    );
    this.setState({ ...this.state, listeImagesTriee: newList });
  }

  render() {
    return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-1">
        {this.state.listeImagesTriee.map((image, index) => (
          <div className="col" key={image.id}>
            <MovableCard
              image={image}
              moveImage={this.moveImage}
              index={index}
              setDraggedIndex={this.setDraggedIndex}
            />
          </div>
        ))}
      </div>
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
