import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const Badge = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    className,
    ...props
}) => {
    const baseClasses = 'inline-flex items-center gap-1.5 rounded-full font-medium transition-all duration-300';

    const variants = {
        primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800',
        accent: 'bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 border border-accent-200 dark:border-accent-800',
        emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
        neutral: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700',
        gradient: 'bg-gradient-to-r from-primary-500 to-emerald-500 text-white border-0',
    };

    const sizes = {
        sm: 'px-2.5 py-1 text-xs',
        md: 'px-3 py-1.5 text-sm',
        lg: 'px-4 py-2 text-base',
    };

    const classes = clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        className
    );

    return (
        <motion.span
            className={classes}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            {...props}
        >
            {icon && <span className="text-sm">{icon}</span>}
            {children}
        </motion.span>
    );
};

export default Badge;
