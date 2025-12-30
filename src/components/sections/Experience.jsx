import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiBriefcase, HiCode, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import { experience } from '../../data/portfolio';

const ExperienceCard = ({ exp, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const iconMap = {
        briefcase: HiBriefcase,
        code: HiCode,
        laptop: HiCode,
    };

    const Icon = iconMap[exp.icon] || HiBriefcase;

    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <div className={`flex items-start gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="relative flex-shrink-0">
                    <motion.div
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-emerald-500 flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    {/* Connecting Line */}
                    {index < experience.length - 1 && (
                        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-primary-500 to-emerald-500" />
                    )}
                </div>

                {/* Content Card */}
                <motion.div
                    className="flex-1 glass-strong rounded-2xl p-6 cursor-pointer"
                    whileHover={{ y: -5, scale: 1.02 }}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                                {exp.role}
                            </h3>
                            <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-2">
                                {exp.company}
                            </p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                {exp.location} • {exp.duration}
                            </p>
                        </div>
                        <motion.button
                            className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isExpanded ? (
                                <HiChevronUp className="w-6 h-6" />
                            ) : (
                                <HiChevronDown className="w-6 h-6" />
                            )}
                        </motion.button>
                    </div>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        {exp.description}
                    </p>

                    {/* Expandable Details */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="border-t border-neutral-300 dark:border-neutral-700 pt-4 mt-4">
                                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                                        Key Responsibilities:
                                    </h4>
                                    <ul className="space-y-2 mb-4">
                                        {exp.responsibilities.map((resp, idx) => (
                                            <motion.li
                                                key={idx}
                                                className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                            >
                                                <span className="text-primary-500 mt-1">▹</span>
                                                <span>{resp}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="primary" size="sm">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container-custom">
                <SectionTitle
                    title="Work Experience"
                    subtitle="My professional journey and the roles I've held"
                />

                <div className="max-w-4xl mx-auto space-y-12">
                    {experience.map((exp, index) => (
                        <ExperienceCard key={exp.id} exp={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
