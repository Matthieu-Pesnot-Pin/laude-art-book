import React, { useState } from "react";
import axios from "axios";

import Fab from "@material-ui/core/Fab";
import SaveOutlinedIcon from "@material-ui/icons/SaveOutlined";
import BlockOutlinedIcon from "@material-ui/icons/BlockOutlined";
// import ModeEditOutlineOutlinedIcon from "@material-ui/icons/ModeEditOutlined";
// import ModeEditOutlinedIcon from "@material-ui/icons/ModeEditOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import MovableCard from "./MovableCard";
import ImageViewer from "./ImageViewer";
import Thumbnail from "./sub-components/thumbnail";

class ImagesGallery extends React.Component {
  constructor(props) {
    console.log("props", props);
    super(props);
    this.state = {
      imageAVisualiser: undefined,
      afficherImage: false,
      draggedPosition: undefined,
      listeImagesTriee: props.listeImages,
      modeEdition: false,
      // categoryMap: {
      //   ["Bande Dessinée"]: 1,
      //   ["Illustration"]: 2,
      // },
    };
    this.setDraggedPosition = this.setDraggedPosition.bind(this);
    this.moveImage = this.moveImage.bind(this);
    this.listOrEmptyCard = this.listOrEmptyCard.bind(this);
    this.saveDisposition = this.saveDisposition.bind(this);
    this.setAfficherImage = this.setAfficherImage.bind(this);
    this.switchEditMode = this.switchEditMode.bind(this);
    this.discardDisposition = this.discardDisposition.bind(this);
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
    if (landingSection != draggedSection) {
      movedImage.category = landingSection;
    }
    landingList[landingColumn].splice(landingRow, 0, movedImage);

    let recapModifList;

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
            sectionId: this.props.categoryMap[section],
          }}
        />
      );
    return this.state.listeImagesTriee[section][column].map((image, row) => (
      <MovableCard
        key={image.id}
        image={image}
        moveImage={this.moveImage}
        modeEdition={this.state.modeEdition}
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
      .then((response) => {
        console.log("Category post / success : ", response.data);
        Thumbnail.message({
          content: "Configuration sauvegardée",
          thumbnailType: "success",
        });
        this.switchEditMode();
      })
      .catch((err) => {
        console.log(err);
        Thumbnail.message({
          content: "Erreur lors de l'enregistrement",
          thumbnailType: "error",
        });
      });
  }

  discardDisposition() {
    this.switchEditMode();
  }

  setAfficherImage(value) {
    this.setState({ afficherImage: value });
  }

  switchEditMode() {
    this.setState({ modeEdition: !this.state.modeEdition });
  }

  render() {
    const floatingButtonStyle = (type) => ({
      position: "fixed",
      right: type == "annuler" ? "1%" : "10%",
      width: type != "edition" ? 160 : "",
      bottom: "10%",
      zIndex: 20,
    });

    return (
      <>
        {Object.keys(this.state.listeImagesTriee).map((section) => (
          <div className="breadcrumb" key={section}>
            <h3>{this.props.categoryMap[section]}</h3>
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
                        sectionId: section,
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
        {this.state.modeEdition ? (
          <div>
            <Fab
              variant="extended"
              style={floatingButtonStyle("valider")}
              color="primary"
              onClick={this.saveDisposition}
            >
              <SaveOutlinedIcon sx={{ mr: 1 }} />
              Enregistrer
            </Fab>
            <Fab
              variant="extended"
              style={floatingButtonStyle("annuler")}
              color="secondary"
              onClick={this.discardDisposition}
            >
              <BlockOutlinedIcon sx={{ mr: 1 }} />
              Annuler
            </Fab>
          </div>
        ) : (
          <div>
            <Fab
              variant="extended"
              style={floatingButtonStyle("edition")}
              color="primary"
              onClick={this.switchEditMode}
            >
              <EditOutlinedIcon sx={{ mr: 1 }} />
              Mode Edition
            </Fab>
          </div>
        )}
        <ImageViewer
          image={this.state.imageAVisualiser}
          visible={this.state.afficherImage}
          setVisibility={this.setAfficherImage}
        />
        <Thumbnail />
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
