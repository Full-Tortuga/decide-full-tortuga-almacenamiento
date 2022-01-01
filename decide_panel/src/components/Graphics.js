import { useEffect, useState } from "react";
import Api from "../services/backend";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProgressBar } from "primereact/progressbar";


const Graphics = () => {
  const [errorConection, setErrorConection] = useState(null);
  const [state, setState] = useState({
    data: null,
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

  return (
    <div>
    Test
    </div>
  );
};

export default Graphics;