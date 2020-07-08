import * as TcpServer from "./tcpServer";
import * as UdpClient from "./udpClient";
import * as Auditor from "./auditor"

function main() {
    Auditor.log("Started");
    TcpServer.start();
    UdpClient.start();
}

// Run the main function
main();