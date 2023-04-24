import * as fs from 'fs/promises';
import { BANK_NUM_PATTERNS, Bank, BankData } from "../bank";
import { convertMidiFileToPatterns } from "../midi-file-reader";
import { Track, Tracks } from "../track";

const main = async (filePath: string): Promise<Bank> => {
  const fileBuffer = await fs.readFile(filePath);

  const bankData: BankData = {
    [Tracks.KICK]: [],
    [Tracks.SNARE]: [],
    [Tracks.HIHAT1]: [],
    [Tracks.HIHAT2]: [],
    [Tracks.PERC1]: [],
    [Tracks.PERC2]: [],
  }

  for (let i = 0; i < BANK_NUM_PATTERNS; i++) {
    const parsed = await convertMidiFileToPatterns(fileBuffer);
    (Object.keys(parsed) as Track[]).sort().forEach((track) => {
      bankData[track].push(parsed[track])
    })
  }

  return new Bank(bankData)
}

main('./src/__tests__/test.mid').then((bank) => console.log(bank.toString())).catch(console.error)
