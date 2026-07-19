import {
  Upload,
  MapPin,
  Camera,
  Send,
} from "lucide-react";

export default function ReportForm() {

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      <h2 className="text-2xl font-bold">

        Report Incident

      </h2>

      <p className="text-slate-400 mt-2 mb-6">

        Submit an incident to BharatVerse AI.

      </p>

      <div className="space-y-5">

        <input
          placeholder="Incident Title"
          className="w-full bg-slate-800 rounded-xl p-4 outline-none"
        />

        <select
          className="w-full bg-slate-800 rounded-xl p-4 outline-none"
        >

          <option>Select Category</option>

          <option>Flood</option>

          <option>Cyclone</option>

          <option>Fire</option>

          <option>Traffic</option>

          <option>Infrastructure</option>

        </select>

        <textarea
          rows={5}
          placeholder="Describe the incident..."
          className="w-full bg-slate-800 rounded-xl p-4 outline-none"
        />

        <div className="grid grid-cols-2 gap-4">

          <button className="bg-slate-800 rounded-xl p-4 flex items-center justify-center gap-2 hover:bg-slate-700">

            <Camera size={20}/>

            Upload Image

          </button>

          <button className="bg-slate-800 rounded-xl p-4 flex items-center justify-center gap-2 hover:bg-slate-700">

            <Upload size={20}/>

            Attach File

          </button>

        </div>

        <button className="bg-cyan-500 hover:bg-cyan-600 rounded-xl p-4 flex items-center justify-center gap-2">

          <MapPin size={20}/>

          Detect Location

        </button>

        <button className="bg-green-600 hover:bg-green-700 rounded-xl p-4 flex items-center justify-center gap-2">

          <Send size={20}/>

          Submit Report

        </button>

      </div>

    </div>

  );

}