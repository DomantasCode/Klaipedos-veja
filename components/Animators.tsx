
import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimationProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    immediate?: boolean;
}

export const FadeIn: React.FC<AnimationProps> = ({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
    immediate = false
}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={immediate ? { opacity: 1 } : undefined}
            whileInView={!immediate ? { opacity: 1 } : undefined}
            viewport={!immediate ? { once: true, amount: "some" } : undefined}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const SlideUp: React.FC<AnimationProps> = ({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
    immediate = false
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={immediate ? { opacity: 1, y: 0 } : undefined}
            whileInView={!immediate ? { opacity: 1, y: 0 } : undefined}
            viewport={!immediate ? { once: true, amount: "some" } : undefined}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};



export const StaggerContainer: React.FC<{
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    immediate?: boolean;
}> = ({ children, className = "", staggerDelay = 0.1, immediate = false }) => {
    return (
        <motion.div
            initial="hidden"
            animate={immediate ? "show" : undefined}
            whileInView={!immediate ? "show" : undefined}
            viewport={!immediate ? { once: true, amount: "some" } : undefined}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: staggerDelay
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem: React.FC<AnimationProps> = ({
    children,
    className = "",
    duration = 0.5
}) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration, ease: "easeOut" } }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
