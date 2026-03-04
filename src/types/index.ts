export interface Program {
    title: string;
    img: string;
    desc: string;
    fullDesc: string;
    benefits: string[];
    workout: { name: string; sets: string; reps: string }[];
}
