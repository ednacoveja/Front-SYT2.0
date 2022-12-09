import axios from 'axios';

export default function CreateEmail() {
    return async function (dispatch){
            var result = await axios.post(`/Email`); 
            return dispatch({ 
                 type: 'POST_EMAIL', 
                 payload: result.data
            }) 
    }
}