import { motion } from 'framer-motion';
import { HiArrowUp, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolio';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaGithub, href: personalInfo.social.github, label: 'GitHub' },
        { icon: FaLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
        { icon: FaTwitter, href: personalInfo.social.twitter, label: 'Twitter' },
    ];

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="relative bg-neutral-900 dark:bg-neutral-950 text-neutral-300 pt-16 pb-8">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/10 to-transparent pointer-events-none" />

            <div className="container-custom px-6 relative">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h3 className="text-3xl font-display font-bold text-gradient-primary mb-4">
                            {personalInfo.name}
                        </h3>
                        <p className="text-neutral-400 mb-6 max-w-md">
                            {personalInfo.bio}
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-neutral-800 hover:bg-primary-600 transition-colors"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-neutral-400 hover:text-primary-400 transition-colors animated-underline"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <HiMail className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="text-neutral-400 hover:text-primary-400 transition-colors break-all"
                                >
                                    {personalInfo.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <HiLocationMarker className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                                <span className="text-neutral-400">{personalInfo.location}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-8" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-neutral-500 text-sm text-center md:text-left">
                        © {currentYear} {personalInfo.name}. All rights reserved.
                    </p>
                    <p className="text-neutral-500 text-sm">
                        Built with ❤️ using React & Tailwind CSS
                    </p>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 p-4 rounded-full bg-primary-600 text-white shadow-lg shadow-primary-500/50 hover:shadow-xl hover:shadow-primary-500/70 z-40"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                viewport={{ once: false }}
                aria-label="Scroll to top"
            >
                <HiArrowUp className="w-6 h-6" />
            </motion.button>
        </footer>
    );
};

export default Footer;
