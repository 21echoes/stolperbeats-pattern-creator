import * as fs from 'fs/promises';
import { Tracks } from "../core/track";
import { Pattern } from "../core/pattern";
import { getPatternsAtCoordinates } from "./index";
import { BANK_NUM_PATTERNS, Bank, BankData } from "../core/bank";
import defaultBank from "../core/stock-banks/bank000";

const createBanks = (): Bank[] => {
  const startPoint = (255/(BANK_NUM_PATTERNS * 2));
  const stepSize = (255/BANK_NUM_PATTERNS);
  const densities = {
    [Tracks.KICK]: 128,
    [Tracks.SNARE]: 128,
    [Tracks.HIHAT1]: 128,
  }
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

const writeBankFiles = async () => {
  const banks = createBanks();
  await Promise.all(banks.map(async (bank, index) => {
    await fs.writeFile(`output/xByY/PatternBank${(index + 40).toString().padStart(3, '0')}.txt`, bank.toString())
  }))
}

writeBankFiles().then(() => console.log('done')).catch(console.error)
