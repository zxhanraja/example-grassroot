import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export const StaticPage = ({ title, content, onBack }: { title: string, content: string, onBack: () => void, key?: any }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections: { title: string, body: string }[] = [];
    const lines = content.split('\n');
    let currentSectionTitle = "";
    let currentSectionBody: string[] = [];

    const isHeader = (line: string) => {
        return /^(\d+\.\s|###\s)/.test(line.trim());
    };

    lines.forEach(line => {
        if (isHeader(line)) {
            if (currentSectionTitle || currentSectionBody.length > 0) {
                sections.push({ title: currentSectionTitle, body: currentSectionBody.join('\n') });
            }
            currentSectionTitle = line.trim().replace(/^###\s/, '');
            currentSectionBody = [];
        } else {
            currentSectionBody.push(line);
        }
    });

    if (currentSectionTitle || currentSectionBody.length > 0) {
        sections.push({ title: currentSectionTitle, body: currentSectionBody.join('\n') });
    }

    const hasSections = sections.length > 1 || (sections.length === 1 && sections[0].title !== "");

    return (
        <div className="pt-16 md:pt-20 pb-12 md:pb-16 bg-dark min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    onClick={onBack}
                    className="flex items-center gap-3 text-neon text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-8 md:mb-12 hover:translate-x-[-6px] transition-transform group"
                >
                    <ChevronRight className="w-4 h-4 rotate-180 group-hover:text-white transition-colors" />
                    <span className="group-hover:text-white transition-colors">Back to Home</span>
                </motion.button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-dark-secondary border border-white/5 mb-10 md:mb-16 p-10 md:p-20 flex items-center justify-center min-h-[30vh]"
                >
                    <div className="absolute inset-0 z-0">
                        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80" alt="Background Texture" className="w-full h-full object-cover opacity-10 mix-blend-overlay" />
                        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/50" />
                    </div>

                    <div className="relative z-10 text-center">
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-display leading-[1.1] text-white italic mb-4">
                            {title.split(' ').map((word, i) => (
                                <span key={i} className={i % 2 !== 0 ? "text-neon text-glow-neon" : ""}>{word} </span>
                            ))}
                        </h1>
                        <div className="w-24 h-1 bg-neon mx-auto rounded-full mt-6" />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10 lg:gap-16 relative items-start">
                    {hasSections && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hidden lg:block sticky top-28 bg-dark-secondary/50 backdrop-blur-md rounded-[2rem] p-8 border border-white/5"
                        >
                            <h4 className="text-neon font-bold uppercase tracking-[0.2em] text-xs mb-6 border-b border-white/10 pb-4">Table of Contents</h4>
                            <ul className="space-y-4">
                                {sections.map((section, idx) => {
                                    if (!section.title) return null;
                                    const sectionId = `section-${idx}`;
                                    return (
                                        <li key={idx}>
                                            <button
                                                onClick={() => {
                                                    const el = document.getElementById(sectionId);
                                                    if (el) {
                                                        const y = el.getBoundingClientRect().top + window.scrollY - 100;
                                                        window.scrollTo({ top: y, behavior: 'smooth' });
                                                    }
                                                }}
                                                className="text-left text-[11px] text-white/50 hover:text-white font-medium uppercase tracking-wider transition-colors line-clamp-2 leading-relaxed"
                                            >
                                                {section.title}
                                            </button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </motion.div>
                    )}

                    <div className="space-y-6 md:space-y-10">
                        {hasSections ? (
                            sections.map((section, idx) => (
                                <motion.div
                                    key={idx}
                                    id={`section-${idx}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className="glass-card p-6 md:p-10 lg:p-12 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5 hover:border-neon/20 transition-colors group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-1 h-full bg-neon/0 group-hover:bg-neon/50 transition-colors duration-500" />
                                    {section.title && (
                                        <h2 className="text-xl md:text-3xl font-display italic text-white mb-6 pr-4">
                                            {section.title}
                                        </h2>
                                    )}
                                    <div className="prose prose-invert max-w-none prose-sm md:prose-base prose-p:text-white/60 prose-strong:text-white prose-ul:text-white/60 prose-li:marker:text-neon">
                                        <div className="whitespace-pre-line leading-relaxed font-sans tracking-wide">
                                            {section.body.trim()}
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="glass-card p-8 md:p-12 rounded-[2rem] border border-white/5">
                                <div className="prose prose-invert max-w-none prose-sm md:prose-base prose-p:text-white/60">
                                    <div className="whitespace-pre-line leading-relaxed font-sans tracking-wide">
                                        {content}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
};
