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
import ContextProvider from "./context/Context";
import TodoTable from "./TodoTable";

class ImagesGallery extends React.Component {
  constructor(props) {
    // console.log("props", props);
    super(props);

    let listeImagesTriee = this.buildDisplayList(props.listeImages);
    //filter pour supprimer les undefined

    // listeImagesTriee = listeImagesTriee.filter((image) => image != undefined);

    //tri en fonctin de orderInPage

    this.state = {
      imageAVisualiser: undefined,
      afficherImage: false,
      listeImages: props.listeImages,
      draggedPosition: undefined,
      listeImagesTriee,
      modeEdition: false,
    };
    this.setDraggedPosition = this.setDraggedPosition.bind(this);
    this.moveImage = this.moveImage.bind(this);
    this.listOrEmptyCard = this.listOrEmptyCard.bind(this);
    this.saveDisposition = this.saveDisposition.bind(this);
    this.setAfficherImage = this.setAfficherImage.bind(this);
    this.switchEditMode = this.switchEditMode.bind(this);
    this.discardDisposition = this.discardDisposition.bind(this);
  }

  buildDisplayList(listeImages) {
    let listeImagesTriee = [];
    listeImages.forEach((image) => {
      if (listeImagesTriee[image.sectionId] == undefined) {
        listeImagesTriee[image.sectionId] = [];
        listeImagesTriee[image.sectionId][0] = [];
        listeImagesTriee[image.sectionId][1] = [];
        listeImagesTriee[image.sectionId][2] = [];
      }
      listeImagesTriee[image.sectionId][image.col][image.row] = image;
    });

    Object.keys(this.props.sectionMapNameId).forEach((sectionId) => {
      if (listeImagesTriee[sectionId] == undefined) {
        listeImagesTriee[sectionId] = [];
        listeImagesTriee[sectionId][0] = [];
        listeImagesTriee[sectionId][1] = [];
        listeImagesTriee[sectionId][2] = [];
      }
    });
    return listeImagesTriee;
  }

  setDraggedPositionOLD(draggedPosition) {
    this.setState({ ...this.state, draggedPosition });
  }

  setDraggedPosition(draggedImage) {
    this.setState({ draggedImage });
  }

  moveImage(landingImage) {
    let draggedImage = this.state.draggedImage;
    if (landingImage.imageId == draggedImage.imageId) return;

    let newList = [...this.state.listeImages];
    draggedImage.sectionId = landingImage.sectionId;
    draggedImage.row = landingImage.row;
    draggedImage.col = landingImage.col;
    landingImage.row++;
    let draggedIndex = this.state.listeImages.findIndex(
      (image) => image.imageId === draggedImage.imageId
    );
    let landingIndex = this.state.listeImages.findIndex(
      (image) => image.imageId === landingImage.imageId
    );

    newList[draggedIndex] = draggedImage;
    if (!landingImage.isEmpty) newList[landingIndex] = landingImage;
    let listeImagesTriee = this.buildDisplayList(newList);
    this.setState({
      listeImages: newList,
      listeImagesTriee,
    });

    // landingImage();
  }

  moveImageOLD(landingPosition) {
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

  listOrEmptyCard(rows) {
    // if (rows.length === 0)
    //   return (
    //     <MovableCard
    //       key={"empty-column-" + Date.now()}
    //       image={{ isEmpty: true }}
    //       moveImage={this.moveImage}
    //     />
    //   );
    return rows.map((image, row) => (
      <MovableCard
        key={image.id}
        image={image}
        moveImage={this.moveImage}
        modeEdition={this.state.modeEdition}
        // position={{
        //   row,
        //   column,
        //   section,
        //   imageId: image.id,
        //   sectionId: image.category,
        // }}
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

  sectionName(sectionId) {
    // for (let column of section) {
    //   for (let row of column) {
    //     return row.sectionName;
    //   }
    // }
    // return "";
    return this.props.sectionMapNameId[sectionId];
  }

  render() {
    const floatingButtonStyle = (type) => ({
      position: "fixed",
      right: type == "annuler" ? "1%" : "12%",
      width: type != "edition" ? 160 : "",
      bottom: "10%",
      zIndex: 20,
    });

    return (
      <>
        {/* <ContextProvider>
          <TodoTable />
        </ContextProvider> */}
        {this.state.listeImagesTriee.map((section, sectionId) =>
          section == undefined ? (
            ""
          ) : (
            <div className="breadcrumb" key={sectionId}>
              <h3>{this.sectionName(sectionId)}</h3>;
              <div
                className="section row"
                style={{
                  width: "100%",
                }}
              >
                {section.map((rows, col) => (
                  <div
                    className="col-sm"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                    key={"column-" + col}
                  >
                    {this.listOrEmptyCard(rows)}
                    {/* {rows.length > 0 ? ( */}
                    <MovableCard
                      key={"empty-column-" + col}
                      image={{
                        isEmpty: true,
                        col,
                        row: rows.length,
                        sectionId,
                      }}
                      moveImage={this.moveImage}
                      // position={{
                      //   row: row.length,
                      //   col,
                      //   section,
                      //   sectionId: section,
                      // }}
                    />
                    {/* ) : (
                      ""
                    )} */}
                  </div>
                ))}
              </div>
            </div>
          )
        )}
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
