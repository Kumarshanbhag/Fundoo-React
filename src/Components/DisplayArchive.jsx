import React, { Component } from 'react'
import NoteServices from '../Services/NoteServices';
import Cards from './Cards';
import Header from './Header'

class DisplayArchive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allNotes: []
        };
    }

    componentWillMount = () => {
        NoteServices.getArchiveNotes((res) => {
            console.log(res.data.data.data);
            this.setState({
                allNotes: res.data.data.data.reverse(),
            })
        });
    };

    render() {
        return (
            <div>
                <Header />
                <Cards allNotes={this.state.allNotes} update={this.componentWillMount} deleted={false} archive={true} />
            </div>
        )
    }
}

export default DisplayArchive;