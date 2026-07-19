import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  CloudSun,
  CloudRain,
  Wind,
  Thermometer,
  Droplets,
  Sun,
  AlertTriangle,
} from "lucide-react";

export default function Weather() {

  const cities = [
    {
      city: "Chennai",
      temp: "34°C",
      weather: "Sunny",
      icon: <Sun size={24} className="text-yellow-400"/>
    },
    {
      city: "Mumbai",
      temp: "29°C",
      weather: "Rain",
      icon: <CloudRain size={24} className="text-blue-400"/>
    },
    {
      city: "Delhi",
      temp: "37°C",
      weather: "Cloudy",
      icon: <CloudSun size={24} className="text-cyan-400"/>
    },
    {
      city: "Bengaluru",
      temp: "27°C",
      weather: "Pleasant",
      icon: <CloudSun size={24} className="text-green-400"/>
    }
  ];

  const stats = [
    {
      title:"Temperature",
      value:"31°C",
      icon:<Thermometer size={30}/>,
      color:"text-red-400"
    },
    {
      title:"Humidity",
      value:"68%",
      icon:<Droplets size={30}/>,
      color:"text-blue-400"
    },
    {
      title:"Wind Speed",
      value:"18 km/h",
      icon:<Wind size={30}/>,
      color:"text-cyan-400"
    },
    {
      title:"AQI",
      value:"72",
      icon:<CloudSun size={30}/>,
      color:"text-green-400"
    }
  ];

  return(

    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar/>

      <div className="flex">

        <Sidebar/>

        <main className="flex-1 p-8">

          <div className="flex justify-between items-center mb-8">

            <div>

              <h1 className="text-4xl font-bold flex items-center gap-3">

                <CloudSun className="text-cyan-400"/>

                Weather Intelligence

              </h1>

              <p className="text-slate-400 mt-2">

                AI-powered weather monitoring across India.

              </p>

            </div>

            <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">

              ● Live Weather

            </div>

          </div>

          {/* KPI */}

          <div className="grid md:grid-cols-4 gap-6 mb-8">

            {stats.map((item)=>(

              <div
                key={item.title}
                className="bg-slate-900 rounded-2xl border border-slate-700 p-6"
              >

                <div className={item.color}>

                  {item.icon}

                </div>

                <p className="text-slate-400 mt-4">

                  {item.title}

                </p>

                <h2 className={`text-3xl font-bold mt-2 ${item.color}`}>

                  {item.value}

                </h2>

              </div>

            ))}

          </div>

          {/* Cities */}

          <div className="grid lg:grid-cols-2 gap-6">

            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

              <h2 className="text-2xl font-bold mb-6">

                Major Cities

              </h2>

              <div className="space-y-5">

                {cities.map((city)=>(

                  <div
                    key={city.city}
                    className="flex justify-between items-center bg-slate-800 rounded-xl p-5"
                  >

                    <div>

                      <h3 className="font-semibold">

                        {city.city}

                      </h3>

                      <p className="text-slate-400">

                        {city.weather}

                      </p>

                    </div>

                    <div className="flex items-center gap-3">

                      {city.icon}

                      <span className="text-xl">

                        {city.temp}

                      </span>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            <div className="space-y-6">

              <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

                <h2 className="text-2xl font-bold mb-5">

                  AI Forecast

                </h2>

                <p className="text-slate-300">

                  Heavy rainfall is expected in coastal Tamil Nadu within the next 24 hours.

                </p>

                <p className="text-slate-400 mt-4">

                  Wind speeds may exceed 40 km/h in eastern coastal regions.

                </p>

              </div>

              <div className="bg-red-500/10 border border-red-500 rounded-2xl p-6">

                <div className="flex gap-3">

                  <AlertTriangle className="text-red-400"/>

                  <div>

                    <h3 className="font-bold text-red-400">

                      Weather Alert

                    </h3>

                    <p className="text-slate-300 mt-2">

                      Orange alert issued for Chennai, Cuddalore and Nagapattinam districts.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>

  );

}