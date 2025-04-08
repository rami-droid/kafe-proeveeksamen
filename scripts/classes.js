export class user {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.loggedIn = false;
        this.points = 0
    }
    login(inputPassword) {
        if (inputPassword === this.password){
            this.loggedIn = true;
        }

    }
    logout() {
        this.loggedIn = false;
    }
    getProfile() {
        return {username: this.username, password: this.password}
    }
}