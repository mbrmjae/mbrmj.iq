
import { lazy, Suspense } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { WhyThisExperience } from './components/sections/WhyThisExperience';
import { Problem } from './components/sections/Problem';
import { ProgramConcept } from './components/sections/ProgramConcept';
import { ProjectScenario } from './components/sections/ProjectScenario';
import { LearningOutcomes } from './components/sections/LearningOutcomes';
import { ProgramTimeline } from './components/sections/ProgramTimeline';
import { Eligibility } from './components/sections/Eligibility';
import { ApplicationProcess } from './components/sections/ApplicationProcess';
import { FAQ } from './components/sections/FAQ';
import { Reviews } from './components/sections/Reviews';
import { AnnouncementTicker } from './components/sections/AnnouncementTicker';

const Registration = lazy(() =>
  import('./components/sections/Registration').then(({ Registration }) => ({ default: Registration }))
);

function App() {
  return (
    <div className="font-body text-text-primary bg-background min-h-screen relative w-full overflow-x-hidden overflow-y-auto">
      <Header />
      <main>
        <Hero />
        <AnnouncementTicker />
        <WhyThisExperience />
        <Problem />
        <ProgramConcept />
        <ProjectScenario />
        <LearningOutcomes />
        <ProgramTimeline />
        <Eligibility />
        <ApplicationProcess />
        <Reviews />
        <FAQ />
        <Suspense fallback={<section className="min-h-[36rem] bg-background" aria-hidden="true" />}>
          <Registration />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
