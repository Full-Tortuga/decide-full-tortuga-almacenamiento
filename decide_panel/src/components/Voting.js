import { useEffect } from "react";
import Api from "../services/backend";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "../css/Voting.css";

const Voting = () => {
  useEffect(() => {
    Api.get_voting(1);
  }, []);

  return (
    <div>
      <div className="c">
        <div className="login">
          <form onSubmit={null}>
            <div className="i">
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-key"></i>
                </span>
                <InputText
                  placeholder="Id de la votación"
                  name="author"
                  type="text"
                  value={null}
                  onChange={null}
                />
              </div>
            </div>
            <div className="b">
              <div className="i">
                <Button
                  className="p-button-secondary"
                  label={"Buscar"}
                  icon="pi pi-fw pi-check"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Voting;
