interface ToolbarProps {
  entryCount: number;
  onClear: () => void;
}

export function Toolbar({ entryCount, onClear }: ToolbarProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800">
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-white">Debugger</span>
        {entryCount > 0 && (
          <span className="px-2 py-0.5 text-xs rounded-full bg-indigo-600 text-white">
            {entryCount}
          </span>
        )}
      </div>
      <button
        onClick={onClear}
        className="text-xs text-gray-400 hover:text-white transition-colors px-2 py-1 rounded hover:bg-gray-800"
      >
        전체 삭제
      </button>
    </div>
  );
}
