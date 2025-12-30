import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'left',
    className,
    onClick,
    href,
    ...props
}) => {
    const baseClasses = 'btn inline-flex items-center justify-center gap-2 font-medium transition-all duration-300';

    const variants = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        accent: 'btn-accent',
        ghost: 'hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const classes = clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        className
    );

    const content = (
        <>
            {icon && iconPosition === 'left' && <span className="text-xl">{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span className="text-xl">{icon}</span>}
        </>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                className={classes}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target={href.startsWith('http') ? '_blank' : '_self'}
                rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
                {...props}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            className={classes}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {content}
        </motion.button>
    );
};

export default Button;
