import { authHeader } from '../_helpers/authHeaders';


function login(userName, password) {
    const requestOptions = {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({ userName, password })
    };  

    return fetch('http://localhost:49871/api/users/authenticate', requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user) {
                user.authdata = window.btoa(userName + ':' + password);
                debugger
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        }); 
}

function logout() {
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers : authHeader()
    }   

    return fetch('http://localhost:49871/api/users', requestOptions)
        .then(handleResponse);
}

function handleResponse(response) {
    console.log(response);    
    return response.text().then(txt => {
        
        const data = txt && JSON.parse(txt);
        console.log(data);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                window.location.reload();
            }
            const error = (data && data.message) || response.responseText;
            return Promise.reject(error);
        }
        return data;
    });
}

export const userService = { login, logout, getAll };