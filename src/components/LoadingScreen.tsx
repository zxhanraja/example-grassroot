import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Dumbbell } from 'lucide-react';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(onComplete, 2000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center p-6"
        >
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-neon rounded-lg flex items-center justify-center">
                    <Dumbbell className="text-dark w-6 h-6" />
                </div>
                <span className="text-3xl font-display text-white italic">Grassroot <span className="text-neon">Fitness</span></span>
            </div>

            <div className="w-full max-w-xs h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                    className="h-full bg-neon shadow-[0_0_15px_rgba(198,255,0,0.5)]"
                />
            </div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-[10px] text-neon uppercase tracking-[0.4em] font-bold"
            >
                Initializing Excellence
            </motion.p>
        </motion.div>
    );
};
