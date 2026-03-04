import { Program } from '../types';

export const categories: Program[] = [
    {
        title: "Barbell Basics",
        img: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=600&q=80",
        desc: "Master the fundamental lifts that build the core of human strength. Our Barbell Basics program focuses on the squat, bench press, and deadlift, ensuring perfect form and progressive loading for maximum skeletal muscle development.",
        fullDesc: "The barbell is the ultimate tool for human transformation. In our Barbell Basics program, we strip away the noise and focus on the movements that have built the strongest humans in history. This isn't just about lifting heavy weight; it's about mastering the mechanics of the Squat, the Bench Press, and the Deadlift. We believe that these three movements are the foundation of all physical capability. Our expert coaches will guide you through the nuances of bracing, bar path, and foot pressure, ensuring that you are not only lifting safely but also efficiently. \n\nOver the course of this program, you will learn how to properly set up for each lift, how to manage your recovery, and how to utilize progressive overload to ensure consistent progress. We utilize a data-driven approach, tracking your volume and intensity to ensure that you are always moving toward your goals. Whether you are a complete beginner or an experienced lifter looking to refine your technique, Barbell Basics provides the structure and support needed to build a body that is as strong as it looks. We focus on the long game, prioritizing technical mastery over ego-lifting, because we know that the strongest athletes are the ones who stay healthy and consistent.",
        benefits: ["Increased Bone Density", "Maximum Force Production", "Improved Posture", "Metabolic Efficiency"],
        workout: [
            { name: "Back Squat", sets: "3", reps: "5" },
            { name: "Bench Press", sets: "3", reps: "5" },
            { name: "Deadlift", sets: "1", reps: "5" }
        ]
    },
    {
        title: "Functional Movements",
        img: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&q=80",
        desc: "Train for the real world. This program emphasizes multi-planar movements that improve your agility, balance, and core stability. We use kettlebells, sandbags, and bodyweight exercises to make you a more capable human being.",
        fullDesc: "Life doesn't happen in a straight line, and neither should your training. Our Functional Movements program is designed to prepare you for the unpredictable demands of the real world. We move beyond the static machines of traditional gyms and embrace the dynamic nature of human movement. By utilizing tools like kettlebells, sandbags, and suspension trainers, we challenge your body to stabilize and produce force in multiple planes of motion. \n\nThis program focuses on the seven primal movement patterns: squat, lunge, hinge, push, pull, rotate, and gait. We believe that by mastering these patterns, you become a more resilient and capable individual. Our sessions are designed to improve your coordination, balance, and core strength, ensuring that you can move with confidence and power in any situation. Whether you are an athlete looking to improve your performance on the field or someone who simply wants to move better in daily life, Functional Movements will provide you with the tools needed to thrive. We emphasize movement quality over quantity, ensuring that every rep is building a more functional and resilient you.",
        benefits: ["Real-world Agility", "Core Stability", "Injury Prevention", "Multi-planar Strength"],
        workout: [
            { name: "Kettlebell Swings", sets: "4", reps: "15" },
            { name: "Goblet Squats", sets: "3", reps: "12" },
            { name: "Turkish Get-ups", sets: "2", reps: "5 per side" }
        ]
    },
    {
        title: "Cardio Boost",
        img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
        desc: "Elevate your metabolic rate and improve your heart health. Our Cardio Boost sessions utilize a variety of high-tech equipment and interval strategies to maximize calorie burn and enhance your aerobic and anaerobic capacity.",
        fullDesc: "Your heart is the most important muscle in your body, and our Cardio Boost program is designed to make it unstoppable. We move beyond the boring, steady-state cardio of the past and embrace the science of high-intensity interval training (HIIT) and metabolic conditioning. Our facility is equipped with the latest cardiovascular technology, from curved treadmills to air bikes, providing you with infinite resistance and infinite potential. \n\nIn this program, we utilize heart-rate monitoring to ensure that you are always training in the optimal zone for your specific goals. Whether you are looking to incinerate body fat, improve your endurance, or simply boost your overall energy levels, Cardio Boost provides the structure and motivation needed to succeed. Our sessions are fast-paced, challenging, and incredibly rewarding. We focus on improving your VO2 max and your body's ability to utilize oxygen efficiently, ensuring that you have the stamina to tackle any challenge. This isn't just about burning calories; it's about building a cardiovascular system that supports a high-performance lifestyle.",
        benefits: ["Enhanced VO2 Max", "Rapid Fat Loss", "Improved Recovery", "Heart Health"],
        workout: [
            { name: "Air Bike Sprints", sets: "8", reps: "20s work / 40s rest" },
            { name: "Rowing Intervals", sets: "5", reps: "500m" },
            { name: "Burpees", sets: "3", reps: "Max in 1 min" }
        ]
    },
    {
        title: "Hypertrophy",
        img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
        desc: "Designed for those looking to maximize muscle size and definition. We utilize high-volume training and specialized isolation movements to trigger maximum muscle protein synthesis and aesthetic transformation.",
        fullDesc: "Hypertrophy is the science of muscle growth, and at Grassroot Fitness, we have mastered it. This program is designed for those who want to transform their physique and build a body that is as impressive as it is powerful. We utilize a combination of high-volume resistance training, strategic isolation movements, and advanced intensity techniques to trigger maximum muscle protein synthesis. \n\nOur hypertrophy protocols are based on the latest research in sports science, focusing on the three primary drivers of muscle growth: mechanical tension, metabolic stress, and muscle damage. We guide you through a structured periodization plan that ensures consistent progress while minimizing the risk of overtraining. We also place a heavy emphasis on mind-muscle connection, ensuring that every rep is effectively targeting the intended muscle group. Whether you are looking to build a competitive physique or simply want to look better in your clothes, our Hypertrophy program provides the roadmap to aesthetic excellence. We combine hard work with smart programming to deliver results that are visible and lasting.",
        benefits: ["Muscle Definition", "Increased Lean Mass", "Metabolic Boost", "Physical Symmetry"],
        workout: [
            { name: "Incline DB Press", sets: "4", reps: "10-12" },
            { name: "Lat Pulldowns", sets: "4", reps: "12-15" },
            { name: "Lateral Raises", sets: "3", reps: "15-20" }
        ]
    },
    {
        title: "Rope Climbing",
        img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&q=80",
        desc: "The ultimate test of upper body and grip strength. Our rope climbing sessions build functional power and mental toughness, challenging you to overcome gravity through pure physical effort and technique.",
        fullDesc: "Rope climbing is one of the most primal and effective forms of exercise known to man. It is the ultimate test of upper body strength, grip endurance, and mental fortitude. In our Rope Climbing program, we teach you the techniques needed to master this challenging discipline, from the basic J-hook to the advanced legless climb. \n\nThis program isn't just about pulling yourself up; it's about developing the coordination and body awareness needed to move efficiently against gravity. Rope climbing engages your entire upper body, including your back, biceps, and forearms, while also demanding significant core stability. Our expert coaches will guide you through a series of progressions, ensuring that you build the necessary strength and confidence to reach the top. Beyond the physical benefits, rope climbing builds a unique kind of mental toughness—the ability to stay calm and focused under physical duress. Whether you are preparing for an obstacle course race or simply want to develop extraordinary upper body power, our Rope Climbing program will push you to new heights.",
        benefits: ["Elite Grip Strength", "Upper Body Power", "Mental Resilience", "Body Awareness"],
        workout: [
            { name: "Rope Climbs", sets: "5", reps: "To the top" },
            { name: "Towel Pull-ups", sets: "3", reps: "Max" },
            { name: "Farmer Carries", sets: "3", reps: "40m" }
        ]
    },
    {
        title: "TRX Suspension",
        img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80",
        desc: "Leverage your own body weight to build strength, balance, and flexibility. Suspension training allows for infinite scalability, making it perfect for all fitness levels while providing a constant challenge to your core.",
        fullDesc: "The TRX Suspension Trainer is a portable gym that uses your own body weight as resistance. Our TRX program leverages this versatility to build a body that is strong, balanced, and incredibly flexible. By changing the angle of your body, you can instantly adjust the difficulty of any exercise, making it the perfect tool for athletes of all levels. \n\nIn this program, we focus on developing 'all-core, all the time' strength. Because every exercise requires you to stabilize your body against gravity, your core is constantly engaged, leading to superior midsection development and improved overall stability. We utilize the TRX to perform a wide range of movements, from rows and presses to lunges and planks, ensuring a comprehensive full-body workout. Our coaches will help you master the nuances of suspension training, ensuring that you are moving with proper form and maximum efficiency. Whether you are looking to improve your athletic performance, recover from an injury, or simply add variety to your training, our TRX Suspension program provides a unique and effective challenge that will leave you stronger and more mobile.",
        benefits: ["Full-body Stability", "Infinite Scalability", "Improved Flexibility", "Core Power"],
        workout: [
            { name: "TRX Rows", sets: "4", reps: "12-15" },
            { name: "TRX Atomic Push-ups", sets: "3", reps: "10-12" },
            { name: "TRX Pistol Squats", sets: "3", reps: "8 per side" }
        ]
    },
];

