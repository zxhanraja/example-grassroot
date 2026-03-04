import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-8">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
                    poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-man-training-with-battle-ropes-in-gym-43003-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/60 to-dark/95" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-6xl sm:text-8xl md:text-9xl lg:text-[11.5rem] font-display leading-[1.05] tracking-tight mb-4 md:mb-6 italic"
                    >
                        Sculpt <br />
                        <span className="text-neon text-glow-neon">Your Power</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="max-w-xl mx-auto text-white/50 text-[11px] sm:text-xs md:text-sm mb-10 md:mb-12 leading-relaxed font-medium uppercase tracking-[0.4em]"
                    >
                        Elite training for those who demand absolute excellence. <br className="hidden md:block" />
                        Forge your body. Master your mind.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto bg-neon/10 backdrop-blur-sm border border-neon text-neon hover:bg-neon hover:text-dark px-10 md:px-12 py-4 md:py-4.5 rounded-full font-black uppercase tracking-tighter glow-neon flex items-center justify-center gap-3 group text-xs md:text-sm transition-all duration-300"
                        >
                            Start Your Journey <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('training')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-12 py-4.5 rounded-full font-black uppercase tracking-tighter transition-colors text-xs md:text-sm"
                        >
                            Explore Programs
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/20">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-[1px] h-12 bg-gradient-to-b from-neon to-transparent"
                />
            </motion.div>
        </section>
    );
};
