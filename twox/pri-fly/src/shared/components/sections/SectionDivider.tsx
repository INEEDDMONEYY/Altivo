export default function SectionDivider({ className = "" }: { className?: string }) {
  return <hr className={`border-t border-slate-200 ${className}`} />;
}
