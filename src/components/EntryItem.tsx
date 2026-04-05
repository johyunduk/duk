import { DebugEntry } from '../types';
import { PayloadContent } from './PayloadContent';

interface EntryItemProps {
  entry: DebugEntry;
  isSelected: boolean;
  onClick: () => void;
}

const COLOR_MAP: Record<string, string> = {
  red: 'border-l-red-500',
  green: 'border-l-green-500',
  blue: 'border-l-blue-500',
  orange: 'border-l-orange-500',
  purple: 'border-l-purple-500',
  gray: 'border-l-gray-500',
};

export function EntryItem({ entry, isSelected, onClick }: EntryItemProps) {
  const colorClass = entry.color ? COLOR_MAP[entry.color] ?? 'border-l-indigo-500' : 'border-l-indigo-500';

  const time = entry.receivedAt.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div
      className={`border-l-4 ${colorClass} px-4 py-3 cursor-pointer transition-colors ${
        isSelected ? 'bg-gray-800' : 'hover:bg-gray-900'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {entry.label && (
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wide">
              {entry.label}
            </span>
          )}
          <span className="text-xs text-gray-500">
            {entry.payload.payloads.map((p) => p.type).join(', ')}
          </span>
        </div>
        <span className="text-xs text-gray-600">{time}</span>
      </div>
      <div className="space-y-2">
        {entry.payload.payloads.map((p, i) => (
          <PayloadContent key={i} type={p.type} content={p.content} />
        ))}
      </div>
    </div>
  );
}
