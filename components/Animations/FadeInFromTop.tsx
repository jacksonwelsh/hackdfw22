import { motion } from "framer-motion";

type FadeInFromTopProps = {
    children: React.ReactNode;
    direction?: 'top' | 'bottom';
}

const FadeInFromTop: React.FC<FadeInFromTopProps> = ({children, direction = 'top'}) => {
    return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: {  y: 0  },
            hidden: {  y: direction === 'bottom' ? '100%' : '-100%', }
          }}
        >
          {children}
        </motion.div>
      );
}

export default FadeInFromTop;