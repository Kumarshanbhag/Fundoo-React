import { Typography } from '@material-ui/core';
import React, { Component } from 'react'
import Cards from './Cards.jsx';
import '../scss/displaycards.scss';

import NoteserviceAPI from '../Services/NoteServices.jsx'

class DisplayNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allNotes: []
        };
    }

    componentWillMount = () => {
        NoteserviceAPI.getNotes((res) => {
            console.log(res.data.data.data);
            this.setState({
                allNotes: res.data.data.data.reverse(),
            })
        });
    };

    render() {
        console.log("Dispaly", this.state.allNotes);
        return (
            <React.Fragment>
                <Typography className="notesTitle">PINNED</Typography>
                <Cards pin={true} allNotes={this.state.allNotes} update={this.componentWillMount} deleted={false} />
                <Typography className="notesTitle">OTHERS</Typography>
                <Cards pin={false} allNotes={this.state.allNotes} update={this.componentWillMount} deleted={false} />
            </React.Fragment>

        );
    }
}

export default DisplayNotes;