import type { DocumentRequirement } from "../types";
import { FileCheck, CheckCircle2 } from "lucide-react";

interface DocumentRequirementCardProps {
  document: DocumentRequirement;
}

export default function DocumentRequirementCard({
  document,
}: DocumentRequirementCardProps) {
  return (
    <article
      className="
        group
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-red-50
            text-red-500
          "
        >
          <FileCheck className="h-6 w-6" />
        </div>

        {document.optional && (
          <span
            className="
              rounded-full
              bg-slate-100
              px-3
              py-1
              text-xs
              font-medium
              text-slate-600
            "
          >
            Optional
          </span>
        )}
      </div>

      <h3 className="mb-3 text-xl font-semibold text-slate-900">
        {document.title}
      </h3>

      <p className="mb-5 text-sm leading-6 text-slate-600">
        {document.purpose}
      </p>

      <div>
        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Required Documents
        </h4>

        <ul className="space-y-3">
          {document.requiredDocuments.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-slate-700"
            >
              <CheckCircle2
                className="
                  mt-0.5
                  h-4
                  w-4
                  shrink-0
                  text-red-500
                "
              />

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}