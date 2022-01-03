import { useEffect, useState } from "react";
import Api from "../services/backend";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProgressBar } from "primereact/progressbar";
import { Card } from "@nextui-org/react";
import { Dropdown } from 'primereact/dropdown';
import { useRef } from "react";

const Votes = () => {
  const [time, setTime] = useState(Date.now());
  const [errorConection, setErrorConection] = useState(null);
  const [state, setState] = useState({
    data: null,
  });
  const messages = useRef(null);

  function deleteErrorMessage() {
    setErrorConection(null);
  }

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    deleteErrorMessage();
    Api.get_votes(window.location.href.split("=")[1])
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


  return (
    <div>
    <Dropdown options={state.data} placeholder="Selecciona una votación"/>
    <DataTable
        className="p-datatable-sm"
        rows={1}
        value={state.data}
        header="Votaciones"
      >
        <Column
          sortable
          filter
          filterPlaceholder="Votación"
          field="name"
          header="Votación"
        ></Column>
        <Column
          sortable
          filter
          filterPlaceholder="Pregunta"
          field="question.desc"
          header="Pregunta"
        ></Column>
         <Column
          sortable
          filter
          filterPlaceholder="Descripción"
          field="desc"
          header="Descripción"
        ></Column>
        <Column
          sortable
          filter
          filterPlaceholder="Fecha Inicio"
          field="start_date"
          header="Fecha Inicio"
        ></Column>
        <Column
          sortable
          filter
          filterPlaceholder="Fecha Final"
          field="end_date"
          header="Fecha Final"
        ></Column>
        <Column
          sortable
          filter
          filterPlaceholder="Resultado"
          field="tally"
          header="Resultado de la Votación"
        ></Column>
      </DataTable>
    </div>
  );
};

export default Votes;