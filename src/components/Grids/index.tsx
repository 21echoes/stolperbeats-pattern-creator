import JSZip from 'jszip';
import FileSaver from 'file-saver';
import { ChangeEventHandler, FormEvent, useCallback, useState } from 'react'
import PathByDensity from '../PathByDensity';
import XByY from '../XByY';
import { Bank } from '@/core/bank';

const Approach = {
  PATH_BY_DENSITY: 'PATH_BY_DENSITY',
  X_BY_Y: 'X_BY_Y',
} as const;
type Approach = typeof Approach[keyof typeof Approach];

export default function Grids() {
  const [approach, setApproach] = useState<Approach>(Approach.PATH_BY_DENSITY);

  const onChangeApproach: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setApproach(e.target.value as Approach);
  }, []);

  const saveFiles = useCallback(async (banks: Bank[]) => {
    const zip = new JSZip();
    const startIndex = 64 - banks.length;
    banks.forEach((bank, index) => {
      zip.file(`PatternBank${(startIndex + index).toString().padStart(3, '0')}.txt`, bank.toString());
    });
    const content = await zip.generateAsync({ type: 'blob' });
    FileSaver.saveAs(content, 'PatternBanks.zip');
  }, []);

  return (
    <>
      <fieldset style={{ marginBottom: '2rem' }}>
        <legend>Select a size:</legend>

        <label>
          <input type="radio" name="approach" value={Approach.PATH_BY_DENSITY} checked={approach === Approach.PATH_BY_DENSITY} onChange={onChangeApproach} />
          Banks draw a path thru Grids X/Y space, Patterns control Grids Density
        </label>
        <br />

        <label>
          <input type="radio" name="approach" value={Approach.X_BY_Y} checked={approach === Approach.X_BY_Y} onChange={onChangeApproach} />
          Banks control Grids X, Patterns control Grids Y, Grids Density is fixed
        </label>
        <br />
      </fieldset>

      {approach === Approach.PATH_BY_DENSITY ? (
        <PathByDensity saveFiles={saveFiles} />
      ) : (
        <XByY saveFiles={saveFiles} />
      )}
    </>
  )
}

