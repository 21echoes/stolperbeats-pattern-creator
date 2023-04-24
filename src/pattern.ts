import { Track, Tracks, getTrackName } from './track';
import { Note } from './note';

export class Pattern {
  public track: Track;
  public notes: Note[]

  constructor(track: Track, notes: Note[]) {
    this.track = track;
    if (notes.length !== this.length) {
      throw new Error(`Wrong number of notes passed to Pattern: ${notes.length} for ${getTrackName(this.track)}`);
    }
    this.notes = notes;
  }

  get length() {
    const sixtyFourLengthTracks: Track[] = [Tracks.KICK, Tracks.SNARE]
    if (sixtyFourLengthTracks.includes(this.track)) {
      return 64;
    }
    return 16;
  }
}