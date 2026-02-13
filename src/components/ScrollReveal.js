import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollReveal({ children }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.15,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95, y: 100 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}

        >
            {children}
        </motion.div>
    );
}
