import { Bank } from "../bank";
import { Pattern } from "../pattern";
import { Tracks } from "../track";

const bank = new Bank({
  [Tracks.KICK]: [
    new Pattern(Tracks.KICK, [1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1]),
    new Pattern(Tracks.KICK, [1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1]),
    new Pattern(Tracks.KICK, [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1]),
    new Pattern(Tracks.KICK, [1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1]),
    new Pattern(Tracks.KICK, [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1]),
    new Pattern(Tracks.KICK, [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1]),
    new Pattern(Tracks.KICK, [1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1]),
    new Pattern(Tracks.KICK, [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]),
    new Pattern(Tracks.KICK, [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0]),
    new Pattern(Tracks.KICK, [1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1]),
    new Pattern(Tracks.KICK, [1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0]),
    new Pattern(Tracks.KICK, [1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0]),
    new Pattern(Tracks.KICK, [1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1]),
    new Pattern(Tracks.KICK, [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1]),
    new Pattern(Tracks.KICK, [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0]),
    new Pattern(Tracks.KICK, [1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1]),
    new Pattern(Tracks.KICK, [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1]),
    new Pattern(Tracks.KICK, [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0]),
    new Pattern(Tracks.KICK, [1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0]),
    new Pattern(Tracks.KICK, [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1]),
    new Pattern(Tracks.KICK, [0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0]),
    new Pattern(Tracks.KICK, [1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0]),
    new Pattern(Tracks.KICK, [1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0]),
    new Pattern(Tracks.KICK, [1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1]),
  ],
  [Tracks.SNARE]: [
    new Pattern(Tracks.SNARE, [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]),
    new Pattern(Tracks.SNARE, [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0]),
    new Pattern(Tracks.SNARE, [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1]),
    new Pattern(Tracks.SNARE, [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0]),
    new Pattern(Tracks.SNARE, [0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0]),
    new Pattern(Tracks.SNARE, [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1]),
    new Pattern(Tracks.SNARE, [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0]),
    new Pattern(Tracks.SNARE, [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0]),
    new Pattern(Tracks.SNARE, [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0]),
    new Pattern(Tracks.SNARE, [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0]),
    new Pattern(Tracks.SNARE, [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0]),
    new Pattern(Tracks.SNARE, [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0]),
    new Pattern(Tracks.SNARE, [0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0]),
    new Pattern(Tracks.SNARE, [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1]),
    new Pattern(Tracks.SNARE, [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0]),
    new Pattern(Tracks.SNARE, [0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0]),
    new Pattern(Tracks.SNARE, [0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0]),
    new Pattern(Tracks.SNARE, [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]),
    new Pattern(Tracks.SNARE, [0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1]),
    new Pattern(Tracks.SNARE, [0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1]),
    new Pattern(Tracks.SNARE, [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0]),
    new Pattern(Tracks.SNARE, [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0]),
    new Pattern(Tracks.SNARE, [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0]),
    new Pattern(Tracks.SNARE, [0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1]),
  ],
  [Tracks.HIHAT1]: [
    new Pattern(Tracks.HIHAT1, [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]),
    new Pattern(Tracks.HIHAT1, [1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1]),
    new Pattern(Tracks.HIHAT1, [1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1]),
    new Pattern(Tracks.HIHAT1, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]),
    new Pattern(Tracks.HIHAT1, [1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1]),
    new Pattern(Tracks.HIHAT1, [1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]),
    new Pattern(Tracks.HIHAT1, [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]),
    new Pattern(Tracks.HIHAT1, [0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0]),
    new Pattern(Tracks.HIHAT1, [0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]),
    new Pattern(Tracks.HIHAT1, [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1]),
    new Pattern(Tracks.HIHAT1, [0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1]),
    new Pattern(Tracks.HIHAT1, [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]),
    new Pattern(Tracks.HIHAT1, [0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0]),
    new Pattern(Tracks.HIHAT1, [0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0]),
    new Pattern(Tracks.HIHAT1, [1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0]),
    new Pattern(Tracks.HIHAT1, [0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0]),
    new Pattern(Tracks.HIHAT1, [0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0]),
    new Pattern(Tracks.HIHAT1, [0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0]),
    new Pattern(Tracks.HIHAT1, [0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1]),
    new Pattern(Tracks.HIHAT1, [0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1]),
    new Pattern(Tracks.HIHAT1, [0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1]),
    new Pattern(Tracks.HIHAT1, [0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1]),
    new Pattern(Tracks.HIHAT1, [0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1]),
    new Pattern(Tracks.HIHAT1, [0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0]),
  ],
  [Tracks.HIHAT2]: [
    new Pattern(Tracks.HIHAT2, [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0]),
    new Pattern(Tracks.HIHAT2, [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0]),
    new Pattern(Tracks.HIHAT2, [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0]),
    new Pattern(Tracks.HIHAT2, [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),
    new Pattern(Tracks.HIHAT2, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]),
    new Pattern(Tracks.HIHAT2, [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0]),
    new Pattern(Tracks.HIHAT2, [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0]),
    new Pattern(Tracks.HIHAT2, [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0]),
    new Pattern(Tracks.HIHAT2, [0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0]),
    new Pattern(Tracks.HIHAT2, [0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0]),
    new Pattern(Tracks.HIHAT2, [0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0]),
    new Pattern(Tracks.HIHAT2, [0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0]),
    new Pattern(Tracks.HIHAT2, [0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0]),
    new Pattern(Tracks.HIHAT2, [0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0]),
    new Pattern(Tracks.HIHAT2, [0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0]),
    new Pattern(Tracks.HIHAT2, [0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0]),
    new Pattern(Tracks.HIHAT2, [0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0]),
    new Pattern(Tracks.HIHAT2, [0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0]),
    new Pattern(Tracks.HIHAT2, [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0]),
    new Pattern(Tracks.HIHAT2, [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1]),
    new Pattern(Tracks.HIHAT2, [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1]),
    new Pattern(Tracks.HIHAT2, [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0]),
    new Pattern(Tracks.HIHAT2, [0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1]),
    new Pattern(Tracks.HIHAT2, [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1]),
  ],
  [Tracks.PERC1]: [
    new Pattern(Tracks.PERC1, [1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0]),
    new Pattern(Tracks.PERC1, [1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0]),
    new Pattern(Tracks.PERC1, [0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0]),
    new Pattern(Tracks.PERC1, [0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1]),
    new Pattern(Tracks.PERC1, [1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0]),
    new Pattern(Tracks.PERC1, [1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0]),
    new Pattern(Tracks.PERC1, [0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0]),
    new Pattern(Tracks.PERC1, [0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1]),
    new Pattern(Tracks.PERC1, [1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0]),
    new Pattern(Tracks.PERC1, [1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0]),
    new Pattern(Tracks.PERC1, [0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1]),
    new Pattern(Tracks.PERC1, [1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),
    new Pattern(Tracks.PERC1, [1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0]),
    new Pattern(Tracks.PERC1, [0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0]),
    new Pattern(Tracks.PERC1, [0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1]),
    new Pattern(Tracks.PERC1, [0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]),
    new Pattern(Tracks.PERC1, [0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0]),
    new Pattern(Tracks.PERC1, [0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1]),
    new Pattern(Tracks.PERC1, [0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0]),
    new Pattern(Tracks.PERC1, [1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0]),
    new Pattern(Tracks.PERC1, [1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0]),
    new Pattern(Tracks.PERC1, [0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),
    new Pattern(Tracks.PERC1, [0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1]),
    new Pattern(Tracks.PERC1, [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]),
  ],
  [Tracks.PERC2]: [
    new Pattern(Tracks.PERC2, [1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0]),
    new Pattern(Tracks.PERC2, [1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0]),
    new Pattern(Tracks.PERC2, [0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0]),
    new Pattern(Tracks.PERC2, [0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1]),
    new Pattern(Tracks.PERC2, [1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0]),
    new Pattern(Tracks.PERC2, [1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0]),
    new Pattern(Tracks.PERC2, [0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0]),
    new Pattern(Tracks.PERC2, [0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1]),
    new Pattern(Tracks.PERC2, [1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0]),
    new Pattern(Tracks.PERC2, [1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0]),
    new Pattern(Tracks.PERC2, [0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1]),
    new Pattern(Tracks.PERC2, [1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),
    new Pattern(Tracks.PERC2, [1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0]),
    new Pattern(Tracks.PERC2, [0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0]),
    new Pattern(Tracks.PERC2, [0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1]),
    new Pattern(Tracks.PERC2, [0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]),
    new Pattern(Tracks.PERC2, [0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0]),
    new Pattern(Tracks.PERC2, [0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1]),
    new Pattern(Tracks.PERC2, [0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0]),
    new Pattern(Tracks.PERC2, [1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0]),
    new Pattern(Tracks.PERC2, [1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0]),
    new Pattern(Tracks.PERC2, [0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),
    new Pattern(Tracks.PERC2, [0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1]),
    new Pattern(Tracks.PERC2, [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]),
  ],
});

export default bank;