import React, { Component } from 'react'
import '../scss/cards.scss'
import Pin from '../Images/Pin.svg'
import Unpin from '../Images/Unpin.svg'
import NoteserviceAPI from '../Services/NoteServices'

import { Card,
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
    constructor(props){
        super(props);
        this.state = {
            icons: false,
            pin: false,
            allNotes: []
        }
    }

    componentWillMount = () => {
        NoteserviceAPI.getNotes((res) => {
            this.setState({
                allNotes: res.data.data.data,
            })
        });
    };

    handleIcons = () => {
        this.setState (prevState => ({ icons : !prevState.icons }));
    }

    handlePin = () => {
        this.setState (prevState => ({ pin : !prevState.pin }));
    }

    render() {
        console.log("icons", this.state.icons);
        console.log("Notes", this.state.allNotes);

        return (
            <Grid className="gridNote" container spacing={3} direction="row" justify="flex-start" >
            
            {this.state.allNotes.map((value,index) => {
                return(
                <Grid item xl={3} >
                    <Card className="cards" id={value.id} onClick={this.handleIcons}>
                        <CardContent className="displayCards">
                            {this.state.icons === true ?
                                <div className="pin" onClick={this.handlePin}>
                                    { (this.state.pin === false )  ?
                                    <img  src={Pin} alt="Pin icon" />
                                    :
                                    <img  src={Unpin} alt="Pin icon" />
                                    }
                                </div>
                                :
                                ""
                            }

                            <InputBase value={value.title} />
                            <InputBase value={value.description} />
                            
                            {this.state.icons === true ?
                            <div className="cardIcons">
                                    <Add />
                                    <PersonAdd />
                                    <ColorPalette />
                                    <InsertPhotoIcon />
                                    <ArchieveIcon />
                                    <More />
                            </div>
                            :
                            ""
                            }
                        </CardContent>
                    </Card>
                </Grid>
                );
            })}  
            </Grid>
        )
    }
}

export default Cards;