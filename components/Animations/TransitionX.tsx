import { motion } from "framer-motion";

type TransitionXProps = {
  children: React.ReactNode;
  direction?: "left" | "right";
};

const TransitionX: React.FC<TransitionXProps> = ({
  children,
  direction = "left",
}) => {
  return (
    <motion.div
      className="w-xl min-w-xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { x: 0 },
        hidden: { x: direction === "left" ? "100%" : "-100%" },
      }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionX;
