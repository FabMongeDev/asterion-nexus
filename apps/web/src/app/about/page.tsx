import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";

export default function AboutPage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

            <div className="relative z-10 flex flex-col lg:flex-row">

                <Sidebar />

                <section className="flex-1 p-4 sm:p-6 lg:p-6 lg:p-10">

                    <Topbar />
                    <div className="mt-10">

                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400/70">
                            About Asterion                        
                        </p>

                        <h1 className="
                            mt-4
                            max-w-5xl
                            
                            text-4xl
                            sm:text-5xl
                            lg:text-6xl
                            xl:text-7xl
                            
                            font-black
                            leading-tight
                            "
                        >
                            Building fururistic digital ecosystems 
                            for modern organizations and connected communities.
                        </h1>

                        <p 
                            className="
                                mt-8
                                max-w-3xl

                                text-lg
                                leading-relaxed
                                text-white/60
                            "
                        >
                            Asterion Nexus is a scalable and immersive plataform
                            designed to help organizations create meninngful
                            digital experiences, strengthen communities, and 
                            showcase their identity through customizable interfaces
                            and interactive features.
                            
                        </p>

                    </div>

                </section>

            </div>

        </main>
    );

}