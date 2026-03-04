import { Hero } from '../components/Hero';
import { BrandStrip, Features, DiscoverSection, PhilosophySection } from '../components/Features';
import { TrainingCategories } from '../components/Training';
import { ExperienceSection, Trainers, Testimonials, CTASection } from '../components/Community';
import { Program } from '../types';

export const Home = ({ onProgramSelect }: { onProgramSelect: (program: Program) => void, key?: string }) => {
    return (
        <>
            <Hero />
            <BrandStrip />
            <Features />
            <DiscoverSection />
            <PhilosophySection />
            <TrainingCategories onSelect={onProgramSelect} />
            <ExperienceSection />
            <Trainers />
            <Testimonials />
            <CTASection />
        </>
    );
};
