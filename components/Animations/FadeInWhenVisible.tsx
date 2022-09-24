import { motion } from "framer-motion";

type FadeInWhenVisibleProps = {
    children: React.ReactNode;
    direction?: 'left' | 'right';
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({children, direction = 'left'}) => {
    return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: {  x: 0  },
            hidden: {  x: direction === 'left' ? '100%' : '-100%', }
          }}
        >
          {children}
        </motion.div>
      );
}

export default FadeInWhenVisible;