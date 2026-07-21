import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function PageLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 h-[calc(100vh-80px)] overflow-y-auto">

          <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 py-8">

            <div className="mb-10">

              <h1 className="text-5xl font-bold tracking-tight">

                {title}

              </h1>

              <p className="text-slate-400 text-lg mt-3">

                {subtitle}

              </p>

            </div>

            <div className="space-y-8">

              {children}

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}