import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function PageLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar asShell />

      <div className="flex min-h-[calc(100vh-80px)]">
        <Sidebar asShell />

        <main className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden h-[calc(100vh-80px)]">
          <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 md:py-10 pb-12">
            {(title || subtitle) && (
              <div className="mb-10 md:mb-12">
                {title && (
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    {title}
                  </h1>
                )}

                {subtitle && (
                  <p className="text-slate-400 text-base md:text-lg mt-3 leading-7">
                    {subtitle}
                  </p>
                )}
              </div>
            )}

            <div className="space-y-8 md:space-y-10">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}