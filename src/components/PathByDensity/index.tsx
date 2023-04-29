import { Bank } from '@/core/bank';
import { createBanks } from '@/grids/pathByDensity';
import { ChangeEventHandler, FormEvent, useCallback, useState } from 'react'

const PathSize = {
  SEVEN_X_SEVEN: 'SEVEN_X_SEVEN',
  EIGHT_X_EIGHT: 'EIGHT_X_EIGHT',
} as const;
type PathSize = typeof PathSize[keyof typeof PathSize];

const PathByDensity: React.FC<{saveFiles: (banks: Bank[]) => Promise<void>}> = ({ saveFiles }) => {
  const [pathSize, setPathSize] = useState<PathSize>(PathSize.SEVEN_X_SEVEN);

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setPathSize(e.target.value as PathSize);
  }, []);

  const generateBanks = useCallback(() => {
    return createBanks(pathSize === PathSize.SEVEN_X_SEVEN ? 7 : 8)
  }, [pathSize]);
  const onSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const banks = generateBanks();
    saveFiles(banks);
  }, [generateBanks, saveFiles]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Select a size:</legend>

          <label>
            <input type="radio" name="size" value={PathSize.SEVEN_X_SEVEN} checked={pathSize === PathSize.SEVEN_X_SEVEN} onChange={onChange} />
            7 x 7
          </label>
          <br />

          <label>
            <input type="radio" name="size" value={PathSize.EIGHT_X_EIGHT} checked={pathSize === PathSize.EIGHT_X_EIGHT} onChange={onChange} />
            8 x 8
          </label>
          <br />
        </fieldset>

        <br />
        <button type="submit">Save Banks</button>
      </form>
    </>
  )
}

export default PathByDensity;

