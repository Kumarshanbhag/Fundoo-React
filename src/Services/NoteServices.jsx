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

    changeNoteColor = (data,callback) => {
        return Axios.post(
            `${Url}notes/changesColorNotes?access_token=${token}`,
            data
        )
        .then((response) => {
           callback(response);
        })
        .catch((error) => {
            callback(error.response);
        });
    }

    updateNote = (data,callback) => {
        return Axios.post(
            `${Url}notes/updateNotes?access_token=${token}`,
            data
        )
        .then((response) => {
           callback(response);
        })
        .catch((error) => {
            callback(error.response);
        });
    }

    pinUnpinNotes = (data,callback) => {
        return Axios.post(
            `${Url}notes/pinUnpinNotes?access_token=${token}`,
            data
        )
        .then((response) => {
           callback(response);
        })
        .catch((error) => {
            callback(error.response);
        });
    }

    deleteNotes = (data,callback) => {
        return Axios.post(
            `${Url}notes/trashNotes?access_token=${token}`,
            data
        )
        .then((response) => {
           callback(response);
        })
        .catch((error) => {
            callback(error.response);
        });
    }

    deleteForever = (data,callback) => {
        return Axios.post(
            `${Url}notes/deleteForeverNotes?access_token=${token}`,
            data
        )
        .then((response) => {
           callback(response);
        })
        .catch((error) => {
            callback(error.response);
        });
    }

    getTrashNotes = (callback) => {
        return Axios.get(
            `${Url}notes/getTrashNotesList?access_token=${token}`
        )
        .then((response) => {
           callback(response);
        })
        .catch((error) => {
            callback(error.response);
        });
    }

    getArchiveNotes = (callback) => {
        return Axios.get(
            `${Url}notes/getArchiveNotesList?access_token=${token}`
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