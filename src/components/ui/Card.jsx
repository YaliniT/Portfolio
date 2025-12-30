import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const Card = ({
    children,
    variant = 'default',
    hover = true,
    glass = false,
    gradient = false,
    className,
    ...props
}) => {
    const baseClasses = 'rounded-2xl p-6 transition-all duration-300';

    const variants = {
        default: 'card',
        glass: 'glass',
        'glass-strong': 'glass-strong',
    };

    const classes = clsx(
        baseClasses,
        glass ? variants.glass : variants[variant],
        hover && 'card-hover cursor-pointer',
        gradient && 'gradient-border',
        className
    );

    return (
        <motion.div
            className={classes}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={hover ? { y: -8, scale: 1.02 } : {}}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
