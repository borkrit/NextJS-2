export   function authUser (element){
    document.cookie = 'login='+element
}
export async function checkAuth() {
    if (typeof window !== 'undefined') {
        let user = window.document.cookie.split('=')[1];
        return user;
    } else {
        return null; 
    }
}