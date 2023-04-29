import { Tracks } from "../core/track";
import { Pattern } from "../core/pattern";
import { getPatternsAtCoordinates } from "./index";
import { BANK_NUM_PATTERNS, Bank, BankData } from "../core/bank";
import defaultBank from "../core/stock-banks/bank000";

/**
  0  1  2  3  4  5  6
0 06,07,08,17,18,20,21
1 04,05,09,10,16,19,22
2 03,02,11,13,15,23,24
3 01,49,12,37,14,26,25
4 48,47,39,38,36,27,28
5 46,43,40,35,34,30,29
6 45,44,42,41,33,32,31
*/
const sevenBySevenPath = [
  [0,3],[1,2],[0,2],[0,1],[1,1],[0,0],[1,0],
  [2,0],[2,1],[3,1],[2,2],[2,3],[3,2],[4,3],
  [4,2],[4,1],[3,0],[4,0],[5,1],[5,0],[6,0],
  [6,1],[5,2],[6,2],[6,3],[5,3],[5,4],[6,4],
  [6,5],[5,5],[6,6],[5,6],[4,6],[4,5],[3,5],
  [4,4],[3,3],[3,4],[2,4],[2,5],[3,6],[2,6],
  [1,5],[1,6],[0,6],[0,5],[1,4],[0,4],[1,3],
]

/**
   0  1  2  3  4  5  6  7
0 07,08,09,10,23,24,25,26
1 05,06,11,12,21,22,27,28
2 04,03,14,13,20,19,30,29
3 01,02,15,16,17,18,31,32
4 64,63,50,49,48,47,34,33
5 61,62,51,52,45,46,35,36
6 60,59,54,53,44,43,38,37
7 58,57,56,55,42,41,40,39
*/
const eightByEightPath = [
  [0,3],[1,3],[1,2],[0,2],[0,1],[1,1],[0,0],[1,0],
  [2,0],[3,0],[2,1],[3,1],[3,2],[2,2],[2,3],[3,3],
  [4,3],[5,3],[5,2],[4,2],[4,1],[5,1],[4,0],[5,0],
  [6,0],[7,0],[6,1],[7,1],[7,2],[6,2],[6,3],[7,3],
  [7,4],[6,4],[6,5],[7,5],[7,6],[6,6],[7,7],[6,7],
  [5,7],[4,7],[5,6],[4,6],[4,5],[5,5],[5,4],[4,4],
  [3,4],[2,4],[2,5],[3,5],[3,6],[2,6],[3,7],[2,7],
  [1,7],[0,7],[1,6],[0,6],[0,5],[1,5],[1,4],[0,4],
]

export const createBanks = (gridSize: 7 | 8): Bank[] => {
  const pathStartPoint = (255/(gridSize * 2));
  const pathStepSize = (255/gridSize);
  const densityStartPoint = (255/(BANK_NUM_PATTERNS * 2));
  const densityStepSize = (255/BANK_NUM_PATTERNS);

  const path = {
    7: sevenBySevenPath,
    8: eightByEightPath,
  }[gridSize];
  return path.map(([xIndex,yIndex]) => {
    const bankData: BankData = {
      [Tracks.KICK]: [] as Pattern[],
      [Tracks.SNARE]: [] as Pattern[],
      [Tracks.HIHAT1]: [] as Pattern[],
      [Tracks.HIHAT2]: [] as Pattern[],
      [Tracks.PERC1]: defaultBank.data[Tracks.PERC1],
      [Tracks.PERC2]: defaultBank.data[Tracks.PERC2],
    };
    for (let i=0; i<BANK_NUM_PATTERNS; i++) {
      const densities = {
        [Tracks.KICK]: Math.round(densityStartPoint + (densityStepSize * i)),
        [Tracks.SNARE]: Math.round(densityStartPoint + (densityStepSize * i)),
        [Tracks.HIHAT1]: Math.round(densityStartPoint + (densityStepSize * i)),
      }

      const x = Math.round(pathStartPoint + (pathStepSize * xIndex));
      const y = Math.round(pathStartPoint + (pathStepSize * yIndex));
      const patterns = getPatternsAtCoordinates(x, y, densities);
      bankData[Tracks.KICK].push(patterns[Tracks.KICK]);
      bankData[Tracks.SNARE].push(patterns[Tracks.SNARE]);
      bankData[Tracks.HIHAT1].push(patterns[Tracks.HIHAT1]);
      bankData[Tracks.HIHAT2].push(patterns[Tracks.HIHAT2]);
    }
    return new Bank(bankData);
  })
}