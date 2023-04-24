import { BANK_NUM_PATTERNS, Bank } from '@/core/bank';
import { convertMidiFilesToBank } from '@/core/midi-file-reader';
import Head from 'next/head'
import { FormEvent, useCallback, useState } from 'react'
import arrayBufferToBuffer from 'arraybuffer-to-buffer'
import FileSelector from '@/components/FileSelector';

const getBuffersFromFormFiles = async (form: HTMLFormElement): Promise<(Buffer|undefined)[]> =>
  Promise.all((new Array(BANK_NUM_PATTERNS).fill(0)).map((_, i) =>
    new Promise<Buffer|undefined>((resolve) => {
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

const generateBankForForm = async (form: HTMLFormElement): Promise<Bank> => {
  const buffers = await getBuffersFromFormFiles(form);
  const bank = await convertMidiFilesToBank(buffers);
  return bank;
}

export default function Home() {
  const [bankString, setBankString] = useState('');

  const onSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const bank = await generateBankForForm(e.currentTarget);
    setBankString(bank.toString());
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

          <br/>
          <button type="submit">Generate</button>
        </form>

        {bankString ? <pre>{bankString}</pre> : null}
      </main>
    </>
  )
}

