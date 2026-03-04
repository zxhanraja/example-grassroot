import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Zap, Activity, Instagram, Twitter, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { trainers, testimonials } from '../data/content';

export const ExperienceSection = () => {
    return (
        <section className="py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-16 h-16 md:w-24 md:h-24 border-t-2 border-l-2 border-neon z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80"
                            alt="Athlete training"
                            className="rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl relative z-0 w-full"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 glass-card p-4 md:p-6 rounded-[1rem] md:rounded-[1.5rem] glow-neon">
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="text-4xl md:text-6xl font-display text-neon">12+</div>
                                <div className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold leading-tight">YEARS OF <br /> ELITE <br /> EXCELLENCE</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:pl-8"
                    >
                        <span className="text-neon font-bold uppercase tracking-[0.4em] text-[9px] mb-4 block">The Evolution</span>
                        <h2 className="text-3xl md:text-5xl italic mb-6 md:mb-8 leading-tight">Fitness Evolution <br /> & <span className="text-neon">Power Surge</span></h2>
                        <div className="space-y-4 md:space-y-6 text-white/60 leading-relaxed text-xs md:text-base mb-8 md:mb-10">
                            <p>
                                We don't just provide a gym; we provide a transformational environment designed to catalyze your evolution.
                            </p>
                            <p>
                                Every piece of equipment in Grassroot Fitness has been hand-selected for its ability to deliver superior results.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-neon/10 flex items-center justify-center text-neon shrink-0">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase tracking-tight mb-1 text-xs">Advanced Biomechanics</h4>
                                    <p className="text-[10px] text-white/40 leading-relaxed font-medium">Our equipment is engineered to align with your body's natural movement arcs.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-neon/10 flex items-center justify-center text-neon shrink-0">
                                    <Activity className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase tracking-tight mb-1 text-xs">Real-time Biofeedback</h4>
                                    <p className="text-[10px] text-white/40 leading-relaxed font-medium">Integrated digital displays monitor your power output, heart rate, and recovery.</p>
                                </div>
                            </div>
                        </div>

                        <button onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto bg-neon text-dark px-8 py-3 rounded-full font-black uppercase tracking-tighter hover:scale-105 transition-transform glow-neon text-xs md:text-sm">
                            Join the Evolution
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


export const Trainers = () => {
    return (
        <section id="trainers" className="py-8 md:py-12 bg-dark">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-4xl uppercase italic mb-4">Your Fitness Goals, <br /><span className="text-neon">Their Expertise</span></h2>
                    <p className="max-w-2xl mx-auto text-white/40 text-[10px] md:text-xs leading-relaxed px-4">
                        Our trainers are more than just coaches; they are partners in your transformation.
                    </p>
                    <div className="w-12 md:w-16 h-1 bg-neon mx-auto mt-6 md:mt-8" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {trainers.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover="hover"
                            className="glass-card rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <motion.img
                                    variants={{ hover: { scale: 1.05 } }}
                                    src={t.img}
                                    alt={t.name}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-neon/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="p-6 md:p-8 text-center">
                                <h3 className="text-lg md:text-xl font-bold italic mb-1">{t.name}</h3>
                                <p className="text-neon text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-3 md:mb-4">{t.role}</p>
                                <p className="text-white/40 text-[9px] md:text-[10px] leading-relaxed mb-4 md:mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 line-clamp-3">
                                    {t.bio}
                                </p>
                                <div className="flex justify-center gap-5 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                                    <Instagram className="w-4 h-4 cursor-pointer hover:text-neon transition-colors" />
                                    <Twitter className="w-4 h-4 cursor-pointer hover:text-neon transition-colors" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const handleNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
    const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

    return (
        <section className="py-12 md:py-20 bg-charcoal/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl uppercase italic mb-4">Your Success Stories, <br /><span className="text-neon">Our Inspiration</span></h2>
                    <p className="max-w-2xl mx-auto text-white/40 text-[10px] md:text-xs leading-relaxed px-4">
                        The true measure of our success is the transformation of our members.
                    </p>
                    <div className="w-12 md:w-16 h-1 bg-neon mx-auto mt-6 md:mt-8" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative hidden lg:block lg:col-span-5"
                    >
                        <div className="aspect-square rounded-full border-2 border-dashed border-neon/30 absolute -inset-4 animate-[spin_30s_linear_infinite]" />
                        <div className="relative rounded-[2rem] overflow-hidden aspect-square shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80"
                                alt="Transformation"
                                className="w-full h-full object-cover grayscale opacity-80"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-neon/10 mix-blend-overlay"></div>
                            <div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-[1.5rem]">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="flex text-neon">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                                    </div>
                                    <span className="text-[8px] font-bold uppercase tracking-[0.2em]">Client Result</span>
                                </div>
                                <p className="text-base font-bold uppercase italic leading-tight">"Lost 15kg of fat and gained 5kg of muscle in 6 months. My life has completely changed."</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="lg:col-span-7 relative w-full pt-4">
                        <div className="overflow-hidden relative rounded-[2rem] border border-white/5 bg-dark-secondary/20 backdrop-blur-sm">
                            <motion.div
                                className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] h-full"
                                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                            >
                                {testimonials.map((t, i) => (
                                    <div key={i} className="w-full flex-shrink-0 px-6 sm:px-10 py-10 sm:py-16">
                                        <div className="relative h-full flex flex-col justify-center">
                                            <Quote className="absolute -top-4 -left-2 md:-top-4 md:-left-4 w-12 h-12 md:w-20 md:h-20 text-neon/10" />
                                            <p className="text-base sm:text-xl md:text-3xl italic leading-relaxed mb-8 md:mb-12 text-white/90 relative z-10 font-medium">
                                                "{t.text}"
                                            </p>
                                            <div className="flex items-center gap-4 md:gap-6 mt-auto relative z-10">
                                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden bg-neon/20 border-2 border-neon/50 shrink-0">
                                                    <img src={t.img} alt={t.name} className="w-full h-full object-cover grayscale" />
                                                </div>
                                                <div>
                                                    <h4 className="text-base md:text-xl font-bold uppercase tracking-tight">{t.name}</h4>
                                                    <p className="text-[9px] md:text-[11px] text-neon font-bold uppercase tracking-[0.2em]">{t.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-4 mt-8 px-4">
                            <button onClick={handlePrev} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-neon hover:text-neon transition-colors group bg-white/5 backdrop-blur-md">
                                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <div className="flex gap-2 mx-2">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveIndex(i)}
                                        className={`h-1.5 transition-all duration-500 rounded-full ${activeIndex === i ? 'w-8 bg-neon' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                                        aria-label={`Go to testimonial ${i + 1}`}
                                    />
                                ))}
                            </div>
                            <button onClick={handleNext} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-neon hover:text-neon transition-colors group bg-white/5 backdrop-blur-md">
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export const CTASection = () => {
    return (
        <section id="join" className="py-6 md:py-10 px-6">
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto bg-neon rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 text-dark text-center relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-dark via-transparent to-transparent" />
                </div>

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-6xl font-display italic leading-[1.1] mb-4 md:mb-6">
                        Connect <br /> Engage <br /> Transform
                    </h2>
                    <p className="max-w-xl mx-auto text-dark/70 font-bold uppercase tracking-widest text-[9px] md:text-xs mb-6 md:mb-10 px-4">
                        Join the elite circle of high-performers. Get exclusive training tips.
                    </p>

                    <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="EMAIL ADDRESS"
                            className="flex-1 bg-dark/10 border-2 border-dark/20 rounded-full px-6 py-2.5 placeholder:text-dark/40 font-bold uppercase text-[10px] md:text-xs focus:outline-none focus:border-dark"
                        />
                        <button className="bg-dark text-neon px-8 py-2.5 rounded-full font-bold uppercase tracking-tighter hover:scale-105 transition-transform text-[10px] md:text-xs">
                            Subscribe
                        </button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
};
