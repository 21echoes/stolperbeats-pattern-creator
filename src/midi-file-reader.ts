import * as fs from 'fs/promises';
import * as midiManager from 'midi-file';
import { MidiNoteMap } from './midi-note-map';
import { Track, Tracks } from './track';
import { Pattern } from './pattern';

const getBeatForTime = (time: number, midiHeader: midiManager.MidiHeader): number => {
  if (midiHeader.ticksPerBeat) {
    const ticksPer16th = midiHeader.ticksPerBeat / 4;
    return Math.round(time / ticksPer16th);
  }
  throw new Error('Only MIDI files with ticksPerBeat format are supported currently');
}

export const readFile = async (filePath: string): Promise<{ [K in Track]: Pattern }> => {
  const file = await fs.readFile(filePath);
  const midiData = midiManager.parseMidi(file);

  const result = {
    [Tracks.KICK]: new Pattern(Tracks.KICK, new Array(64).fill(0)),
    [Tracks.SNARE]: new Pattern(Tracks.SNARE, new Array(64).fill(0)),
    [Tracks.HIHAT1]: new Pattern(Tracks.HIHAT1, new Array(16).fill(0)),
    [Tracks.HIHAT2]: new Pattern(Tracks.HIHAT2, new Array(16).fill(0)),
    [Tracks.PERC1]: new Pattern(Tracks.PERC1, new Array(16).fill(0)),
    [Tracks.PERC2]: new Pattern(Tracks.PERC2, new Array(16).fill(0)),
  }
  for (const midiTrack of midiData.tracks) {
    let time = 0;
    for (const midiEvent of midiTrack) {
      time += midiEvent.deltaTime;
      if (midiEvent.type !== 'noteOn') {
        continue;
      }
      const track = MidiNoteMap[midiEvent.noteNumber];
      if (!track) {
        continue;
      }
      const beat = getBeatForTime(time, midiData.header)
      if (beat < result[track].notes.length) {
        result[track].notes[beat] = 1;
      }
    }
  }

  return result;
}
