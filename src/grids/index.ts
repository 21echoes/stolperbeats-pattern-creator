import { Note } from "../core/note"
import { Pattern } from "../core/pattern"
import { Tracks } from "../core/track"

const nodes = [
  [
    255, 0, 0, 0, 0, 0, 145, 0,
    0, 0, 0, 0, 218, 0, 0, 0,
    72, 0, 36, 0, 182, 0, 0, 0,
    109, 0, 0, 0, 72, 0, 0, 0,
    36, 0, 109, 0, 0, 0, 8, 0,
    255, 0, 0, 0, 0, 0, 72, 0,
    0, 0, 182, 0, 0, 0, 36, 0,
    218, 0, 0, 0, 145, 0, 0, 0,
    170, 0, 113, 0, 255, 0, 56, 0,
    170, 0, 141, 0, 198, 0, 56, 0,
    170, 0, 113, 0, 226, 0, 28, 0,
    170, 0, 113, 0, 198, 0, 85, 0
  ],
  [
    229, 0, 25, 0, 102, 0, 25, 0,
    204, 0, 25, 0, 76, 0, 8, 0,
    255, 0, 8, 0, 51, 0, 25, 0,
    178, 0, 25, 0, 153, 0, 127, 0,
    28, 0, 198, 0, 56, 0, 56, 0,
    226, 0, 28, 0, 141, 0, 28, 0,
    28, 0, 170, 0, 28, 0, 28, 0,
    255, 0, 113, 0, 85, 0, 85, 0,
    159, 0, 159, 0, 255, 0, 63, 0,
    159, 0, 159, 0, 191, 0, 31, 0,
    159, 0, 127, 0, 255, 0, 31, 0,
    159, 0, 127, 0, 223, 0, 95, 0
  ],
  [
    255, 0, 0, 0, 127, 0, 0, 0,
    0, 0, 102, 0, 0, 0, 229, 0,
    0, 0, 178, 0, 204, 0, 0, 0,
    76, 0, 51, 0, 153, 0, 25, 0,
    0, 0, 127, 0, 0, 0, 0, 0,
    255, 0, 191, 0, 31, 0, 63, 0,
    0, 0, 95, 0, 0, 0, 0, 0,
    223, 0, 0, 0, 31, 0, 159, 0,
    255, 0, 85, 0, 148, 0, 85, 0,
    127, 0, 85, 0, 106, 0, 63, 0,
    212, 0, 170, 0, 191, 0, 170, 0,
    85, 0, 42, 0, 233, 0, 21, 0
  ],
  [
    255, 0, 212, 0, 63, 0, 0, 0,
    106, 0, 148, 0, 85, 0, 127, 0,
    191, 0, 21, 0, 233, 0, 0, 0,
    21, 0, 170, 0, 0, 0, 42, 0,
    0, 0, 0, 0, 141, 0, 113, 0,
    255, 0, 198, 0, 0, 0, 56, 0,
    0, 0, 85, 0, 56, 0, 28, 0,
    226, 0, 28, 0, 170, 0, 56, 0,
    255, 0, 231, 0, 255, 0, 208, 0,
    139, 0, 92, 0, 115, 0, 92, 0,
    185, 0, 69, 0, 46, 0, 46, 0,
    162, 0, 23, 0, 208, 0, 46, 0
  ],
  [
    255, 0, 31, 0, 63, 0, 63, 0,
    127, 0, 95, 0, 191, 0, 63, 0,
    223, 0, 31, 0, 159, 0, 63, 0,
    31, 0, 63, 0, 95, 0, 31, 0,
    8, 0, 0, 0, 95, 0, 63, 0,
    255, 0, 0, 0, 127, 0, 0, 0,
    8, 0, 0, 0, 159, 0, 63, 0,
    255, 0, 223, 0, 191, 0, 31, 0,
    76, 0, 25, 0, 255, 0, 127, 0,
    153, 0, 51, 0, 204, 0, 102, 0,
    76, 0, 51, 0, 229, 0, 127, 0,
    153, 0, 51, 0, 178, 0, 102, 0
  ],
  [
    255, 0, 51, 0, 25, 0, 76, 0,
    0, 0, 0, 0, 102, 0, 0, 0,
    204, 0, 229, 0, 0, 0, 178, 0,
    0, 0, 153, 0, 127, 0, 8, 0,
    178, 0, 127, 0, 153, 0, 204, 0,
    255, 0, 0, 0, 25, 0, 76, 0,
    102, 0, 51, 0, 0, 0, 0, 0,
    229, 0, 25, 0, 25, 0, 204, 0,
    178, 0, 102, 0, 255, 0, 76, 0,
    127, 0, 76, 0, 229, 0, 76, 0,
    153, 0, 102, 0, 255, 0, 25, 0,
    127, 0, 51, 0, 204, 0, 51, 0
  ],
  [
    255, 0, 0, 0, 223, 0, 0, 0,
    31, 0, 8, 0, 127, 0, 0, 0,
    95, 0, 0, 0, 159, 0, 0, 0,
    95, 0, 63, 0, 191, 0, 0, 0,
    51, 0, 204, 0, 0, 0, 102, 0,
    255, 0, 127, 0, 8, 0, 178, 0,
    25, 0, 229, 0, 0, 0, 76, 0,
    204, 0, 153, 0, 51, 0, 25, 0,
    255, 0, 226, 0, 255, 0, 255, 0,
    198, 0, 28, 0, 141, 0, 56, 0,
    170, 0, 56, 0, 85, 0, 28, 0,
    170, 0, 28, 0, 113, 0, 56, 0
  ],
  [
    223, 0, 0, 0, 63, 0, 0, 0,
    95, 0, 0, 0, 223, 0, 31, 0,
    255, 0, 0, 0, 159, 0, 0, 0,
    127, 0, 31, 0, 191, 0, 31, 0,
    0, 0, 0, 0, 109, 0, 0, 0,
    218, 0, 0, 0, 182, 0, 72, 0,
    8, 0, 36, 0, 145, 0, 36, 0,
    255, 0, 8, 0, 182, 0, 72, 0,
    255, 0, 72, 0, 218, 0, 36, 0,
    218, 0, 0, 0, 145, 0, 0, 0,
    255, 0, 36, 0, 182, 0, 36, 0,
    182, 0, 0, 0, 109, 0, 0, 0
  ],
  [
    255, 0, 0, 0, 218, 0, 0, 0,
    36, 0, 0, 0, 218, 0, 0, 0,
    182, 0, 109, 0, 255, 0, 0, 0,
    0, 0, 0, 0, 145, 0, 72, 0,
    159, 0, 0, 0, 31, 0, 127, 0,
    255, 0, 31, 0, 0, 0, 95, 0,
    8, 0, 0, 0, 191, 0, 31, 0,
    255, 0, 31, 0, 223, 0, 63, 0,
    255, 0, 31, 0, 63, 0, 31, 0,
    95, 0, 31, 0, 63, 0, 127, 0,
    159, 0, 31, 0, 63, 0, 31, 0,
    223, 0, 223, 0, 191, 0, 191, 0
  ],
  [
    226, 0, 28, 0, 28, 0, 141, 0,
    8, 0, 8, 0, 255, 0, 8, 0,
    113, 0, 28, 0, 198, 0, 85, 0,
    56, 0, 198, 0, 170, 0, 28, 0,
    8, 0, 95, 0, 8, 0, 8, 0,
    255, 0, 63, 0, 31, 0, 223, 0,
    8, 0, 31, 0, 191, 0, 8, 0,
    255, 0, 127, 0, 127, 0, 159, 0,
    115, 0, 46, 0, 255, 0, 185, 0,
    139, 0, 23, 0, 208, 0, 115, 0,
    231, 0, 69, 0, 255, 0, 162, 0,
    139, 0, 115, 0, 231, 0, 92, 0
  ],
  [
    145, 0, 0, 0, 0, 0, 109, 0,
    0, 0, 0, 0, 255, 0, 109, 0,
    72, 0, 218, 0, 0, 0, 0, 0,
    36, 0, 0, 0, 182, 0, 0, 0,
    0, 0, 127, 0, 159, 0, 127, 0,
    159, 0, 191, 0, 223, 0, 63, 0,
    255, 0, 95, 0, 31, 0, 95, 0,
    31, 0, 8, 0, 63, 0, 8, 0,
    255, 0, 0, 0, 145, 0, 0, 0,
    182, 0, 109, 0, 109, 0, 109, 0,
    218, 0, 0, 0, 72, 0, 0, 0,
    182, 0, 72, 0, 182, 0, 36, 0
  ],
  [
    255, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    255, 0, 0, 0, 218, 0, 72, 36,
    0, 0, 182, 0, 0, 0, 145, 109,
    0, 0, 127, 0, 0, 0, 42, 0,
    212, 0, 0, 212, 0, 0, 212, 0,
    0, 0, 0, 0, 42, 0, 0, 0,
    255, 0, 0, 0, 170, 170, 127, 85,
    145, 0, 109, 109, 218, 109, 72, 0,
    145, 0, 72, 0, 218, 0, 109, 0,
    182, 0, 109, 0, 255, 0, 72, 0,
    182, 109, 36, 109, 255, 109, 109, 0
  ],
  [
    255, 0, 0, 0, 255, 0, 191, 0,
    0, 0, 0, 0, 95, 0, 63, 0,
    31, 0, 0, 0, 223, 0, 223, 0,
    0, 0, 8, 0, 159, 0, 127, 0,
    0, 0, 85, 0, 56, 0, 28, 0,
    255, 0, 28, 0, 0, 0, 226, 0,
    0, 0, 170, 0, 56, 0, 113, 0,
    198, 0, 0, 0, 113, 0, 141, 0,
    255, 0, 42, 0, 233, 0, 63, 0,
    212, 0, 85, 0, 191, 0, 106, 0,
    191, 0, 21, 0, 170, 0, 8, 0,
    170, 0, 127, 0, 148, 0, 148, 0
  ],
  [
    255, 0, 0, 0, 0, 0, 63, 0,
    191, 0, 95, 0, 31, 0, 223, 0,
    255, 0, 63, 0, 95, 0, 63, 0,
    159, 0, 0, 0, 0, 0, 127, 0,
    72, 0, 0, 0, 0, 0, 0, 0,
    255, 0, 0, 0, 0, 0, 0, 0,
    72, 0, 72, 0, 36, 0, 8, 0,
    218, 0, 182, 0, 145, 0, 109, 0,
    255, 0, 162, 0, 231, 0, 162, 0,
    231, 0, 115, 0, 208, 0, 139, 0,
    185, 0, 92, 0, 185, 0, 46, 0,
    162, 0, 69, 0, 162, 0, 23, 0
  ],
  [
    255, 0, 0, 0, 51, 0, 0, 0,
    0, 0, 0, 0, 102, 0, 0, 0,
    204, 0, 0, 0, 153, 0, 0, 0,
    0, 0, 0, 0, 51, 0, 0, 0,
    0, 0, 0, 0, 8, 0, 36, 0,
    255, 0, 0, 0, 182, 0, 8, 0,
    0, 0, 0, 0, 72, 0, 109, 0,
    145, 0, 0, 0, 255, 0, 218, 0,
    212, 0, 8, 0, 170, 0, 0, 0,
    127, 0, 0, 0, 85, 0, 8, 0,
    255, 0, 8, 0, 170, 0, 0, 0,
    127, 0, 0, 0, 42, 0, 8, 0
  ],
  [
    255, 0, 0, 0, 0, 0, 0, 0,
    36, 0, 0, 0, 182, 0, 0, 0,
    218, 0, 0, 0, 0, 0, 0, 0,
    72, 0, 0, 0, 145, 0, 109, 0,
    36, 0, 36, 0, 0, 0, 0, 0,
    255, 0, 0, 0, 182, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 109,
    218, 0, 0, 0, 145, 0, 72, 72,
    255, 0, 28, 0, 226, 0, 56, 0,
    198, 0, 0, 0, 0, 0, 28, 28,
    170, 0, 0, 0, 141, 0, 0, 0,
    113, 0, 0, 0, 85, 85, 85, 85
  ],
  [
    255, 0, 0, 0, 0, 0, 95, 0,
    0, 0, 127, 0, 0, 0, 0, 0,
    223, 0, 95, 0, 63, 0, 31, 0,
    191, 0, 0, 0, 159, 0, 0, 0,
    0, 0, 31, 0, 255, 0, 0, 0,
    0, 0, 95, 0, 223, 0, 0, 0,
    0, 0, 63, 0, 191, 0, 0, 0,
    0, 0, 0, 0, 159, 0, 127, 0,
    141, 0, 28, 0, 28, 0, 28, 0,
    113, 0, 8, 0, 8, 0, 8, 0,
    255, 0, 0, 0, 226, 0, 0, 0,
    198, 0, 56, 0, 170, 0, 85, 0
  ],
  [
    255, 0, 0, 0, 8, 0, 0, 0,
    182, 0, 0, 0, 72, 0, 0, 0,
    218, 0, 0, 0, 36, 0, 0, 0,
    145, 0, 0, 0, 109, 0, 0, 0,
    0, 0, 51, 25, 76, 25, 25, 0,
    153, 0, 0, 0, 127, 102, 178, 0,
    204, 0, 0, 0, 0, 0, 255, 0,
    0, 0, 102, 0, 229, 0, 76, 0,
    113, 0, 0, 0, 141, 0, 85, 0,
    0, 0, 0, 0, 170, 0, 0, 0,
    56, 28, 255, 0, 0, 0, 0, 0,
    198, 0, 0, 0, 226, 0, 0, 0
  ],
  [
    255, 0, 8, 0, 28, 0, 28, 0,
    198, 0, 56, 0, 56, 0, 85, 0,
    255, 0, 85, 0, 113, 0, 113, 0,
    226, 0, 141, 0, 170, 0, 141, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    255, 0, 0, 0, 127, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    63, 0, 0, 0, 191, 0, 0, 0,
    255, 0, 0, 0, 255, 0, 127, 0,
    0, 0, 85, 0, 0, 0, 212, 0,
    0, 0, 212, 0, 42, 0, 170, 0,
    0, 0, 127, 0, 0, 0, 0, 0
  ],
  [
    255, 0, 0, 0, 0, 0, 218, 0,
    182, 0, 0, 0, 0, 0, 145, 0,
    145, 0, 36, 0, 0, 0, 109, 0,
    109, 0, 0, 0, 72, 0, 36, 0,
    0, 0, 0, 0, 109, 0, 8, 0,
    72, 0, 0, 0, 255, 0, 182, 0,
    0, 0, 0, 0, 145, 0, 8, 0,
    36, 0, 8, 0, 218, 0, 182, 0,
    255, 0, 0, 0, 0, 0, 226, 0,
    85, 0, 0, 0, 141, 0, 0, 0,
    0, 0, 0, 0, 170, 0, 56, 0,
    198, 0, 0, 0, 113, 0, 28, 0
  ],
  [
    255, 0, 0, 0, 113, 0, 0, 0,
    198, 0, 56, 0, 85, 0, 28, 0,
    255, 0, 0, 0, 226, 0, 0, 0,
    170, 0, 0, 0, 141, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    255, 0, 145, 0, 109, 0, 218, 0,
    36, 0, 182, 0, 72, 0, 72, 0,
    255, 0, 0, 0, 0, 0, 109, 0,
    36, 0, 36, 0, 145, 0, 0, 0,
    72, 0, 72, 0, 182, 0, 0, 0,
    72, 0, 72, 0, 218, 0, 0, 0,
    109, 0, 109, 0, 255, 0, 0, 0
  ],
  [
    255, 0, 0, 0, 218, 0, 0, 0,
    145, 0, 0, 0, 36, 0, 0, 0,
    218, 0, 0, 0, 36, 0, 0, 0,
    182, 0, 72, 0, 0, 0, 109, 0,
    0, 0, 0, 0, 8, 0, 0, 0,
    255, 0, 85, 0, 212, 0, 42, 0,
    0, 0, 0, 0, 8, 0, 0, 0,
    85, 0, 170, 0, 127, 0, 42, 0,
    109, 0, 109, 0, 255, 0, 0, 0,
    72, 0, 72, 0, 218, 0, 0, 0,
    145, 0, 182, 0, 255, 0, 0, 0,
    36, 0, 36, 0, 218, 0, 8, 0
  ],
  [
    255, 0, 0, 0, 42, 0, 0, 0,
    212, 0, 0, 0, 8, 0, 212, 0,
    170, 0, 0, 0, 85, 0, 0, 0,
    212, 0, 8, 0, 127, 0, 8, 0,
    255, 0, 85, 0, 0, 0, 0, 0,
    226, 0, 85, 0, 0, 0, 198, 0,
    0, 0, 141, 0, 56, 0, 0, 0,
    170, 0, 28, 0, 0, 0, 113, 0,
    113, 0, 56, 0, 255, 0, 0, 0,
    85, 0, 56, 0, 226, 0, 0, 0,
    0, 0, 170, 0, 0, 0, 141, 0,
    28, 0, 28, 0, 198, 0, 28, 0
  ],
  [
    255, 0, 0, 0, 229, 0, 0, 0,
    204, 0, 204, 0, 0, 0, 76, 0,
    178, 0, 153, 0, 51, 0, 178, 0,
    178, 0, 127, 0, 102, 51, 51, 25,
    0, 0, 0, 0, 0, 0, 0, 31,
    0, 0, 0, 0, 255, 0, 0, 31,
    0, 0, 8, 0, 0, 0, 191, 159,
    127, 95, 95, 0, 223, 0, 63, 0,
    255, 0, 255, 0, 204, 204, 204, 204,
    0, 0, 51, 51, 51, 51, 0, 0,
    204, 0, 204, 0, 153, 153, 153, 153,
    153, 0, 0, 0, 102, 102, 102, 102
  ],
  [
    170, 0, 0, 0, 0, 255, 0, 0,
    198, 0, 0, 0, 0, 28, 0, 0,
    141, 0, 0, 0, 0, 226, 0, 0,
    56, 0, 0, 113, 0, 85, 0, 0,
    255, 0, 0, 0, 0, 113, 0, 0,
    85, 0, 0, 0, 0, 226, 0, 0,
    141, 0, 0, 8, 0, 170, 56, 56,
    198, 0, 0, 56, 0, 141, 28, 0,
    255, 0, 0, 0, 0, 191, 0, 0,
    159, 0, 0, 0, 0, 223, 0, 0,
    95, 0, 0, 0, 0, 63, 0, 0,
    127, 0, 0, 0, 0, 31, 0, 0
  ]
]

