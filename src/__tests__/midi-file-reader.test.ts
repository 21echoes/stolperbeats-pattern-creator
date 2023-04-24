import { Bank, BankData } from "../bank";
import { readFile } from "../midi-file-reader";
import { Track, Tracks } from "../track";

const main = async (fileName: string): Promise<Bank> => {
  const bankData: BankData = {
    [Tracks.KICK]: [],
    [Tracks.SNARE]: [],
    [Tracks.HIHAT1]: [],
    [Tracks.HIHAT2]: [],
    [Tracks.PERC1]: [],
    [Tracks.PERC2]: [],
  }

  for (let i = 0; i < 24; i++) {
    const parsed = await readFile(fileName);
    (Object.keys(parsed) as Track[]).sort().forEach((track) => {
      bankData[track].push(parsed[track])
    })
  }

  return new Bank(bankData)
}

main('./src/__tests__/test.mid').then((bank) => console.log(bank.toString())).catch(console.error)
