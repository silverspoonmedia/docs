import React, {type ReactNode} from 'react';
import CodeBlock from '@theme/CodeBlock';

export interface PrettyJsonCodeBlockProps {
  /** JSON mentah dari MDX; indentasi / baris kosong di sumber tidak menentukan tampilan. */
  readonly source: string;
  readonly title?: ReactNode;
  readonly className?: string;
}

function formatJsonOrFallback(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) {
    return trimmed;
  }
  try {
    return JSON.stringify(JSON.parse(trimmed), null, 2);
  } catch {
    return trimmed;
  }
}

/**
 * `CodeBlock` + JSON yang selalu di-`JSON.stringify(..., null, 2)` setelah parse,
 * supaya tampilan rapi tanpa mengikuti indentasi template literal di MDX.
 */
export default function PrettyJsonCodeBlock({
  source,
  title,
  className,
}: PrettyJsonCodeBlockProps): ReactNode {
  const formatted = formatJsonOrFallback(source);
  return (
    <CodeBlock className={className} language="json" title={title}>
      {formatted}
    </CodeBlock>
  );
}
