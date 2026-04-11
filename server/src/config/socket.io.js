import { Server } from "socket.io"

function connetSocket(httpServer) {

    const io = new Server(httpServer, { cors: { origin: "http://localhost:5173" } })

    io.on("connection", (socket) => {
        console.log("a user connected: " + socket.id)
        socket.on("disconnect", () => {
            console.log("user disconnected: " + socket.id)
        })
        socket.on("message", msg => {
            socket.broadcast.emit("hero", msg)
        })
    }) 
}


export default connetSocket;