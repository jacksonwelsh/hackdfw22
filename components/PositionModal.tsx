interface PositionModalProps {
  modalTitle: string;
  children: React.ReactNode;
  open: boolean;
  setOpen: (b: boolean) => void;
}

const PositionModal: React.FC<PositionModalProps> = ({
  modalTitle,
  children,
  open,
  setOpen,
}) => {
  
  return (
    <>
    {open ? (
      <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="flex-1 mx-6">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-neutral-800 outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-4 border-b border-solid border-neutral-700 rounded-t">
                <h3 className="text-3xl font-semibold">
                  {modalTitle}
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setOpen(false)}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-4 flex-auto">
                <p className="my-4 text-slate-300 text-lg leading-relaxed">
                  {children}
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-4 border-t border-solid border-neutral-700 rounded-b">
                <button
                  className="bg-indigo-800 text-indigo-100 active:bg-indigo-600 text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}
    </>
  );
};

export default PositionModal;