import dateformat from "dateformat";

export const ADDRESS_MULTICAST_UDP = "239.24.11.95";
export const PORT_UDP = 2206; 
export const PORT_TCP = 2205;
export const TIME_TO_KEEP_MUSICIAN = 5000;

export function getInstrument(sound) {
    const instrument = SOUND_INSTRUMENT.get(sound);

    if (sound === undefined || sound === null) {
        console.error("Wrong or unsupported sound name !");
    }
    return instrument;
}

const SOUND_INSTRUMENT = new Map(
    [
        ["ti-ta-ti", "piano"],
        ["pouet", "trumpet"],
        ["trulu", "flute"],
        ["gzi-gzi", "violin"],
        ["boum-boum", "drum"],
    ]
);

function date() {
    return dateformat(new Date(), "yyyy/mm/dd hh:MM:ss.l");
}

function format(message) {
    return date() + " : Auditor : |-> " + message + " <-|.";
}

export function log(message) {
    console.log(format(message));
}

export function err() {
    console.err(format(message));
}