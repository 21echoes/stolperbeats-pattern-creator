export const Tracks = {
  KICK: '1',
  SNARE: '2',
  HIHAT1: '3',
  HIHAT2: '4',
  PERC1: '5',
  PERC2: '6',
} as const

export type Track = typeof Tracks[keyof typeof Tracks];

export const getTrackName = (track: Track): string => {
  switch (track) {
    case Tracks.KICK: return "KICK";
    case Tracks.SNARE: return "SNARE";
    case Tracks.HIHAT1: return "HIHAT1";
    case Tracks.HIHAT2: return "HIHAT2";
    case Tracks.PERC1: return "PERC1";
    case Tracks.PERC2: return "PERC2";
  }
}
