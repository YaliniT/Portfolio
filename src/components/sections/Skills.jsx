import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { skills } from '../../data/portfolio';

const SkillCircle = ({ skill, delay }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (skill.level / 100) * circumference;

    return (
        <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <div className="relative w-32 h-32 mb-4">
                {/* Background Circle */}
                <svg className="transform -rotate-90 w-32 h-32">
                    <circle
                        cx="64"
                        cy="64"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-neutral-200 dark:text-neutral-700"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                        cx="64"
                        cy="64"
                        r={radius}
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset: offset }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: delay + 0.2, ease: 'easeOut' }}
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(99, 102, 241)" />
                            <stop offset="100%" stopColor="rgb(16, 185, 129)" />
                        </linearGradient>
                    </defs>
                </svg>
                {/* Percentage */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                        className="text-2xl font-bold text-gradient-primary"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: delay + 0.5 }}
                    >
                        {skill.level}%
                    </motion.span>
                </div>
            </div>

            <div className="text-center">
                <span className="text-2xl mb-2 block">{skill.icon}</span>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                    {skill.name}
                </h4>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const [activeTab, setActiveTab] = useState('frontend');

    const tabs = [
        { id: 'frontend', label: 'Frontend', icon: '🎨' },
        { id: 'backend', label: 'Backend', icon: '⚙️' },
        { id: 'tools', label: 'Tools & Others', icon: '🛠️' },
    ];

    return (
        <section id="skills" className="section">
            <div className="container-custom">
                <SectionTitle
                    title="Skills & Expertise"
                    subtitle="Technologies and tools I work with"
                />

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all flex items-center gap-3 ${activeTab === tab.id
                                    ? 'glass-strong shadow-xl border-2 border-primary-500/50'
                                    : 'bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="text-2xl">{tab.icon}</span>
                            {tab.label}
                        </motion.button>
                    ))}
                </div>

                {/* Skills Grid */}
                <motion.div
                    key={activeTab}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {skills[activeTab].map((skill, index) => (
                        <SkillCircle key={skill.name} skill={skill} delay={index * 0.1} />
                    ))}
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Card glass className="max-w-3xl mx-auto">
                        <p className="text-lg text-neutral-700 dark:text-neutral-300">
                            I'm always eager to learn new technologies and expand my skill set.
                            Currently exploring <span className="text-gradient-primary font-semibold">Web3</span>,
                            <span className="text-gradient-primary font-semibold"> AI/ML</span>, and
                            <span className="text-gradient-primary font-semibold"> Cloud Architecture</span>.
                        </p>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
