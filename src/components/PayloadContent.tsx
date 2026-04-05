import { PayloadType } from '../types';

interface PayloadContentProps {
  type: PayloadType;
  content: Record<string, unknown>;
}

export function PayloadContent({ type, content }: PayloadContentProps) {
  if (type === 'log') {
    const values = content.values as unknown[];
    return (
      <div className="space-y-1">
        {values?.map((val, i) => (
          <pre key={i} className="text-sm text-gray-200 font-mono whitespace-pre-wrap break-all">
            {typeof val === 'string' ? val : JSON.stringify(val, null, 2)}
          </pre>
        ))}
      </div>
    );
  }

  if (type === 'exception') {
    const { class: cls, message, file, line } = content as Record<string, string>;
    return (
      <div className="space-y-1">
        <p className="text-sm font-semibold text-red-400">{cls}</p>
        <p className="text-sm text-gray-200">{message}</p>
        <p className="text-xs text-gray-500">{file}:{line}</p>
      </div>
    );
  }

  if (type === 'query') {
    const { sql, bindings, time } = content as Record<string, unknown>;
    return (
      <div className="space-y-1">
        <pre className="text-sm text-yellow-300 font-mono whitespace-pre-wrap break-all">
          {sql as string}
        </pre>
        {bindings && (
          <pre className="text-xs text-gray-400 font-mono">
            {JSON.stringify(bindings, null, 2)}
          </pre>
        )}
        {time && (
          <p className="text-xs text-gray-500">{time as string}ms</p>
        )}
      </div>
    );
  }

  if (type === 'custom') {
    const { content: customContent, label } = content as Record<string, unknown>;
    return (
      <div className="space-y-1">
        {label && <p className="text-xs font-semibold text-indigo-400">{label as string}</p>}
        <pre className="text-sm text-gray-200 font-mono whitespace-pre-wrap break-all">
          {typeof customContent === 'string' ? customContent : JSON.stringify(customContent, null, 2)}
        </pre>
      </div>
    );
  }

  return (
    <pre className="text-sm text-gray-400 font-mono whitespace-pre-wrap break-all">
      {JSON.stringify(content, null, 2)}
    </pre>
  );
}
