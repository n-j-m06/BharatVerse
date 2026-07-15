import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Bot, SendHorizonal, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");

  const suggestions = [
    "Run Flood Simulation",
    "Analyze Chennai Climate",
    "Predict Traffic",
    "Generate Policy",
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8">

          <div className="mb-8">

            <h1 className="text-4xl font-bold">
              🤖 BharatVerse AI Assistant
            </h1>

            <p className="text-slate-400 mt-2">
              Interact with India's Multi-Agent Decision Intelligence Platform
            </p>

          </div>

          <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6 h-[600px] flex flex-col">

            <div className="flex-1 overflow-auto space-y-5">

              <div className="flex gap-4">

                <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <Bot />
                </div>

                <div className="bg-slate-800 rounded-xl p-4 max-w-xl">

                  <h3 className="font-semibold">
                    BharatVerse AI
                  </h3>

                  <p className="text-slate-300 mt-2">
                    Hello 👋

                    I can help you with climate prediction,
                    traffic optimization, disaster forecasting,
                    policy analysis and AI simulations.

                  </p>

                </div>

              </div>

            </div>

            <div className="mt-6">

              <h3 className="mb-3 font-semibold flex items-center gap-2">
                <Sparkles size={18} />
                Suggested Prompts
              </h3>

              <div className="flex flex-wrap gap-3 mb-6">

                {suggestions.map((item) => (

                  <button
                    key={item}
                    onClick={() => setMessage(item)}
                    className="bg-slate-800 hover:bg-cyan-500 transition px-4 py-2 rounded-xl"
                  >
                    {item}
                  </button>

                ))}

              </div>

              <div className="flex gap-4">

                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask BharatVerse AI..."
                  className="flex-1 bg-slate-800 rounded-xl px-5 py-4 outline-none border border-slate-700 focus:border-cyan-500"
                />

                <button className="bg-cyan-500 hover:bg-cyan-600 rounded-xl px-6 flex items-center gap-2">

                  <SendHorizonal size={18} />

                  Send

                </button>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}