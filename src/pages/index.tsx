import Head from 'next/head'
import { useState } from 'react'
import MidiUploader from '@/components/MidiUploader';
import Grids from '@/components/Grids';

const Mode = {
  MIDI_UPLOADER: 'MIDI_UPLOADER',
  GRIDS: 'GRIDS',
} as const
type Mode = typeof Mode[keyof typeof Mode]

export default function Home() {
  const [mode, setMode] = useState<Mode>(Mode.MIDI_UPLOADER)

  return (
    <>
      <Head>
        <title>Stolperbeats Pattern Creator</title>
      </Head>
      <main>
        <div style={{ marginBottom: '2rem' }}>
          Select Mode:{' '}
          <button onClick={() => setMode(Mode.MIDI_UPLOADER)}>MIDI</button>{' '}
          <button onClick={() => setMode(Mode.GRIDS)}>Mutable Instruments Grids</button>
        </div>

        {mode === Mode.MIDI_UPLOADER ? <MidiUploader /> : <Grids />}
      </main>
    </>
  )
}

