import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { StaticPage } from './pages/StaticPage';
import { ProgramDetail } from './components/Training';
import { getPageContent } from './data/content';
import { Program } from './types';

function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  useEffect(() => {
    // The LoadingScreen component handles the 2s delay and calls onComplete
  }, []);

  const handlePageSelect = (page: string) => {
    setCurrentPage(page);
    setSelectedProgram(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    setCurrentPage('home');
    setSelectedProgram(null);
  };

  const renderContent = () => {
    if (selectedProgram) {
      return (
        <ProgramDetail
          key="program"
          program={selectedProgram}
          onBack={() => setSelectedProgram(null)}
        />
      );
    }

    if (currentPage !== 'home') {
      return (
        <StaticPage
          key="static"
          title={currentPage.charAt(0).toUpperCase() + currentPage.slice(1).replace('-', ' ')}
          content={getPageContent(currentPage)}
          onBack={handleHomeClick}
        />
      );
    }

    return <Home key="home" onProgramSelect={setSelectedProgram} />;
  };

  return (
    <div className="bg-dark min-h-screen text-white/90 selection:bg-neon selection:text-dark">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" onComplete={() => setLoading(false)} />
        ) : (
          <div key="app">
            <Navbar onHome={handleHomeClick} />
            <AnimatePresence mode="wait">
              {renderContent()}
            </AnimatePresence>
            <Footer onPageSelect={handlePageSelect} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
