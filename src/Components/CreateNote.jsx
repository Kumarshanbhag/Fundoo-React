import React, { Component } from 'react'
import  '../scss/createnote.scss'
import {
    Card,
    CardContent,
    InputBase,
    Collapse
  } from "@material-ui/core";

import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Add from "@material-ui/icons/AddAlert"
import PersonAdd from "@material-ui/icons/PersonAdd";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto"
import ColorPalette from "@material-ui/icons/ColorLens"
import ArchieveIcon from "@material-ui/icons/ArchiveOutlined"
import More from "@material-ui/icons/MoreVertRounded"


class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Take a Note ...",
            title: "",
            expanded: "false",
            show: "visible",
            expand: false
        }
    }

    handleExpand = () => {
      this.setState({ expand: true,
                      show: "hidden",
                      message: "Title" 
                    });
    }

    render() {
      console.log("exspad",this.state.expand);
      console.log("show",this.state.show);

        return (
          <div className="mainContainer">
            <Card className="card" >
              <CardContent className="TakeNote">
                <InputBase
                onClick={this.handleExpand}
                placeholder={this.state.message}
                className="inputBase"
                multiline
                />
  
                <CheckBoxIcon className="checkBox" style={{ visibility: this.state.show }} />
                <InsertPhotoIcon className="imageUpload" style={{ visibility:this.state.show }} />
              
              </CardContent> 

              <Collapse
              in={this.state.expand }
              timeout="auto"
              unmountOnExit
              style={{ marginBottom: "2%" }}
            >
              <CardContent style={{ marginBottom: "-4%" }}>
                <textarea
                  className="description"
                  placeholder="Description"
                  name="description"
                  onChange={this.handleChange}
                  value={this.state.description}
                />

                <div className="icons">
                <Add />
                <PersonAdd />
                <ColorPalette />
                <InsertPhotoIcon />
                <ArchieveIcon />
                <More />
                </div>

                </CardContent>
                </Collapse>
            </Card>
            </div>     
        )
    }
}

export default CreateNote
