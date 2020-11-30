import { Typography } from '@material-ui/core';
import React, { Component } from 'react'
import Cards from './Cards.jsx';
import '../scss/displaycards.scss';

class DisplayNotes extends Component {
    render() {
        console.log("Dispaly", this.props.allNotes);
        return (
            <React.Fragment>
                <Typography className="notesTitle">PINNED</Typography>
                <Cards pin={true}  />
                <Typography className="notesTitle">OTHERS</Typography>
                <Cards pin={false}  />
            </React.Fragment>
        );
    }
}

export default DisplayNotes;