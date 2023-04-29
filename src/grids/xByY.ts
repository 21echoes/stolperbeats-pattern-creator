import { Tracks } from "../core/track";
import { Pattern } from "../core/pattern";
import { getPatternsAtCoordinates } from "./index";
import { BANK_NUM_PATTERNS, Bank, BankData } from "../core/bank";
import defaultBank from "../core/stock-banks/bank000";

export const createBanks = (densities: {
  [Tracks.KICK]: number,
  [Tracks.SNARE]: number,
  [Tracks.HIHAT1]: number,
}): Bank[] => {
  const startPoint = (255/(BANK_NUM_PATTERNS * 2));
  const stepSize = (255/BANK_NUM_PATTERNS);
  const banks = [] as Bank[];
  for (let i=0; i<BANK_NUM_PATTERNS; i++) {
    const bankData: BankData = {
      [Tracks.KICK]: [] as Pattern[],
      [Tracks.SNARE]: [] as Pattern[],
      [Tracks.HIHAT1]: [] as Pattern[],
      [Tracks.HIHAT2]: [] as Pattern[],
      [Tracks.PERC1]: defaultBank.data[Tracks.PERC1],
      [Tracks.PERC2]: defaultBank.data[Tracks.PERC2],
    };
    for (let j=0; j<BANK_NUM_PATTERNS; j++) {
      const x = Math.round(startPoint + (i * stepSize));
      const y = Math.round(startPoint + (j * stepSize));
      const patterns = getPatternsAtCoordinates(x, y, densities);
      bankData[Tracks.KICK].push(patterns[Tracks.KICK]);
      bankData[Tracks.SNARE].push(patterns[Tracks.SNARE]);
      bankData[Tracks.HIHAT1].push(patterns[Tracks.HIHAT1]);
      bankData[Tracks.HIHAT2].push(patterns[Tracks.HIHAT2]);
    }
    banks.push(new Bank(bankData));
  }
  return banks;
}
