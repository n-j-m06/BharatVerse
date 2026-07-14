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

        <div className="bg-slate-900 rounded-2xl border border-slate-700 h-[520px] p-6">

            <div className="flex justify-between">

                <div>

                    <h2 className="text-2xl font-bold text-white">
                        🇮🇳 Digital Twin
                    </h2>

                    <p className="text-slate-400">
                        Live National Monitoring
                    </p>

                </div>

                <button className="bg-cyan-500 px-4 py-2 rounded-xl">
                    Open Map
                </button>

            </div>

            <div className="mt-10 flex justify-center">

                <div className="w-[90%] h-[330px] rounded-xl bg-slate-800 border border-dashed border-cyan-500 flex items-center justify-center">

                    <div>

                        <div className="text-7xl text-center">
                            🗺️
                        </div>

                        <h3 className="text-center text-white mt-4">
                            India Digital Twin
                        </h3>

                    </div>

                </div>

            </div>

            <div className="flex justify-between mt-8">

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