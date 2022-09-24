import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={"rounded-md border-gray-300 border-2 p-2 " + className}>
      {children}
    </div>
  );
};

export default Card;
