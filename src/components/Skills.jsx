import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Skills = () => {
  const data = {
    labels: ['React', 'Node.js', 'Angular', 'Laravel', 'Django', '.Net', 'Shopify'],
    datasets: [
      {
        label: 'Skill Level',
        data: [90, 95, 85, 85, 90, 80, 90], 
        backgroundColor: 'rgba(0, 173, 181, 0.3)',
        borderColor: '#00adb5',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        grid: {
          color: '#1e293b',
        },
        ticks: {
          color: 'white',
        },
        pointLabels: {
          color: 'white',
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="radar-chart">
        <Radar data={data} options={options} />
      </div>
    </section>
  );
};

export default Skills;
