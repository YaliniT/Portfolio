import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiCalendar, HiCode, HiUsers } from 'react-icons/hi';
import { FaGitAlt } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { personalInfo, stats } from '../../data/portfolio';
import useInView from '../../hooks/useInView';

const StatCounter = ({ end, duration = 2, suffix = '', icon: Icon }) => {
    const [count, setCount] = useState(0);
    const [ref, isInView] = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        const endValue = parseInt(end);

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            setCount(Math.floor(progress * endValue));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, end, duration]);

    const iconMap = {
        calendar: HiCalendar,
        code: HiCode,
        users: HiUsers,
        git: FaGitAlt,
    };

    const IconComponent = Icon || iconMap[icon] || HiCode;

    return (
        <div ref={ref} className="text-center">
            <IconComponent className="w-12 h-12 mx-auto mb-4 text-primary-500" />
            <motion.div
                className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {count}{suffix}
            </motion.div>
        </div>
    );
};

const About = () => {
    return (
        <section id="about" className="section bg-neutral-100 dark:bg-neutral-900">
            <div className="container-custom">
                <SectionTitle
                    title="About Me"
                    subtitle="Get to know more about my background and what drives me"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
                            Passionate Developer & Problem Solver
                        </h3>
                        <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
                            <p>
                                {personalInfo.bio}
                            </p>
                            <p>
                                With a strong foundation in both frontend and backend technologies, I specialize in creating
                                seamless user experiences and robust server-side solutions. My approach combines technical
                                expertise with creative problem-solving to deliver exceptional results.
                            </p>
                            <p>
                                I'm constantly learning and staying up-to-date with the latest technologies and best practices
                                in web development. When I'm not coding, you can find me contributing to open-source projects,
                                writing technical articles, or exploring new frameworks and tools.
                            </p>
                        </div>
                    </motion.div>

                    {/* Image/Visual */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative w-full h-96 rounded-2xl overflow-hidden glass-strong">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-emerald-500/20 flex items-center justify-center">
                                <motion.div
                                    className="text-8xl"
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                >
                                    👨‍💻
                                </motion.div>
                            </div>
                            {/* Floating elements */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-primary-400/30 to-emerald-400/30 blur-xl"
                                    style={{
                                        left: `${20 + i * 30}%`,
                                        top: `${20 + i * 25}%`,
                                    }}
                                    animate={{
                                        y: [0, -20, 0],
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 3 + i,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card glass hover={false} className="text-center">
                                <StatCounter
                                    end={stat.value}
                                    suffix={stat.value.includes('+') ? '+' : ''}
                                    icon={stat.icon}
                                />
                                <p className="text-neutral-600 dark:text-neutral-400 font-medium mt-2">
                                    {stat.label}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
