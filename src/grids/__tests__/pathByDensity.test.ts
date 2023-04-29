import * as fs from 'fs/promises';
import { createBanks } from '../pathByDensity';

const writeBankFiles = async (gridSize: 7 | 8) => {
  const banks = createBanks(gridSize);
  await Promise.all(banks.map(async (bank, index) => {
    const startIndex = 64 - banks.length;
    await fs.writeFile(`output/pathByDensity/${gridSize}/PatternBank${(startIndex + index).toString().padStart(3, '0')}.txt`, bank.toString())
  }))
}

writeBankFiles(7).then(() => console.log('done 7')).catch(console.error)
writeBankFiles(8).then(() => console.log('done 8')).catch(console.error)
