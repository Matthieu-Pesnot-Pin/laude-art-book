import React, { useState } from "react";
import axios from "axios";

import Fab from "@material-ui/core/Fab";
import SaveOutlinedIcon from "@material-ui/icons/SaveOutlined";
import MovableCard from "./MovableCard";
import ImageViewer from "./ImageViewer";

class ImagesGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageAVisualiser: undefined,
      afficherImage: false,
      draggedPosition: undefined,
      listeImagesTriee: props.listeImages,
      categoryMap: {
        ["Bande Dessinée"]: 1,
        ["Illustration"]: 2,
      },
    };
    this.setDraggedPosition = this.setDraggedPosition.bind(this);
    this.moveImage = this.moveImage.bind(this);
    this.listOrEmptyCard = this.listOrEmptyCard.bind(this);
    this.saveDisposition = this.saveDisposition.bind(this);
    this.setAfficherImage = this.setAfficherImage.bind(this);
  }

  setDraggedPosition(draggedPosition) {
    this.setState({ ...this.state, draggedPosition });
  }

  moveImage(landingPosition) {
    let draggedSection = this.state.draggedPosition.section;
    let draggedColumn = this.state.draggedPosition.column;
    let draggedRow = this.state.draggedPosition.row;
    let landingSection = landingPosition.section;
    let landingColumn = landingPosition.column;
    let landingRow = landingPosition.row;
    if (landingPosition === this.state.draggedPosition) return;

    let draggedList = this.state.listeImagesTriee[draggedSection];
    let landingList = this.state.listeImagesTriee[landingSection];

    let movedImage = draggedList[draggedColumn].splice(draggedRow, 1)[0];
    landingList[landingColumn].splice(landingRow, 0, movedImage);

    let recapModifList;
    if (landingSection != draggedSection) {
      // console.log(
      //   `/api/set-category/${landingPosition.imageId}/${landingPosition.imageId}`
      // );
      axios
        .get(
          `/api/set-category/${this.state.draggedPosition.imageId}/${landingPosition.sectionId}`
        )
        .then((response) => {
          try {
            response = response.data;
            if (response.error) console.error(response.message);
            else if (response.success) console.log(response.message);
            else console.error(response);
          } catch (error) {
            console.error(error, response);
          }
        });
    }
    recapModifList = {
      [draggedSection]: draggedList,
      [landingSection]: landingList,
    };
    let newListeGlobale = {
      ...this.state.listeImagesTriee,
      ...recapModifList,
    };
    // console.log("newListeGlobale", newListeGlobale);
    this.setState({ ...this.state, listeImagesTriee: newListeGlobale });
  }

  listOrEmptyCard(column, section) {
    if (this.state.listeImagesTriee[section][column].length === 0)
      return (
        <MovableCard
          key={"empty-column-" + column}
          image={{ isEmpty: true }}
          moveImage={this.moveImage}
          position={{
            row: 0,
            column,
            section,
            sectionId: this.state.categoryMap[section],
          }}
        />
      );
    return this.state.listeImagesTriee[section][column].map((image, row) => (
      <MovableCard
        key={image.id}
        image={image}
        moveImage={this.moveImage}
        position={{
          row,
          column,
          section,
          imageId: image.id,
          sectionId: image.category,
        }}
        setDraggedPosition={this.setDraggedPosition}
        displayImage={(image) => {
          this.setState({
            imageAVisualiser: image,
            afficherImage: true,
          });
        }}
      />
      // </div>
    ));
  }
  saveDisposition() {
    axios({
      method: "POST",
      url: "/api",
      data: {
        type: "frontDispo",
        disposition: this.state.listeImagesTriee,
      },
    })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }

  setAfficherImage(value) {
    this.setState({ afficherImage: value });
  }

  render() {
    const floatingButtonStyle = {
      position: "fixed",
      right: "10%",
      bottom: "10%",
      zIndex: 20,
    };

    return (
      <>
        {Object.keys(this.state.listeImagesTriee).map((section) => (
          <div className="breadcrumb" key={section}>
            <h3>{section}</h3>
            <div
              className="section row"
              style={{
                width: "100%",
              }}
            >
              {this.state.listeImagesTriee[section].map((col, column) => (
                <div
                  className="col-sm"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                  key={"column-" + column}
                >
                  {this.listOrEmptyCard(column, section)}
                  {col.length > 0 ? (
                    <MovableCard
                      key={"empty-column-" + column}
                      image={{ isEmpty: true }}
                      moveImage={this.moveImage}
                      position={{
                        row: col.length,
                        column,
                        section,
                        sectionId: this.state.categoryMap[section],
                      }}
                    />
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <Fab
          variant="extended"
          style={floatingButtonStyle}
          color="primary"
          onClick={this.saveDisposition}
        >
          <SaveOutlinedIcon sx={{ mr: 1 }} />
          Enregistrer
        </Fab>
        <ImageViewer
          image={this.state.imageAVisualiser}
          visible={this.state.afficherImage}
          setVisibility={this.setAfficherImage}
        />
      </>
    );
  }
}

const SymfonyData = window.symfonyDataBinding;
const currentRoute = SymfonyData.reactRoute;

const App = () => {
  return (
    <>
      {currentRoute == "book" ? <ImagesGallery {...SymfonyData.data} /> : ""}
      {currentRoute == "contact" ? <h3>Contact</h3> : ""}
    </>
  );
};

export default App;
