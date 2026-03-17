import {io} from 'socket.io-client'


const Socket = () => {

    const socket = io('http://localhost:3000');

    return socket;

}

export default Socket