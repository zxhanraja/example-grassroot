import { Dumbbell, Instagram, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = ({ onPageSelect }: { onPageSelect: (page: string) => void }) => {
    return (
        <footer className="bg-dark pt-8 md:pt-12 pb-4 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 bg-neon rounded-lg flex items-center justify-center">
                                <Dumbbell className="text-dark w-4 h-4" />
                            </div>
                            <span className="text-lg md:text-xl font-display text-white italic">Grassroot <span className="text-neon">Fitness</span></span>
                        </div>
                        <p className="text-white/40 text-[10px] md:text-xs leading-relaxed">
                            Grassroot Fitness is a high-performance sanctuary dedicated to physical and mental excellence.
                        </p>
                        <div className="flex gap-5">
                            <Instagram className="w-4 h-4 text-white/40 hover:text-neon cursor-pointer transition-colors" />
                            <Twitter className="w-4 h-4 text-white/40 hover:text-neon cursor-pointer transition-colors" />
                            <Facebook className="w-4 h-4 text-white/40 hover:text-neon cursor-pointer transition-colors" />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-[8px] md:text-[10px] text-neon mb-4 md:mb-6">Navigation</h4>
                        <ul className="space-y-2 md:space-y-3 text-[10px] md:text-xs text-white/60">
                            <li><button onClick={() => onPageSelect('home')} className="hover:text-neon transition-colors">Home</button></li>
                            <li><button onClick={() => onPageSelect('features')} className="hover:text-neon transition-colors">Features</button></li>
                            <li><button onClick={() => onPageSelect('training')} className="hover:text-neon transition-colors">Training</button></li>
                            <li><button onClick={() => onPageSelect('trainers')} className="hover:text-neon transition-colors">Trainers</button></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-[8px] md:text-[10px] text-neon mb-4 md:mb-6">Support & Legal</h4>
                        <ul className="space-y-2 md:space-y-3 text-[10px] md:text-xs text-white/60">
                            <li><button onClick={() => onPageSelect('help')} className="hover:text-neon transition-colors">Help Center</button></li>
                            <li><button onClick={() => onPageSelect('privacy')} className="hover:text-neon transition-colors">Privacy Policy</button></li>
                            <li><button onClick={() => onPageSelect('terms')} className="hover:text-neon transition-colors">Terms of Service</button></li>
                            <li><button onClick={() => onPageSelect('cookie')} className="hover:text-neon transition-colors">Cookie Policy</button></li>
                            <li><button onClick={() => onPageSelect('contact')} className="hover:text-neon transition-colors">Contact Us</button></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-[8px] md:text-[10px] text-neon mb-4 md:mb-6">Contact</h4>
                        <ul className="space-y-3 md:space-y-4 text-[10px] md:text-xs text-white/60">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-neon shrink-0" />
                                <span>Adisaptagram Station Rd, near Adisaptagram Station, Barakhejuria, Adisaptagram, PO, Bansberia, West Bengal 712121, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-neon shrink-0" />
                                <span>+91 98756 44093</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-neon shrink-0" />
                                <span>info@grassrootfitness.fit</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/20 text-[7px] md:text-[9px] uppercase tracking-[0.2em] font-bold text-center md:text-left">
                        © 2026 Grassroot Fitness. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-4 md:gap-6 text-white/20 text-[7px] md:text-[9px] uppercase tracking-[0.2em] font-bold">
                        <span onClick={() => onPageSelect('privacy')} className="hover:text-neon cursor-pointer transition-colors">Privacy Policy</span>
                        <span onClick={() => onPageSelect('terms')} className="hover:text-neon cursor-pointer transition-colors">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
