import Sidebar from "../components/sidebar";
import Hero from "../components/hero";
import DashboardCards from "../components/dashboard-cards";
import BackgroundEffects from "../components/background-effects";
import FloatingParticles from "../components/floating-particles";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      <BackgroundEffects />

      <FloatingParticles />

      <div className="relative z-10 flex">

        <Sidebar />

        <section className="flex-1 p-10">

          <Hero />

          <DashboardCards />

        </section>

      </div>

    </main>
  );
}