const nodeMap = [
  [ nodes[10], nodes[8], nodes[0], nodes[9], nodes[11] ],
  [ nodes[15], nodes[7], nodes[13], nodes[12], nodes[6] ],
  [ nodes[18], nodes[14], nodes[4], nodes[5], nodes[3] ],
  [ nodes[23], nodes[16], nodes[21], nodes[1], nodes[2] ],
  [ nodes[24], nodes[19], nodes[17], nodes[20], nodes[22] ],
]

// Crossfade between a and b by mix amount. All numbers [0,256)
const u8mix = (a: number, b: number, mix: number) => Math.round(((mix * b) + ((255 - mix) * a)) / 255)
const fourArrays = <T>(arr: T[]): T[] => arr.concat(arr, arr, arr)

// All numbers [0,256)
export const getPatternsAtCoordinates = (
  x: number,
  y: number,
  densities: {
    [Tracks.KICK]: number,
    [Tracks.SNARE]: number,
    [Tracks.HIHAT1]: number,
  }
): {
  [Tracks.KICK]: Pattern;
  [Tracks.SNARE]: Pattern;
  [Tracks.HIHAT1]: Pattern;
  [Tracks.HIHAT2]: Pattern;
} => {
  const gridResolution = 16
  const stepOffsetMultiplier = 32/gridResolution
  const patternLength = 16
  const nodePatternLength = 32

  // Map [0,256) down to [0,4) to select the nodes from the nodeMap (the first 2 bits of x and y)
  const i = Math.floor(x / 64);
  const j = Math.floor(y / 64);
  const aMap = nodeMap[j][i];
  const bMap = nodeMap[j + 1][i];
  const cMap = nodeMap[j][i + 1];
  const dMap = nodeMap[j + 1][i + 1];
  const resultNotes = {
    [Tracks.KICK]: [] as Note[],
    [Tracks.SNARE]: [] as Note[],
    [Tracks.HIHAT1]: [] as Note[],
    [Tracks.HIHAT2]: [] as Note[],
  }
  for (let trackInt = 0; trackInt < 3; trackInt++) {
    const track = {
      0: Tracks.KICK,
      1: Tracks.SNARE,
      2: Tracks.HIHAT1,
    }[trackInt] as keyof typeof densities;
    const trackOffset = trackInt * nodePatternLength;
    for (let step = 0; step < patternLength; step++) {
      const stepOffset = ((step * stepOffsetMultiplier) % nodePatternLength);
      const offset = trackOffset + stepOffset;
      const a = aMap[offset];
      const b = bMap[offset];
      const c = cMap[offset];
      const d = dMap[offset];
      // Crossfade between the values at the chosen drum nodes depending on the last 6 bits of x and y
      const xCrossfade = (x * 4) % 256
      const yCrossfade = (y * 4) % 256
      const trigLevel = u8mix(u8mix(a, b, yCrossfade), u8mix(c, d, yCrossfade), xCrossfade)
      if (track === Tracks.HIHAT1) {
        // If the hihats are of a reasonable density, and the trig level is super high, treat it as an open hat
        if (densities[Tracks.HIHAT1] > 50 && trigLevel > 230) {
          resultNotes[Tracks.HIHAT1].push(0);
          resultNotes[Tracks.HIHAT2].push(1);
        } else {
          resultNotes[track].push(trigLevel > (255 - densities[track]) ? 1 : 0);
          resultNotes[Tracks.HIHAT2].push(0);
        }
      } else {
        resultNotes[track].push(trigLevel > (255 - densities[track]) ? 1 : 0);
      }
    }
  }
  return {
    [Tracks.KICK]: new Pattern(Tracks.KICK, fourArrays(resultNotes[Tracks.KICK])),
    [Tracks.SNARE]: new Pattern(Tracks.SNARE, fourArrays(resultNotes[Tracks.SNARE])),
    [Tracks.HIHAT1]: new Pattern(Tracks.HIHAT1, resultNotes[Tracks.HIHAT1]),
    [Tracks.HIHAT2]: new Pattern(Tracks.HIHAT2, resultNotes[Tracks.HIHAT2]),
  }
}
