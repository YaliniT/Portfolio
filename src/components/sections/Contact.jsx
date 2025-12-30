import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { personalInfo } from '../../data/portfolio';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log('Form data:', data);
        // Here you would typically send the data to a backend service
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const contactInfo = [
        {
            icon: HiMail,
            label: 'Email',
            value: personalInfo.email,
            href: `mailto:${personalInfo.email}`,
        },
        {
            icon: HiPhone,
            label: 'Phone',
            value: personalInfo.phone,
            href: `tel:${personalInfo.phone}`,
        },
        {
            icon: HiLocationMarker,
            label: 'Location',
            value: personalInfo.location,
        },
    ];

    const socialLinks = [
        { icon: FaGithub, href: personalInfo.social.github, label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
        { icon: FaLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
        { icon: FaTwitter, href: personalInfo.social.twitter, label: 'Twitter', color: 'hover:text-blue-400' },
    ];

    return (
        <section id="contact" className="section">
            <div className="container-custom">
                <SectionTitle
                    title="Get In Touch"
                    subtitle="Let's discuss your next project or just say hi!"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Left: Contact Info */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
                                Let's Connect
                            </h3>
                            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>
                        </motion.div>

                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <Card glass hover={!!info.href}>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="flex items-center gap-4 group"
                                            >
                                                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 group-hover:bg-primary-500 transition-colors">
                                                    <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                                        {info.label}
                                                    </p>
                                                    <p className="font-medium text-neutral-900 dark:text-neutral-100">
                                                        {info.value}
                                                    </p>
                                                </div>
                                            </a>
                                        ) : (
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30">
                                                    <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                                        {info.label}
                                                    </p>
                                                    <p className="font-medium text-neutral-900 dark:text-neutral-100">
                                                        {info.value}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h4 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                                Follow Me
                            </h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-4 rounded-full glass hover:glass-strong transition-all ${social.color}`}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-6 h-6" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card glass>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        {...register('name', { required: 'Name is required' })}
                                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Invalid email address',
                                            },
                                        })}
                                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                                    )}
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        {...register('subject', { required: 'Subject is required' })}
                                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                        placeholder="Project Inquiry"
                                    />
                                    {errors.subject && (
                                        <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                                    )}
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        {...register('message', { required: 'Message is required' })}
                                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    className="w-full btn btn-primary"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitted}
                                >
                                    {isSubmitted ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <HiCheckCircle className="w-5 h-5" />
                                            Message Sent!
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </motion.button>

                                {/* Success Message */}
                                {isSubmitted && (
                                    <motion.div
                                        className="p-4 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-500 text-emerald-700 dark:text-emerald-300 text-center"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        Thank you for reaching out! I'll get back to you soon.
                                    </motion.div>
                                )}
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
