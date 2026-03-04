import { motion } from 'motion/react';
import { ChevronRight, Zap } from 'lucide-react';
import { Program } from '../types';
import { categories } from '../data/content';

export const ProgramDetail = ({ program, onBack }: { program: Program, onBack: () => void, key?: any }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="min-h-screen bg-dark pt-16 md:pt-20 pb-12 md:pb-16"
        >
            <div className="max-w-7xl mx-auto px-6">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-neon font-bold uppercase tracking-widest text-[10px] md:text-xs mb-8 md:mb-12 hover:translate-x-[-8px] transition-transform"
                >
                    <ChevronRight className="w-4 h-4 rotate-180" /> Back to Programs
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    <div className="order-2 lg:order-1">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-neon font-bold uppercase tracking-[0.4em] text-[10px] mb-4 md:mb-6 block"
                        >
                            Detailed Program
                        </motion.span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display italic mb-6 md:mb-10 leading-[1.1]">
                            {program.title}
                        </h1>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-white/60 text-sm md:text-lg leading-relaxed mb-6 md:mb-8 whitespace-pre-line">
                                {program.fullDesc}
                            </p>
                        </div>

                        <div className="mt-8 md:mt-12">
                            <h3 className="text-lg md:text-2xl font-bold italic mb-4 md:mb-8 text-neon">Key Benefits</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                                {program.benefits.map((benefit, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-4 glass-card p-4 md:p-6 rounded-xl md:rounded-2xl border-neon/10"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-neon shadow-[0_0_10px_rgba(198,255,0,0.8)]" />
                                        <span className="text-[10px] md:text-sm font-bold uppercase tracking-tight text-white/80">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 md:space-y-12 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="aspect-[4/5] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/5"
                        >
                            <img src={program.img} alt={program.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass-card p-6 md:p-10 rounded-[1.5rem] md:rounded-[3rem] border-neon/20"
                        >
                            <h3 className="text-lg md:text-2xl font-bold uppercase italic mb-6 md:mb-8 flex items-center gap-3">
                                <Zap className="text-neon w-5 h-5 md:w-6 md:h-6" /> Sample Session
                            </h3>
                            <div className="space-y-4 md:space-y-6">
                                {program.workout.map((ex, i) => (
                                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                                        <div>
                                            <h4 className="text-xs md:text-base font-bold uppercase tracking-tight text-white">{ex.name}</h4>
                                            <p className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest mt-1">Target Exercise</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-neon font-display font-black text-lg md:text-2xl">{ex.sets} x {ex.reps}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button onClick={() => { onBack(); setTimeout(() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' }), 500); }} className="w-full mt-6 md:mt-10 bg-neon text-dark py-4 md:py-5 rounded-full font-black uppercase tracking-tighter hover:scale-105 transition-transform glow-neon text-sm md:text-base cursor-pointer">
                                Book This Session
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export const TrainingCategories = ({ onSelect }: { onSelect: (p: Program) => void }) => {
    return (
        <section id="training" className="py-8 md:py-12 bg-charcoal/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-neon font-bold uppercase tracking-[0.3em] text-[9px] mb-3 block">Our Programs</span>
                        <h2 className="text-4xl md:text-6xl font-display italic mt-2">Train <span className="text-neon">Smarter</span></h2>
                        <p className="mt-4 md:mt-5 text-white/40 text-[10px] md:text-sm leading-relaxed uppercase tracking-widest font-medium">
                            Specialized training categories designed for absolute performance.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            whileHover="hover"
                            onClick={() => onSelect(cat)}
                            className="relative aspect-[4/5] sm:aspect-[3/4] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl"
                        >
                            <motion.img
                                variants={{ hover: { scale: 1.1 } }}
                                transition={{ duration: 0.6 }}
                                src={cat.img}
                                alt={cat.title}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-90" />
                            <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                                <h3 className="text-2xl md:text-3xl font-bold italic group-hover:text-neon transition-colors mb-2 md:mb-4">{cat.title}</h3>
                                <p className="text-white/50 text-[10px] md:text-xs leading-relaxed mb-4 md:mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 line-clamp-3">
                                    {cat.desc}
                                </p>
                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em]">Explore Program</span>
                                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-neon" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
