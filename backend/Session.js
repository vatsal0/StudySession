var Sessions = [];

class Session {
    constructor(code) {
        this.code = code;
        this.people = [];
        Sessions.push(this);
    }

    addPerson(person) {
        this.people.push(person);
    }

    removePerson(person) {
        for (let i = 0; i < this.people.length; i++) {
			if (this.people[i] == person) this.people.splice(i, 1);
		}
    }

    static getSessionFromCode(code) {
        for (var s in Sessions) {
            if (s.code == code) return s;
        }
        return null;
    }

    static generateSession() {
        var generatedCode = Math.ceil(Math.random() * 899999) + 100000;
        while (SessionUtility.getSessionFromCode(generatedCode) != null) {
            generatedCode = Math.ceil(Math.random() * 899999) + 100000;
        }
        return new Session(generatedCode);
    }
    
}

module.exports = Session;