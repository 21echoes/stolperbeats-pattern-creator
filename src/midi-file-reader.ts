import * as midiManager from 'midi-file';
import { MidiNoteMap } from './midi-note-map';
import { Track, Tracks } from './track';
import { Pattern } from './pattern';
import { Bank, BankData } from './bank';

const getBeatForTime = (time: number, midiHeader: midiManager.MidiHeader): number => {
  if (midiHeader.ticksPerBeat) {
    const ticksPer16th = midiHeader.ticksPerBeat / 4;
    return Math.round(time / ticksPer16th);
  }
  throw new Error('Only MIDI files with ticksPerBeat format are supported currently');
}

export const convertMidiFileToPatterns = async (fileBuffer: Buffer): Promise<{ [K in Track]: Pattern }> => {
  const midiData = midiManager.parseMidi(fileBuffer);

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

export const convertMidiFilesToBank = async (fileBuffers: (Buffer|undefined)[]): Promise<Bank> => {
  const patternsByTracks = await Promise.all(fileBuffers.map((buffer) => buffer ? convertMidiFileToPatterns(buffer) : undefined));
  const bankData = patternsByTracks.reduce((acc, patternsByTrack) => {
    if (!patternsByTrack) {
      acc[Tracks.KICK].push(new Pattern(Tracks.KICK, new Array(64).fill(0)));
      acc[Tracks.SNARE].push(new Pattern(Tracks.SNARE, new Array(64).fill(0)));
      acc[Tracks.HIHAT1].push(new Pattern(Tracks.HIHAT1, new Array(16).fill(0)));
      acc[Tracks.HIHAT2].push(new Pattern(Tracks.HIHAT2, new Array(16).fill(0)));
      acc[Tracks.PERC1].push(new Pattern(Tracks.PERC1, new Array(16).fill(0)));
      acc[Tracks.PERC2].push(new Pattern(Tracks.PERC2, new Array(16).fill(0)));
      return acc;
    }
    acc[Tracks.KICK].push(patternsByTrack[Tracks.KICK]);
    acc[Tracks.SNARE].push(patternsByTrack[Tracks.SNARE]);
    acc[Tracks.HIHAT1].push(patternsByTrack[Tracks.HIHAT1]);
    acc[Tracks.HIHAT2].push(patternsByTrack[Tracks.HIHAT2]);
    acc[Tracks.PERC1].push(patternsByTrack[Tracks.PERC1]);
    acc[Tracks.PERC2].push(patternsByTrack[Tracks.PERC2]);
    return acc;
  }, {
    [Tracks.KICK]: [],
    [Tracks.SNARE]: [],
    [Tracks.HIHAT1]: [],
    [Tracks.HIHAT2]: [],
    [Tracks.PERC1]: [],
    [Tracks.PERC2]: [],
  } as BankData)
  return new Bank(bankData);
}
