import React, { Component } from 'react'
import NoteServices from '../Services/NoteServices';
import Header from './Header';
import Cards from './Cards';

class DisplayReminder extends Component {
    constructor(props) {
        super(props)
        this.state = {
             allNotes: []
        }
    }

    componentWillMount = () => {
        NoteServices.getReminderNotes((res) => {
            console.log(res.data.data.data);
            this.setState({
                allNotes: res.data.data.data.reverse(),
            })
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <Header />
                <Cards allNotes={this.state.allNotes} update={this.componentWillMount} deleted={false} archive={false} />
            </React.Fragment>
        )
    }
}

export default DisplayReminder;