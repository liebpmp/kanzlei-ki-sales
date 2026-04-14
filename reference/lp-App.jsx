import ScarcityBar from "./components/ui/ScarcityBar";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import SocialProof from "./components/sections/SocialProof";
import PainPoints from "./components/sections/PainPoints";
import Foerderung from "./components/sections/Foerderung";
import Vorteile from "./components/sections/Vorteile";
import Ablauf from "./components/sections/Ablauf";
import Testimonials from "./components/sections/Testimonials";
import ImplHeadline from "./components/sections/ImplHeadline";
import KanzleiAudit from "./components/sections/KanzleiAudit";
import KanzleiDatenbank from "./components/sections/KanzleiDatenbank";
import AgentDeploy from "./components/sections/AgentDeploy";
import AgentBoard from "./components/sections/AgentBoard";
import PrivateLLM from "./components/sections/PrivateLLM";
import Schulung from "./components/sections/Schulung";
import StaatlicheFinanzierung from "./components/sections/StaatlicheFinanzierung";
import FAQ from "./components/sections/FAQ";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <ScarcityBar />
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <PainPoints />
        <Vorteile />
        <Foerderung />
        <Ablauf />
        <Testimonials />
        <ImplHeadline />
        <KanzleiAudit />
        <KanzleiDatenbank />
        <AgentDeploy />
        <AgentBoard />
        <PrivateLLM />
        <Schulung />
        <StaatlicheFinanzierung />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
