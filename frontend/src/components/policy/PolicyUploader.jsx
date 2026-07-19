import { Upload, FileText, Sparkles } from "lucide-react";

export default function PolicyUploader() {

    return (

        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

            <div className="flex justify-between items-center mb-6">

                <div>

                    <h2 className="text-2xl font-bold">

                        Upload Policy

                    </h2>

                    <p className="text-slate-400 mt-1">

                        Upload a government policy document for AI analysis.

                    </p>

                </div>

                <Sparkles className="text-cyan-400"/>

            </div>

            <div className="border-2 border-dashed border-cyan-500 rounded-2xl p-12 text-center">

                <Upload
                    size={60}
                    className="mx-auto text-cyan-400"
                />

                <h3 className="mt-5 text-xl font-semibold">

                    Drag & Drop Policy Document

                </h3>

                <p className="text-slate-400 mt-2">

                    Supports PDF, DOCX and TXT

                </p>

                <button
                    className="mt-6 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl"
                >

                    Choose File

                </button>

            </div>

            <div className="grid md:grid-cols-3 gap-5 mt-8">

                <input
                    placeholder="Policy Name"
                    className="bg-slate-800 rounded-xl p-4 outline-none"
                />

                <input
                    placeholder="Department"
                    className="bg-slate-800 rounded-xl p-4 outline-none"
                />

                <select
                    className="bg-slate-800 rounded-xl p-4 outline-none"
                >

                    <option>Select State</option>
                    <option>Tamil Nadu</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Maharashtra</option>

                </select>

            </div>

            <button
                className="mt-8 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl flex items-center gap-3"
            >

                <FileText/>

                Analyze Policy

            </button>

        </div>

    )

}