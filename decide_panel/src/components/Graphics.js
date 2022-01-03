import { useEffect, useState } from "react";
import Api from "../services/backend";
import { ProgressBar } from "primereact/progressbar";
import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { useRef } from "react";
import { Dropdown } from 'primereact/dropdown';
import { Card } from "@nextui-org/react";
import "../css/Graphics.css";

const Graphics = () => {
  const [time, setTime] = useState(Date.now());
  const [errorConection, setErrorConection] = useState(null);
  const [state, setState] = useState({
    data: "{}",
  });
  const formRef = React.useRef();
  const [id, setId] = useState(1);
  const messages = useRef(null);

  function deleteErrorMessage() {
    setErrorConection(null);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData(formRef.current);
    const value = Object.fromEntries(formData);
    console.log(value.id)
    setId(value.id)
  }
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    deleteErrorMessage();
    Api.get_votes_chart(id)
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
  }, [time]);
  try {
    let json_raw = JSON.stringify(state.data);
    let jjson = json_raw.substring(1,json_raw.length-1);
    var jsoon= JSON.parse(jjson);
    var tally = jsoon.tally;
  } catch (e) {
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit} ref={formRef}>
      <input type="number" name="id" placeholder="Id de la votación" min="1"/>
      <button type="submit">Enviar</button>
    </form>
    <div>

    </div>
    <div>
        <Pie
          data={{
              labels: ["Proporción de votos"],
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
                },
                legend: {
                  labels: {
                    fontSize: 25,
                  },
                },
          }}
  
        />
    </div>
    </div>
  );
};

export default Graphics;