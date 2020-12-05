import React, { Component } from 'react'
import {
    Card,
    CardContent,
    InputBase,
    Grid,
} from '@material-ui/core'

import Pin from '../Images/Pin.svg'
import Unpin from '../Images/Unpin.svg'

class DeleteAndArchive extends Component {
    render() {
        return (
            <div>
                <h1>Welcome To Trash</h1>
                <Grid className="gridNote" container spacing={3} direction="row" justify="flex-start" >
                    {this.props.allNotes.map((value, index) => {
                        if(value.isDeleted ===true) {
                        return (
                            <Grid item xl={3} >
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
                                      
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                    )}})}
                </Grid>
            </div>
        )
    }
}

export default DeleteAndArchive;