import * as Musician from "./musician";
import * as UdpServer from "./udpServer";

function main() {
    Musician.log("Started");

    if (process.argv.length != 3) {
        Musician.err("You need to provide one instrument name as argument.");
        process.exit(1);
    }
    const instrument = process.argv[2];

    UdpServer.startPlaying(instrument);
}

// Run the main function
main();