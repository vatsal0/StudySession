import router from "next/router";

const Controller = {};

Controller.setSocket = (socket) => {
    Controller.socket = socket;
}

Controller.getSocket = () => {
    return Controller.socket;
}

Controller.setSessionCode = (code) => {
    Controller.sessionCode = code;
}

Controller.getSessionCode = () => {
    return Controller.sessionCode;
}

Controller.push = (args) => {
    router.push(args);
}

export default Controller;