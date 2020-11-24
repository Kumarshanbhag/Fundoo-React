import React, { Component } from 'react'
import  '../scss/createnote.scss'
import {
    Card,
    CardContent,
    InputBase,
    // Button,
  } from "@material-ui/core";

import CheckBoxIcon from "@material-ui/icons/CheckBox";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import EditIcon from "@material-ui/icons/Edit";
// import { Block } from '@material-ui/icons';
  

class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Take a Note ...",
            title: "",
            expanded: "false",
            show: "block"
        }
    }

    render() {
        return (
          <div className="mainContainer">
            <Card className="card" >
              <CardContent className="TakeNote">
                <InputBase
                // value="Take A Note ..."
                placeholder="Take a note ..."
                className="inputBase"
                multiline
                />

                <CheckBoxIcon className="checkBox" display="this.state.show" />

                {/* <EditIcon className="" display: this.state.show/> */}
                
                <InsertPhotoIcon className="imageUpload" display="this.state.show" />
              </CardContent> 
            </Card> 
            </div>          
        )
    }
}

export default CreateNote
