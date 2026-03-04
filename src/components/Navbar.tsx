import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dumbbell, X, Menu } from 'lucide-react';

export const Navbar = ({ onHome }: { onHome: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement> | {}, targetId?: string) => {
    onHome();
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-dark/80 backdrop-blur-xl h-14 shadow-2xl' : 'bg-transparent h-20'}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick({} as any)}>
          <div className="w-7 h-7 bg-neon rounded-sm flex items-center justify-center">
            <Dumbbell className="text-dark w-4 h-4" />
          </div>
          <span className="text-xl font-display text-white italic">Grassroot <span className="text-neon">Fitness</span></span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-[9px] font-bold uppercase tracking-[0.2em]">
          <a href="#" onClick={(e) => handleNavClick(e)} className="hover:text-neon transition-colors text-white">Home</a>
          <a href="#features" onClick={(e) => { e.preventDefault(); handleNavClick(e, 'features'); }} className="hover:text-neon transition-colors text-white">Features</a>
          <a href="#training" onClick={(e) => { e.preventDefault(); handleNavClick(e, 'training'); }} className="hover:text-neon transition-colors text-white">Training</a>
          <a href="#trainers" onClick={(e) => { e.preventDefault(); handleNavClick(e, 'trainers'); }} className="hover:text-neon transition-colors text-white">Trainers</a>
        </div>

        <div className="hidden md:block">
          <button onClick={() => { handleNavClick({} as any); setTimeout(() => { document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }} className="bg-neon text-dark px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform glow-neon shadow-[0_0_15px_rgba(198,255,0,0.3)] hover:shadow-[0_0_25px_rgba(198,255,0,0.5)] border border-neon/50">
            Join Now
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark/95 backdrop-blur-2xl border-b border-white/5 md:hidden"
          >
            <div className="flex flex-col p-8 gap-6 text-center text-sm font-bold uppercase tracking-widest">
              <a href="#" onClick={(e) => handleNavClick(e)} className="hover:text-neon text-white">Home</a>
              <a href="#features" onClick={(e) => { e.preventDefault(); handleNavClick(e, 'features'); }} className="hover:text-neon text-white">Features</a>
              <a href="#training" onClick={(e) => { e.preventDefault(); handleNavClick(e, 'training'); }} className="hover:text-neon text-white">Training</a>
              <a href="#trainers" onClick={(e) => { e.preventDefault(); handleNavClick(e, 'trainers'); }} className="hover:text-neon text-white">Trainers</a>
              <button onClick={() => { handleNavClick({} as any); setTimeout(() => { document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }} className="bg-neon text-dark px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest">
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
