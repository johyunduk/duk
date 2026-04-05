import { useEffect, useState } from 'react';
import { DebugEntry, RayPayload } from './types';
import { EntryList } from './components/EntryList';
import { Toolbar } from './components/Toolbar';

declare global {
  interface Window {
    debuggerAPI: {
      onPayload: (callback: (payload: unknown) => void) => void;
      removePayloadListener: () => void;
    };
  }
}

export default function App() {
  const [entries, setEntries] = useState<DebugEntry[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    window.debuggerAPI.onPayload((raw) => {
      const payload = raw as RayPayload;
      const entry: DebugEntry = {
        id: payload.uuid,
        receivedAt: new Date(),
        color: payload.meta.color as string | undefined,
        label: payload.meta.label as string | undefined,
        payload,
      };
      setEntries((prev) => [entry, ...prev]);
    });

    return () => {
      window.debuggerAPI.removePayloadListener();
    };
  }, []);

  const clearAll = () => {
    setEntries([]);
    setSelected(null);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-950 text-gray-100">
      <Toolbar entryCount={entries.length} onClear={clearAll} />
      {entries.length === 0 ? (
        <div className="flex-1 flex items-center justify-center text-gray-500">
          <div className="text-center">
            <p className="text-lg font-medium">수신 대기 중...</p>
            <p className="text-sm mt-1">포트 23517에서 디버그 데이터를 기다리고 있습니다.</p>
          </div>
        </div>
      ) : (
        <EntryList
          entries={entries}
          selected={selected}
          onSelect={setSelected}
        />
      )}
    </div>
  );
}
