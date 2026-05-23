export function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border border-ink-600 bg-ink-800 p-4 text-sm leading-relaxed text-ink-100">
      <code className="font-mono">{code}</code>
    </pre>
  );
}
