import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

type LineChartProps = {
  data: number[];
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  elements: {
    line: {
        tension: 0.3
    }
},
  plugins: {
    legend: {
      display: false,
    },
  },
};

const monthlyLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const labels = [
  "1:00AM",
  "2:00AM",
  "3:00AM",
  "4:00AM",
  "5:00AM",
  "6:00AM",
  "7:00AM",
  "8:00AM",
  "9:00AM",
  "10:00AM",
  "11:00AM",
  "12:00PM",
  "1:00PM",
  "2:00PM",
  "3:00PM",
  "4:00PM",
  "5:00PM",
  "6:00PM",
  "7:00PM",
  "8:00PM",
  "9:00PM",
  "10:00PM",
  "11:00PM",
  "12:00AM",
];

const LineChart: React.FC<LineChartProps> = ({ data }) => {

  const dataBruh = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: data,
        borderColor: "rgb(30, 58, 90)",
        backgroundColor: "rgba(30, 58, 138, 0.5)",
      },
    ],
  };

  return <Line options={options} data={dataBruh} />;
};

export default LineChart;
