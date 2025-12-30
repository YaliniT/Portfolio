import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import { FaReact, FaNode, FaDatabase, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs } from 'react-icons/si';
import Button from '../ui/Button';
import { personalInfo } from '../../data/portfolio';

const Hero = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const techBadges = [
        { icon: FaReact, name: 'React', color: 'text-blue-400', delay: 0 },
        { icon: SiNextdotjs, name: 'Next.js', color: 'text-white', delay: 0.1 },
        { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-400', delay: 0.2 },
        { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-500', delay: 0.3 },
        { icon: SiTailwindcss, name: 'Tailwind', color: 'text-cyan-400', delay: 0.4 },
        { icon: FaNode, name: 'Node.js', color: 'text-green-500', delay: 0.5 },
        { icon: FaDatabase, name: 'Database', color: 'text-orange-400', delay: 0.6 },
        { icon: FaCode, name: 'Code', color: 'text-purple-400', delay: 0.7 },
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background Mesh */}
            <motion.div
                className="absolute inset-0 bg-gradient-mesh opacity-50"
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                }}
                transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            />

            {/* Floating Geometric Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-primary-500/20 to-emerald-500/20 blur-3xl"
                        style={{
                            left: `${20 + i * 20}%`,
                            top: `${10 + i * 15}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 5 + i,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            <div className="container-custom px-6 py-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-2">
                                Hi there! 👋 I'm
                            </p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4">
                                <span className="text-gradient-primary">{personalInfo.name}</span>
                            </h1>
                        </motion.div>

                        {/* Rotating Roles */}
                        <motion.div
                            className="h-16 md:h-20 flex items-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold">
                                <span className="text-neutral-700 dark:text-neutral-300">I'm a </span>
                                <motion.span
                                    key={currentRoleIndex}
                                    className="text-gradient-accent inline-block"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {personalInfo.roles[currentRoleIndex]}
                                </motion.span>
                            </h2>
                        </motion.div>

                        <motion.p
                            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {personalInfo.bio}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <Button variant="primary" size="lg" href="#contact">
                                Get In Touch
                            </Button>
                            <Button variant="secondary" size="lg" href="#projects">
                                View My Work
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right: Floating Tech Badges */}
                    <div className="relative h-96 lg:h-[500px] hidden lg:block">
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Center Circle */}
                            <motion.div
                                className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-emerald-500 flex items-center justify-center shadow-2xl"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            >
                                <FaCode className="w-16 h-16 text-white" />
                            </motion.div>

                            {/* Orbiting Tech Badges */}
                            {techBadges.map((tech, index) => {
                                const angle = (index / techBadges.length) * 2 * Math.PI;
                                const radius = 150;
                                const x = Math.cos(angle) * radius;
                                const y = Math.sin(angle) * radius;

                                return (
                                    <motion.div
                                        key={tech.name}
                                        className="absolute"
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                        }}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                            x: x,
                                            y: y,
                                        }}
                                        transition={{
                                            delay: tech.delay,
                                            duration: 0.5,
                                        }}
                                    >
                                        <motion.div
                                            className="glass p-4 rounded-2xl shadow-lg"
                                            animate={{
                                                y: [0, -10, 0],
                                            }}
                                            transition={{
                                                duration: 2 + index * 0.2,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                            }}
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                        >
                                            <tech.icon className={`w-8 h-8 ${tech.color}`} />
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <motion.a
                        href="#about"
                        className="flex flex-col items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <span className="text-sm font-medium">Scroll Down</span>
                        <HiChevronDown className="w-6 h-6" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
