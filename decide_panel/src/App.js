import Views from "./components/Views";
import "./css/App.css";
import { TabPanel } from "primereact/tabview";
import ConnectionTest from "./components/ConnectionTest";

function App() {
  return (
    <Views>
      <TabPanel header="Listado 1" rightIcon="pi pi-table">
        {/*Componente personalizado de listado*/}
        <p>Listado 1</p>
      </TabPanel>
      <TabPanel header="Listado 2" rightIcon="pi pi-table">
        {/*Componente personalizado de listado*/}
        <p>Listado 2</p>
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
