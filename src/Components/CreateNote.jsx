import React, { Component } from 'react'
import '../scss/createnote.scss'
import NoteServicesAPI from '../Services/NoteServices.jsx'
import Pin from '../Images/Pin.svg'
import Unpin from '../Images/Unpin.svg'
import ChangeColor from '../Components/ChangeColor.jsx'
import {
  Card,
  CardContent,
  InputBase,
  Collapse,
  IconButton,
  Typography
} from "@material-ui/core";

import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Add from "@material-ui/icons/AddAlert"
import PersonAdd from "@material-ui/icons/PersonAdd";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto"
// import ColorPalette from "@material-ui/icons/ColorLens"
import ArchieveIcon from "@material-ui/icons/ArchiveOutlined"
import More from "@material-ui/icons/MoreVertRounded"

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Take a Note ...",
      expanded: "false",
      show: "visible",
      expand: false,
      pin: false,
      title: "",
      description: "",
      color: ""
    }
  }

  handleTitle = async (e) => {
    this.setState({ title: await e.target.value })
  }

  handleDescription = async (e) => {
    this.setState({ description: await e.target.value })
  }

  handleExpand = () => {
    this.setState({
      expand: true,
      show: "hidden",
      message: "Title"
    });
  }

  handleExpandClose = () => {
    this.setState({
      expand: false,
      show: "visible",
      message: "Take a Note..."
    });

    if (this.state.title != null || this.state.description != null) {
      let note = {
        title: this.state.title,
        description: this.state.description,
        isPined: this.state.pin,
        color: this.state.color
      };
      NoteServicesAPI.save(note, (res) => {
        console.log("api")
        if (res.status === 200) {
          console.log("Note saved");
          console.log("Pin", note.title)
          console.log("Pin", note.isPined)
        }
        else {
          console.log("Note Save Failed");
        }
      })
    }
  }

  handlePin = () => {
    this.setState(prevState => ({ pin: !prevState.pin }));
  }

  changeColor = (value) => {
    console.log("Color", value);
    this.setState({ color: value })
  }

  render() {
    console.log("exspad", this.state.expand);
    console.log("show", this.state.show);
    // console.log("title", this.state.message);
    // console.log("Note",this.state.title, this.state.description);

    return (
      <div className="mainContainer">
        <Card className="card" style={{ backgroundColor: this.state.color }} >
          <CardContent className="TakeNote">
            <InputBase
              onChange={this.handleTitle}
              onClick={this.handleExpand}
              placeholder={this.state.message}
              className="inputBase"
              multiline
            />

            <CheckBoxIcon className="checkBox" style={{ visibility: this.state.show }} />
            <InsertPhotoIcon className="imageUpload" style={{ visibility: this.state.show }} />

            {(this.state.expand === true) ?
              <IconButton className="iconPin" onClick={this.handlePin} >
                {(this.state.pin === false) ?
                  <img classname="imgPin" src={Pin} alt="Pin icon" />
                  :
                  <img src={Unpin} alt="Pin icon" />
                }
              </IconButton>
              :
              ""
            }

          </CardContent>

          <Collapse
            in={this.state.expand}
            timeout="auto"
            unmountOnExit
            style={{ marginBottom: "2%" }}
          >
            <CardContent style={{ marginBottom: "-4%" }}>
              <InputBase
                className="description"
                placeholder="Description"
                name="description"
                onChange={this.handleDescription}
                value={this.state.description}
              />

              <div className="iconAndClose">
                <div className="icons">
                  <Add />
                  <PersonAdd />

                  <ChangeColor color={this.changeColor} />

                  <InsertPhotoIcon />
                  <ArchieveIcon />
                  <More />
                </div>

                <Typography className="close" onClick={this.handleExpandClose}>Close </Typography>
              </div>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    )
  }
}

export default CreateNote
