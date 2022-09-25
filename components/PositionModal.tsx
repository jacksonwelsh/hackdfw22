import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface PositionModalProps {
  title: string;
  children: React.ReactNode;
  type?: "confirmation";
  onConfirm?: () => void;
  open: boolean;
  setOpen: (b: boolean) => void;
}

const PositionModal: React.FC<PositionModalProps> = ({
  title,
  children,
  type = "confirmation",
  onConfirm,
  open,
  setOpen,
}) => {
  return (
    <>
    </>
  );
};

export default PositionModal;
