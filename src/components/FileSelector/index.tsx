import { BANK_NUM_PATTERNS } from "@/core/bank";
import { useCallback, useRef } from "react";

const OneFileSelector: React.FC<{index: number;}> = ({ index }) => {
  const ref = useRef<HTMLInputElement>(null);
  const removeFile: React.MouseEventHandler = useCallback((e) => {
    e.preventDefault();
    if (ref.current) {
      ref.current.value = '';
    }
  }, []);
  return (
    <label key={index}>
      Pattern {index}: <input type="file" accept=".mid,.midi" ref={ref} />{' '}
      <button onClick={removeFile}>-</button>
    </label>
  );
}

const FileSelector: React.FC<{}> = () => {
  return <>
    {(new Array(BANK_NUM_PATTERNS).fill(0)).map((_, index) => (
      <div key={index}>
        <OneFileSelector index={index} />
      </div>
    ))}
  </>
};

export default FileSelector;
