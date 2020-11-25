import Axios from "axios";

const Url = 'http://fundoonotes.incubation.bridgelabz.com/api/notes/'
const token = localStorage.getItem("id");

class NoteServices {
    save = (note,callback) => {
      return Axios.post(
        `${Url}addNotes?access_token=${token}`, note
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