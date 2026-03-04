import { motion } from 'motion/react';
import { Users, Apple, Dumbbell, Zap, Activity, Trophy, ArrowRight } from 'lucide-react';

export const BrandStrip = () => {
    const brands = ["TITAN", "APEX", "IRON", "VITAL", "CORE", "ZENITH"];
    return (
        <div className="py-6 md:py-8 border-y border-white/5 bg-charcoal/40 mt-6 md:mt-0">
            <div className="max-w-7xl mx-auto px-6">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-white/10 text-[9px] md:text-[11px] uppercase tracking-[0.6em] mb-12 font-bold"
                >
                    STRATEGIC ALLIANCES WITH INDUSTRY LEADERS
                </motion.p>
                <div className="overflow-hidden">
                    <motion.div
                        className="flex items-center justify-between gap-16 grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                        animate={{ x: [0, -60, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        {brands.map((brand, i) => (
                            <span key={i} className="text-3xl md:text-5xl font-display hover:text-neon transition-colors cursor-default">{brand}</span>
                        ))}
                        {brands.map((brand, i) => (
                            <span key={`dup-${i}`} className="text-3xl md:text-5xl font-display hidden md:block hover:text-neon transition-colors cursor-default">{brand}</span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div >
    );
};

export const Features = () => {
    const features = [
        {
            icon: <Users className="w-10 h-10" />,
            title: "Expert Trainers",
            desc: "Our roster of trainers consists of former professional athletes, sports scientists, and elite strength coaches. They bring a wealth of knowledge and a no-excuses attitude to every session. With a deep understanding of biomechanics and physiological adaptation, they ensure that every rep you perform is optimized for growth while minimizing the risk of injury.",
            size: "lg",
            img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
        },
        {
            icon: <Apple className="w-8 h-8" />,
            title: "Nutrition Guidance",
            desc: "Elite performance starts in the kitchen. Our world-class nutritionists develop personalized meal plans that align with your specific metabolic profile and performance goals.",
            size: "sm"
        },
        {
            icon: <Dumbbell className="w-8 h-8" />,
            title: "Strength Lab",
            desc: "Unlock your true power potential with our comprehensive strength programs. We utilize a combination of traditional powerlifting and modern resistance techniques.",
            size: "sm"
        },
        {
            icon: <Zap className="w-10 h-10" />,
            title: "Bespoke Training",
            desc: "Experience the ultimate in bespoke fitness with our one-on-one personal training sessions. Every program is meticulously crafted to address your unique strengths, weaknesses, and objectives. We monitor your progress through advanced data analytics, adjusting your intensity and volume in real-time to ensure you are always moving toward your peak self.",
            size: "lg",
            img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80"
        },
        {
            icon: <Activity className="w-8 h-8" />,
            title: "Elite Community",
            desc: "Join a tribe of high-performers who share your dedication and drive. Our community is built on mutual respect and collective motivation.",
            size: "md"
        },
        {
            icon: <Trophy className="w-8 h-8" />,
            title: "Performance Analytics",
            desc: "Knowledge is power. We integrate cutting-edge wearable technology and in-house diagnostic tools to provide you with a clear picture of your progress.",
            size: "md"
        },
    ];

    return (
        <section id="features" className="py-6 md:py-10 bg-dark relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-10 md:mb-14">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-3"
                    >
                        <div className="w-8 h-[1px] bg-neon" />
                        <span className="text-neon font-bold uppercase tracking-[0.4em] text-[8px]">The Grassroot Edge</span>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-7xl font-display italic leading-[1.1]"
                        >
                            Engineered <br />
                            <span className="text-neon text-glow-neon">For Excellence</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-white/40 text-[10px] md:text-sm leading-relaxed max-w-xl"
                        >
                            We have meticulously curated every aspect of our service to provide an unparalleled fitness experience. This isn't just a gym; it's a high-performance sanctuary.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className={`relative group overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5 bg-white/[0.03] backdrop-blur-md p-6 md:p-10 flex flex-col justify-between transition-all hover:border-neon/30 hover:bg-white/[0.06] ${f.size === "lg" ? "md:col-span-4 min-h-[320px] md:h-[420px]" :
                                f.size === "md" ? "md:col-span-3 min-h-[260px] md:h-[320px]" :
                                    "md:col-span-2 min-h-[260px] md:h-[320px]"
                                }`}
                        >
                            {f.img && (
                                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                                    <img src={f.img} alt="" className="w-full h-full object-cover grayscale" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                                </div>
                            )}

                            <div className="relative z-10">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="w-16 h-16 rounded-2xl bg-neon/10 flex items-center justify-center text-neon mb-8 border border-neon/20 group-hover:bg-neon group-hover:text-dark transition-all duration-500"
                                >
                                    {f.icon}
                                </motion.div>
                                <h3 className={`font-bold uppercase tracking-[0.2em] mb-4 md:mb-6 group-hover:text-neon transition-colors ${f.size === "lg" ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
                                    {f.title}
                                </h3>
                            </div>

                            <div className="relative z-10">
                                <p className={`text-white/60 leading-relaxed font-medium transition-colors group-hover:text-white/80 ${f.size === "lg" ? "text-sm md:text-base max-w-md" : "text-xs md:text-sm"}`}>
                                    {f.desc}
                                </p>
                                {f.size === "lg" && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        onClick={() => document.getElementById('training')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="mt-8 flex items-center gap-2 text-neon text-[10px] font-bold uppercase tracking-[0.2em] cursor-pointer group/btn"
                                    >
                                        Learn More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </motion.div>
                                )}
                            </div>

                            <div className="absolute top-0 right-0 w-24 h-24 bg-neon/5 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700" />
                        </motion.div>
                    ))
                    }
                </div >
            </div >
        </section >
    );
};

export const DiscoverSection = () => {
    const items = [
        { icon: <Zap className="w-5 h-5" />, title: "Cardio Training", text: "Our cardio zones are equipped with the latest technology to push your cardiovascular limits. We ensure your heart health is as strong as your muscles." },
        { icon: <Dumbbell className="w-5 h-5" />, title: "Strength Training", text: "Strength is the foundation of all physical capability. Our strength area features competition-grade equipment from the world's leading manufacturers." },
        { icon: <Activity className="w-5 h-5" />, title: "BMI Calculator", text: "We believe in data-driven fitness. Our integrated BMI and body composition tools go beyond simple weight measurements." },
        { icon: <Trophy className="w-5 h-5" />, title: "HIIT Workouts", text: "High-Intensity Interval Training is the most efficient way to transform your body in minimal time. Our HIIT classes are legendary for their intensity." },
    ];

    return (
        <section className="py-6 md:py-10 bg-dark border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="text-2xl md:text-4xl italic mb-3">Discover What <span className="text-neon">Sets Us Apart</span></h2>
                    <p className="max-w-2xl mx-auto text-white/40 text-[10px] md:text-xs leading-relaxed px-4">
                        What makes Grassroot Fitness unique is our unwavering commitment to excellence in every detail.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.01 }}
                            className="p-5 md:p-6 glass-card rounded-[1.2rem] md:rounded-[1.8rem] border-neon/10 hover:border-neon/40 transition-all cursor-default flex flex-col sm:flex-row gap-4 md:gap-5 items-start"
                        >
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-neon/10 flex items-center justify-center text-neon shrink-0">{item.icon}</div>
                            <div>
                                <h3 className="text-base md:text-lg font-bold uppercase mb-2 md:mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-white/40 text-[10px] md:text-xs leading-relaxed font-medium">{item.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const PhilosophySection = () => {
    return (
        <section className="py-6 md:py-10 bg-charcoal/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-2">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-neon font-bold uppercase tracking-[0.4em] text-[9px] mb-4 block"
                        >
                            Our Core Beliefs
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl italic mb-6 md:mb-8 leading-tight"
                        >
                            The Philosophy of <br /><span className="text-neon">Unstoppable Force</span>
                        </motion.h2>
                        <div className="space-y-4 md:space-y-6 text-white/60 leading-relaxed text-xs md:text-base">
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                At the heart of Grassroot Fitness lies a simple yet profound philosophy: the human body is capable of extraordinary feats when the mind is properly aligned.
                            </motion.p>
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                <strong>Discipline</strong> is the bridge between goals and accomplishment. We foster an environment where consistency is celebrated over intensity.
                            </motion.p>
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                                <strong>Science</strong> informs everything we do. We reject fitness fads and 'quick fixes' in favor of evidence-based training methodologies.
                            </motion.p>
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                                <strong>Community</strong> is our secret weapon. We believe that we are stronger together.
                            </motion.p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                        <div className="space-y-3 md:space-y-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/5"
                            >
                                <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80" alt="Gym" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700" referrerPolicy="no-referrer" />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="aspect-square rounded-2xl overflow-hidden border border-white/5"
                            >
                                <img src="https://images.unsplash.com/photo-1590239926044-4131c7f4c1b0?w=400&q=80" alt="Gym" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700" referrerPolicy="no-referrer" />
                            </motion.div>
                        </div>
                        <div className="space-y-3 md:space-y-4 pt-6 md:pt-8">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="aspect-square rounded-2xl overflow-hidden border border-white/5"
                            >
                                <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&q=80" alt="Gym" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700" referrerPolicy="no-referrer" />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/5"
                            >
                                <img src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=400&q=80" alt="Gym" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700" referrerPolicy="no-referrer" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
