import net from "net";
import * as Auditor from "./auditor"
import * as UdpClient from "./udpClient";


const CRLF = "\r\n";

function connect(socket) {
    let musicians = UdpClient.getActiveMusicians();
    const json = JSON.stringify(musicians);

    socket.write(json + CRLF);
    socket.end();
}

export function start() {
    const server = net.createServer();
    server.listen(Auditor.PORT_TCP);
    server.on("connection", connect);
}
