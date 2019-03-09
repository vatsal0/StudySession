var Sessions = [];

class Session {
    constructor(code) {
        this.code = code;
        this.people = {};
        Sessions.push(this);
    }

    getPerson(id) {
        return this.people[id];
    }

    updatePerson(id, name) {
        this.people[id] = name;
    }

    removePerson(id) {
        delete this.people[id];
    }

    getNumberOfPeople() {
        return Object.keys(this.people).length;
    }

    static getSessionFromCode(code) {
        for(let i = 0; i < Sessions.length; i++) {
            let session = Sessions[i];
            if (session.code == code) return session;
        }
        return "none";
    }

    static generateSession() {
        var generatedCode = Math.ceil(Math.random() * 899999) + 100000;
        while (SessionUtility.getSessionFromCode(generatedCode) != null) {
            generatedCode = Math.ceil(Math.random() * 899999) + 100000;
        }
        return new Session(generatedCode);
    }
    
    static disconnectPerson(id) {
        for(let i = 0; i < Sessions.length; i++) {
            let session = Sessions[i];
            if (session.people[id]) {
                delete session.people[id];
                console.log(session);
                break;
            }
        }
    }
}

module.exports = Session;