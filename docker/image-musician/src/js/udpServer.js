import udp from "dgram";
import { v4 as generateUUID } from "uuid";
import * as Musician from "./musician";


const UUID = generateUUID();
const socket = udp.createSocket('udp4');

export function startPlaying(instrument) {
    const sound = Musician.getSound(instrument);
    setInterval(() => play(instrument, sound), Musician.INTERVAL);
}

function play(instrument, sound) {
    const json = JSON.stringify({ uuid: UUID, sound: sound });
    socket.send(json, Musician.PORT_UDP, Musician.ADDRESS_MULTICAST_UDP);
    Musician.log("Playing " + instrument + " on " + Musician.ADDRESS_MULTICAST_UDP + ":" + Musician.PORT_UDP + " : '" + json + "'");
}