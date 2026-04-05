export type PayloadType = 'log' | 'exception' | 'query' | 'custom';

export interface RayPayload {
  uuid: string;
  payloads: Array<{
    type: PayloadType;
    content: Record<string, unknown>;
  }>;
  meta: {
    php_version?: string;
    laravel_version?: string;
    [key: string]: unknown;
  };
}

export interface DebugEntry {
  id: string;
  receivedAt: Date;
  color?: string;
  label?: string;
  payload: RayPayload;
}
