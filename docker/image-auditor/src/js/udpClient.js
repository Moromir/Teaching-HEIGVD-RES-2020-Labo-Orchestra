import udp from "dgram";
import * as Auditor from "./auditor"

let musicians = new Map();

export function start() {
    let socket = udp.createSocket('udp4');

    socket.bind(Auditor.PORT_UDP, () => {
        Auditor.log("Joining multicast group " + Auditor.ADDRESS_MULTICAST_UDP + ":" + Auditor.PORT_UDP);
        socket.addMembership(Auditor.ADDRESS_MULTICAST_UDP);
    });

    socket.on("message", (message, source) => {
        Auditor.log("UDP message arrived from " + source.address + ":" + source.port + " : '" + message + "'.");
        let sound = JSON.parse(message);
        hear(sound);
    });
}

function hear(sound) {
    let key = sound.uuid;

    let musician = musicians.get(key);
    let value;
    const now = Date.now();

    if (musician === null || musician === undefined) {
        value = {
            uuid: key,
            instrument: Auditor.getInstrument(sound.sound),
            activeSince: now,
            activeLast: now
        };
    } else {
        value = { ...musician, activeLast: now };
    }

    musicians.set(key, value);
}

export function getActiveMusicians() {
    const now = Date.now();
    let arr = [];

    musicians.forEach(m => {
        if (now - m.activeLast <= Auditor.TIME_TO_KEEP_MUSICIAN) {
            arr.push({
                uuid: m.uuid,
                instrument: m.instrument,
                activeSince: new Date(m.activeSince),
            });
        }
    });

    return arr;
}