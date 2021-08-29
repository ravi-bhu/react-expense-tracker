import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const totalAmount = props.dataPoints
    .map((dataPoint) => Number(dataPoint.value))
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          totalValue={totalAmount}
          value={dataPoint.value}
        />
      ))}
    </div>
  );
};

export default Chart;
