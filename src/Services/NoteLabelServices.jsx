import Axios from "axios";

const Url = 'http://fundoonotes.incubation.bridgelabz.com/api/noteLabels/'
const token = localStorage.getItem("id");

class NoteLabelServices  {
    getLabelsList = (callback) => {
        return Axios.get(
            `${Url}getNoteLabelList?access_token=${token}`
        )
            .then((response) => {
                callback(response);
            })
            .catch((error) => {
                callback(error.response);
            });
    }
}

export default new NoteLabelServices()