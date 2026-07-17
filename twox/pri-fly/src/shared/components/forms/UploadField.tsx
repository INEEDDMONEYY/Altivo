import { Upload } from "lucide-react";
import type { ChangeEvent } from "react";

interface UploadFieldProps {
  label?: string;
  accept?: string;
  onFileSelect?: (file: File) => void;
}

export default function UploadField({
  label = "Upload a file",
  accept,
  onFileSelect,
}: UploadFieldProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) onFileSelect?.(file);
  };

  return (
    <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-300 p-8 text-center text-sm text-slate-500 hover:border-sky-400 hover:text-sky-600">
      <Upload size={24} />
      <span>{label}</span>
      <input type="file" accept={accept} onChange={handleChange} className="hidden" />
    </label>
  );
}
