import axios from 'axios';

export default function GetPost() {
    return async function (dispatch){
            var result = await axios.get(`/Post`); 
            return dispatch({ 
                 type: 'GET_POST', 
                 payload: result.data
            }) 
    }
}

export default function CreatePost() {
    return async function (dispatch){
            var result = await axios.post(`/Post`); 
            return dispatch({ 
                 type: 'CREATE_POST', 
                 payload: result.data
            }) 
    }
}

export default function DeletePost() {
    return async function (dispatch){
            var result = await axios.delete(`/Post/${id}`); 
            return dispatch({ 
                 type: 'DELETE_POST', 
                 payload: result.data
            }) 
    }
}

