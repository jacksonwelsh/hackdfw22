import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="rounded-md border-gray-300 border-2 p-2">{children}</div>
  );
};

export default Card;
