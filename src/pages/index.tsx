import { BANK_NUM_PATTERNS, Bank } from '@/core/bank';
import { convertMidiFilesToBank } from '@/core/midi-file-reader';
import Head from 'next/head'
import { FormEvent, useCallback, useRef, useState } from 'react'
import arrayBufferToBuffer from 'arraybuffer-to-buffer'
import NoteMapper from '@/components/NoteMapper';
import FileSelector from '@/components/FileSelector';
import { DefaultMidiNoteMap, MidiNoteMap } from '@/core/midi-note-map';
import { Track } from '@/core/track';
import FileSaver from 'file-saver';

const getBuffersFromFormFiles = async (form: HTMLFormElement): Promise<(Buffer | undefined)[]> =>
  Promise.all((new Array(BANK_NUM_PATTERNS).fill(0)).map((_, i) =>
    new Promise<Buffer | undefined>((resolve) => {
      const input = form[i] as HTMLInputElement;

      const file = input.files?.[0];
      if (!file) {
        resolve(undefined);
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const fileBuffer = e.target?.result ?? undefined;
        if (!fileBuffer || typeof fileBuffer === 'string') {
          resolve(undefined);
          return;
        }
        var buffer = arrayBufferToBuffer(fileBuffer);
        resolve(buffer);
      };
      reader.readAsArrayBuffer(file);
    })
  ));

const generateBankForForm = async (form: HTMLFormElement, midiNoteMap: MidiNoteMap): Promise<Bank> => {
  const buffers = await getBuffersFromFormFiles(form);
  const bank = await convertMidiFilesToBank(buffers, midiNoteMap);
  return bank;
}

export default function Home() {
  const [bankString, setBankString] = useState('');

  const [midiNoteMapEntries, setMidiNoteMapEntries] = useState(
    Object.entries(DefaultMidiNoteMap)
      .map(([midiNoteNumberStr, track]) => [parseInt(midiNoteNumberStr, 10), track] as [number, Track])
  )

  const onSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const midiNoteMap = Object.fromEntries(midiNoteMapEntries);
    const bank = await generateBankForForm(e.currentTarget, midiNoteMap);
    setBankString(bank.toString());
  }, [midiNoteMapEntries]);

  const bankTextAreaRef = useRef<HTMLTextAreaElement>(null);
  const copyText = async (text: string): Promise<void> => navigator.clipboard.writeText(text);
  const copyBank: React.MouseEventHandler = useCallback((e) => {
    e.preventDefault();
    if (!bankTextAreaRef.current) {
      return;
    }
    copyText(bankTextAreaRef.current.value).catch(console.error);
  }, []);
  const saveText = (text: string) => {
    const blob = new Blob([text], {type: "text/csv;charset=us-ascii"});
    FileSaver.saveAs(blob, "PatternBank000.txt");
  }
  const saveBank: React.MouseEventHandler = useCallback((e) => {
    e.preventDefault();
    if (!bankTextAreaRef.current) {
      return;
    }
    saveText(bankTextAreaRef.current.value);
  }, []);

  return (
    <>
      <Head>
        <title>Stolperbeats Pattern Creator</title>
      </Head>
      <main>
        <form onSubmit={onSubmit}>
          MIDI files:
          <FileSelector />

          <br />
          MIDI note mapping:
          <NoteMapper midiNoteMapEntries={midiNoteMapEntries} setMidiNoteMapEntries={setMidiNoteMapEntries} />

          <br />
          <button type="submit">Generate</button>
        </form>

        {bankString ? (
          <div>
            <br />
            <button onClick={copyBank}>Copy</button>
            <button onClick={saveBank}>Save</button>
            <div>
              <textarea rows={27} cols={90} ref={bankTextAreaRef} value={bankString} />
            </div>
          </div>
        ) : null}
      </main>
    </>
  )
}

