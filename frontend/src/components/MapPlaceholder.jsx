export default function MapPlaceholder() {

    const cities = [
        "Chennai",
        "Mumbai",
        "Delhi",
        "Hyderabad",
        "Bengaluru",
        "Kolkata"
    ];

    return (

        <div className="bg-slate-900 rounded-2xl border border-slate-700 p-5 h-[300px] flex flex-col">

            <div className="flex items-center justify-between gap-4 flex-wrap">

                <div>

                    <h2 className="text-2xl font-bold text-white">
                        🇮🇳 Digital Twin
                    </h2>

                    <p className="text-slate-400">
                        Live National Monitoring
                    </p>

                </div>

                <button className="bg-cyan-500 hover:bg-cyan-600 transition px-4 py-2 rounded-xl whitespace-nowrap">
                    Open Map
                </button>

            </div>

            <div className="flex-1 mt-5 flex justify-center items-center">

                <div className="w-full h-full max-h-[280px] rounded-xl bg-slate-800 border border-dashed border-cyan-500 flex items-center justify-center">

                    <div>

                        <div className="text-8xl text-center">
                            🗺️
                        </div>

                        <h3 className="text-center text-white mt-4">
                            India Digital Twin
                        </h3>

                    </div>

                </div>

            </div>

            <div className="flex justify-between mt-4 text-sm flex-wrap gap-2">

                {cities.map(city=>(
                    <span
                        key={city}
                        className="bg-slate-800 px-3 py-2 rounded-lg text-cyan-400"
                    >
                        ● {city}
                    </span>
                ))}

            </div>

        </div>

    );

}