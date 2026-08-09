
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { ProgramConcept } from './components/sections/ProgramConcept';
import { ProjectScenario } from './components/sections/ProjectScenario';
import { LearningOutcomes } from './components/sections/LearningOutcomes';
import { ProgramTimeline } from './components/sections/ProgramTimeline';
import { Eligibility } from './components/sections/Eligibility';
import { ApplicationProcess } from './components/sections/ApplicationProcess';
import { FAQ } from './components/sections/FAQ';
import { Reviews } from './components/sections/Reviews';
import { Registration } from './components/sections/Registration';
import { AnnouncementTicker } from './components/sections/AnnouncementTicker';

function App() {
  return (
    <div className="font-body text-text-primary bg-background min-h-screen relative w-full overflow-x-hidden overflow-y-auto">
      <Header />
      <main>
        <Hero />
        <AnnouncementTicker />
        <Problem />
        <ProgramConcept />
        <ProjectScenario />
        <LearningOutcomes />
        <ProgramTimeline />
        <Eligibility />
        <ApplicationProcess />
        <Reviews />
        <FAQ />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}

export default App;
