import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import ReportForm from "../components/citizen/ReportForm";
import ReportMap from "../components/citizen/ReportMap";
import ReportTimeline from "../components/citizen/ReportTimeline";
import AIClassification from "../components/citizen/AIClassification";

export default function CitizenReport() {

    return (

        <div className="bg-slate-950 min-h-screen text-white">

            <Navbar/>

            <div className="flex">

                <Sidebar/>

                <main className="flex-1 p-8">

                    <div className="flex justify-between items-center mb-8">

                        <div>

                            <h1 className="text-4xl font-bold">

                                🚨 Citizen Incident Report

                            </h1>

                            <p className="text-slate-400 mt-2">

                                Report disasters, infrastructure issues and emergencies.

                            </p>

                        </div>

                        <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">

                            ● Online

                        </div>

                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">

                        <ReportForm/>

                        <ReportMap/>

                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 mt-6">

                        <AIClassification/>

                        <ReportTimeline/>

                    </div>

                </main>

            </div>

        </div>

    )

}