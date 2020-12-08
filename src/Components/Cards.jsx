import React, { Component } from 'react'
import '../scss/cards.scss'
import Pin from '../Images/Pin.svg'
import Unpin from '../Images/Unpin.svg'
import ChangeColor from '../Components/ChangeColor.jsx'
import Reminder from '../Components/Reminder.jsx'

// import More from '../Components/More.jsx'

import {
    Card,
    CardContent,
    InputBase,
    Grid,
    Dialog,
    DialogContent,
    Button,
    DialogActions,
    Menu,
    MenuItem,
    Tooltip,
    Chip
} from '@material-ui/core'

import PersonAdd from "@material-ui/icons/PersonAdd";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto"
import ArchieveIcon from "@material-ui/icons/ArchiveOutlined"
import UnarchiveIcon from "@material-ui/icons/UnarchiveOutlined"
import More from "@material-ui/icons/MoreVertRounded"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NoteServicesAPI from '../Services/NoteServices'

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: null,
            noteId: "",
            title: "",
            description: "",
            color: "",
            dialogOpen: false,
            menu: false,
            anchorEl: null
        }
    }

    handleMenu = (event) => {
        console.log("Menu Clicked")
        this.setState({
            menu: true,
            anchorEl: event.currentTarget
        })
    }

    handleMenuClose = () => {
        this.setState({
            menu: false,
            anchorEl: null
        })
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

    handleDelete = () => {
        let data = {
            isDeleted: !this.props.deleted,
            noteIdList: [this.state.noteId],
        };
        NoteServicesAPI.deleteNotes(data, (res) => {
            console.log(res.message);
            this.props.update()
        })
        this.handleMenuClose();
    }

    handleDeleteForever = () => {
        let data = {
            noteIdList: [this.state.noteId],
        };
        NoteServicesAPI.deleteForever(data, (res) => {
            console.log(res.message);
            this.props.update()
        })
        this.handleMenuClose();
    }

    handleArchive = () => {
        let data = {
            isArchived: !this.props.archive,
            noteIdList: [this.state.noteId],
        }
        NoteServicesAPI.archiveNotes(data, (res) => {
            console.log(res.archive);
            this.props.update()
        })
    }

    handleRemind = (value) => {
        let data = {
            "reminder": [value],
            "noteIdList": [this.state.noteId]
        }
        console.log("HandleRemind", data);
        NoteServicesAPI.remindNotes(data, (res) => {
            console.log(res.message);
            this.props.update()
        })
    }

    handleReminderDelete = () => {
        let data = {
            "noteIdList": [this.state.noteId]
        }
        NoteServicesAPI.removeReminder(data,(res) => {
            console.log(res.message);
            this.props.update()
        })
    }

    render() {
        // console.log("Notes", this.props.allNotes);
        console.log("Pin", this.state.pin);
        // console.log("Note", this.state.noteId);
        // console.log("Color", this.state.color);
        console.log("Dialog", this.state.dialogOpen)
        console.log("Menu", this.state.menu, this.state.anchorEl)
        return (
            <Grid className="gridNote" container spacing={3} direction="row" justify="flex-start" >
                {this.props.allNotes.map((value, index) => {
                    if ((value.isPined === this.props.pin || this.props.pin === undefined) &&
                        value.isDeleted === this.props.deleted &&
                        value.isArchived === this.props.archive) {
                        return (
                            <Grid item xl={3} onClick={() => this.setCardDetails(
                                value.id, value.title, value.description, value.isPined, value.color
                            )}>
                                <Card className="cards" style={{ backgroundColor: value.color }}  >
                                    <CardContent className="displayCards">
                                        <div className="pin" onClick={this.handlePin}>
                                            {(value.isPined === false) ?
                                                <img src={Pin} alt="Pin icon" onClick={this.handlePin} />
                                                :
                                                <img src={Unpin} alt="Pin icon" onClick={this.handlePin} />
                                            }
                                        </div>


                                        <InputBase value={value.title} onClick={this.handleDialog} />
                                        <InputBase value={value.description} onClick={this.handleDialog} />
                                        {(value.reminder.length !== 0) ?
                                            <Chip
                                                icon={<AccessTimeIcon />}
                                                label={value.reminder[0].substring(0, 21)}
                                                onDelete={this.handleReminderDelete}
                                            />

                                            :
                                            ""

                                        }
                                        {(this.props.deleted === false) ?
                                            <div className="cardIcons">
                                                <Reminder remind={this.handleRemind} />
                                                <PersonAdd />

                                                <ChangeColor color={this.changeColor} />

                                                <InsertPhotoIcon />
                                                {(this.props.archive) ?
                                                    <Tooltip title="Archive" >
                                                        <UnarchiveIcon onClick={this.handleArchive} />
                                                    </Tooltip>
                                                    :
                                                    <Tooltip title="Archive" >
                                                        <ArchieveIcon onClick={this.handleArchive} />
                                                    </Tooltip>
                                                }
                                                <More onClick={this.handleMenu} />
                                            </div>
                                            :
                                            <div className="cardIcons">
                                                <More onClick={this.handleMenu} />
                                            </div>
                                        }
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
                                <Reminder />
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

                <Menu
                    className="menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={this.state.menu}
                    onClose={this.handleMenuClose}
                >
                    {(this.props.deleted === false) ?
                        <React.Fragment>
                            <MenuItem onClick={this.handleMenuClose}>Add labels</MenuItem>
                            <MenuItem onClick={this.handleDelete} >Delete note</MenuItem>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <MenuItem onClick={this.handleDeleteForever} >Delete Forever</MenuItem>
                            <MenuItem onClick={this.handleDelete}>Restore</MenuItem>
                        </React.Fragment>
                    }
                </Menu>

            </Grid >


        )
    }
}

export default Cards;