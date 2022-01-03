import { Card } from "@nextui-org/react";
import { useRef } from "react";
import { Messages } from "primereact/messages";
import Api from "../services/backend";
import "../css/ConnectionTest.css";
import { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';


const Backups = () => {
  const [time, setTime] = useState(Date.now());
  const [hora, setHora]= useState(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds());
  const [state, setState] = useState({
    data: null,
  });
  const messages = useRef(null);
  
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval2 = setInterval(() => setHora(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()), 1000);
    return () => {
      clearInterval(interval2);
    };
  }, []);

  useEffect(() => {
    Api.get_backups()
      .then((res) => setState({ data: res['availables backups'] }))
      .catch((err) => {
        messages.current.show({
          severity: "error",
          summary: "Error",
          detail: "Error al conectar con el servidor",
        });
      }
      ); 
  }, [time]);
  
  useEffect(() => {
    if(hora==="12:32:30"){
      Api.create_backup()
        .then((status) => {
          if (status === 201) {
            messages.current.show({
              severity: "success",
              summary: "Se ha la copia de seguriadad automatica se ha creado correctamente",
            });
          }
        })
        .catch((err) => {
          messages.current.show({
           severity: "warn",
           summary: "Error generando el backup",
          });
        });
      }
  }, [time, hora]);

  function connect() {
    Api.create_backup()
      .then((status) => {
        if (status === 201) {
          messages.current.show({
            severity: "success",
            summary: "Se ha creado correctamente el backup",
          });
        }
      })
      .catch((err) => {
        messages.current.show({
          severity: "warn",
          summary: "Error generando el backup",
        });
      });
  }

  function restore(backup){
    var opcion = window.confirm("Esta seguro que deseas restaurar la copia de seguridad: "+backup);
    if (opcion == true) {
      Api.restore_backup(backup)
      .then((status) => {
        if (status !== 400) {
          messages.current.show({
            severity: "success",
            summary: "Se ha restaurado correctamente el backup",
          });
        }
      })
      .catch((err) => {
        messages.current.show({
          severity: "warn",
          summary: "Error restaurando el backup",
        });
      });
	} 
  }

  return (
    <div>
      La creación automatica de backup se realizará a las 11:32:30. Hora actual: {hora}
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <Messages ref={messages}></Messages>
      <center>
        <Card
          color="gradient"
          textColor="white"
          width="50%"
          hoverable="true"
          onClick={connect}
          clickable="true"
        >
          Generar nuevo backup(Copia de seguridad)
        </Card>
        <br></br> <br></br>
        <Dropdown options={state.data} onChange={(e) => restore(e.value)} placeholder="Escoje una copia de seguridad"/>
      </center>
    </div>
  );
};

export default Backups;