import Views from "./components/Views";
import "./css/App.css";
import { TabPanel } from "primereact/tabview";
import ConnectionTest from "./components/ConnectionTest";
import Votes from "./components/Votes";
function App() {
  return (
    <Views>
      <TabPanel header="Votaciones" rightIcon="pi pi-inbox">
      </TabPanel>
      <TabPanel header="Votos" rightIcon="pi pi-inbox">
        <Votes />
      </TabPanel>
      <TabPanel header="Estadísticas" rightIcon="pi pi-chart-bar">
        {/*Componente personalizado de gráficos*/}
        <p>Estadísticas</p>
      </TabPanel>
      <TabPanel header="Prueba de conexión" leftIcon="pi pi-wifi">
        <ConnectionTest></ConnectionTest>
      </TabPanel>
    </Views>
  );
}

export default App;
