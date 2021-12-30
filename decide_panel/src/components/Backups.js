import { Card } from "@nextui-org/react";
import { useRef } from "react";
import { Messages } from "primereact/messages";
import Api from "../services/backend";
import "../css/ConnectionTest.css";

const Backups = () => {
  const messages = useRef(null);

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

  return (
    <div>
      <Messages ref={messages}></Messages>
      <Card
        id="card-connection-test"
        color="gradient"
        textColor="white"
        width="50%"
        hoverable="true"
        onClick={connect}
        clickable="true"
      >
        Generar nuevo backup(Copia de seguridad)
      </Card>
    </div>
  );
};

export default Backups;