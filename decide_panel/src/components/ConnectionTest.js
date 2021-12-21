import { Card } from "@nextui-org/react";
import { useRef } from "react";
import { Messages } from "primereact/messages";
import Api from "../services/backend";
import "../css/ConnectionTest.css";

const ConnectionTest = () => {
  const messages = useRef(null);

  function connect() {
    Api.connection_test()
      .then((status) => {
        if (status === 200) {
          messages.current.show({
            severity: "success",
            summary: "Conexión exitosa",
          });
        }
      })
      .catch((err) => {
        messages.current.show({
          severity: "warn",
          summary: "Conexión fallida",
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
        Conectar con decide (prueba de conexión)
      </Card>
    </div>
  );
};

export default ConnectionTest;
