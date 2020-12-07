import React, { Component } from 'react'
import '../scss/changecolor.scss'
import {
    Popover,
    Grid,
    Tooltip
} from '@material-ui/core';

import ColorLensIcon from '@material-ui/icons/ColorLens';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

class ChangeColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            anchorEl: null,
            color: [
                "#fff",
                "#f28b82",
                "#fbbc04",
                "#fff475",
                "#ccff90",
                "#a7ffeb",
                "#cbf0f8",
                "#aecbfa",
                "#d7aefb",
                "#fdcfe8",
                "#e6c9a8",
                "#e8eaed"
            ]
        };
    }

    handleClick = (event) => {
        this.setState({ open: true });
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => [
        this.setState({ open: false })
    ]

    setColor = (value) => () => {
        console.log(" NewColor", value);
        this.props.color(value);
        this.setState({ open: false })
    }

    render() {
        return (
            <div>
                <Tooltip title="Color">
                    <ColorLensIcon onClick={this.handleClick} />
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
                    <Grid container>
                        {this.state.color.map((value) => {
                            return (
                                <FiberManualRecordIcon className="colorChoose"
                                    style={{
                                        color: value,
                                    }}
                                    onClick={this.setColor(value)}
                                />
                            );
                        })}
                    </Grid>
                </Popover>
            </div>
        )
    }
}

export default ChangeColor
