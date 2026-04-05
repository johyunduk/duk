import { DebugEntry } from '../types';
import { EntryItem } from './EntryItem';

interface EntryListProps {
  entries: DebugEntry[];
  selected: string | null;
  onSelect: (id: string) => void;
}

export function EntryList({ entries, selected, onSelect }: EntryListProps) {
  return (
    <div className="flex-1 overflow-y-auto divide-y divide-gray-800">
      {entries.map((entry) => (
        <EntryItem
          key={entry.id}
          entry={entry}
          isSelected={selected === entry.id}
          onClick={() => onSelect(entry.id)}
        />
      ))}
    </div>
  );
}
