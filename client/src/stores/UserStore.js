export default class UserStore{
    constructor() {
        this._isAuth = true;
        this._currentUser = {
            email: 'mail.mail.com'
        };
    }

    setIsAuth(bool){
        this._isAuth = bool;
    }

    setUser(user){
        this._currentUser = user;
    }

    get isAuth(){
        return this._isAuth;
    }

    get currentUser(){
        return this._currentUser;
    }
}