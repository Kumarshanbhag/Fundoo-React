import React, { Component } from 'react'
import AddAlert from "@material-ui/icons/AddAlert"

import {
    Tooltip,
    Popover,
    Card,
    CardContent,
    Typography,
    Grid,
} from '@material-ui/core'

import moment from 'moment'

import '../scss/reminder.scss'

class Reminder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            anchorEl: null,
            today: new Date().toJSON(),
        }
    }

    handleOpen = (event) => {
        this.setState({
            open: true,
            anchorEl: event.currentTarget
        })
    }

    handleClose = () => {
        this.setState({
            open: false,
            anchorEl: null,
        })
    }

    handleDate = (value) => () => {
        var day;
        if (value === "today") {
            day = moment(this.state.todayDate).format("yyyy-MM-DD") + "T20:00:00.000Z"
            console.log("Remind", value, day);
        }
        else if(value==="tomorrow"){
            day = moment(this.state.todayDate).add(1,"day").format("yyyy-MM-DD") + "T08:00:00.000Z"
            console.log("Remind", value, day);
        }
        else if(value==="next"){
            day= moment(this.state.todayDate).add(7,"day").format("yyyy-MM-DD") + "T08:00:00.000Z"
            console.log("Remind", value, day);
        }
        this.props.remind(day);
        this.setState({
            open: false,
            anchorEl: null
        })
    }

    render() {
        console.log("Reminder", this.state.open, this.state.anchorEl);
        return (
            <div>
                <Tooltip title="Remind Me">
                    <AddAlert onClick={this.handleOpen} />
                </Tooltip>

                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                >
                    <Card className="reminderCard">
                        <CardContent >
                            <Typography variant="h6">Reminder : </Typography>
                                <Grid container direction="column">
                                    <Grid items className="dates" onClick={this.handleDate("today")}>
                                        <Typography variant="button">TODAY</Typography>
                                        <Typography variant="button">8 PM</Typography>
                                    </Grid>
                                    <Grid items className="dates" onClick={this.handleDate("tomorrow")}>
                                        <Typography variant="button">TOMORROW</Typography>
                                        <Typography variant="button">8 AM</Typography>
                                    </Grid>
                                    <Grid items className="dates" onClick={this.handleDate("next")}>
                                        <Typography variant="button">NEXT WEEK</Typography>
                                        <Typography variant="button">8 AM</Typography>
                                    </Grid>
                                </Grid>
                        </CardContent>
                    </Card>

                </Popover>
            </div >
        )
    }
}

export default Reminder
