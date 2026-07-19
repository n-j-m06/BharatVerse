import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import PolicyUploader from "../components/policy/PolicyUploader";
import ImpactAnalysis from "../components/policy/ImpactAnalysis";
import RecommendationPanel from "../components/policy/RecommendationPanel";
import PolicySummary from "../components/policy/PolicySummary";

export default function PolicyAnalysis() {

    return (

        <div className="bg-slate-950 min-h-screen text-white">

            <Navbar/>

            <div className="flex">

                <Sidebar/>

                <main className="flex-1 p-8">

                    <div className="flex justify-between items-center mb-8">

                        <div>

                            <h1 className="text-4xl font-bold">

                                📜 AI Policy Analysis

                            </h1>

                            <p className="text-slate-400 mt-2">

                                Analyze government policies using BharatVerse AI.

                            </p>

                        </div>

                        <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">

                            ● AI Ready

                        </div>

                    </div>

                    <PolicyUploader/>

                    <div className="grid lg:grid-cols-2 gap-6 mt-6">

                        <ImpactAnalysis/>

                        <PolicySummary/>

                    </div>

                    <div className="mt-6">

                        <RecommendationPanel/>

                    </div>

                </main>

            </div>

        </div>

    )

}