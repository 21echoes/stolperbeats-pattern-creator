import * as fs from 'fs/promises';
import { Tracks } from "../../core/track";
import { createBanks } from '../xByY';

const writeBankFiles = async () => {
  const densities = {
    [Tracks.KICK]: 128,
    [Tracks.SNARE]: 128,
    [Tracks.HIHAT1]: 128,
  };
  const banks = createBanks(densities);
  await Promise.all(banks.map(async (bank, index) => {
    await fs.writeFile(`output/xByY/PatternBank${(index + 40).toString().padStart(3, '0')}.txt`, bank.toString())
  }))
}

writeBankFiles().then(() => console.log('done')).catch(console.error)
