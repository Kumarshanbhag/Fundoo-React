import Axios from "axios";

const Url = 'http://fundoonotes.incubation.bridgelabz.com/api/'
const token = localStorage.getItem("id");

class NoteServices {
    save = (note,callback) => {
        return Axios.post(
            `${Url}notes/addNotes?access_token=${token}`, note
        )
        .then((response) => {
           callback(response);
        })
        .catch((error) => {
            callback(error.response);
        });
    }

    getNotes = (callback) => {
        return Axios.get(
            `${Url}notes/getNotesList?access_token=${token}`
        )
        .then((response) => {
           callback(response);
        })
        .catch((error) => {
            callback(error.response);
        });
    }
}

export default new NoteServices();