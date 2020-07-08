import dateformat from "dateformat";

export const ADDRESS_MULTICAST_UDP = "239.24.11.95"; 
export const PORT_UDP = 2206; 
export const INTERVAL = 1000;

export function getSound(instrument) {
    const sound = INSTRUMENT_SOUND.get(instrument);

    if (sound === undefined || sound === null) {
        err("Wrong or unsupported instrument name !");
        process.exit(1);
    }
    return sound;
}

const INSTRUMENT_SOUND = new Map(
    [
        ["piano", "ti-ta-ti"],
        ["trumpet", "pouet"],
        ["flute", "trulu"],
        ["violin", "gzi-gzi"],
        ["drum", "boum-boum"],
    ]
);

function date() {
    return dateformat(new Date(), "yyyy/mm/dd hh:MM:ss.l");
}

function format(message) {
    return date() + " : Musician : |-> " + message + " <-|.";
}

export function log(message) {
    console.log(format(message));
}

export function err() {
    console.err(format(message));
}