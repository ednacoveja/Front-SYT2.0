import axios from 'axios';

export default function GetUser() {
    return async function (dispatch){
            var result = await axios.get(`/User`); 
            return dispatch({ 
                 type: 'GET_USER', 
                 payload: result.data
            }) 
    }
}

export default function CreateUser() {
    return async function (dispatch){
            var result = await axios.post(`/User`); 
            return dispatch({ 
                 type: 'CREATE_USER', 
                 payload: result.data
            }) 
    }
}

export default function DeleteUser(id) {
    return async function (dispatch){
        var result = await axios.delete(`/User/${id}`); 
            return dispatch({ 
                 type: 'DELETE_USER', 
                 payload: result.data
            }) 
    }
}