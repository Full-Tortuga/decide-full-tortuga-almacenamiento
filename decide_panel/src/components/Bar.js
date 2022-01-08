import Api from "../services/backend";
import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';


const BarChart = () => {
  return <div>
      <Bar
        data={{
            labels: ["Opcion 1", "Opcion 2"],
            datasets: [{

                label: "Votos",
                data: [1,1],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                    
                ],
                borderWidth: 1
            }]
        }}
        height={400}
        width={600}
        options={{

            maintainAspectRatio: false,
            scales: {

                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 25,
                },
              },
        }}

      />
  </div>
};

export default BarChart;