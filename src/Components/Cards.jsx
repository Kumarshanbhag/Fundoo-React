import React, { Component } from 'react'
import '../scss/cards.scss'
import Pin from '../Images/Pin.svg'
import Unpin from '../Images/Unpin.svg'
import ChangeColor from '../Components/ChangeColor.jsx'

import {
    Card,
    CardContent,
    InputBase,
    Grid,
    Dialog,
    DialogContent,
    Button,
    DialogActions
} from '@material-ui/core'

import Add from "@material-ui/icons/AddAlert"
import PersonAdd from "@material-ui/icons/PersonAdd";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto"
import ArchieveIcon from "@material-ui/icons/ArchiveOutlined"
import More from "@material-ui/icons/MoreVertRounded"
import NoteServicesAPI from '../Services/NoteServices'

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: true,
            noteId: "",
            title: "",
            description: "",
            color: "",
            dialogOpen: false,
        }
    }

    handleDialog = () => {
        this.setState({ dialogOpen: true })
    }

    handleDialogClose = () => {
        this.setState({ dialogOpen: false })
    }

    handlePin = () => {
        if (this.state.pin === false) {
            let data = {
                noteIdList: [this.state.noteId],
                isPined: true,
            }
            NoteServicesAPI.pinUnpinNotes(data, (res) => {
                console.log(res.message);
                this.props.update()
            })
        }
        else {
            let data = {
                noteIdList: [this.state.noteId],
                isPined: false,
            }
            NoteServicesAPI.pinUnpinNotes(data, (res) => {
                console.log(res.message);
                this.props.update()
            })
        }
    }

    changeColor = (value) => {
        console.log("New Color", value);
        this.setState({ color: value })
        let data = {
            color: value,
            noteIdList: [this.state.noteId]
        }
        console.log("Test", data.color, data.noteIdList, this.state.noteId)
        NoteServicesAPI.changeNoteColor(data, (res) => {
            console.log("Response", res);
            this.props.update()
        })
    }

    handleUpdate = () => {
        this.setState({ dialogOpen: false })
        let data = {
            noteId: this.state.noteId,
            title: this.state.title,
            description: this.state.description,
        }
        NoteServicesAPI.updateNote(data, (res) => {
            console.log("Response", res.message);
            this.props.update()
        })
    }

    setCardDetails = (id, title, description, pined, colored) => {
        this.setState({
            noteId: id,
            title: title,
            description: description,
            pin: pined,
            color: colored,
        })
    }

    handleTitle = async (e) => {
        this.setState({ title: await e.target.value })
    }

    handleDescription = async (e) => {
        this.setState({ description: await e.target.value })
    }

    render() {
        // console.log("Notes", this.props.allNotes);
        console.log("Pin", this.state.pin);
        // console.log("Note", this.state.noteId);
        // console.log("Color", this.state.color);
        console.log("Dialog", this.state.dialogOpen)
        return (
            <Grid className="gridNote" container spacing={3} direction="row" justify="flex-start" >
                {this.props.allNotes.map((value, index) => {
                    if (value.isPined === this.props.pin) {
                        return (
                            <Grid item xl={3} onClick={() => this.setCardDetails(
                                value.id, value.title, value.description, value.isPined, value.color
                            )}>
                                <Card className="cards" style={{ backgroundColor: value.color }}  >
                                    <CardContent className="displayCards">
                                        <div className="pin" onClick={this.handlePin}>
                                            {(value.isPined === false) ?
                                                <img src={Pin} alt="Pin icon" />
                                                :
                                                <img src={Unpin} alt="Pin icon" />
                                            }
                                        </div>


                                        <InputBase value={value.title} onClick={this.handleDialog} />
                                        <InputBase value={value.description} onClick={this.handleDialog} />


                                        <div className="cardIcons">
                                            <Add />
                                            <PersonAdd />

                                            <ChangeColor color={this.changeColor} />

                                            <InsertPhotoIcon />
                                            <ArchieveIcon />
                                            <More />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    }
                })}

                <Dialog onClose={this.handleDialogClose} aria-labelledby="customized-dialog-title" open={this.state.dialogOpen}>
                    <Card style={{ backgroundColor: this.state.color }}>
                        <DialogContent>
                            <InputBase
                                name="description"
                                onChange={this.handleTitle}
                                value={this.state.title}
                            />
                        </DialogContent>
                        <DialogContent>
                            <InputBase
                                name="description"
                                onChange={this.handleDescription}
                                value={this.state.description}
                            />

                        </DialogContent>
                        <DialogActions>
                            <div className="dialogIcons">
                                <Add />
                                <PersonAdd />

                                <ChangeColor color={this.changeColor} />

                                <InsertPhotoIcon />
                                <ArchieveIcon />
                                <More />
                            </div>
                            <Button autofocus onClick={this.handleUpdate} color="primary">
                                Close
                            </Button>
                        </DialogActions>
                    </Card>
                </Dialog>


            </Grid >


        )
    }
}

export default Cards;