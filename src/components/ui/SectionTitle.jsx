import { motion } from 'framer-motion';

const SectionTitle = ({
    title,
    subtitle,
    align = 'center',
    className = ''
}) => {
    const alignClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };

    return (
        <div className={`mb-16 ${alignClasses[align]} ${className}`}>
            <motion.h2
                className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {subtitle}
                </motion.p>
            )}
            <motion.div
                className="mt-6 h-1 w-24 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            />
        </div>
    );
};

export default SectionTitle;
