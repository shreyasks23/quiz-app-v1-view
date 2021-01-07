//returns basic authentication headers
export function authHeader() {
    
    let userStr= localStorage.getItem('user');
    let user = JSON.parse(userStr);

    if (user && user.authdata) {
        
        return { 'Authorization' : 'Basic ' + user.authdata}
    } else {
        return {};
    }
}