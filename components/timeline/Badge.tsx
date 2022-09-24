interface BadgeProps {
  variant: "ok" | "warn" | "danger";
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ variant, children }) => {
  let classes;
  switch (variant) {
    case "ok":
      classes = "bg-green-700 outline outline-green-800 text-green-100";
      break;
    case "warn":
      classes = "bg-orange-700 outline outline-orange-800 text-orange-100";
      break;
    case "danger":
      classes = "bg-red-700 outline outline-red-800 text-red-100";
  }
  return (
    <div
      className={
        "rounded-md text-base max-w-min px-2 mt-1 flex items-center " + classes
      }
    >
      {variant === "ok" && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>{" "}
          {children}
        </>
      )}
      {variant === "warn" && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              fillRule="evenodd"
              d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>{" "}
          {children}
        </>
      )}
      {variant === "danger" && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>{" "}
          {children}
        </>
      )}
    </div>
  );
};

export default Badge;
