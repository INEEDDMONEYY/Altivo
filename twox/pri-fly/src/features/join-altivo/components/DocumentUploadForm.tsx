import { UploadCloud } from "lucide-react";

interface DocumentUploadFormProps {
  heading: string;
  description: string;
  licenseLabel: string;
  licensePlaceholder: string;
  documents: string[];
  submitLabel: string;
}

export default function DocumentUploadForm({
  heading,
  description,
  licenseLabel,
  licensePlaceholder,
  documents,
  submitLabel,
}: DocumentUploadFormProps) {
  return (
    <section className="w-full py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-sm
            sm:p-10
          "
        >

          <div className="mb-10 text-center">

            <div
              className="
                mx-auto
                mb-4
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-red-50
                text-red-500
              "
            >
              <UploadCloud className="h-7 w-7" />
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              {heading}
            </h2>

            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              {description}
            </p>

          </div>


          <form className="space-y-8">

            {/* Company Information */}

            <div className="space-y-5">

              <h3 className="text-lg font-semibold text-slate-900">
                Company Information
              </h3>


              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Company Name
                  </label>

                  <input
                    type="text"
                    placeholder="Company name"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      px-4
                      py-3
                      text-sm
                      outline-none
                      focus:border-red-400
                    "
                  />
                </div>


                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Country of Operation
                  </label>

                  <input
                    type="text"
                    placeholder="United States"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      px-4
                      py-3
                      text-sm
                      outline-none
                      focus:border-red-400
                    "
                  />
                </div>


                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    {licenseLabel}
                  </label>

                  <input
                    type="text"
                    placeholder={licensePlaceholder}
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      px-4
                      py-3
                      text-sm
                      outline-none
                      focus:border-red-400
                    "
                  />
                </div>


                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Contact Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      px-4
                      py-3
                      text-sm
                      outline-none
                      focus:border-red-400
                    "
                  />
                </div>

              </div>

            </div>



            {/* Document Uploads */}

            <div className="space-y-5">

              <h3 className="text-lg font-semibold text-slate-900">
                Required Documents
              </h3>


              <div className="grid gap-5 sm:grid-cols-2">


                {documents.map((document) => (

                  <label
                    key={document}
                    className="
                      flex
                      cursor-pointer
                      flex-col
                      gap-3
                      rounded-xl
                      border
                      border-dashed
                      border-slate-300
                      p-4
                      transition
                      hover:border-red-300
                      sm:p-5
                    "
                  >

                    <span className="text-sm font-medium text-slate-800">
                      {document}
                    </span>


                    <input
                      type="file"
                      className="
                        w-full
                        text-xs
                        text-slate-500
                        file:mr-3
                        file:rounded-lg
                        file:border-0
                        file:bg-red-50
                        file:px-3
                        file:py-2
                        file:text-xs
                        file:font-medium
                        file:text-red-600
                        hover:file:bg-red-100
                      "
                    />

                  </label>

                ))}

              </div>

            </div>



            <div className="flex justify-center pt-4">

              <button className="w-full rounded-xl bg-red-500 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-md sm:w-auto">
                {submitLabel}
              </button>

            </div>


          </form>

        </div>

      </div>
    </section>
  );
}