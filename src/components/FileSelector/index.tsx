import { BANK_NUM_PATTERNS } from "@/core/bank";

const FileSelector: React.FC<{}> = () => {
  return <>
    {(new Array(BANK_NUM_PATTERNS).fill(0)).map((_, index) => (
      <div key={index}>
        <label key={index}>
          Pattern {index}: <input type="file" accept=".mid,.midi" />
        </label>
      </div>
    ))}
  </>
};

export default FileSelector;
