import { useEffect, useState } from "react";
import Api from "../services/backend";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProgressBar } from "primereact/progressbar";


const Votes = () => {
  const [errorConection, setErrorConection] = useState(null);
  const [state, setState] = useState({
    data: null,
  });

  function deleteErrorMessage() {
    setErrorConection(null);
  }

  useEffect(() => {
    deleteErrorMessage();
    Api.get_votes(1)
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

  return (
    <div>
    {errorConection}
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