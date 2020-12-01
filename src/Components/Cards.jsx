import React, { Component } from 'react'
import '../scss/cards.scss'
import Pin from '../Images/Pin.svg'
import Unpin from '../Images/Unpin.svg'
import ChangeColor from '../Components/ChangeColor.jsx'

import {
    Card,
    CardContent,
    InputBase,
    Grid
} from '@material-ui/core'

import Add from "@material-ui/icons/AddAlert"
import PersonAdd from "@material-ui/icons/PersonAdd";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto"
import ColorPalette from "@material-ui/icons/ColorLens"
import ArchieveIcon from "@material-ui/icons/ArchiveOutlined"
import More from "@material-ui/icons/MoreVertRounded"

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: this.props.pin,
            noteId: "",
        }
    }

    // componentWillMount = () => {
    //     NoteserviceAPI.getNotes((res) => {
    //         this.setState({
    //             allNotes: res.data.data.data.reverse(),
    //         })
    //     });
    // };

    handlePin = () => {
        this.setState(prevState => ({ pin: !prevState.pin }));
    }

    changeColor = (value) => {
        console.log("Color", value);
        this.setState({ color: value })
    }

    render() {
        console.log("icons", this.state.icons);
        console.log("Notes", this.props.allNotes);

        return (

            <Grid className="gridNote" container spacing={3} direction="row" justify="flex-start" >
                {this.props.allNotes.map((value, index) => {
                    console.log("Pin", value.isPined);
                    if (value.isPined === this.props.pin) {
                        return (
                            <Grid item xl={3} >
                                <Card className="cards" style={{ backgroundColor: value.color }}>
                                    <CardContent className="displayCards">
                                        <div className="pin" onClick={this.handlePin}>
                                            {(value.isPined === false) ?
                                                <img src={Pin} alt="Pin icon" />
                                                :
                                                <img src={Unpin} alt="Pin icon" />
                                            }
                                        </div>


                                        <InputBase value={value.title} />
                                        <InputBase value={value.description} />


                                        <div className="cardIcons">
                                            <Add />
                                            <PersonAdd />
                                            <ChangeColor color={this.changeColor} >    
                                            </ChangeColor>
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
            </Grid>
        )
    }
}

export default Cards;