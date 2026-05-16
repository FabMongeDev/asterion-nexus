import Sidebar from "../components/sidebar";
import Hero from "../components/hero";
import DashboardCards from "../components/dashboard-cards";
import Topbar from "../components/topbar";
import BackgroundEffects from "../components/background-effects";
import FloatingParticles from "../components/floating-particles";
import SystemActivity from "../components/system-activity";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      <BackgroundEffects />

      <FloatingParticles />

      <div className="relative z-10 flex flex-col lg:flex-row">

        <Sidebar />

        <section className="fmin-w-0 flex-1 p-4 sm:p-6 lg:p-10">

          <Topbar />

          <Hero />

          <DashboardCards />

          <SystemActivity />

        </section>

      </div>

    </main>
  );
}