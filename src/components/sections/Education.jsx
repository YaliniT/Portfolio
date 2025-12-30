import { motion } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import { education } from '../../data/portfolio';

const EducationCard = ({ edu, index }) => {
    const iconMap = {
        graduation: HiAcademicCap,
        certificate: HiAcademicCap,
    };

    const Icon = iconMap[edu.icon] || HiAcademicCap;

    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
        >
            <div className={`flex items-start gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="relative flex-shrink-0">
                    <motion.div
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    {/* Connecting Line */}
                    {index < education.length - 1 && (
                        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-accent-500 to-accent-600" />
                    )}
                </div>

                {/* Content Card */}
                <motion.div
                    className="flex-1 glass-strong rounded-2xl p-6"
                    whileHover={{ y: -5, scale: 1.02 }}
                >
                    <div className="mb-4">
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                            {edu.degree}
                        </h3>
                        <p className="text-lg text-accent-600 dark:text-accent-400 font-medium mb-1">
                            {edu.institution}
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            {edu.location} • {edu.duration}
                        </p>
                        {edu.gpa && (
                            <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-2">
                                <span className="font-semibold">GPA:</span> {edu.gpa}
                            </p>
                        )}
                    </div>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                        {edu.description}
                    </p>

                    {edu.achievements && edu.achievements.length > 0 && (
                        <div className="border-t border-neutral-300 dark:border-neutral-700 pt-4">
                            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                                Achievements:
                            </h4>
                            <ul className="space-y-2">
                                {edu.achievements.map((achievement, idx) => (
                                    <motion.li
                                        key={idx}
                                        className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <span className="text-accent-500 mt-1">★</span>
                                        <span>{achievement}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
};

const Education = () => {
    return (
        <section id="education" className="section bg-neutral-100 dark:bg-neutral-900">
            <div className="container-custom">
                <SectionTitle
                    title="Education"
                    subtitle="My academic background and certifications"
                />

                <div className="max-w-4xl mx-auto space-y-12">
                    {education.map((edu, index) => (
                        <EducationCard key={edu.id} edu={edu} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
