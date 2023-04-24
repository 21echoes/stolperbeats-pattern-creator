import { DefaultMidiNoteMap } from "@/core/midi-note-map";
import { Track, Tracks, getTrackName } from "@/core/track";
import { ChangeEventHandler, MouseEventHandler, useCallback, useMemo, useState } from "react";

const MidiNoteNumberInput: React.FC<{ onChange: ChangeEventHandler<HTMLInputElement>, value: number }> = ({ onChange, value }) => {
  return <input value={value} type="number" min={0} max={127} onChange={onChange} />
}

const TrackSelect: React.FC<{ onChange: ChangeEventHandler<HTMLSelectElement>, value: Track }> = ({ onChange, value }) => {
  return <select onChange={onChange} value={value}>
    {Object.values(Tracks).sort().map((track) =>
      <option key={track} value={track}>{getTrackName(track)}</option>
    )}
  </select>
}

const NoteMap: React.FC<{
  index: number;
  midiNoteNumber: number;
  track: Track;
  updateMapping: (index: number, midiNoteNumber: number, track: Track | undefined) => void;
  isDuplicate: boolean;
}> = ({ index, midiNoteNumber, track, updateMapping, isDuplicate }) => {
  const onChangeMidiNoteNumber: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    updateMapping(index, parseInt(e.currentTarget.value, 10), track);
  }, [index, track, updateMapping]);

  const onChangeTrack: ChangeEventHandler<HTMLSelectElement> = useCallback((e) => {
    updateMapping(index, midiNoteNumber, e.currentTarget.value as Track);
  }, [index, midiNoteNumber, updateMapping]);

  const removeMapping: MouseEventHandler = useCallback((e) => {
    e.preventDefault();
    updateMapping(index, midiNoteNumber, undefined)
  }, [index, midiNoteNumber, updateMapping]);

  return <div style={isDuplicate ? { background: 'red' } : {}}>
    <MidiNoteNumberInput value={midiNoteNumber} onChange={onChangeMidiNoteNumber} />{' '}
    <TrackSelect value={track} onChange={onChangeTrack} />{' '}
    <button onClick={removeMapping}>-</button>
  </div>
}

const NoteMapper: React.FC<{
  midiNoteMapEntries: [number, Track][];
  setMidiNoteMapEntries: React.Dispatch<React.SetStateAction<[number, Track][]>>
}> = ({ midiNoteMapEntries, setMidiNoteMapEntries }) => {
  const updateMapping = useCallback((index: number, midiNoteNumber: number, track: Track | undefined) => {
    setMidiNoteMapEntries(_mapping => {
      const newMapping = [..._mapping];
      if (index < newMapping.length) {
        if (track) {
          newMapping[index] = [midiNoteNumber, track];
        } else {
          newMapping.splice(index, 1);
        }
      } else {
        newMapping.push([midiNoteNumber, track ?? Tracks.KICK])
      }
      return newMapping;
    })
  }, [setMidiNoteMapEntries]);
  const addNewMapping: MouseEventHandler = useCallback((e) => {
    e.preventDefault();
    let firstUnused = 35;
    const used = midiNoteMapEntries.map(([midiNoteNumber]) => midiNoteNumber).sort()
    while (used.indexOf(firstUnused) > -1) {
      firstUnused += 1;
    }
    updateMapping(midiNoteMapEntries.length, firstUnused, Tracks.KICK);
  }, [midiNoteMapEntries, updateMapping]);
  const sort: MouseEventHandler = useCallback((e) => {
    e.preventDefault();
    setMidiNoteMapEntries([...midiNoteMapEntries.sort((a, b) => a[0] - b[0])])
  }, [midiNoteMapEntries, setMidiNoteMapEntries]);
  const duplicateMidiNoteNumbers = useMemo(() => {
    const justNoteNumbers = midiNoteMapEntries.map(([midiNoteNumber]) => midiNoteNumber);
    return new Set(justNoteNumbers.filter((midiNoteNumber, index) => {
      const _justNoteNumbers = [...justNoteNumbers];
      _justNoteNumbers.splice(index, 1);
      return _justNoteNumbers.indexOf(midiNoteNumber) > -1;
    }))
  }, [midiNoteMapEntries]);

  return <div>
    <button onClick={sort}>Sort!</button>
    {midiNoteMapEntries.map(([midiNoteNumber, track], index) => (
      <NoteMap
        key={index}
        index={index}
        midiNoteNumber={midiNoteNumber}
        track={track}
        updateMapping={updateMapping}
        isDuplicate={duplicateMidiNoteNumbers.has(midiNoteNumber)}
      />
    ))}
    <button onClick={addNewMapping}>+</button>
  </div>
};

export default NoteMapper;
