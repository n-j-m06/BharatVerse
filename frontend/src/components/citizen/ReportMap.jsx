import {
  MapPinned,
  Navigation,
  LocateFixed,
} from "lucide-react";

export default function ReportMap() {

  const locations = [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Salem",
    "Trichy",
  ];

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      <div className="flex justify-between items-center mb-5">

        <div>

          <h2 className="text-2xl font-bold">

            Incident Location

          </h2>

          <p className="text-slate-400 mt-1">

            AI will verify the reported location.

          </p>

        </div>

        <LocateFixed className="text-cyan-400"/>

      </div>

      {/* Map Placeholder */}

      <div className="h-80 rounded-2xl border-2 border-dashed border-cyan-500 flex flex-col justify-center items-center bg-slate-800">

        <MapPinned
          size={70}
          className="text-cyan-400"
        />

        <h3 className="mt-5 text-xl font-semibold">

          Interactive Map

        </h3>

        <p className="text-slate-400 mt-2">

          React Leaflet / OpenStreetMap will be integrated here.

        </p>

      </div>

      {/* Quick Locations */}

      <div className="mt-6">

        <h3 className="font-semibold mb-4">

          Recent Incident Locations

        </h3>

        <div className="flex flex-wrap gap-3">

          {locations.map((city)=>(

            <button
              key={city}
              className="bg-slate-800 hover:bg-cyan-500 px-4 py-2 rounded-full transition"
            >

              <Navigation
                size={15}
                className="inline mr-2"
              />

              {city}

            </button>

          ))}

        </div>

      </div>

    </div>

  );

}