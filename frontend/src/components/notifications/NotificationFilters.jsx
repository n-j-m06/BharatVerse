import {
  Search,
  Filter,
  RefreshCw,
} from "lucide-react";

export default function NotificationFilters() {

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">

      <div className="grid lg:grid-cols-4 gap-4">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-4 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search notifications..."
            className="w-full bg-slate-800 rounded-xl py-3 pl-11 pr-4 outline-none"
          />

        </div>

        <select
          className="bg-slate-800 rounded-xl p-3 outline-none"
        >

          <option>All Types</option>
          <option>Critical</option>
          <option>Warning</option>
          <option>Information</option>
          <option>Success</option>

        </select>

        <select
          className="bg-slate-800 rounded-xl p-3 outline-none"
        >

          <option>Today</option>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>

        </select>

        <button
          className="bg-cyan-500 hover:bg-cyan-600 rounded-xl flex items-center justify-center gap-2"
        >

          <RefreshCw size={18}/>

          Refresh

        </button>

      </div>

    </div>

  );

}