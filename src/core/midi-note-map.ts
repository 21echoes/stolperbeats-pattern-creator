import { Track, Tracks } from './track';

// Edit this mapping as you see fit
export type MidiNoteMap = Record<number, Track>
export const DefaultMidiNoteMap: MidiNoteMap = {
  35: Tracks.KICK, // "Acoustic Bass Drum",
  36: Tracks.KICK, // "Bass Drum 1",
  37: Tracks.PERC2, // "Side Stick",
  38: Tracks.SNARE, // "Acoustic Snare",
  // 39: "Hand Clap",
  40: Tracks.SNARE, // "Electric Snare",
  // 41: "Low Floor Tom",
  42: Tracks.HIHAT1, // "Closed Hi Hat",
  // 43: "High Floor Tom",
  44: Tracks.HIHAT1, // "Pedal Hi-Hat",
  // 45: "Low Tom",
  46: Tracks.HIHAT2, // "Open Hi-Hat",
  // 47: "Low-Mid Tom",
  // 48: "Hi Mid Tom",
  // 49: "Crash Cymbal 1",
  // 50: "High Tom",
  // 51: "Ride Cymbal 1",
  // 52: "Chinese Cymbal",
  53: Tracks.PERC1, // "Ride Bell",
  54: Tracks.PERC1, // "Tambourine",
  // 55: "Splash Cymbal",
  56: Tracks.PERC1, // "Cowbell",
  // 57: "Crash Cymbal 2",
  // 58: "Vibraslap",
  // 59: "Ride Cymbal 2",
  // 60: "Hi Bongo",
  // 61: "Low Bongo",
  // 62: "Mute Hi Conga",
  // 63: "Open Hi Conga",
  // 64: "Low Conga",
  // 65: "High Timbale",
  // 66: "Low Timbale",
  // 67: "High Agogo",
  // 68: "Low Agogo",
  // 69: "Cabasa",
  70: Tracks.PERC1, // "Maracas",
  // 71: "Short Whistle",
  // 72: "Long Whistle",
  // 73: "Short Guiro",
  // 74: "Long Guiro",
  75: Tracks.PERC2, // "Claves",
  76: Tracks.PERC2, // "Hi Wood Block",
  77: Tracks.PERC2, // "Low Wood Block",
  // 78: "Mute Cuica",
  // 79: "Open Cuica",
  // 80: "Mute Triangle",
  // 81: "Open Triangle",
}