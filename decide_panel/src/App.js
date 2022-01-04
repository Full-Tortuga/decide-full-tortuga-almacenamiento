import Views from "./components/Views";
import "./css/App.css";
import { TabPanel } from "primereact/tabview";
import ConnectionTest from "./components/ConnectionTest";
import Voting from "./components/Voting";
import Backups from "./components/Backups";

function App() {
  return (
    <Views>
      <TabPanel header="Votaciones" rightIcon="pi pi-inbox">
        <Voting />
      </TabPanel>
      <TabPanel header="Votos" rightIcon="pi pi-table">
        {/*Componente personalizado de listado*/}
        <p>Votos</p>
      </TabPanel>
      <TabPanel header="Estadísticas" rightIcon="pi pi-chart-bar">
        {/*Componente personalizado de gráficos*/}
        <p>Estadísticas</p>
      </TabPanel>
      <TabPanel header="Backups" rightIcon="pi pi-folder-open">
        <Backups />
      </TabPanel>
      <TabPanel header="Prueba de conexión" leftIcon="pi pi-wifi">
        <ConnectionTest></ConnectionTest>
      </TabPanel>
    </Views>
  );
}

export default App;
