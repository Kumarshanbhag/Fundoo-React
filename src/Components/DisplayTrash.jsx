import React, { Component } from 'react'
import DeleteAndArchive from './DeleteAndArchive'
import Cards from './Cards.jsx';
import NoteserviceAPI from '../Services/NoteServices.jsx'
import Header from './Header';

class DisplayTrash extends Component {
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
        return (
            <div>
                <Header />
                <Cards allNotes={this.state.allNotes} update={this.componentWillMount} deleted={true}  />            
            </div>
        )
    }
}

export default DisplayTrash;