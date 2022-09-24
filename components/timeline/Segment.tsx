import Badge from "./Badge";

interface SegmentProps {
  children: React.ReactNode;
  title: string;
  icon?: React.ReactNode;
  year: number;
  status: "ok" | "warn" | "danger";
}

const Segment: React.FC<SegmentProps> = ({
  children,
  title,
  icon,
  year,
  status,
}) => {
  return (
    <li className="mb-10 ml-6">
      <span className="flex absolute -left-4 justify-center items-center w-8 h-8 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 text-blue-200 fill-current">
        {icon}
      </span>

      <h2 className="mb-1 ml-2 mt-6 -translate-y-4">
        <div className="text-sm font-semibold tracking-widest text-gray-300 -mb-1">
          {year}
        </div>
        {title}
        <Badge variant={status}>
          {status === "ok"
            ? "Healthy"
            : status === "warn"
            ? "Warning"
            : "Danger"}
        </Badge>
      </h2>
      <div className="ml-2">{children}</div>
    </li>
  );
};

export default Segment;