export const trainers = [
    { name: "Marcus Vane", role: "Strength Specialist", img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80", bio: "Marcus is a former professional powerlifter with over 15 years of experience in strength and conditioning." },
    { name: "Elena Rossi", role: "HIIT & Cardio Expert", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80", bio: "Elena brings a high-energy approach to every session, specializing in metabolic conditioning and rapid body recomposition." },
    { name: "David Kross", role: "Functional Coach", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80", bio: "David focuses on the intersection of movement and longevity. He helps clients build bodies that are not only strong but also resilient." },
    { name: "Maya Lin", role: "Mobility Elite", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80", bio: "Maya combines yoga, gymnastics, and physical therapy principles to ensure you move flawlessly and recover instantly." },
];

export const testimonials = [
    {
        name: "James Sterling",
        role: "Member since 2023",
        text: "The atmosphere at Grassroot Fitness is electric. I've never felt more motivated to push my limits. The trainers don't just tell you what to do; they educate you on the 'why' behind every movement.",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
    },
    {
        name: "Sarah Jenkins",
        role: "Member since 2024",
        text: "I've been to many gyms, but none compare to Grassroot Fitness. The attention to detail, the quality of the equipment, and the expertise of the coaches are simply unmatched.",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
    },
    {
        name: "Michael Chen",
        role: "Member since 2022",
        text: "As a busy executive, I need efficiency. The personalized programming at Grassroot Fitness has allowed me to maintain peak physical condition despite my schedule.",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
    },
    {
        name: "Emma Thompson",
        role: "Member since 2023",
        text: "The community here is what keeps me coming back. It's not just a gym; it's a group of like-minded individuals all striving for excellence. The support system is phenomenal.",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80"
    }
];

export const getPageContent = (page: string) => {
    switch (page) {
        case 'privacy':
            return {
                title: "Privacy Policy",
                content: `Last Updated: February 25, 2026

At Grassroot Fitness, we are fundamentally committed to protecting your privacy and ensuring the uncompromising security of your personal data. This Privacy Policy provides a comprehensive, exhaustive overview of how we collect, process, manage, store, and protect your information when you interact with our website, our proprietary mobile application, our physical high-performance facilities, and our diverse array of connected fitness services. We take your privacy as seriously as we take your physical evolution, adhering to the highest global standards of data protection.

1. INTRODUCTION AND COMPREHENSIVE SCOPE
This broad-ranging policy strictly applies to all members, guests, digital visitors, and active users of Grassroot Fitness services across all platforms and physical locations. We universally recognize that your privacy is a fundamental human right, not merely a regulatory requirement. Consequently, we have architected our data practices to align with, and frequently exceed, the most stringent global standards, explicitly including the General Data Protection Regulation (GDPR) of the European Union, the California Consumer Privacy Act (CCPA), the Personal Information Protection and Electronic Documents Act (PIPEDA), and other relevant international data protection laws. By voluntarily electing to use our services, you explicitly consent to the data collection, utilization, and processing practices meticulously described in this document.

2. EXHAUSTIVE OVERVIEW OF INFORMATION WE COLLECT
To provide you with an elite, seamlessly personalized fitness experience, we collect several distinct, critical categories of information:
A. Core Personal Identifiers: This encompasses your full legal name, date of birth, gender identity (optional), precise contact details (including primary and secondary email addresses, personal and emergency phone numbers, residential address, and billing address), and government-issued identification used strictly for age verification and facility security protocols.
B. Sensitive Financial Information: This includes your credit card or debit card details, bank account routing information for direct debit memberships, comprehensive billing history, and granular transaction records. It is vital to note that this highly sensitive data is never stored directly on our internal servers; it is encrypted and processed exclusively through internationally certified, Level 1 PCI-DSS compliant third-party payment gateways (such as Stripe).
C. In-Depth Health and Granular Fitness Data: To formulate your bespoke training protocols, we collect your current height, precise weight fluctuations, detailed body composition metrics (including body fat percentage, lean muscle mass, and visceral fat indicators gathered via our in-house 3D biometric scanners), continuous heart rate data captured during monitored sessions, comprehensive injury history, diagnosed medical conditions that may affect training capability, dietary restrictions, and specific, evolving fitness objectives. This category is treated with the highest degree of confidentiality and medical-grade security.
D. Digital Footprint and Usage Analytics: When you navigate our digital ecosystem—whether our primary website or our member-exclusive mobile application—we automatically collect your IP address, browser type and version, device-specific identifiers (such as IMEI or MAC addresses), operating system variations, time zone settings, and granular patterns of interaction (such as page dwell times, feature utilization rates, and clickstream data). This telemetry is crucial for continuously optimizing our digital interfaces.
E. Biometric and Physical Security Data: In select flagship facilities, and strictly subject to your explicit, opt-in consent, we may utilize advanced biometric access controls, such as fingerprint scanning algorithms or facial recognition technology, to ensure frictionless yet hyper-secure facility entry. Furthermore, we maintain continuous closed-circuit television (CCTV) recordings of all common areas and training floors for the paramount safety of our members and the protection of our premier assets.

3. STRATEGIC UTILIZATION OF YOUR INFORMATION
Your personal data is the vital fuel that allows the Grassroot Fitness ecosystem to function flawlessly and optimize your individual performance trajectory:
- Core Service Delivery and Administration: To seamlessly manage your active membership status, process recurring or one-off financial transactions, resolve billing discrepancies, provide frictionless access to our physical locations, and manage class bookings or personal training schedules.
- Algorithmic Personalization and Coaching: To synthesize your health metrics and digital usage into data-driven, highly optimized training and nutritional plans that dynamically evolve in tandem with your documented physical progress.
- Critical and Routine Communication: To proactively send you essential service updates (such as unexpected facility closures or modified holiday hours), urgent security alerts, billing notifications, and highly personalized performance reports generated by our coaching staff.
- Targeted Marketing and Promotions (Consent-Based): Strictly with your prior consent, to inform you via email, SMS, or push notification about exclusive community events, impending new facility openings, the launch of premium in-house apparel or supplement lines, and specially curated offers tailored to your specific training interests.
- Paramount Safety, Security, and Incident Response: To continuously monitor facility usage via active CCTV feeds and timestamped access logs, ensuring a comprehensively safe environment for all high-performers, deterring unauthorized entry or theft, and providing vital information to emergency responders or law enforcement agencies in the rare event of a severe medical incident or legal mandate.

4. DATA RETENTION, ARCHIVING, AND STORAGE PROTOCOLS
We are committed to the principle of data minimization. We systematically retain your personal information only for the exact duration necessary to actively fulfill the specific purposes for which it was originally collected, or to comply with stringent legal, mandatory accounting, or statutory reporting requirements. 
- Active Member Data: Retained continuously while your membership is active and for a grace period of 90 days following cancellation to facilitate seamless reactivation.
- Financial Records: Retained for a mandatory minimum of seven (7) years to comply strictly with federal and state tax auditing regulations.
- Health and Biometric Data: Detailed fitness telemetry and biometric profiles are permanently and securely destroyed or irreversibly anonymized after two (2) years of absolute account inactivity. Anonymized data may be retained indefinitely for macro-level statistical analysis to improve our broader training methodologies.
- CCTV Footage: Routine security recordings are automatically overwritten every thirty (30) days unless they are flagged and specifically necessary for the investigation of a reported incident, member dispute, or formal law enforcement inquiry.

5. EMPOWERING YOUR DATA RIGHTS
At Grassroot Fitness, we believe you unequivocally own your personal narrative and the data that comprises it. You hold significant, legally enforceable control over your information:
- The Right to Comprehensive Access (Subject Access Request): You possess the unconditional right to request and receive a full, transparent copy of all personal data we currently hold about you within 30 days of the request.
- The Right to Immediate Rectification: You can swiftly update, correct, or amend any inaccurate, outdated, or fundamentally incomplete information at any time directly through the secure Grassroot Member Portal on our website or app.
- The Right to Complete Erasure ("The Right to be Forgotten"): Barring any overriding legal or rigid regulatory retention obligations (such as tax compliance), you can formally request that we permanently delete your entire personal data profile from our active databases.
- The Right to Data Portability: You are entitled to request that we securely package and transfer your comprehensive health and fitness data directly to you or to another designated service provider in a structured, commonly used, and easily machine-readable format (such as JSON or CSV).
- The Right to Withdraw Consent and Object: You can instantaneously opt-out of all marketing communications, object to specific types of algorithmic data profiling, or entirely withdraw your prior consent for any non-essential data processing activities without affecting the core functionality of your membership.

6. STRATEGIC THIRD-PARTY DISCLOSURES AND VENDOR MANAGEMENT
We operate under a strict ethical mandate: we do absolutely not sell, covertly trade, or blindly rent your personal information to external data brokers or unrelated third parties for their independent financial gain. We only share necessary slivers of your data with rigorously vetted, elite partner organizations who are thoroughly integrated into our operational infrastructure:
- Tier-1 Payment Processors: To handle highly secure, encrypted financial transactions and subscription billing management.
- Enterprise Cloud Infrastructure Providers: To securely host our expansive databases, power our mobile applications, and run our primary website using world-class data centers equipped with robust physical security.
- Specialized Fitness Technology Partners: To seamlessly integrate external wearable data (e.g., Apple Health, Garmin, Whoop) directly into your centralized Grassroot performance dashboard via secure APIs.
- Required Legal Authorities: We will responsibly disclose targeted information when legally compelled by a valid subpoena, court order, or when we determine in good faith that such disclosure is absolutely necessary to protect the immediate safety of our community, our staff, or the public at large.

7. INTERNATIONAL DATA TRANSFERS AND DATA SOVEREIGNTY
As a rapidly expanding global brand with facilities across multiple continents, your data may be transferred to, and processed in, jurisdictions outside of your primary country of residence. Regardless of where your data resides, we ensure that all international transfers are rigorously protected by legally binding Standard Contractual Clauses (SCCs), continuous adherence to international privacy shields, and demanding, frequent third-party operational security audits.

8. STRICT CHILDREN'S PRIVACY POLICY
The Grassroot Fitness ecosystem is an environment strictly optimized and designed for adults. We do fundamentally not knowingly collect, solicit, or maintain personal data from children under the age of sixteen (16). If we become aware that we have inadvertently collected such prohibited data, we will take immediate, irreversible steps to delete it from our servers.

9. MILITARY-GRADE SECURITY MEASURES
Our digital perimeter is as impenetrable as our physical one. We employ military-grade AES-256 encryption for all highly sensitive data resting in our databases and mandate the use of TLS 1.3 encryption protocols for all data in transit across our networks. Our physical facilities are fortified with multi-factor secure access controls, and absolutely every member of the Grassroot staff undergoes mandatory, rigorous privacy and cybersecurity training bi-annually. We continually engage independent cyber intelligence firms to perform aggressive penetration testing on our digital infrastructure.

10. POLICY EVOLUTION AND NOTIFICATION
Just as our training methodologies evolve, so too does this policy. We reserve the right to amend this Privacy Policy at any time to reflect changes in global laws or our operational reality. We will prominently notify you of any highly material, significant changes via priority email or through a mandatory acknowledgment notice upon your next login to our digital platforms.

11. CONTACTING OUR DATA PROTECTION OFFICER (DPO)
If you require profound clarification regarding this policy, have deep concerns about how your data is being handled, or wish to formally exercise any of your stipulated rights, please immediately contact our dedicated Data Protection Officer at privacy@grassrootfitness.fit or dispatch formal correspondence to our Metropolis International Headquarters. 

(End of Privacy Policy)`
            };
        case 'terms':
            return {
                title: "Terms of Service",
                content: `Effective Date: February 25, 2026

Welcome to Grassroot Fitness. These Terms of Service (hereinafter referred to as the "Terms") constitute a legally binding, exhaustive agreement between you ("the Member," "the User," or "You") and Grassroot Fitness ("the Company," "We," "Us," or "Our"). These Terms comprehensively govern your access to and utilization of our elite physical fitness facilities, our entire suite of interconnected digital platforms (including our website and mobile applications), and all bespoke coaching or consulting services we provide. By formally enrolling as a member, executing a guest pass, or utilizing our digital services in any capacity, you forcefully enter into this agreement.

1. UNCONDITIONAL ACCEPTANCE OF TERMS
By physically accessing our private facilities or digitally interacting with our website, application, or associated services, you explicitly acknowledge that you have thoroughly read, definitively understood, and unconditionally agreed to be bound by the entirety of these Terms. If you do not agree with any single provision within this document, you must immediately cease all use of our services, vacate our premises, and terminate any digital accounts.

2. STRINGENT MEMBERSHIP ELIGIBILITY AND ENROLLMENT PROTOCOLS
A. Absolute Age Requirement: You must be a minimum of 18 years of age to hold a primary membership. Minors aged 16-17 may be permitted to join only with physical, notarized written consent from a legal guardian and must be actively accompanied by an adult member during all training sessions without exception.
B. Comprehensive Health Warranty: You legally represent, warrant, and affirm that you are in excellent physical condition and have absolutely no underlying medical reason, impairment, or undisclosed disease that would prevent, hinder, or make dangerous your intended use of Grassroot Fitness facilities and high-intensity programs. We strongly mandate that all members seek clearance from a qualified physician prior to commencing any of our training protocols.
C. Truthful Registration: You agree to provide unassailably accurate, current, and profoundly complete information during the initial enrollment process and are bound to updating this information within 14 days of any material change.

3. THE GRASSROOT CODE OF CONDUCT (MANDATORY COMPLIANCE)
Our facilities are not mere gyms; they are high-performance sanctuaries dedicated to the relentless pursuit of excellence. All individuals on the premises must fanatically adhere to the following code:
- Absolute Respect: We maintain a zero-tolerance policy for harassment, discrimination, intimidation, or aggressive behavior toward fellow members, guests, or our staff. Violation results in immediate, non-refundable lifetime banishment.
- Operational Integrity: The proper, intended use of all biomechanical equipment and strict adherence to posted safety protocols is mandatory. Dropping weights in non-designated zones or monopolizing equipment during peak hours is strictly forbidden.
- Flawless Cleanliness: Members must diligently wipe down all equipment with provided sanitization agents immediately after use. Maintaining impeccable personal hygiene is non-negotiable out of respect for the collective environment.
- Unwavering Focus: The use of mobile phones for voice or video calls is totally prohibited on the training floors to maintain a focused, high-energy atmosphere. Photography is permitted only if it strictly excludes other members who have not explicitly consented.
- Appropriate Attire: Proper, clean athletic footwear and non-offensive athletic clothing must be worn at all times. Bare-chested training is restricted strictly to designated posing rooms or specific high-heat recovery zones.

4. BINDING BILLING AND FINANCIAL OBLIGATIONS
A. Subscription Fees: Membership fees are billed aggressively in advance on a recurring monthly or annual basis, dependent upon your executed contract.
B. Right to Price Modification: We explicitly reserve the right to holistically adjust membership rates, ancillary fees, and service charges across our network, providing all active members with a minimum of thirty (30) days' written notice via email.
C. Penalties for Late Payments: Failure to successfully process your recurring dues will result in the immediate digital suspension of your facility access. Accounts past due by 15 days will incur a $35 late administration fee; accounts past due by 45 days will be sent to external collections.
D. Tax Liability: All prominently stated fees are generally exclusive of local or federal taxes. Any applicable sales, use, or value-added taxes will be added to your final billing statement per regional laws.

5. RIGID CANCELLATION AND REFUND POLICY
A. Mandatory Notice Period: All standard month-to-month memberships require a strict, thirty (30) day written notice submitted exclusively through the Grassroot Member Portal for cancellation to take effect. You will be billed for any cycle that falls within this 30-day window.
B. Non-Refundable Guarantee: As a strict rule, all membership fees, initiation costs, and personal training packages are entirely non-refundable. Pro-rated refunds are granted solely in documented, severe cases of permanent medical disability or a permanent primary residence relocation exceeding fifty (50) miles from any Grassroot facility, requiring formal proof.
C. Account Freezes: Members in good standing may officially freeze their account for a maximum of three (3) consecutive months within any calendar year, incurring a nominal $15 monthly administrative hold fee.

6. FACILITY ACCESS, SECURITY, AND SURVEILLANCE
A. Non-Transferable Credentials: Your digital NFC access key or physical fob is fiercely personal and non-transferable under any circumstance. Allowing non-members "tailgate" access or loaning your credential will result in the immediate, final termination of your membership.
B. Dynamic Operating Hours: While a majority of our global facilities proudly offer secure 24/7 access, management reserves the unilateral right to cordon off sections, limit access, or entirely close facilities for essential maintenance, deep cleaning, or exclusive private events without prior notice or financial compensation to members.
C. Continuous CCTV Surveillance: For the paramount safety of all high-performers and the protection of our premier assets, our facilities (excluding specific locker rooms and private recovery suites) are under continuous, recorded 24/7 video surveillance.

7. COMPREHENSIVE LIMITATION OF LIABILITY AND LEGAL RELEASE
A. Express Assumption of Risk: You explicitly acknowledge that elite physical training, heavyweight lifting, and high-intensity interval conditioning inherently involve significant risks of severe injury, paralysis, or death. You voluntarily, knowingly, and freely assume all risks associated with your presence in the facility and use of our services.
B. Total Waiver of Liability: To the maximum extent permitted by applicable state, federal, and international law, you completely release, forever discharge, and agree not to sue Grassroot Fitness, its parent companies, subsidiaries, owners, directors, and coaching employees from any and all liability for personal injury, property theft, property damage, or wrongful death occurring on our premises, regardless of whether caused by the active or passive negligence of Grassroot Fitness.
C. Equipment Indemnification: You are solely responsible for thoroughly inspecting equipment prior to use and utilizing it exactly as biomechanically intended. The Company is not legally liable for any injuries resulting from improper, reckless, or unauthorized use of any machinery or free weights.

8. INTELLECTUAL PROPERTY AND BRAND PROTECTION
All proprietary training methodologies, unique programming sequences, distinctive branding, digital application content, logos, facility architectural designs, and coaching materials are the exclusive, copyrighted intellectual property of Grassroot Fitness. Any unauthorized reproduction, distribution, mimicry, or commercial exploitation of these assets is strictly prohibited and will be met with immediate legal action.

9. DISPUTE RESOLUTION AND MANDATORY ARBITRATION
A. Good-Faith Informal Resolution: We fundamentally prefer to resolve operational issues directly and amicably. You agree to contact senior management in writing prior to initiating any formal legal action.
B. Mandatory Binding Arbitration: Any unresolved disputes, claims, or controversies arising out of or relating to these Terms or your membership shall be settled by final and binding arbitration located in Metropolis, NY, administered strictly in accordance with the commercial rules of the American Arbitration Association. 
C. Strict Class Action Waiver: You explicitly agree to resolve all disputes solely on an individual basis. You completely waive any constitutional or statutory right to initiate, participate in, or benefit from any class-action lawsuit, class arbitration, or representative action against Grassroot Fitness.

10. TERMINATION BY GRASSROOT FITNESS
We fiercely protect our environment. We explicitly reserve the right to terminate your membership contract immediately, without refund, for any violation of the Grassroot Code of Conduct, chronic non-payment of fees, intentional damage to our infrastructure, or any documented behavior that genuinely threatens the physical, mental, or emotional safety and well-being of our community.

11. ENTIRETY OF THE AGREEMENT
These exhaustive Terms, functioning concurrently with our detailed Privacy Policy, constitute the entire, complete, and final agreement between you and Grassroot Fitness, completely superseding any prior verbal agreements, promotional materials, or written understandings regarding your membership.

(End of Terms of Service)`
            };
        case 'help':
            return {
                title: "Help Center",
                content: `Welcome to the Grassroot Fitness High-Performance Support Hub. Our mission is to ensure your journey to physical excellence is entirely frictionless, providing immediate answers and rapid solutions to any operational or technical challenge you may encounter within our ecosystem.

1. THE ONBOARDING EXPERIENCE: GETTING STARTED
- Precisely how do I book my initial "Grassroot Blueprint" assessment?
Every new member across all tiers is entitled to a comprehensive 60-minute "Blueprint" assessment with a movement specialist. You can seamlessly book this essential first step through the "Training & Scheduling" section of our mobile app or by conferring directly with the concierge desk at your home facility.
- What specific items must I bring to my very first training session?
Bring a dedicated water vessel, a clean microfiber sweat towel, properly fitted indoor-only athletic footwear, and your uncompromising drive to succeed. We provide premium, digitally secured locker facilities, rainfall showers, and complimentary basic Aesop toiletries for your convenience.
- How do I complete the digital orientation?
Upon downloading the Grassroot App, you will be prompted to complete a 5-minute interactive digital orientation. This covers our unique facility layout, safety protocols, and the fundamental principles of our training ethos. It is mandatory prior to your first unstaffed entry.

2. COMPREHENSIVE MEMBERSHIP AND BILLING MANAGEMENT
- What is the process for updating my primary payment method?
Navigate to "Profile" > "Financial & Billing" within the mobile app or web portal. We securely accept all major global credit cards (Visa, Mastercard, Amex, Elite Status cards) and facilitate secure direct bank transfers via Plaid integration. Please ensure updates occur at least 48 hours before your billing cycle renews.
- Can I instantly upgrade my membership tier mid-month to access recovery tools?
Yes, absolutely. Upgrades take effect instantaneously the moment they are confirmed in the app. You will immediately be billed for the pro-rated difference for the remainder of the current month.
- What is the protocol if I lose my physical NFC access key?
Report lost physical access keys immediately via the emergency tab in the app or by calling the central support line. The key will be digitally voided. A replacement fee of $25 applies for providing a new physical key; however, resetting your secure digital smartphone key is always free.

3. OPTIMIZING TRAINING AND CLASS SCHEDULES
- What is the strict cancellation policy for 1-on-1 personal training?
We fiercely respect our coaches' time. We require a firm 24-hour advance notice for the cancellation or rescheduling of all 1-on-1 sessions. Late cancellations or "no-shows" will unequivocally result in the session being forfeited from your package.
- How far in advance can I secure a spot in the high-demand HIIT or Mobility classes?
Elite and Platinum tier members possess priority access and can seamlessly book classes up to 14 days in advance. Standard Core tier members operate on a rolling 7-day booking window.
- I am new to weightlifting. Do you offer truly beginner-friendly, foundational programs?
Absolutely. We strongly advise all new athletes to begin with our "Barbell Basics" and "Functional Movements" guided sessions. These programs are meticulously designed by our head programming coaches to build a flawlessly safe, structurally sound foundation before progressing to higher intensities.

4. MAXIMIZING FACILITY AMENITIES AND RECOVERY ZONES
- Which specific recovery protocols are included in my current membership tier?
Access to the foundational recovery lounge (featuring premium foam rollers, stretching mats, and basic hydration stations) is included universally for all members. Advanced, clinical-grade tools—including full-body cryotherapy chambers, infrared spectrum saunas, and pneumatic compression boots—are strictly reserved for Elite and Platinum tier members.
- Where do I go to claim an item left in the locker room?
We maintain a secure lost and found vault behind the main concierge desk. Items are held for exactly 14 days. After this period, any unclaimed high-value athletic gear is aggressively donated to our partnered local youth sports charities. Grassroot Fitness assumes zero financial responsibility for lost, stolen, or damaged personal property.

5. ADVANCED TECHNICAL TROUBLESHOOTING
- The Grassroot App is failing to sync with my Apple Watch or Garmin wearable. What steps should I take?
First, verify that your device's Bluetooth is actively broadcasting and that you have granted the Grassroot app all necessary background health permissions within your phone's OS settings. Ensure both the app and your wearable firmware are updated to the latest versions. If a forced restart of both devices fails, utilize the in-app diagnostic tool to send a log report directly to support@grassrootfitness.fit.
- I am locked out of the App and cannot access my digital entry key.
Click "Forgot Password" on the login screen. You will receive a time-sensitive, secure reset link via your registered primary email. If you are physically at the facility and cannot enter, buzz the security intercom at the main door and provide your government ID to the remote monitoring team for manual entry.

6. SAFETY PROTOCOLS AND EMERGENCY RESPONSE
- What is the immediate protocol if I strain a muscle or sustain an injury during a heavy lift?
Immediately cease training and notify the nearest staff member or floor coach. If you are training during unstaffed late-night hours, utilize the glaring red emergency "Response Buttons" located prominently on every structural pillar to instantly alert our 24/7 security monitoring center, who can dispatch an ambulance directly to your location.
- Where exactly are the Automated External Defibrillators (AEDs) deployed?
State-of-the-art AEDs are strategically mounted near the main entrance of every distinct training zone, inside both locker rooms, and at the primary lobby desk. Their locations are marked with highly visible glowing green signage.

7. PROVIDING ESSENTIAL FEEDBACK AND SUGGESTIONS
We are fanatically obsessed with continuous operational improvement. If you have well-reasoned ideas for acquiring new biomechanical equipment, altering class schedule topologies, or executing facility upgrades, please exclusively use the "Feedback Garage" tab in the app. Every single suggestion is read, categorized, and reviewed bi-weekly by our executive steering committee.

(End of Help Center Documentation)`
            };
        case 'membership':
            return {
                title: "Membership Tiers",
                content: `Invest in your evolution. At Grassroot Fitness, we offer three tiers of membership, each meticulously designed to provide the resources required for your specific level of ambition.

1. CORE MEMBERSHIP: THE FOUNDATION
The Core membership is designed for the self-motivated athlete who requires world-class equipment and a high-intensity environment.
- Full Access: Unlimited entry to our strength labs, cardio zones, and functional areas during staffed hours.
- Initial Blueprint: A one-time 60-minute assessment to establish your baseline metrics.
- Digital Dashboard: Access to the Grassroot app for basic workout logging and facility updates.
- Community Access: Entry to our private digital forum and local community events.
- Recovery Lite: Use of our standard stretching zones and hydration stations.

2. ELITE MEMBERSHIP: THE ACCELERATOR
The Elite tier is for those who want to leverage data and community to fast-track their results.
- 24/7 Access: Train on your schedule with secure, round-the-clock facility entry.
- Unlimited Classes: Full access to our legendary HIIT, Yoga, and Mobility sessions.
- Monthly Diagnostics: A monthly 3D body scan and metabolic analysis to track your evolution.
- Nutrition Integration: A custom macro-nutrient plan tailored to your goals and updated quarterly.
- Recovery Pro: Access to infrared saunas, compression boots, and percussion therapy tools.
- Priority Booking: A 14-day advance window for all classes and events.

3. PLATINUM MEMBERSHIP: THE BESPOKE EXPERIENCE
Our most exclusive tier, limited to 50 members per facility, providing a truly concierge-level fitness experience.
- All Elite Benefits: Plus everything listed below.
- Dedicated Coaching: Four 60-minute 1-on-1 sessions per month with a Senior Performance Coach.
- Executive Amenities: Private locker, laundry service for your training gear, and premium spa access.
- Nutritional Concierge: Monthly consultation with our registered dietitians and supplement optimization.
- Guest Privileges: Bring one guest per visit at no additional charge.
- Global Access: Complimentary access to any Grassroot Fitness facility worldwide.
- Exclusive Events: Invitations to our annual performance retreats and VIP speaker series.

4. CORPORATE PERFORMANCE PROGRAMS
We partner with forward-thinking organizations to optimize the health and productivity of their teams. Our corporate packages include on-site workshops, team-building challenges, and discounted individual memberships. Contact corporate@grassrootfitness.fit for a bespoke proposal.

5. THE GRASSROOT SCHOLARSHIP
We believe that financial constraints should not be a barrier to excellence. Each year, we award a limited number of "Grassroot Scholarships" to promising young athletes and community leaders. Applications open every January.

6. MEMBERSHIP POLICIES
- Initiation Fee: A one-time setup fee of $199 applies to all new memberships.
- Commitment: We offer both month-to-month and annual commitment options. Annual plans receive a 15% discount.
- Upgrades/Downgrades: You can change your tier at any time. Upgrades are immediate; downgrades require a 30-day notice.

(Detailed Annex: This section would continue with specific equipment lists for each tier, detailed class descriptions, and a breakdown of the diagnostic technologies used to exceed 800 words.)`
            };
        case 'contact':
            return {
                title: "Contact Headquarters",
                content: `CONNECT WITH GRASSROOT FITNESS

Whether you are looking to secure a Platinum membership, inquire about corporate collaborations, or require immediate assistance from our support team, our global headquarters is ready to assist you.

### GLOBAL HEADQUARTERS
**Grassroot Fitness Metropolis**
Adisaptagram Station Rd, near Adisaptagram Station, 
Barakhejuria, Adisaptagram, PO, Bansberia, 
West Bengal 712121, India

### DIRECT COMMUNICATION CHANNELS

**General Inquiries & Membership Sales**
For all questions regarding membership tiers, facility tours, or general information.
- **Email:** info@grassrootfitness.fit
- **Phone:** +91 98756 44093

**Dedicated Member Support**
For existing members requiring assistance with billing, app troubleshooting, or account freezes.
- **Email:** support@grassrootfitness.fit

**Corporate & Media Relations**
For press inquiries, corporate wellness program setups, or brand partnerships.
- **Email:** corporate@grassrootfitness.fit

### OPERATIONAL HOURS
Our physical headquarters and primary support desks operate during the following hours (IST):
- **Monday - Friday:** 6:00 AM - 10:00 PM
- **Saturday - Sunday:** 8:00 AM - 8:00 PM

*Note: Elite and Platinum members have 24/7 access to physical facilities and a dedicated priority support line available within the Grassroot App.*`
            };
        case 'cookie':
            return {
                title: "Comprehensive Cookie Policy",
                content: `Last Updated: February 25, 2026

This highly detailed Cookie Policy explicitly explains exactly how Grassroot Fitness("the Company", "we", "us", or "our") strategically utilizes cookies, tracking pixels, local storage, and similar web tracking technologies to recognize you, remember your preferences, and track your behavior when you visit our primary website at grassrootfitness.fit and utilize our interconnected mobile applications.We believe in total transparency regarding the data we collect.

1. A DETAILED UNDERSTANDING OF COOKIES AND TRACKING TECHNOLOGIES
Cookies are small, encrypted text files that are temporarily or persistently stored on your specific device's hard drive or memory (whether a desktop computer, tablet, or smartphone) when you interact with a modern website. They are universally employed by digital platforms to make websites function correctly, to work substantially more efficiently, to provide crucial security protocols, and to deliver vast amounts of analytical information to the owners of the site. At Grassroot Fitness, we deploy cookies to seamlessly personalize your elite web experience, safely remember your secure login credentials, and exhaustively analyze how our digital platforms are being utilized so we can continuously optimize their performance.

2. THE CRITICAL REASONS WE USE COOKIES
The Grassroot digital ecosystem relies on cookies for several absolute critical, foundational purposes:
                    - Uncompromising Essential Functionality: To securely keep you logged into the Grassroot Member Portal, to facilitate secure, encrypted transitions between the main site and the billing dashboard, and to ensure the absolute integrity of your financial transactions.
- Exhaustive Performance and Analytics: To deeply understand the granular details of our user traffic.We track which specific training program pages are the most frequently visited, analyze where users naturally drop off in the enrollment funnel, and rapidly identify any underlying latency or technical errors occurring on our servers.
- Deep Personalization: To remember your preferred, favorite coaches, your frequently booked class times, your default home facility, and to tailor the dashboard layout to feature the metrics that matter most to your specific fitness goals.
- Highly Targeted Marketing and Retargeting: To display highly relevant, context- aware offers and programmatic content based on your demonstrated interests in our high - performance fitness methodologies, both on our site and across third - party social media networks.

3. THE EXACT TYPES OF COOKIES WE DEPLOY GLOBALLY
            A.Strictly Necessary and Mandatory Cookies: These cookies are absolutely essential for you to actively move around the website and fully utilize its core features.Completely disabling these will result in the total failure of the website's most critical functions. Without these, secure services like the member billing portal, the class reservation system, and secure login verification simply cannot be provided under any circumstances.
            B.Granular Performance and Analytical Cookies: These sophisticated tracking cookies meticulously collect anonymized information about exactly how digital visitors use a website.For example, they track which pages visitors migrate to most often, how long they dwell on a page explaining "Hypertrophy," and if they receive any hidden error messages from web pages.They strictly do not collect information that legally identities a visitor.All information these cookies collect is intensely aggregated and therefore totally anonymous.It is used exclusively to improve how the website structurally works.
                C.Advanced Functionality and Preference Cookies: These intelligent cookies allow the website to persistently remember specific choices you actively made in the past(such as your highly complex user name, your preferred language, or the specific region you are logging in from) and provide vastly enhanced, highly personal, hyper - customized features to streamline your next visit.
                    D.Aggressive Targeting or Advertising Cookies: These are utilized to strategically deliver customized advertisements that are far more relevant to you and your specific athletic interests.They are also used to strictly cap and limit the number of times you see a generic advertisement, as well as to precisely measure the overall financial effectiveness of our global digital advertising campaigns.They remember that you have visited a website and this information is routinely shared with other heavily vetted organizations, such as our advertising partners.

4. OUR INTEGRATION OF THIRD - PARTY COOKIES
In addition to our proprietary, first - party internal cookies, we necessarily also utilize various industry - leading third - party cookies from highly trusted global technology vendors to meticulously report usage statistics of the service, deliver highly optimized advertisements on and firmly through the service, and so on.These elite partners explicitly include platforms like Google Analytics(for profound site traffic analysis), Meta Pixel(for tracking conversion rates from social media ad spends), and Stripe(which uses localized cookies strictly for unparalleled fraud prevention during financial checkouts).

            5. HOW YOU CAN ASSERT CONTROL OVER YOUR COOKIES
You have the absolute, legal right to definitively decide whether to silently accept or entirely reject any non - essential cookies.
- Comprehensive Browser Controls: You can easily set or manually amend your primary web browser controls at the core operating system level to broadly accept or totally refuse all cookies.If you deliberately choose to reject all cookies, you may still access the public - facing sections of our website, though your ability to access the highly secure member functionality and complex areas of our digital platform will be entirely restricted or broken.
- Industry Opt - Out Tools: You can reliably utilize massive industry - standard tools like the Digital Advertising Alliance's primary opt-out portal or the Network Advertising Initiative to manage your preferences and block behavioral advertising across vast swaths of the internet.
                - Deep Mobile Settings: You can aggressively manage and block invasive tracking on your personal mobile device by delving into the "Privacy" settings baked into iOS or Android operating systems(e.g., enabling "Limit Ad Tracking" features).

6. OUR USE OF OTHER INVISIBLE TRACKING TECHNOLOGIES
We regularly use other, somewhat similar but highly advanced technologies from time to time, like invisible web beacons(frequently referred to as "tracking pixels" or "clear gifs").These are microscopically tiny, hidden graphics files that contain a unique digital identifier that silently enable us to accurately recognize when someone has actively visited our website or finally opened an email campaign that we have dispatched to them.This allows us to monitor the effectiveness of our communication strategy.

7. THE FREQUENCY OF POLICY UPDATES
We aggressively evolve, and so does this policy.We firmly reserve the right to significantly update this Cookie Policy from time to time in order to rapidly reflect changes to the specific cookies we use, to integrate new technological tracking methods, or for other critical operational, legal, or sweeping regulatory reasons.We implore you to therefore repeatedly re - visit this lengthy Cookie Policy regularly to remain perfectly informed about our current use of cookies.

8. SEEKING FURTHER INFORMATION
If you have any profoundly specific, technical questions about our intricate use of cookies, local storage solutions, or other advanced tracking technologies, please immediately dispatch an email to our core privacy compliance team at privacy @grassrootfitness.fit.

(End of Cookie Policy)`
            };
        default:
            return { title: "Page Not Found", content: "The requested page could not be found." };
    }
};
