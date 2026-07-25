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

        <div className="bg-slate-900 rounded-2xl border border-slate-700 p-5 h-[620px] flex flex-col">

            <div className="flex items-center justify-between gap-4 flex-wrap">

                <div>

                    <h2 className="text-2xl font-bold text-white">
                        🇮🇳 Digital Twin
                    </h2>

                    <p className="text-slate-400">
                        Live National Monitoring
                    </p>

                </div>

                <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-xl font-semibold shadow-lg hover:shadow-cyan-500/40 transition-all duration-300">
                    Open Map
                </button>

            </div>

            <div className="flex-1 mt-5 flex justify-center items-center">

                <div className="relative w-full h-full max-h-[280px] overflow-hidden rounded-xl bg-slate-800 border border-dashed border-cyan-500 flex items-center justify-center">

                    <img
                        src="/india-outline.avif"
                        alt="India Map"
                        className="absolute right-8 top-1/2 -translate-y-1/2 w-[38%] object-contain opacity-[0.15] pointer-events-none z-0"
                    />

                    <div className="absolute w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

                    <div className="relative z-10 text-center">

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl -z-10"></div>

                        <div className="text-8xl text-center animate-pulse">
                            🗺️
                        </div>

                        <h3 className="text-center text-2xl font-bold text-white mt-5">
                            India Digital Twin
                        </h3>

                        <p className="text-center text-cyan-400 text-sm mt-2">
                            AI Powered National Monitoring
                        </p>

                        <p className="text-slate-400 text-center mt-3">
                            Click "🛰 Open National Map" to explore live city data
                        </p>

                    </div>

                </div>

            </div>

            <div className="flex justify-center flex-wrap gap-3 mt-6 text-sm">

                {cities.map(city=>(
                    <span
                        key={city}
                        className="bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-400 px-3 py-2 rounded-lg text-cyan-400 transition-all duration-300"
                    >
                        ● {city}
                    </span>
                ))}

            </div>

        </div>

    );

}