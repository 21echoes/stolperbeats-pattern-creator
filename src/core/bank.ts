import { Track, Tracks, getTrackName } from './track';
import { Pattern } from './pattern';

export type BankData = {
  [K in Track]: Pattern[];
}

const chunk = <T>(arr: T[], len: number): T[][] => {
  const chunks = [];
  let i = 0;
  while (i < arr.length) {
    const nextI = i + len;
    chunks.push(arr.slice(i, nextI));
    i = nextI;
  }
  return chunks;
}

export class Bank {
  public data: BankData;

  constructor(data: BankData) {
    for (const track of (Object.keys(data) as Track[])) {
      const patterns = data[track];
      if (patterns.length !== 24) {
        throw new Error(`Bank initialized with only ${patterns.length} patterns for ${getTrackName(track)} (needs 24)`)
      }
      for (const pattern of patterns) {
        if (pattern.track !== track) {
          throw new Error(`Bank initialized with a pattern created for the wrong track (${pattern.track} instead of ${track})`)
        }
      }
    }
    this.data = data;
  }

  toString(): string {
    return Object.values(Tracks).sort().map((track) => {
      return this.data[track].map((pattern, index) =>
        `${getTrackName(track)} > PTN${index}: ${chunk(pattern.notes, 16).map((notes) => notes.join('')).join(', ')};`
      ).join('\n') + '\n'
    }).join('\n')
  }
}
