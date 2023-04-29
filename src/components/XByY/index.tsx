import { Bank } from '@/core/bank';
import { Tracks } from '@/core/track';
import { createBanks } from '@/grids/xByY';
import { ChangeEventHandler, FormEvent, useCallback, useState } from 'react'

const XByY: React.FC<{saveFiles: (banks: Bank[]) => Promise<void>}> = ({ saveFiles }) => {
  const [kickDensity, setKickDensity] = useState(128);
  const [snareDensity, setSnareDensity] = useState(128);
  const [hihatDensity, setHihatDensity] = useState(128);

  const onChangeKickDensity: ChangeEventHandler<HTMLInputElement> = useCallback((e) => setKickDensity(parseInt(e.target.value, 10)), []);
  const onChangeSnareDensity: ChangeEventHandler<HTMLInputElement> = useCallback((e) => setSnareDensity(parseInt(e.target.value, 10)), []);
  const onChangeHihatDensity: ChangeEventHandler<HTMLInputElement> = useCallback((e) => setHihatDensity(parseInt(e.target.value, 10)), []);

  const generateBanks = useCallback(() => {
    return createBanks({
      [Tracks.KICK]: kickDensity,
      [Tracks.SNARE]: snareDensity,
      [Tracks.HIHAT1]: hihatDensity,
    })
  }, [kickDensity, snareDensity, hihatDensity]);
  const onSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const banks = generateBanks();
    saveFiles(banks);
  }, [generateBanks, saveFiles]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          Kick Density:{' '}
          <input value={kickDensity} type="number" min={0} max={255} onChange={onChangeKickDensity} />
        </label>
        <br/>
        <label>
          Snare Density:{' '}
          <input value={snareDensity} type="number" min={0} max={255} onChange={onChangeSnareDensity} />
        </label>
        <br/>
        <label>
          Hi-Hat Density:{' '}
          <input value={hihatDensity} type="number" min={0} max={255} onChange={onChangeHihatDensity} />
        </label>
        <br />

        <br />
        <button type="submit">Save Banks</button>
      </form>
    </>
  )
}

export default XByY;

