import { io } from 'socket.io-client';

let socket;

export const connectSocket = async () => {
    socket = io("http://localhost:4000");
    console.log("Socket connected")
}

export const reciveMsg = (event, callback) => {
    socket.on(event, callback);
}

export const emitMsg = (event, msg) => {
    socket.emit(event, msg);
}