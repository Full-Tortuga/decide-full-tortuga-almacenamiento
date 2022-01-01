import { useEffect, useState } from "react";
import Api from "../services/backend";
import { ProgressBar } from "primereact/progressbar";
import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from 'chart.js/auto';


const Graphics = () => {
  const [errorConection, setErrorConection] = useState(null);
  const [state, setState] = useState({
    data: '{}',
  });

  function deleteErrorMessage() {
    setErrorConection(null);
  }

  useEffect(() => {
    deleteErrorMessage();
    Api.get_votes(1)                                       //MODIFICA
      .then((res) => setState({ data: res }))
      .catch((error) => {
        setErrorConection(
          <div className="alert alert-dark">
            <strong>Error de conexión</strong>
            <ProgressBar
              mode="indeterminate"
              style={{ height: "6px" }}
            ></ProgressBar>
          </div>
        );
      });
  }, []);
  let json_raw = JSON.stringify(state.data);
  let jjson = json_raw.substring(1,json_raw.length-1);
  var jsoon= JSON.parse(jjson);
  var tally = jsoon.tally;
  console.log(tally);
  
  return (
    <div>
        <Pie
          data={{
              labels: ["Votos"],
              datasets: [{
  
                  label: "",
                  data: tally,
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(50, 250, 250, 0.2)',
                      'rgba(23, 99, 250, 0.2)',
                      'rgba(250, 99, 250, 0.2)',
                      'rgba(250, 0, 0, 0.2)'
                      
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(255, 99, 132, 1)',
                      'rgba(255, 99, 132, 1)',
                      'rgba(255, 99, 132, 1)',
                      'rgba(255, 99, 132, 1)'
                      
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

  );
};

export default Graphics;