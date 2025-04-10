//bruker klasse

export class user {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.loggedIn = false;
        this.points = 0
        this.reservations = []
    }
    getProfile() {
        return {username, password}
    }
}