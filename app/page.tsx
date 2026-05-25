import HeroLab from "@/components/topsecret/home/HeroLab";
import ProofRail from "@/components/topsecret/home/ProofRail";
import ProjectOrbit from "@/components/topsecret/home/ProjectOrbit";
import BuildShowcase from "@/components/topsecret/home/BuildShowcase";
import FinalCTA from "@/components/topsecret/home/FinalCTA";

export default function HomePage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#05070b] text-white antialiased selection:bg-[#66f0d0]/30 selection:text-white">
      {/* Global atmospheric backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(900px 600px at 12% 8%, rgba(102,240,208,0.10), transparent 60%), radial-gradient(700px 500px at 88% 22%, rgba(80,140,255,0.08), transparent 65%), radial-gradient(900px 700px at 50% 110%, rgba(120,80,255,0.10), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, black 40%, transparent 80%)",
        }}
      />

      <HeroLab />
      <ProofRail />
      <ProjectOrbit />
      <BuildShowcase />
      <FinalCTA />
    </main>
  );
}
